// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const phy108: Topic = {
  topic: 'Practical Physics',
  level: 'Null',
  totalQuestions: 14,
  totalScore: 125,
  totalTime: 2400,
  questions: [ {
  question: 'Density is defined as:',
  choices: [
    'Volume per unit mass',
    'Mass per unit volume',
    'Weight per unit area',
    'Force per unit mass',
  ],
  type: 'MCQs',
  correctAnswers: ['Mass per unit volume'],
  score: 1,
  rationale:
    'B. Mass per unit volume.\n\nDensity is the amount of mass contained in a unit volume of a substance and is calculated using ρ = m/V.',
},
{
  question: 'The SI unit of density is:',
  choices: ['g/cm³', 'kg/m³', 'N/m³', 'kg/m²'],
  type: 'MCQs',
  correctAnswers: ['kg/m³'],
  score: 1,
  rationale:
    'B. kg/m³.\n\nThe SI unit of density is kilograms per cubic metre (kg/m³).',
},
{
  question: 'Pure gold has a density of approximately:',
  choices: ['11.3 g/cm³', '19.3 g/cm³', '7.8 g/cm³', '2.7 g/cm³'],
  type: 'MCQs',
  correctAnswers: ['19.3 g/cm³'],
  score: 1,
  rationale:
    'B. 19.3 g/cm³.\n\nPure gold has a density of about 19.3 g/cm³, making density useful for identifying genuine gold.',
},
{
  question: 'The volume of an irregular solid is best found by:',
  choices: [
    'Using a vernier caliper',
    'Water displacement',
    'Weighing it twice',
    'Estimating from photographs',
  ],
  type: 'MCQs',
  correctAnswers: ['Water displacement'],
  score: 1,
  rationale:
    'B. Water displacement.\n\nThe volume of an irregular solid is determined by measuring the volume of water it displaces.',
},
{
  question:
    'In the water displacement method, if the initial water level is V₁ and the final level is V₂, the object\'s volume is:',
  choices: ['V₁ + V₂', 'V₁ × V₂', 'V₂ − V₁', 'V₁ ÷ V₂'],
  type: 'MCQs',
  correctAnswers: ['V₂ − V₁'],
  score: 1,
  rationale:
    'C. V₂ − V₁.\n\nThe volume of the object is equal to the increase in water level after it is submerged.',
},
{
  question:
    'On a graph of mass against volume for a single material, the slope represents the:',
  choices: [
    'Intercept',
    'Density of the material',
    'Weight',
    'Percentage error',
  ],
  type: 'MCQs',
  correctAnswers: ['Density of the material'],
  score: 1,
  rationale:
    'B. Density of the material.\n\nSince m = ρV, the slope of a mass-versus-volume graph is the density of the material.',
},
{
  question:
    'Which of the following is NOT a source of error when determining the density of a solid?',
  choices: [
    'Air bubbles on the object',
    'Parallax error',
    'Faulty balance',
    'Using a vernier caliper correctly',
  ],
  type: 'MCQs',
  correctAnswers: ['Using a vernier caliper correctly'],
  score: 1,
  rationale:
    'D. Using a vernier caliper correctly.\n\nCorrect use of measuring instruments is a precaution, not a source of experimental error.',
},
{
  question:
    'A ship floats while a steel nail sinks because:',
  choices: [
    'The ship is made of lighter steel',
    "The ship's average density is less than water's, while the nail's density is greater",
    'Ships have engines that provide lift',
    'Nails sink because of their shape alone',
  ],
  type: 'MCQs',
  correctAnswers: [
    "The ship's average density is less than water's, while the nail's density is greater",
  ],
  score: 1,
  rationale:
    "B. The ship's average density is less than water's, while the nail's density is greater.\n\nAn object floats if its average density is less than that of water and sinks if it is greater.",
},
{
  question: "Kirchhoff's Current Law is based on the conservation of:",
  choices: [
    'Energy',
    'Charge',
    "Ohm's Law",
    'Momentum',
  ],
  type: 'MCQs',
  correctAnswers: ['Charge'],
  score: 1,
  rationale:
    'B. Charge.\n\nKirchhoff’s Current Law states that charge is conserved, so the total current entering a junction equals the total current leaving it.',
},
{
  question: "Kirchhoff's Voltage Law is based on the conservation of:",
  choices: [
    'Charge',
    'Energy',
    "Newton's Third Law",
    "Faraday's Law",
  ],
  type: 'MCQs',
  correctAnswers: ['Energy'],
  score: 1,
  rationale:
    'B. Energy.\n\nKirchhoff’s Voltage Law states that the algebraic sum of all voltage rises and drops around a closed loop is zero because energy is conserved.',
},
{
  question: 'A node (junction) is defined as:',
  choices: [
    'A closed path through circuit elements',
    'A point where two or more circuit elements meet',
    'A single resistor',
    'A loop enclosing no other loops',
  ],
  type: 'MCQs',
  correctAnswers: ['A point where two or more circuit elements meet'],
  score: 1,
  rationale:
    'B. A point where two or more circuit elements meet.\n\nA node is a point in a circuit where two or more components are connected.',
},
{
  question: 'A mesh differs from a general loop because a mesh:',
  choices: [
    'Must contain a battery',
    'Encloses no other loops',
    'Has more than one node',
    'Is always a series circuit',
  ],
  type: 'MCQs',
  correctAnswers: ['Encloses no other loops'],
  score: 1,
  rationale:
    'B. Encloses no other loops.\n\nA mesh is the smallest closed path in a circuit and does not contain any other loops inside it.',
},
{
  question:
    'In Kirchhoff’s Current Law, if I₁, I₂, and I₃ enter a junction while I₄ and I₅ leave, which equation is correct?',
  choices: [
    'I₁ + I₂ + I₃ = I₄ + I₅',
    'I₁ = I₂ + I₃ + I₄ + I₅',
    'I₁ − I₂ − I₃ = I₄ − I₅',
    'I₁ + I₄ = I₂ + I₃ + I₅',
  ],
  type: 'MCQs',
  correctAnswers: ['I₁ + I₂ + I₃ = I₄ + I₅'],
  score: 1,
  rationale:
    'A. I₁ + I₂ + I₃ = I₄ + I₅.\n\nKirchhoff’s Current Law states that the total current entering a junction equals the total current leaving it.',
},
{
  question:
    'For a series circuit with a source voltage Vs and resistors R₁ and R₂, Kirchhoff’s Voltage Law gives:',
  choices: [
    'Vs = I(R₁ − R₂)',
    'Vs = I(R₁ + R₂)',
    'Vs = IR₁ − IR₂',
    'Vs = (I₁ + I₂)R₁R₂',
  ],
  type: 'MCQs',
  correctAnswers: ['Vs = I(R₁ + R₂)'],
  score: 1,
  rationale:
    'B. Vs = I(R₁ + R₂).\n\nApplying Kirchhoff’s Voltage Law around the loop gives the source voltage equal to the sum of the voltage drops across the resistors.',
},
{
  question:
    'According to the passive sign convention, a resistor in a circuit:',
  choices: [
    'Always delivers power',
    'Always absorbs power',
    'Never consumes power',
    'Has zero power at all times',
  ],
  type: 'MCQs',
  correctAnswers: ['Always absorbs power'],
  score: 1,
  rationale:
    'B. Always absorbs power.\n\nA resistor converts electrical energy into heat, so it always absorbs power.',
},
{
  question: 'Components are connected in parallel when they:',
  choices: [
    'Carry the same current',
    'Share the same voltage across them',
    'Are connected end-to-end only',
    'Always form a mesh',
  ],
  type: 'MCQs',
  correctAnswers: ['Share the same voltage across them'],
  score: 1,
  rationale:
    'B. Share the same voltage across them.\n\nComponents in parallel have the same potential difference across their terminals.',
},
{
  question:
    'The potentiometer measures EMF accurately because, at the balance point:',
  choices: [
    'Maximum current flows through the cell',
    'No current flows through the unknown cell',
    'The galvanometer shows maximum deflection',
    'The potentiometer wire becomes hot',
  ],
  type: 'MCQs',
  correctAnswers: ['No current flows through the unknown cell'],
  score: 1,
  rationale:
    'B. No current flows through the unknown cell.\n\nAt the null point, no current is drawn from the cell, so its internal resistance does not affect the EMF measurement.',
},
{
  question: 'The potential gradient (k) of a potentiometer wire is the:',
  choices: [
    'Total EMF divided by the wire resistance',
    'Voltage drop per unit length of the wire',
    'Current divided by voltage',
    'Resistance per unit current',
  ],
  type: 'MCQs',
  correctAnswers: ['Voltage drop per unit length of the wire'],
  score: 1,
  rationale:
    'B. Voltage drop per unit length of the wire.\n\nThe potential gradient is the voltage drop along each unit length of the potentiometer wire.',
},
{
  question: 'The balance point (null point) of a potentiometer is reached when:',
  choices: [
    'The galvanometer shows zero deflection',
    'The voltmeter reads maximum',
    'The rheostat has zero resistance',
    'The wire overheats',
  ],
  type: 'MCQs',
  correctAnswers: ['The galvanometer shows zero deflection'],
  score: 1,
  rationale:
    'A. The galvanometer shows zero deflection.\n\nThe null point occurs when there is no current through the galvanometer, indicating equal potential difference.',
},
{
  question:
    'When comparing an unknown EMF (Ex) with a standard EMF (Es), using balancing lengths Lx and Ls, the correct relationship is:',
  choices: [
    'Ex = Es × (Ls/Lx)',
    'Ex = Es × (Lx/Ls)',
    'Ex = Es + Lx − Ls',
    'Ex = Es ÷ (Lx × Ls)',
  ],
  type: 'MCQs',
  correctAnswers: ['Ex = Es × (Lx/Ls)'],
  score: 1,
  rationale:
    'B. Ex = Es × (Lx/Ls).\n\nSince both EMFs are measured using the same potential gradient, their ratio is equal to the ratio of their balancing lengths.',
},
{
  question:
    'The magnetic field inside a long, straight solenoid is best described as:',
  choices: [
    'Random and irregular',
    'Uniform and parallel to the axis of the solenoid',
    'Circular around the outside only',
    'Zero at all points',
  ],
  type: 'MCQs',
  correctAnswers: ['Uniform and parallel to the axis of the solenoid'],
  score: 1,
  rationale:
    'B. Uniform and parallel to the axis of the solenoid.\n\nInside a long solenoid, the magnetic field is nearly uniform and runs parallel to the solenoid’s axis.',
},
{
  question:
    'Increasing the number of turns per unit length of a solenoid will:',
  choices: [
    'Decrease its magnetic field strength',
    'Increase its magnetic field strength',
    'Reverse the magnetic field direction',
    'Have no effect on the magnetic field',
  ],
  type: 'MCQs',
  correctAnswers: ['Increase its magnetic field strength'],
  score: 1,
  rationale:
    'B. Increase its magnetic field strength.\n\nThe magnetic field inside a solenoid becomes stronger as the number of turns per unit length increases.',
},
{
  question:
    'Placing a soft iron core inside a solenoid mainly serves to:',
  choices: [
    'Reduce the electric current',
    'Strengthen the magnetic field',
    'Increase the resistance of the coil',
    'Prevent current from flowing',
  ],
  type: 'MCQs',
  correctAnswers: ['Strengthen the magnetic field'],
  score: 1,
  rationale:
    'B. Strengthen the magnetic field.\n\nA soft iron core has high magnetic permeability, which greatly increases the magnetic field produced by the solenoid.',
},
{
  question:
    'The direction of the magnetic field around a straight current-carrying conductor is determined using the:',
  choices: [
    'Left-hand rule',
    'Right-hand grip rule',
    'Parallelogram law',
    'Lenz’s law',
  ],
  type: 'MCQs',
  correctAnswers: ['Right-hand grip rule'],
  score: 1,
  rationale:
    'B. Right-hand grip rule.\n\nPoint the right thumb in the direction of current. The curled fingers show the direction of the magnetic field around the conductor.',
},
{
  question:
    'A charged particle moving parallel to a uniform magnetic field experiences:',
  choices: [
    'Maximum magnetic force',
    'A force opposite to its motion',
    'No magnetic force',
    'A force toward the magnetic field source',
  ],
  type: 'MCQs',
  correctAnswers: ['No magnetic force'],
  score: 1,
  rationale:
    'C. No magnetic force.\n\nThe magnetic force is zero when the particle moves parallel to the magnetic field because the angle between them is zero.',
},
{
  question:
    'The magnetic force on a moving charged particle is greatest when the particle moves:',
  choices: [
    'Parallel to the magnetic field',
    'At 45° to the magnetic field',
    'Perpendicular to the magnetic field',
    'Opposite to the magnetic field',
  ],
  type: 'MCQs',
  correctAnswers: ['Perpendicular to the magnetic field'],
  score: 1,
  rationale:
    'C. Perpendicular to the magnetic field.\n\nThe magnetic force reaches its maximum value when the particle moves at right angles to the magnetic field.',
},
{
  question:
    'Which quantity is measured in tesla (T)?',
  choices: [
    'Electric current',
    'Magnetic flux density',
    'Electric charge',
    'Potential difference',
  ],
  type: 'MCQs',
  correctAnswers: ['Magnetic flux density'],
  score: 1,
  rationale:
    'B. Magnetic flux density.\n\nThe SI unit of magnetic flux density is the tesla (T).',
},
{
  question:
    'An electromagnet differs from a permanent magnet because it:',
  choices: [
    'Produces a stronger field under all conditions',
    'Can be switched on and off by controlling the current',
    'Does not produce a magnetic field',
    'Cannot attract iron objects',
  ],
  type: 'MCQs',
  correctAnswers: ['Can be switched on and off by controlling the current'],
  score: 1,
  rationale:
    'B. Can be switched on and off by controlling the current.\n\nAn electromagnet produces magnetism only while electric current flows through its coil.',
},
{
  question:
    'The direction of the force on a current-carrying conductor in a magnetic field is determined using:',
  choices: [
    "Fleming's Left-Hand Rule",
    "Fleming's Right-Hand Rule",
    'Right-hand grip rule',
    "Coulomb's Law",
  ],
  type: 'MCQs',
  correctAnswers: ["Fleming's Left-Hand Rule"],
  score: 1,
  rationale:
    "A. Fleming's Left-Hand Rule.\n\nFleming's Left-Hand Rule gives the direction of the force acting on a current-carrying conductor placed in a magnetic field.",
},
{
  question:
    'Electric motors operate mainly because:',
  choices: [
    'A stationary conductor creates electricity',
    'A magnetic field exerts a force on a current-carrying conductor',
    'Electric fields repel magnetic fields',
    'Current disappears inside a magnetic field',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A magnetic field exerts a force on a current-carrying conductor',
  ],
  score: 1,
  rationale:
    'B. A magnetic field exerts a force on a current-carrying conductor.\n\nAn electric motor works because the magnetic field exerts forces on current-carrying conductors, producing rotation.',
},
{
  question:
    'A current of 5 A flows through a conductor for 8 seconds. How much charge passes through the conductor?',
  choices: ['13 C', '40 C', '45 C', '80 C'],
  type: 'MCQs',
  correctAnswers: ['40 C'],
  score: 1,
  rationale:
    'B. 40 C.\n\nElectric charge is calculated using Q = It. Therefore, Q = 5 × 8 = 40 C.',
},
{
  question:
    'The relationship between current (I), charge (Q), and time (t) is given by:',
  choices: [
    'I = Qt',
    'I = Q/t',
    'I = t/Q',
    'I = Q + t',
  ],
  type: 'MCQs',
  correctAnswers: ['I = Q/t'],
  score: 1,
  rationale:
    'B. I = Q/t.\n\nElectric current is the rate at which electric charge flows through a conductor.',
},
{
  question:
    'The SI unit of electric current is:',
  choices: ['Volt', 'Ampere', 'Coulomb', 'Ohm'],
  type: 'MCQs',
  correctAnswers: ['Ampere'],
  score: 1,
  rationale:
    'B. Ampere.\n\nElectric current is measured in amperes (A), where one ampere equals one coulomb of charge flowing each second.',
},
{
  question:
    'Which statement correctly describes electric potential difference?',
  choices: [
    'The amount of charge flowing per second',
    'The work done per unit charge in moving charge between two points',
    'The resistance offered by a conductor',
    'The energy stored in a resistor',
  ],
  type: 'MCQs',
  correctAnswers: [
    'The work done per unit charge in moving charge between two points',
  ],
  score: 1,
  rationale:
    'B. The work done per unit charge in moving charge between two points.\n\nPotential difference is the energy transferred per unit charge between two points in a circuit.',
},
{
  question:
    'A resistor has a resistance of 12 Ω and a current of 2 A flows through it. The power dissipated is:',
  choices: ['24 W', '48 W', '12 W', '6 W'],
  type: 'MCQs',
  correctAnswers: ['48 W'],
  score: 1,
  rationale:
    'B. 48 W.\n\nPower is calculated using P = I²R. Therefore, P = 2² × 12 = 48 W.',
},
{
  question:
    'Electrical power is the rate at which electrical energy is:',
  choices: [
    'Stored',
    'Transferred or converted',
    'Measured',
    'Generated only',
  ],
  type: 'MCQs',
  correctAnswers: ['Transferred or converted'],
  score: 1,
  rationale:
    'B. Transferred or converted.\n\nElectrical power measures how quickly electrical energy is transferred or converted into other forms of energy.',
},
{
  question:
    'Which equation correctly relates electrical power, voltage, and current?',
  choices: [
    'P = V/I',
    'P = VI',
    'P = I/R',
    'P = V²I',
  ],
  type: 'MCQs',
  correctAnswers: ['P = VI'],
  score: 1,
  rationale:
    'B. P = VI.\n\nElectrical power equals the product of the potential difference across a component and the current flowing through it.',
},
{
  question:
    'Which device is specifically designed to protect an electrical circuit from excessive current?',
  choices: [
    'Capacitor',
    'Transformer',
    'Fuse',
    'Potentiometer',
  ],
  type: 'MCQs',
  correctAnswers: ['Fuse'],
  score: 1,
  rationale:
    'C. Fuse.\n\nA fuse melts when the current exceeds its rated value, breaking the circuit and protecting electrical equipment.',
},
{
  question:
    'A capacitor is primarily used to:',
  choices: [
    'Increase electrical resistance',
    'Store electrical charge and energy',
    'Generate magnetic fields permanently',
    'Measure electric current',
  ],
  type: 'MCQs',
  correctAnswers: ['Store electrical charge and energy'],
  score: 1,
  rationale:
    'B. Store electrical charge and energy.\n\nA capacitor stores electric charge and releases the stored energy when required in a circuit.',
},
{
  question:
    'The capacitance of a capacitor is measured in:',
  choices: ['Henry', 'Farad', 'Tesla', 'Weber'],
  type: 'MCQs',
  correctAnswers: ['Farad'],
  score: 1,
  rationale:
    'B. Farad.\n\nCapacitance is measured in farads (F), the SI unit that indicates how much charge a capacitor can store per volt.',
},
  ],
}
