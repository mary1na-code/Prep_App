
import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import '../styles/OnboardingPage.css'

import { useAuth } from '../context/AuthProvider'
import {
  getUniversities,
  getFaculties,
  getDepartments,
  saveAcademicProfile,
  requestAcademicOption,
  type AcademicOption,
  type FacultyOption,
  type DepartmentOption,
} from '../services/academicService'


const MANUAL = '__manual__'

function OnboardingPage() {
  const { session } = useAuth()
  const navigate = useNavigate()
  const userId = session?.user.id

  const [universities, setUniversities] = useState<AcademicOption[]>([])
  const [faculties, setFaculties] = useState<FacultyOption[]>([])
  const [departments, setDepartments] = useState<DepartmentOption[]>([])

  const [universityChoice, setUniversityChoice] = useState('')
  const [facultyChoice, setFacultyChoice] = useState('')
  const [departmentChoice, setDepartmentChoice] = useState('')

  const [manualUniversity, setManualUniversity] = useState('')
  const [manualFaculty, setManualFaculty] = useState('')
  const [manualDepartment, setManualDepartment] = useState('')

  const [requestMissingOptions, setRequestMissingOptions] = useState(true)
  const [loadingOptions, setLoadingOptions] = useState(true)
  const [saving, setSaving] = useState(false)
  const [requesting, setRequesting] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const universityId =
    universityChoice && universityChoice !== MANUAL
      ? universityChoice
      : null

  const facultyId =
    facultyChoice && facultyChoice !== MANUAL
      ? facultyChoice
      : null

  const universityName =
    universities.find((item) => item.id === universityId)?.name ??
    manualUniversity.trim()

  const facultyName =
    faculties.find((item) => item.id === facultyId)?.name ??
    manualFaculty.trim()

  const departmentName =
    departments.find((item) => item.id === departmentChoice)?.name ??
    manualDepartment.trim()

  useEffect(() => {
    let active = true

    async function loadUniversities() {
      setLoadingOptions(true)
      setErrorMessage('')

      try {
        const options = await getUniversities()
        if (active) setUniversities(options)
      } catch {
        if (active) {
          setErrorMessage(
            'Could not load universities. You can still enter your details manually.',
          )
        }
      } finally {
        if (active) setLoadingOptions(false)
      }
    }

    void loadUniversities()

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    let active = true

    setFaculties([])
    setDepartments([])
    setFacultyChoice('')
    setDepartmentChoice('')

    if (!universityId) return

    async function loadOptions() {
      try {
        const options = await getFaculties(universityId!)
        if (active) setFaculties(options)
      } catch {
        if (active) {
          setErrorMessage(
            'Could not load faculties. You can enter yours manually.',
          )
        }
      }
    }

    void loadOptions()

    return () => {
      active = false
    }
  }, [universityId])

  useEffect(() => {
    let active = true

    setDepartments([])
    setDepartmentChoice('')

    if (!universityId || !facultyId) return

    async function loadOptions() {
      try {
        const options = await getDepartments(universityId!, facultyId!)
        if (active) setDepartments(options)
      } catch {
        if (active) {
          setErrorMessage(
            'Could not load departments. You can enter yours manually.',
          )
        }
      }
    }

    void loadOptions()

    return () => {
      active = false
    }
  }, [universityId, facultyId])

  function validateForm() {
    if (!universityChoice) {
      setErrorMessage('Select a university or choose manual entry.')
      return false
    }

    if (!universityName) {
      setErrorMessage('Enter your university name.')
      return false
    }

    if (!facultyChoice) {
      setErrorMessage('Select a faculty or choose manual entry.')
      return false
    }

    if (!facultyName) {
      setErrorMessage('Enter your faculty name.')
      return false
    }

    if (!departmentChoice) {
      setErrorMessage('Select a department or choose manual entry.')
      return false
    }

    if (!departmentName) {
      setErrorMessage('Enter your department name.')
      return false
    }

    return true
  }

  async function handleRequestMissingOptions() {
    if (!userId || !validateForm()) return

    const requests: Array<{
      optionType: 'university' | 'faculty' | 'department'
      requestedName: string
      universityId: string | null
      facultyId: string | null
      institutionContext: string
      facultyContext: string
    }> = []

    if (universityChoice === MANUAL) {
      requests.push({
        optionType: 'university',
        requestedName: universityName,
        universityId: null,
        facultyId: null,
        institutionContext: '',
        facultyContext: '',
      })
    }

    if (facultyChoice === MANUAL) {
      requests.push({
        optionType: 'faculty',
        requestedName: facultyName,
        universityId,
        facultyId: null,
        institutionContext: universityName,
        facultyContext: '',
      })
    }

    if (departmentChoice === MANUAL) {
      requests.push({
        optionType: 'department',
        requestedName: departmentName,
        universityId,
        facultyId,
        institutionContext: universityId ? '' : universityName,
        facultyContext: facultyName,
      })
    }

    if (requests.length === 0) {
      setMessage('All your academic options are already in the catalogue.')
      return
    }

    setRequesting(true)
    setErrorMessage('')
    setMessage('')

    try {
      for (const request of requests) {
        await requestAcademicOption({
          userId,
          ...request,
        })
      }

      setMessage('Your missing options have been submitted for review.')
    } catch {
      setErrorMessage(
        'Some requests could not be submitted. You can still continue using Prepora.',
      )
    } finally {
      setRequesting(false)
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')
    setMessage('')

    if (!userId || !validateForm()) return

    setSaving(true)

    try {
      await saveAcademicProfile({
        userId,
        universityId,
        facultyId,
        departmentId:
          departmentChoice && departmentChoice !== MANUAL
            ? departmentChoice
            : null,
        institution: universityName,
        faculty: facultyName,
        department: departmentName,
      })

      navigate('/app', { replace: true })
    } catch {
      setErrorMessage(
        'Your profile could not be saved. Check your connection and try again.',
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <main className="onboarding-page">
      <section className="onboarding-card">
        <p className="onboarding-eyebrow">PREPORA · GETTING STARTED</p>
        <h1>Set up your academic profile</h1>
        <p className="onboarding-description">
          Tell us what you study so we can help you find relevant courses
          and study materials.
        </p>

        {errorMessage && (
          <p className="onboarding-message onboarding-error" role="alert">
            {errorMessage}
          </p>
        )}

        {message && (
          <p className="onboarding-message onboarding-success" role="status">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label htmlFor="university">University or institution</label>
          <select
            id="university"
            value={universityChoice}
            onChange={(event) => {
              setUniversityChoice(event.target.value)
              setManualUniversity('')
              setErrorMessage('')
            }}
            required
          >
            <option value="">
              {loadingOptions ? 'Loading universities…' : 'Select university'}
            </option>
            {universities.map((university) => (
              <option key={university.id} value={university.id}>
                {university.name}
              </option>
            ))}
            <option value={MANUAL}>My university is not listed</option>
          </select>

          {universityChoice === MANUAL && (
            <input
              aria-label="Enter university name"
              placeholder="Enter university name"
              value={manualUniversity}
              onChange={(event) => setManualUniversity(event.target.value)}
              required
            />
          )}

          <label htmlFor="faculty">Faculty</label>
          <select
            id="faculty"
            value={facultyChoice}
            onChange={(event) => {
              setFacultyChoice(event.target.value)
              setManualFaculty('')
              setErrorMessage('')
            }}
            required
            disabled={!universityChoice}
          >
            <option value="">Select faculty</option>
            {faculties.map((faculty) => (
              <option key={faculty.id} value={faculty.id}>
                {faculty.name}
              </option>
            ))}
            <option value={MANUAL}>My faculty is not listed</option>
          </select>

          {facultyChoice === MANUAL && (
            <input
              aria-label="Enter faculty name"
              placeholder="Enter faculty name"
              value={manualFaculty}
              onChange={(event) => setManualFaculty(event.target.value)}
              required
            />
          )}

          <label htmlFor="department">Department</label>
          <select
            id="department"
            value={departmentChoice}
            onChange={(event) => {
              setDepartmentChoice(event.target.value)
              setManualDepartment('')
              setErrorMessage('')
            }}
            required
            disabled={!facultyChoice}
          >
            <option value="">Select department</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
            <option value={MANUAL}>My department is not listed</option>
          </select>

          {departmentChoice === MANUAL && (
            <input
              aria-label="Enter department name"
              placeholder="Enter department name"
              value={manualDepartment}
              onChange={(event) => setManualDepartment(event.target.value)}
              required
            />
          )}

          <p className="onboarding-help">
            If an option is missing, enter it manually. You can continue
            without waiting for the catalogue to be updated.
          </p>

          <button
            className="onboarding-secondary-button"
            type="button"
            disabled={requesting || saving}
            onClick={() => void handleRequestMissingOptions()}
          >
            {requesting
              ? 'Submitting requests…'
              : 'Request missing options'}
          </button>

          <button
            className="onboarding-primary-button"
            type="submit"
            disabled={saving || requesting}
          >
            {saving ? 'Saving profile…' : 'Save profile and continue'}
          </button>
        </form>
      </section>
    </main>
  )
}

export default OnboardingPage
