// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const phy102: Topic = {
  topic: 'Physics 102',
  level: 'Advanced',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 2400,
  questions: [ {
  question:
    'A car of mass 1000 kg accelerates at 4 m/s². What is the net force acting on the car?',
  choices: ['250 N', '4000 N', '1004 N', '400 N'],
  type: 'MCQs',
  correctAnswers: ['4000 N'],
  score: 1,
  rationale:
    'B. 4000 N.\n\nUsing Newton’s Second Law, the net force is calculated as F = ma = 1000 × 4 = 4000 N.',
},
{
  question:
    'What is the weight (gravitational force) acting on a 5000 g mass on Earth? (Take g = 9.8 m/s²)',
  choices: ['49000 N', '490 N', '49 N', '5.1 N'],
  type: 'MCQs',
  correctAnswers: ['49 N'],
  score: 1,
  rationale:
    'C. 49 N.\n\nConvert 5000 g to 5 kg, then apply W = mg = 5 × 9.8 = 49 N.',
},
{
  question:
    'An object has a mass of 15 kg. What is the acceleration of this object if a net force of 60 N is applied to it?',
  choices: ['0.25 m/s²', '4 m/s²', '45 m/s²', '900 m/s²'],
  type: 'MCQs',
  correctAnswers: ['4 m/s²'],
  score: 1,
  rationale:
    'B. 4 m/s².\n\nNewton’s Second Law gives a = F/m = 60 ÷ 15 = 4 m/s².',
},
{
  question:
    'A stationary particle with a charge of 2 C is placed in an electric field of 5 V/m. Since it is at rest, there is no magnetic force. Calculate the magnitude of the Lorentz force acting on it.',
  choices: ['2.5 N', '7 N', '10 N', '0 N'],
  type: 'MCQs',
  correctAnswers: ['10 N'],
  score: 1,
  rationale:
    'C. 10 N.\n\nSince the particle is stationary, only the electric force acts. F = qE = 2 × 5 = 10 N.',
},
{
  question:
    'A charged particle (q = 1 C) moves at 3 m/s perpendicular to a uniform magnetic field of 2 T. If the electric field is zero, what is the magnetic force on the particle?',
  choices: ['1 N', '5 N', '6 N', '1.5 N'],
  type: 'MCQs',
  correctAnswers: ['6 N'],
  score: 1,
  rationale:
    'C. 6 N.\n\nThe magnetic force is F = qvB = 1 × 3 × 2 = 6 N.',
},
{
  question:
    'An object weighs 98 N on Earth (g = 9.8 m/s²). What is the mass of the object?',
  choices: ['10 kg', '960 kg', '0.1 kg', '100 kg'],
  type: 'MCQs',
  correctAnswers: ['10 kg'],
  score: 1,
  rationale:
    'A. 10 kg.\n\nMass is calculated using m = W/g = 98 ÷ 9.8 = 10 kg.',
},
{
  question:
    'Which of the four fundamental forces of nature is the weakest but has an infinite range?',
  choices: [
    'Strong Nuclear Force',
    'Weak Nuclear Force',
    'Electromagnetic Force',
    'Gravitational Force',
  ],
  type: 'MCQs',
  correctAnswers: ['Gravitational Force'],
  score: 1,
  rationale:
    'D. Gravitational Force.\n\nGravity is the weakest of the four fundamental forces, but it acts over infinite distances.',
},
{
  question:
    'Which fundamental force is responsible for radioactive Beta decay in the atomic nucleus?',
  choices: [
    'Gravitational Force',
    'Electromagnetic Force',
    'Strong Nuclear Force',
    'Weak Nuclear Force',
  ],
  type: 'MCQs',
  correctAnswers: ['Weak Nuclear Force'],
  score: 1,
  rationale:
    'D. Weak Nuclear Force.\n\nThe weak nuclear force is responsible for beta decay and other radioactive processes.',
},
{
  question:
    'A resistor of 10 Ω is connected to a 12 V battery. What is the current flowing through the circuit?',
  choices: ['0.83 A', '1.2 A', '120 A', '22 A'],
  type: 'MCQs',
  correctAnswers: ['1.2 A'],
  score: 1,
  rationale:
    'B. 1.2 A.\n\nUsing Ohm’s Law, I = V/R = 12 ÷ 10 = 1.2 A.',
},
{
  question:
    'Two resistors, R₁ = 5 Ω and R₂ = 15 Ω, are connected in series with a 20 V source. Calculate the total current flowing.',
  choices: ['0.75 A', '1 A', '1.33 A', '4 A'],
  type: 'MCQs',
  correctAnswers: ['1 A'],
  score: 1,
  rationale:
    'B. 1 A.\n\nThe total resistance is 5 + 15 = 20 Ω. Using Ohm’s Law, I = 20 ÷ 20 = 1 A.',
},

{
  question:
    'Three resistors (R₁ = 4 Ω, R₂ = 6 Ω, and R₃ = 12 Ω) are connected in parallel. Find the equivalent resistance.',
  choices: ['22 Ω', '0.5 Ω', '2 Ω', '3 Ω'],
  type: 'MCQs',
  correctAnswers: ['2 Ω'],
  score: 1,
  rationale:
    'C. 2 Ω.\n\nFor resistors in parallel, add the reciprocals of the resistances. Solving gives an equivalent resistance of 2 Ω.',
},
{
  question:
    'A 12 V battery has an internal resistance of 0.1 Ω. When connected to a 1 Ω load resistor, what is the output (terminal) voltage of the battery?',
  choices: ['12.0 V', '10.9 V', '1.2 V', '11.9 V'],
  type: 'MCQs',
  correctAnswers: ['10.9 V'],
  score: 1,
  rationale:
    'B. 10.9 V.\n\nThe current is I = 12 ÷ (1 + 0.1) = 10.9 A. The terminal voltage is V = E − Ir = 12 − (10.9 × 0.1) = 10.9 V.',
},
{
  question:
    'A battery with an EMF of 6 V and internal resistance of 0.5 Ω is connected to a 5.5 Ω load resistor. Calculate the current in the circuit.',
  choices: ['1.2 A', '1.09 A', '1 A', '1.5 A'],
  type: 'MCQs',
  correctAnswers: ['1 A'],
  score: 1,
  rationale:
    'C. 1 A.\n\nThe total resistance is 0.5 + 5.5 = 6 Ω. Using Ohm’s Law, I = 6 ÷ 6 = 1 A.',
},
{
  question:
    'In a circuit where a current of 10.9 A flows through a 1 Ω load resistor, how much power is dissipated in the load?',
  choices: ['10.9 W', '11.9 W', '119 W', '109 W'],
  type: 'MCQs',
  correctAnswers: ['119 W'],
  score: 1,
  rationale:
    'C. 119 W.\n\nPower dissipated in a resistor is P = I²R = (10.9)² × 1 ≈ 119 W.',
},
{
  question:
    'According to Kirchhoff’s Voltage Law (KVL), the algebraic sum of all potential changes around any closed loop is:',
  choices: [
    'Equal to the total resistance',
    'Zero',
    'Equal to the source EMF',
    'Infinite',
  ],
  type: 'MCQs',
  correctAnswers: ['Zero'],
  score: 1,
  rationale:
    'B. Zero.\n\nKirchhoff’s Voltage Law states that the sum of all voltage rises and drops around a closed loop is zero.',
},
{
  question:
    'In a simple DC circuit, how should an ammeter and a voltmeter be connected to a resistor, respectively?',
  choices: [
    'Ammeter in parallel, Voltmeter in series',
    'Both in parallel',
    'Both in series',
    'Ammeter in series, Voltmeter in parallel',
  ],
  type: 'MCQs',
  correctAnswers: ['Ammeter in series, Voltmeter in parallel'],
  score: 1,
  rationale:
    'D. Ammeter in series, Voltmeter in parallel.\n\nAn ammeter measures current and is connected in series, while a voltmeter measures potential difference and is connected across the resistor in parallel.',
},
{
  question:
    'If a current of 2 A flows through a wire for 5 seconds, what is the total charge transferred?',
  choices: ['0.4 C', '2.5 C', '10 C', '7 C'],
  type: 'MCQs',
  correctAnswers: ['10 C'],
  score: 1,
  rationale:
    'C. 10 C.\n\nCharge is calculated using Q = It = 2 × 5 = 10 C.',
},
{
  question:
    'Two point charges, 4 μC and 6 μC, are separated by a distance of 0.2 m. Calculate the electrostatic force between them. (k = 9.0 × 10⁹ Nm²/C²)',
  choices: ['1.08 N', '2.7 N', '5.4 N', '10.8 N'],
  type: 'MCQs',
  correctAnswers: ['5.4 N'],
  score: 1,
  rationale:
    'C. 5.4 N.\n\nUsing Coulomb’s Law, F = kq₁q₂/r² = (9 × 10⁹)(4 × 10⁻⁶)(6 × 10⁻⁶)/(0.2)² = 5.4 N.',
},
{
  question:
    'A charge of 2 C experiences an electrostatic force of 10 N. What is the electric field strength at the position of the charge?',
  choices: ['20 V/m', '5 V/m', '0.2 V/m', '12 V/m'],
  type: 'MCQs',
  correctAnswers: ['5 V/m'],
  score: 1,
  rationale:
    'B. 5 V/m.\n\nElectric field strength is E = F/q = 10 ÷ 2 = 5 V/m.',
},
{
  question:
    'A total of 20 J of work is done to bring a 4 C positive charge from infinity to a point. What is the electric potential at that point?',
  choices: ['80 V', '0.2 V', '5 V', '16 V'],
  type: 'MCQs',
  correctAnswers: ['5 V'],
  score: 1,
  rationale:
    'C. 5 V.\n\nElectric potential is V = W/q = 20 ÷ 4 = 5 V.',
},
{
  question:
    'A proton enters a uniform magnetic field at right angles to the field lines. What is the direction of the magnetic force on the proton?',
  choices: [
    'Parallel to the magnetic field',
    'Opposite to its motion',
    'Perpendicular to both its velocity and the magnetic field',
    'In the same direction as its velocity',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Perpendicular to both its velocity and the magnetic field',
  ],
  score: 1,
  rationale:
    'C. Perpendicular to both its velocity and the magnetic field.\n\nThe magnetic force acts at right angles to both the particle’s direction of motion and the magnetic field, as described by the Lorentz force.',
},
{
  question:
    'A conductor carrying current is placed inside a magnetic field. Which factor does NOT affect the magnetic force acting on the conductor?',
  choices: [
    'The current in the conductor',
    'The magnetic field strength',
    'The length of the conductor in the field',
    'The colour of the conductor',
  ],
  type: 'MCQs',
  correctAnswers: ['The colour of the conductor'],
  score: 1,
  rationale:
    'D. The colour of the conductor.\n\nThe magnetic force depends on the current, magnetic field strength, conductor length, and orientation—not on its colour.',
},
{
  question:
    'The magnetic field around a straight current-carrying conductor forms:',
  choices: [
    'Straight parallel lines',
    'Circular field lines around the conductor',
    'Random curved lines',
    'No magnetic field',
  ],
  type: 'MCQs',
  correctAnswers: ['Circular field lines around the conductor'],
  score: 1,
  rationale:
    'B. Circular field lines around the conductor.\n\nA current flowing through a straight conductor produces concentric circular magnetic field lines around it.',
},
{
  question:
    'According to Kirchhoff’s Current Law (KCL), the total current entering a junction is:',
  choices: [
    'Always greater than the current leaving',
    'Always less than the current leaving',
    'Equal to the total current leaving',
    'Equal to zero',
  ],
  type: 'MCQs',
  correctAnswers: ['Equal to the total current leaving'],
  score: 1,
  rationale:
    'C. Equal to the total current leaving.\n\nKirchhoff’s Current Law states that charge is conserved at a junction, so the total current entering equals the total current leaving.',
},
{
  question:
    'A battery has an EMF of 24 V and an internal resistance of 2 Ω. It is connected to a 10 Ω external resistor. What is the current in the circuit?',
  choices: ['1 A', '2 A', '3 A', '12 A'],
  type: 'MCQs',
  correctAnswers: ['2 A'],
  score: 1,
  rationale:
    'B. 2 A.\n\nThe total resistance is 10 + 2 = 12 Ω. Using Ohm’s Law, I = 24 ÷ 12 = 2 A.',
},
{
  question:
    'If the resistance in a circuit remains constant while the voltage is doubled, the current will:',
  choices: [
    'Be halved',
    'Remain unchanged',
    'Double',
    'Become zero',
  ],
  type: 'MCQs',
  correctAnswers: ['Double'],
  score: 1,
  rationale:
    'C. Double.\n\nFrom Ohm’s Law (I = V/R), doubling the voltage while keeping resistance constant doubles the current.',
},
{
  question:
    'Which instrument is used to measure the electromotive force (EMF) of a cell when no current is being drawn from it?',
  choices: [
    'Ammeter',
    'Voltmeter',
    'Galvanometer',
    'Potentiometer',
  ],
  type: 'MCQs',
  correctAnswers: ['Potentiometer'],
  score: 1,
  rationale:
    'D. Potentiometer.\n\nA potentiometer measures the EMF of a cell accurately without drawing current, avoiding errors caused by internal resistance.',
},
{
  question:
    'The SI unit of electric potential difference is:',
  choices: ['Ampere', 'Volt', 'Coulomb', 'Ohm'],
  type: 'MCQs',
  correctAnswers: ['Volt'],
  score: 1,
  rationale:
    'B. Volt.\n\nPotential difference is measured in volts (V), which is defined as one joule of work done per coulomb of charge.',
},
{
  question:
    'A conductor has a resistance of 8 Ω and carries a current of 3 A. What is the potential difference across it?',
  choices: ['11 V', '24 V', '5 V', '8 V'],
  type: 'MCQs',
  correctAnswers: ['24 V'],
  score: 1,
  rationale:
    'B. 24 V.\n\nApplying Ohm’s Law, V = IR = 3 × 8 = 24 V.',
},
{
  question:
    'Which statement best describes electromotive force (EMF)?',
  choices: [
    'The force that pushes electrons through a wire',
    'The energy supplied per unit charge by a source',
    'The current flowing through a circuit',
    'The resistance of a battery',
  ],
  type: 'MCQs',
  correctAnswers: ['The energy supplied per unit charge by a source'],
  score: 1,
  rationale:
    'B. The energy supplied per unit charge by a source.\n\nEMF is the energy provided by a source to move one coulomb of charge around a complete circuit.',
},
{
  question:
    'What is the primary purpose of an internal resistance in the analysis of a real battery?',
  choices: [
    'It increases the battery EMF.',
    'It accounts for energy lost within the battery.',
    'It eliminates current flow.',
    'It converts DC to AC.',
  ],
  type: 'MCQs',
  correctAnswers: ['It accounts for energy lost within the battery.'],
  score: 1,
  rationale:
    'B. It accounts for energy lost within the battery.\n\nInternal resistance causes part of the supplied energy to be dissipated inside the battery, reducing the terminal voltage when current flows.',
},
{
  question:
    'When no current is drawn from a battery, the terminal voltage is equal to its:',
  choices: [
    'Power output',
    'Internal resistance',
    'Electromotive force (EMF)',
    'Current rating',
  ],
  type: 'MCQs',
  correctAnswers: ['Electromotive force (EMF)'],
  score: 1,
  rationale:
    'C. Electromotive force (EMF).\n\nWith no current flowing, there is no voltage drop across the internal resistance, so the terminal voltage equals the EMF.',
},
{
  question:
    'Which law states that the electrostatic force between two point charges is directly proportional to the product of their charges and inversely proportional to the square of the distance between them?',
  choices: [
    "Newton's Second Law",
    "Ohm's Law",
    "Coulomb's Law",
    "Kirchhoff's Voltage Law",
  ],
  type: 'MCQs',
  correctAnswers: ["Coulomb's Law"],
  score: 1,
  rationale:
    "C. Coulomb's Law.\n\nCoulomb's Law describes the force between two point charges based on their charges and the distance separating them.",
},
{
  question:
    'Which quantity is measured in coulombs (C)?',
  choices: [
    'Electric charge',
    'Electric field strength',
    'Potential difference',
    'Resistance',
  ],
  type: 'MCQs',
  correctAnswers: ['Electric charge'],
  score: 1,
  rationale:
    'A. Electric charge.\n\nThe SI unit of electric charge is the coulomb (C). One coulomb is the amount of charge transferred by a current of one ampere in one second.',
},
{
  question:
    'An electric field describes the region around a charged object where:',
  choices: [
    'Heat is produced',
    'Magnetic forces disappear',
    'Another charge experiences an electric force',
    'Current can never flow',
  ],
  type: 'MCQs',
  correctAnswers: ['Another charge experiences an electric force'],
  score: 1,
  rationale:
    'C. Another charge experiences an electric force.\n\nAn electric field is the region around a charge where other charges experience an electric force.',
},
{
  question:
    'Which statement correctly distinguishes mass from weight?',
  choices: [
    'Mass depends on gravity, while weight does not.',
    'Weight is measured in kilograms.',
    'Mass is constant, while weight depends on gravitational field strength.',
    'Mass and weight are always equal.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Mass is constant, while weight depends on gravitational field strength.',
  ],
  score: 1,
  rationale:
    'C. Mass is constant, while weight depends on gravitational field strength.\n\nMass is the amount of matter in an object and remains constant, whereas weight is the gravitational force acting on that mass.',
},
{
  question:
    'Which fundamental force is responsible for binding protons and neutrons together inside the atomic nucleus?',
  choices: [
    'Gravitational force',
    'Electromagnetic force',
    'Weak nuclear force',
    'Strong nuclear force',
  ],
  type: 'MCQs',
  correctAnswers: ['Strong nuclear force'],
  score: 1,
  rationale:
    'D. Strong nuclear force.\n\nThe strong nuclear force holds protons and neutrons together inside the nucleus despite the repulsion between positively charged protons.',
},
{
  question:
    'According to Newton’s Second Law, acceleration is directly proportional to:',
  choices: [
    'Mass',
    'Net force',
    'Weight',
    'Density',
  ],
  type: 'MCQs',
  correctAnswers: ['Net force'],
  score: 1,
  rationale:
    'B. Net force.\n\nNewton’s Second Law states that acceleration increases with net force and decreases as mass increases.',
},
{
  question:
    'Which physical quantity is measured in newtons (N)?',
  choices: [
    'Force',
    'Power',
    'Energy',
    'Potential difference',
  ],
  type: 'MCQs',
  correctAnswers: ['Force'],
  score: 1,
  rationale:
    'A. Force.\n\nThe SI unit of force is the newton (N), defined as the force required to accelerate a one-kilogram mass at one metre per second squared.',
},
{
  question:
    'Which equation correctly relates force, mass, and acceleration?',
  choices: [
    'F = m/a',
    'F = ma',
    'F = mv',
    'F = mg²',
  ],
  type: 'MCQs',
  correctAnswers: ['F = ma'],
  score: 1,
  rationale:
    'B. F = ma.\n\nNewton’s Second Law states that the net force acting on an object equals its mass multiplied by its acceleration.',
},
  ],
}
