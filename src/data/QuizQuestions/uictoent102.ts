
import { Topic } from '.'

export const uicto_ent102: Topic = {
  topic: 'uicto_ent102',
  level: 'null',
  totalQuestions: 50,
  totalScore: 50,
  totalTime: 2400, 
  questions: [
         {
  question: 'What is the primary purpose of load assessment in solar system design?',
  choices: [
    'To determine the total energy required by electrical appliances',
    'To calculate the price of solar panels',
    'To measure battery temperature',
    'To determine the height of the mounting structure'
  ],
  type: 'MCQs',
  correctAnswers: ['To determine the total energy required by electrical appliances'],
  score: 1,
  rationale: 'Load assessment determines the total power and daily energy demand of all appliances before sizing any solar system components.'
},
{
  question: 'Which component converts Direct Current (DC) into Alternating Current (AC)?',
  choices: [
    'Charge controller',
    'Battery',
    'Inverter',
    'Solar panel'
  ],
  type: 'MCQs',
  correctAnswers: ['Inverter'],
  score: 1,
  rationale: 'An inverter converts the DC electricity supplied by solar panels or batteries into AC electricity used by most household appliances.'
},
{
  question: 'Which type of inverter produces an electrical waveform similar to that supplied by the national grid?',
  choices: [
    'Modified sine wave inverter',
    'PWM inverter',
    'Pure sine wave inverter',
    'Grid regulator'
  ],
  type: 'MCQs',
  correctAnswers: ['Pure sine wave inverter'],
  score: 1,
  rationale: 'A pure sine wave inverter produces a smooth waveform that closely matches grid electricity, making it suitable for all appliances.'
},
{
  question: 'Which appliance is most suitable for use with a pure sine wave inverter?',
  choices: [
    'Medical equipment',
    'Basic incandescent light bulb',
    'Simple electrical tool',
    'Resistive heater only'
  ],
  type: 'MCQs',
  correctAnswers: ['Medical equipment'],
  score: 1,
  rationale: 'Sensitive devices such as medical equipment require the clean output provided by a pure sine wave inverter.'
},
{
  question: 'One major disadvantage of a modified sine wave inverter is that it:',
  choices: [
    'Cannot produce AC electricity',
    'Can damage sensitive electronic equipment over time',
    'Requires sunlight to operate directly',
    'Cannot power light bulbs'
  ],
  type: 'MCQs',
  correctAnswers: ['Can damage sensitive electronic equipment over time'],
  score: 1,
  rationale: 'Modified sine wave inverters produce a stepped waveform that may reduce the lifespan of sensitive electronics.'
},
{
  question: 'What is the primary function of a charge controller in a solar power system?',
  choices: [
    'Increase solar panel voltage',
    'Regulate voltage and current flowing to the battery',
    'Convert AC to DC',
    'Store electrical energy'
  ],
  type: 'MCQs',
  correctAnswers: ['Regulate voltage and current flowing to the battery'],
  score: 1,
  rationale: 'A charge controller regulates charging current and voltage to protect batteries from damage.'
},
{
  question: 'What could happen if a solar battery is connected without a charge controller?',
  choices: [
    'The inverter becomes larger',
    'The battery may overcharge or discharge excessively',
    'The solar panels stop producing electricity',
    'The battery voltage automatically doubles'
  ],
  type: 'MCQs',
  correctAnswers: ['The battery may overcharge or discharge excessively'],
  score: 1,
  rationale: 'Charge controllers prevent overcharging and excessive discharge, both of which shorten battery life.'
},
{
  question: 'Which charge controller continuously tracks the maximum power output of solar panels?',
  choices: [
    'PWM controller',
    'MPPT controller',
    'Hybrid controller',
    'Grid controller'
  ],
  type: 'MCQs',
  correctAnswers: ['MPPT controller'],
  score: 1,
  rationale: 'MPPT controllers maximize power extraction by tracking the panel’s maximum power point.'
},
{
  question: 'Which charge controller is generally recommended for medium and large solar systems?',
  choices: [
    'PWM controller',
    'Series controller',
    'MPPT controller',
    'Relay controller'
  ],
  type: 'MCQs',
  correctAnswers: ['MPPT controller'],
  score: 1,
  rationale: 'MPPT controllers provide higher efficiency and are recommended for medium and large installations.'
},
{
  question: 'According to the lecture note, the efficiency of an MPPT charge controller is approximately:',
  choices: [
    '40–55%',
    '60–70%',
    '80–85%',
    '95–99%'
  ],
  type: 'MCQs',
  correctAnswers: ['95–99%'],
  score: 1,
  rationale: 'The lecture states that MPPT controllers typically operate with an efficiency of 95–99%.'
},
{
  question: 'System compatibility means ensuring that:',
  choices: [
    'All solar components work together safely and efficiently',
    'Only the batteries are compatible',
    'Every appliance uses the same voltage',
    'Solar panels always produce AC electricity'
  ],
  type: 'MCQs',
  correctAnswers: ['All solar components work together safely and efficiently'],
  score: 1,
  rationale: 'System compatibility ensures that solar panels, batteries, inverters, and charge controllers operate together safely.'
},
{
  question: 'A 24V battery should be paired with which inverter?',
  choices: [
    '12V inverter',
    '24V inverter',
    '48V inverter',
    '220V inverter'
  ],
  type: 'MCQs',
  correctAnswers: ['24V inverter'],
  score: 1,
  rationale: 'The battery voltage must match the inverter voltage for proper operation.'
},
{
  question: 'If the total connected load is 700W, which inverter rating is recommended in the lecture?',
  choices: [
    '500W',
    '700W',
    '800W',
    '1000W'
  ],
  type: 'MCQs',
  correctAnswers: ['1000W'],
  score: 1,
  rationale: 'The inverter should be rated higher than the connected load; the lecture recommends a 1000W inverter for a 700W load.'
},
{
  question: 'Which of the following is a possible consequence of poor system compatibility?',
  choices: [
    'Improved charging speed',
    'Lower installation cost',
    'Equipment damage',
    'Higher solar irradiance'
  ],
  type: 'MCQs',
  correctAnswers: ['Equipment damage'],
  score: 1,
  rationale: 'Poor compatibility can cause equipment damage, battery failure, overheating, reduced efficiency, and fire hazards.'
},
{
  question: 'An off-grid solar system operates:',
  choices: [
    'Only at night',
    'Without connection to the utility grid',
    'Only with a diesel generator',
    'Using AC electricity only'
  ],
  type: 'MCQs',
  correctAnswers: ['Without connection to the utility grid'],
  score: 1,
  rationale: 'An off-grid system is completely independent of the utility grid.'
},
{
  question: 'Which of the following is an advantage of an off-grid solar system?',
  choices: [
    'Unlimited battery storage',
    'Energy independence',
    'Free equipment maintenance',
    'Lower battery cost'
  ],
  type: 'MCQs',
  correctAnswers: ['Energy independence'],
  score: 1,
  rationale: 'Off-grid systems provide energy independence and are suitable for remote areas.'
},
{
  question: 'A hybrid solar system combines solar panels, batteries, and:',
  choices: [
    'Only wind turbines',
    'The utility grid or a generator',
    'Hydroelectric turbines',
    'Coal-powered generators only'
  ],
  type: 'MCQs',
  correctAnswers: ['The utility grid or a generator'],
  score: 1,
  rationale: 'Hybrid systems integrate solar energy with the utility grid or a backup generator for greater reliability.'
},
{
  question: 'Compared with hybrid systems, off-grid systems generally require:',
  choices: [
    'Smaller battery storage',
    'No batteries',
    'Larger battery storage',
    'Only AC power'
  ],
  type: 'MCQs',
  correctAnswers: ['Larger battery storage'],
  score: 1,
  rationale: 'Because off-grid systems have no grid backup, they require larger battery storage to supply power when solar energy is unavailable.'
},
{
  question: 'Which type of solar installation is fixed directly on rooftops?',
  choices: [
    'Ground-mounted system',
    'Pole-mounted system',
    'Roof-mounted system',
    'Floating solar system'
  ],
  type: 'MCQs',
  correctAnswers: ['Roof-mounted system'],
  score: 1,
  rationale: 'Roof-mounted systems are installed directly on rooftops and are common in residential and commercial buildings.'
},
{
  question: 'Which type of solar installation is most suitable for large solar farms?',
  choices: [
    'Roof-mounted system',
    'Pole-mounted system',
    'Ground-mounted system',
    'Floating solar system'
  ],
  type: 'MCQs',
  correctAnswers: ['Ground-mounted system'],
  score: 1,
  rationale: 'Ground-mounted systems are installed on open land and are ideal for large-scale solar farms.'
},
{
  question: 'According to the lecture note, solar panels in Nigeria should generally face which direction for optimal performance?',
  choices: [
    'North',
    'East',
    'South',
    'West'
  ],
  type: 'MCQs',
  correctAnswers: ['South'],
  score: 1,
  rationale: 'The lecture recommends that solar panels in Nigeria generally face south to receive maximum sunlight.'
},
{
  question: 'What is the main purpose of leaving space beneath solar panels?',
  choices: [
    'To reduce installation cost',
    'To improve airflow and reduce overheating',
    'To increase panel weight',
    'To simplify wiring'
  ],
  type: 'MCQs',
  correctAnswers: ['To improve airflow and reduce overheating'],
  score: 1,
  rationale: 'Proper ventilation beneath solar panels improves efficiency by reducing overheating.'
},
{
  question: 'Which of the following is a common mistake during panel installation?',
  choices: [
    'Providing adequate ventilation',
    'Using quality mounting materials',
    'Installing panels under shade',
    'Following manufacturer guidelines'
  ],
  type: 'MCQs',
  correctAnswers: ['Installing panels under shade'],
  score: 1,
  rationale: 'Shade significantly reduces the amount of sunlight reaching the panels, lowering energy production.'
},
{
  question: 'Which Personal Protective Equipment (PPE) is specifically required when working on rooftops?',
  choices: [
    'Reflective vest',
    'Safety harness',
    'Safety glasses',
    'Protective gloves'
  ],
  type: 'MCQs',
  correctAnswers: ['Safety harness'],
  score: 1,
  rationale: 'A safety harness protects workers from falls during roof installations.'
},
{
  question: 'Before wiring a solar system, installers should first:',
  choices: [
    'Increase the battery voltage',
    'Switch off all power sources',
    'Disconnect the solar panels permanently',
    'Remove the inverter'
  ],
  type: 'MCQs',
  correctAnswers: ['Switch off all power sources'],
  score: 1,
  rationale: 'Electrical safety requires that all power sources be switched off before wiring begins.'
},
{
  question: 'Which instrument is used to verify voltage during installation?',
  choices: [
    'Spirit level',
    'Multimeter',
    'Angle finder',
    'Hammer'
  ],
  type: 'MCQs',
  correctAnswers: ['Multimeter'],
  score: 1,
  rationale: 'A multimeter measures electrical quantities such as voltage to ensure safe installation.'
},
{
  question: 'Which of the following is recommended when working at heights?',
  choices: [
    'Work during heavy rain',
    'Use certified ladders',
    'Work without assistance',
    'Ignore weather conditions'
  ],
  type: 'MCQs',
  correctAnswers: ['Use certified ladders'],
  score: 1,
  rationale: 'Certified ladders improve safety and reduce the risk of accidents during installation.'
},
{
  question: 'Which measuring tool is used to check whether a surface is perfectly level?',
  choices: [
    'Wire stripper',
    'Spirit level',
    'Cable cutter',
    'Crimping tool'
  ],
  type: 'MCQs',
  correctAnswers: ['Spirit level'],
  score: 1,
  rationale: 'A spirit level is used to ensure mounting structures are level before installing panels.'
},
{
  question: 'Which tool is specifically used to remove insulation from electrical wires?',
  choices: [
    'Wire stripper',
    'Socket wrench',
    'Electric drill',
    'Hammer'
  ],
  type: 'MCQs',
  correctAnswers: ['Wire stripper'],
  score: 1,
  rationale: 'A wire stripper removes insulation without damaging the conductor.'
},
{
  question: 'Which tool is commonly used to drill holes into mounting surfaces?',
  choices: [
    'Cable cutter',
    'Electric drill',
    'Multimeter',
    'Spirit level'
  ],
  type: 'MCQs',
  correctAnswers: ['Electric drill'],
  score: 1,
  rationale: 'An electric drill is used to create holes for mounting brackets and other hardware.'
},
{
  question: 'Which activity should be completed before installing a solar PV system?',
  choices: [
    'Testing inverter output',
    'Conducting a site survey',
    'Replacing the batteries',
    'Connecting household appliances'
  ],
  type: 'MCQs',
  correctAnswers: ['Conducting a site survey'],
  score: 1,
  rationale: 'A site survey helps identify shading, roof strength, and other factors that affect installation.'
},
{
  question: 'During installation, proper cable management is important because it:',
  choices: [
    'Reduces installation time only',
    'Improves safety and system organization',
    'Increases battery voltage',
    'Eliminates the need for grounding'
  ],
  type: 'MCQs',
  correctAnswers: ['Improves safety and system organization'],
  score: 1,
  rationale: 'Good cable management prevents damage, reduces hazards, and makes maintenance easier.'
},
{
  question: 'Which task should be performed after installation is complete?',
  choices: [
    'Increase the panel tilt angle',
    'Inspect all electrical connections',
    'Purchase additional panels',
    'Disconnect the inverter'
  ],
  type: 'MCQs',
  correctAnswers: ['Inspect all electrical connections'],
  score: 1,
  rationale: 'Inspecting connections ensures the installation is safe and operating correctly.'
},
{
  question: 'What formula is used to calculate electrical energy consumption?',
  choices: [
    'Energy = Voltage × Current',
    'Energy = Power × Time',
    'Energy = Current ÷ Voltage',
    'Energy = Resistance × Current'
  ],
  type: 'MCQs',
  correctAnswers: ['Energy = Power × Time'],
  score: 1,
  rationale: 'Electrical energy is calculated by multiplying power by the duration of use.'
},
{
  question: 'A house consumes 6,500 Wh of energy daily. Using 5 peak sun hours, what minimum solar panel capacity is required before adding system losses?',
  choices: [
    '650 W',
    '1,000 W',
    '1,300 W',
    '1,625 W'
  ],
  type: 'MCQs',
  correctAnswers: ['1,300 W'],
  score: 1,
  rationale: 'Panel capacity = Daily Energy ÷ Peak Sun Hours = 6,500 ÷ 5 = 1,300 W.'
},
{
  question: 'After adding approximately 25% to account for system losses, what solar panel capacity is recommended for a daily energy demand of 6,500 Wh?',
  choices: [
    '1,300 W',
    '1,450 W',
    '1,625 W',
    '2,000 W'
  ],
  type: 'MCQs',
  correctAnswers: ['1,625 W'],
  score: 1,
  rationale: 'Adding 25% losses gives 1,300 W × 1.25 ≈ 1,625 W, which is the recommended minimum capacity.'
},
{
  question: 'Using a 48V battery system, what battery capacity is required for a daily energy demand of 6,500 Wh before considering Depth of Discharge (DoD)?',
  choices: [
    '120 Ah',
    '135 Ah',
    '170 Ah',
    '200 Ah'
  ],
  type: 'MCQs',
  correctAnswers: ['135 Ah'],
  score: 1,
  rationale: 'Battery capacity = Daily Energy ÷ Battery Voltage = 6,500 Wh ÷ 48 V ≈ 135 Ah.'
},
{
  question: 'After considering an 80% Depth of Discharge (DoD), what battery capacity is recommended for a 48V system supplying 6,500 Wh daily?',
  choices: [
    '135 Ah',
    '150 Ah',
    '170 Ah',
    '250 Ah'
  ],
  type: 'MCQs',
  correctAnswers: ['170 Ah'],
  score: 1,
  rationale: 'The adjusted battery capacity is 135 Ah ÷ 0.8 ≈ 170 Ah.'
},
{
  question: 'According to the lecture, which battery configuration can provide a practical 48V 200Ah battery bank?',
  choices: [
    'Two 24V 100Ah batteries in parallel',
    'Four 12V 200Ah batteries connected in series',
    'Four 12V 100Ah batteries connected in parallel',
    'Two 12V 200Ah batteries connected in series'
  ],
  type: 'MCQs',
  correctAnswers: ['Four 12V 200Ah batteries connected in series'],
  score: 1,
  rationale: 'Connecting four 12V 200Ah batteries in series provides a 48V 200Ah battery bank.'
},
{
  question: 'Why should surge current be considered when selecting an inverter?',
  choices: [
    'To reduce battery voltage',
    'Because appliances such as pumps and refrigerators require higher starting power',
    'To increase solar panel efficiency',
    'Because LED bulbs consume surge current continuously'
  ],
  type: 'MCQs',
  correctAnswers: ['Because appliances such as pumps and refrigerators require higher starting power'],
  score: 1,
  rationale: 'Motors in refrigerators and water pumps draw a much higher current during startup than during normal operation.'
},
{
  question: 'If the total simultaneous load is 1,420W, which inverter size is recommended in the lecture note?',
  choices: [
    '1kVA',
    '1.5kVA',
    '2kVA',
    '3kVA'
  ],
  type: 'MCQs',
  correctAnswers: ['3kVA'],
  score: 1,
  rationale: 'The lecture recommends a 3kVA inverter to accommodate the running load and startup surge.'
},
{
  question: 'According to the site survey rule, what should be done immediately after calculating the energy used by each appliance?',
  choices: [
    'Install the inverter',
    'Add all the daily energy values together',
    'Purchase batteries',
    'Determine the roof height'
  ],
  type: 'MCQs',
  correctAnswers: ['Add all the daily energy values together'],
  score: 1,
  rationale: 'The next step is to sum the individual energy values to obtain the total daily energy demand.'
},
{
  question: 'What average peak sunlight duration is commonly used for solar panel sizing in Nigeria?',
  choices: [
    '3 hours/day',
    '4 hours/day',
    '5 hours/day',
    '8 hours/day'
  ],
  type: 'MCQs',
  correctAnswers: ['5 hours/day'],
  score: 1,
  rationale: 'The lecture uses an average of 5 peak sun hours per day for sizing calculations.'
},
{
  question: 'Which formula is used to calculate the required solar panel capacity?',
  choices: [
    'Power × Time',
    'Daily Energy ÷ Peak Sun Hours',
    'Voltage × Current',
    'Current × Resistance'
  ],
  type: 'MCQs',
  correctAnswers: ['Daily Energy ÷ Peak Sun Hours'],
  score: 1,
  rationale: 'Solar panel capacity is obtained by dividing the daily energy requirement by the average peak sun hours.'
},
{
  question: 'Which principle of solar system design focuses on determining adequate energy storage?',
  choices: [
    'Solar resource assessment',
    'Battery sizing',
    'Load assessment',
    'Safety and protection'
  ],
  type: 'MCQs',
  correctAnswers: ['Battery sizing'],
  score: 1,
  rationale: 'Battery sizing determines the storage capacity needed to meet energy requirements.'
},
{
  question: 'Which design principle ensures that batteries are protected from overcharging and excessive discharge?',
  choices: [
    'Inverter sizing',
    'Charge controller selection',
    'Load assessment',
    'Solar panel positioning'
  ],
  type: 'MCQs',
  correctAnswers: ['Charge controller selection'],
  score: 1,
  rationale: 'Selecting an appropriate charge controller protects the battery and extends its lifespan.'
},
{
  question: 'Which component of a solar system stores electrical energy for later use?',
  choices: [
    'Solar panel',
    'Battery',
    'Charge controller',
    'Mounting structure'
  ],
  type: 'MCQs',
  correctAnswers: ['Battery'],
  score: 1,
  rationale: 'Batteries store electrical energy generated by solar panels for use when sunlight is unavailable.'
},
{
  question: 'Which statement correctly describes the relationship between solar panels and batteries?',
  choices: [
    'Solar panels generate DC electricity, which can be stored in batteries',
    'Batteries generate sunlight for the panels',
    'Solar panels convert AC into DC for the battery',
    'Batteries produce AC electricity directly'
  ],
  type: 'MCQs',
  correctAnswers: ['Solar panels generate DC electricity, which can be stored in batteries'],
  score: 1,
  rationale: 'Solar panels produce DC electricity, which is regulated by the charge controller before being stored in batteries.'
},
{
  question: 'Why are circuit breakers, fuses, earthing, and surge protection included in a solar installation?',
  choices: [
    'To increase solar panel output',
    'To improve battery appearance',
    'To enhance system safety and protection',
    'To reduce the number of solar panels required'
  ],
  type: 'MCQs',
  correctAnswers: ['To enhance system safety and protection'],
  score: 1,
  rationale: 'These protective devices safeguard equipment and users against faults, overloads, and electrical hazards.'
},
{
  question: 'Which of the following best describes a hybrid solar system?',
  choices: [
    'A system powered only by batteries',
    'A system that combines solar energy with the utility grid or a generator',
    'A system that operates only during the day',
    'A system that does not require an inverter'
  ],
  type: 'MCQs',
  correctAnswers: ['A system that combines solar energy with the utility grid or a generator'],
  score: 1,
  rationale: 'Hybrid systems integrate solar panels, batteries, and another power source such as the utility grid or a generator.'
},
{
  question: 'Which feature makes hybrid systems generally more reliable than off-grid systems?',
  choices: [
    'They never require batteries',
    'They have access to grid or generator backup',
    'They only use DC appliances',
    'They eliminate the need for charge controllers'
  ],
  type: 'MCQs',
  correctAnswers: ['They have access to grid or generator backup'],
  score: 1,
  rationale: 'Hybrid systems can draw power from the grid or a generator when solar energy or battery power is insufficient.'
},
{
  question: 'What is the main reason for evaluating available sunlight before designing a solar system?',
  choices: [
    'To determine paint color for the panels',
    'To estimate how much solar energy can be generated',
    'To calculate battery weight',
    'To determine cable length'
  ],
  type: 'MCQs',
  correctAnswers: ['To estimate how much solar energy can be generated'],
  score: 1,
  rationale: 'Solar resource assessment determines the available sunlight and helps size the solar array appropriately.'
},
{
  question: 'Which installation type is elevated on poles and is useful where ground space is limited?',
  choices: [
    'Roof-mounted system',
    'Ground-mounted system',
    'Pole-mounted system',
    'Floating solar system'
  ],
  type: 'MCQs',
  correctAnswers: ['Pole-mounted system'],
  score: 1,
  rationale: 'Pole-mounted systems raise the panels above the ground, making them suitable where space is limited.'
},
{
  question: 'Which of the following is listed as one of the five key factors for a successful solar installation?',
  choices: [
    'Painting the solar panels annually',
    'Proper mounting structure selection',
    'Replacing the inverter every year',
    'Using only imported batteries'
  ],
  type: 'MCQs',
  correctAnswers: ['Proper mounting structure selection'],
  score: 1,
  rationale: 'The lecture concludes that proper mounting structure selection, correct positioning, safety, appropriate tools, and best practices are essential for a safe, efficient, and long-lasting solar installation.'
},

  ],
}
