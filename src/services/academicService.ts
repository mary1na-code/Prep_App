
import { supabase } from '../config/supabase'

export type AcademicOption = {
  id: string
  name: string
}

export type FacultyOption = AcademicOption & {
  university_id: string
}

export type DepartmentOption = AcademicOption & {
  university_id: string
  faculty_id: string
}

export type AcademicProfileInput = {
  userId: string
  universityId: string | null
  facultyId: string | null
  departmentId: string | null
  institution: string
  faculty: string
  department: string
}

function getClient() {
  if (!supabase) {
    throw new Error('Supabase is not configured.')
  }

  return supabase
}

export async function getUniversities(): Promise<AcademicOption[]> {
  const { data, error } = await getClient()
    .from('universities')
    .select('id, name')
    .order('name')

  if (error) throw error
  return data ?? []
}

export async function getFaculties(
  universityId: string,
): Promise<FacultyOption[]> {
  const { data, error } = await getClient()
    .from('faculties')
    .select('id, name, university_id')
    .eq('university_id', universityId)
    .order('name')

  if (error) throw error
  return data ?? []
}

export async function getDepartments(
  universityId: string,
  facultyId: string,
): Promise<DepartmentOption[]> {
  const { data, error } = await getClient()
    .from('departments')
    .select('id, name, university_id, faculty_id')
    .eq('university_id', universityId)
    .eq('faculty_id', facultyId)
    .order('name')

  if (error) throw error
  return data ?? []
}

export async function saveAcademicProfile(
  profile: AcademicProfileInput,
) {
  const { error } = await getClient()
    .from('profiles')
    .upsert(
      {
        id: profile.userId,
        university_id: profile.universityId,
        faculty_id: profile.facultyId,
        department_id: profile.departmentId,
        institution: profile.institution || null,
        faculty: profile.faculty || null,
        department: profile.department || null,
        onboarding_completed: true,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'id' },
    )

  if (error) throw error
}

export type AcademicRequestInput = {
  userId: string
  optionType: 'university' | 'faculty' | 'department'
  requestedName: string
  universityId: string | null
  facultyId: string | null
  institutionContext: string
  facultyContext: string
}

export async function requestAcademicOption(
  request: AcademicRequestInput,
) {
  const { error } = await getClient()
    .from('academic_option_requests')
    .insert({
      submitted_by: request.userId,
      option_type: request.optionType,
      requested_name: request.requestedName.trim(),
      university_id: request.universityId,
      faculty_id: request.facultyId,
      institution_context: request.institutionContext || null,
      faculty_context: request.facultyContext || null,
      status: 'pending',
    })

  if (error) throw error
}
