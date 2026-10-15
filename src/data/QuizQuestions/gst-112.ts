// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

// NOTE: The source material (a Google Form) did not include an answer key —
// it only listed questions and choices. Answers below were derived from
// general knowledge of Nigerian history/government and verified where needed.
// Two are genuinely ambiguous given the answer options provided — check these
// against your course's official answer key:
//   - Q22 (military rule years 1966-1998): no option matches the historically
//     precise ~28-29 years once you exclude the 1979-1983 civilian interregnum.
//     Picked 32 (the literal 1998-1966 span) as the closest fit to the options given.
//   - Q37 (economic disruption linked to the war): picked "The Monday sit-at-home
//     movement" over "hyperinflation" - either could be the intended answer
//     depending on how your lecturer framed it.

import { Topic } from '.'

export const gst112: Topic = {
  topic: 'gst112',
  level: 'null',
  totalQuestions: 40,
  totalScore: 40,
  totalTime: 1200, // estimate (20 min) - source form had no time limit, adjust as needed
  questions: [
    {
      question:
        'Which pre-colonial Nigerian society developed a centralized monarchical system with powerful city-states?',
      choices: ['Igbo', 'Yoruba', 'Hausa', 'Aro'],
      type: 'MCQs',
      correctAnswers: ['Hausa'],
      score: 1,
    
      rationale: 'The correct answer is "Hausa".',},
    {
      question:
        'What was the title of the king who held both political and religious authority in the pre-colonial Hausa political system?',
      choices: ['Alaafin', 'Sarki', 'Emir', 'Waziri'],
      type: 'MCQs',
      correctAnswers: ['Sarki'],
      score: 1,
    
      rationale: 'The correct answer is "Sarki".',},
    {
      question:
        'In the pre-colonial Hausa political structure, which official served as the cavalry commander?',
      choices: ['Galadima', 'Sarki', 'Madawaki', 'Waziri'],
      type: 'MCQs',
      correctAnswers: ['Madawaki'],
      score: 1,
    
      rationale: 'The correct answer is "Madawaki".',},
    {
      question:
        'What was the role of the Waziri in the pre-colonial Hausa monarchical system?',
      choices: [
        'Prime minister',
        'Heir apparent',
        'Cavalry commander',
        'District Head',
      ],
      type: 'MCQs',
      correctAnswers: ['Prime minister'],
      score: 1,
    
      rationale: 'The correct answer is "Prime minister".',},
    {
      question:
        'Which of the following MOST heavily influenced the centralized structure of the pre-colonial Hausa states?',
      choices: [
        'The Aro Confederacy',
        'Christian missionaries from Europe',
        'The Ogboni secret society',
        'Islamic governance and trans-Saharan trade',
      ],
      type: 'MCQs',
      correctAnswers: ['Islamic governance and trans-Saharan trade'],
      score: 1,
    
      rationale: 'The correct answer is "Islamic governance and trans-Saharan trade".',},
    {
      question:
        'Which ethnic group developed a decentralized, republican system of government in pre-colonial Nigeria?',
      choices: ['Fulani', 'Igbo', 'Hausa', 'Yoruba'],
      type: 'MCQs',
      correctAnswers: ['Igbo'],
      score: 1,
    
      rationale: 'The correct answer is "Igbo".',},
    {
      question: 'How were decisions primarily reached in pre-colonial Igbo society?',
      choices: [
        'By the decree of a hereditary king',
        'Through the rulings of the Oyo Mesi council',
        'Through consensus among community members',
        'Exclusively by the village oracle (Aro Confederacy)',
      ],
      type: 'MCQs',
      correctAnswers: ['Through consensus among community members'],
      score: 1,
    
      rationale: 'The correct answer is "Through consensus among community members".',},
    {
      question:
        'Which institution provided regional judicial and economic coordination for the Igbo WITHOUT centralizing political power?',
      choices: [
        'The Ogboni Society',
        'The Aro Confederacy',
        'The Warrant Chiefs',
        'The Nze and Ozo title societies',
      ],
      type: 'MCQs',
      correctAnswers: ['The Aro Confederacy'],
      score: 1,
    
      rationale: 'The correct answer is "The Aro Confederacy".',},
    {
      question:
        'The pre-colonial Yoruba political system was primarily centered around which empire?',
      choices: ['Sokoto Caliphate', 'Oyo Empire', 'Aro Confederacy', 'Benin Empire'],
      type: 'MCQs',
      correctAnswers: ['Oyo Empire'],
      score: 1,
    
      rationale: 'The correct answer is "Oyo Empire".',},
    {
      question:
        'In the Yoruba political system, the power of the Alaafin was checked by a council of seven principal chiefs known as the:',
      choices: ['Oyo Mesi', 'Ogboni', 'Nze and Ozo', 'Are-Ona-Kakanfo'],
      type: 'MCQs',
      correctAnswers: ['Oyo Mesi'],
      score: 1,
    
      rationale: 'The correct answer is "Oyo Mesi".',},
    {
      question:
        'Who served as the commander-in-chief of the army in the pre-colonial Yoruba (Oyo Empire) system?',
      choices: ['Madawaki', 'Are-Ona-Kakanfo', 'Alaafin', 'Galadima'],
      type: 'MCQs',
      correctAnswers: ['Are-Ona-Kakanfo'],
      score: 1,
    
      rationale: 'The correct answer is "Are-Ona-Kakanfo".',},
    {
      question: 'Who initiated the policy of indirect rule in Nigeria?',
      choices: [
        'Queen Elizabeth II',
        'Lord Lugard',
        'Arthur Richards',
        'John Macpherson',
      ],
      type: 'MCQs',
      correctAnswers: ['Lord Lugard'],
      score: 1,
    
      rationale: 'The correct answer is "Lord Lugard".',},
    {
      question:
        'What was the PRIMARY reason for the introduction of indirect rule in Nigeria?',
      choices: [
        'The desire to spread Christianity across Nigeria',
        'Insufficient trained British personnel and limited financial resources',
        'The formal request of traditional rulers for a governance framework',
        'To prepare Nigeria for immediate independence',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Insufficient trained British personnel and limited financial resources',
      ],
      score: 1,
    
      rationale: 'The correct answer is "Insufficient trained British personnel and limited financial resources".',},
    {
      question:
        'Why did indirect rule succeed in Northern Nigeria but largely fail in the Southeast?',
      choices: [
        'The North had no existing traditional rulers, making a clean start possible',
        'Northern society was highly decentralized, matching the British model',
        'Existing hierarchical governance and Islamic legal systems in the North were compatible with indirect rule',
        'The British created Warrant Chiefs in the North who were widely accepted',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Existing hierarchical governance and Islamic legal systems in the North were compatible with indirect rule',
      ],
      score: 1,
    
      rationale: 'The correct answer is "Existing hierarchical governance and Islamic legal systems in the North were compatible with indirect rule".',},
    {
      question:
        'What artificial authority did the British create in Southeastern Nigeria that caused widespread resentment among the Igbo?',
      choices: [
        'The Aro Confederacy',
        'The Sarki system',
        'Warrant Chiefs',
        'District Heads',
      ],
      type: 'MCQs',
      correctAnswers: ['Warrant Chiefs'],
      score: 1,
    
      rationale: 'The correct answer is "Warrant Chiefs".',},
    {
      question: 'Which Nigerian constitution FIRST introduced the elective principle?',
      choices: [
        'Richard Constitution (1946)',
        'Clifford Constitution (1922)',
        'Macpherson Constitution (1951)',
        'Lyttleton Constitution (1954)',
      ],
      type: 'MCQs',
      correctAnswers: ['Clifford Constitution (1922)'],
      score: 1,
    
      rationale: 'The correct answer is "Clifford Constitution (1922)".',},
    {
      question:
        'Under the Clifford Constitution (1922), elected representatives could come from which two locations?',
      choices: [
        'Kano and Kaduna',
        'Enugu and Port Harcourt',
        'Lagos and Calabar',
        'Ibadan and Lagos',
      ],
      type: 'MCQs',
      correctAnswers: ['Lagos and Calabar'],
      score: 1,
    
      rationale: 'The correct answer is "Lagos and Calabar".',},
    {
      question:
        'Which constitution formally divided Nigeria into THREE REGIONS (North, East, West)?',
      choices: [
        'Macpherson Constitution (1951)',
        'Lyttleton Constitution (1954)',
        'Richard Constitution (1946)',
        'Clifford Constitution (1922)',
      ],
      type: 'MCQs',
      correctAnswers: ['Richard Constitution (1946)'],
      score: 1,
    
      rationale: 'The correct answer is "Richard Constitution (1946)".',},
    {
      question:
        'The central Legislative Council was replaced with a House of Representatives under which constitution?',
      choices: [
        'Lyttleton Constitution (1954)',
        'Macpherson Constitution (1951)',
        'Richard Constitution (1946)',
        'Clifford Constitution (1922)',
      ],
      type: 'MCQs',
      correctAnswers: ['Macpherson Constitution (1951)'],
      score: 1,
    
      rationale: 'The correct answer is "Macpherson Constitution (1951)".',},
    {
      question:
        'Which constitution is credited with establishing TRUE FEDERALISM in Nigeria?',
      choices: [
        'Richard Constitution (1946)',
        'Macpherson Constitution (1951)',
        'Clifford Constitution (1922)',
        'Lyttleton Constitution (1954)',
      ],
      type: 'MCQs',
      correctAnswers: ['Lyttleton Constitution (1954)'],
      score: 1,
    
      rationale: 'The correct answer is "Lyttleton Constitution (1954)".',},
    {
      question: 'In what year did the Northern Region obtain self-government?',
      choices: ['1954', '1957', '1959', '1960'],
      type: 'MCQs',
      correctAnswers: ['1959'],
      score: 1,
    
      rationale: 'The correct answer is "1959".',},
    {
      question:
        'How many years in total did Nigeria experience military rule between 1966 and 1998?',
      choices: ['16 years', '24 years', '32 years', '40 years'],
      type: 'MCQs',
      // NOTE: ambiguous - see file header comment.
      correctAnswers: ['32 years'],
      score: 1,
    
      rationale: 'The correct answer is "32 years".',},
    {
      question: 'How many military coups occurred in Nigeria between 1966 and 1998?',
      choices: ['Four', 'Six', 'Eight', 'Ten'],
      type: 'MCQs',
      correctAnswers: ['Six'],
      score: 1,
    
      rationale: 'The correct answer is "Six".',},
    {
      question:
        'The Nigerian Civil War (Biafran War) was fought between which years?',
      choices: ['1960–1963', '1966–1969', '1967–1970', '1970–1973'],
      type: 'MCQs',
      correctAnswers: ['1967–1970'],
      score: 1,
    
      rationale: 'The correct answer is "1967–1970".',},
    {
      question: 'Approximately how many civilian deaths resulted from the Biafran War?',
      choices: [
        '100,000 – 300,000',
        '500,000 – 3,000,000',
        '4,000,000 – 5,000,000',
        'Less than 50,000',
      ],
      type: 'MCQs',
      correctAnswers: ['500,000 – 3,000,000'],
      score: 1,
    
      rationale: 'The correct answer is "500,000 – 3,000,000".',},
    {
      question: 'How many ethnic groups does Nigeria currently have?',
      choices: ['Exactly 100', 'Over 250', 'Around 150', 'Over 500'],
      type: 'MCQs',
      correctAnswers: ['Over 250'],
      score: 1,
    
      rationale: 'The correct answer is "Over 250".',},
    {
      question:
        'To acquire Nigerian citizenship by NATURALIZATION, a foreigner must have lived in Nigeria for up to how many years?',
      choices: ['5 years', '10 years', '15 years', '20 years'],
      type: 'MCQs',
      correctAnswers: ['15 years'],
      score: 1,
    
      rationale: 'The correct answer is "15 years".',},
    {
      question:
        'Which dimension of citizenship specifically involves patriotism and allegiance to the state?',
      choices: ['Political', 'Social', 'Cultural', 'Economic'],
      type: 'MCQs',
      correctAnswers: ['Political'],
      score: 1,
    
      rationale: 'The correct answer is "Political".',},
    {
      question:
        'Which of the following is considered a CIVIC RESPONSIBILITY of Nigerian citizens?',
      choices: [
        'Receiving a monthly government salary',
        'Paying taxes',
        'Owning landed property',
        'Belonging to a registered ethnic group',
      ],
      type: 'MCQs',
      correctAnswers: ['Paying taxes'],
      score: 1,
    
      rationale: 'The correct answer is "Paying taxes".',},
    {
      question: 'How many indigenous languages are there in Nigeria?',
      choices: ['Over 100', 'Over 250', 'Over 500', 'Exactly 3'],
      type: 'MCQs',
      correctAnswers: ['Over 500'],
      score: 1,
    
      rationale: 'The correct answer is "Over 500".',},
    {
      question:
        'The Nilo-Saharan linguistic family is predominantly found in which part of Nigeria?',
      choices: ['South', 'Middle Belt', 'Northeast', 'North'],
      type: 'MCQs',
      correctAnswers: ['Northeast'],
      score: 1,
    
      rationale: 'The correct answer is "Northeast".',},
    {
      question: 'What is the official language of Nigeria?',
      choices: ['Hausa', 'Yoruba', 'Igbo', 'English'],
      type: 'MCQs',
      correctAnswers: ['English'],
      score: 1,
    
      rationale: 'The correct answer is "English".',},
    {
      question:
        'The Ogboni society in the pre-colonial Yoruba political system is best described as:',
      choices: [
        'A council of cavalry commanders responsible for military affairs',
        "A powerful secret society of elders that helped check the king's power",
        'The supreme judicial court that resolved land disputes',
        'An age-grade institution for community labour mobilisation',
      ],
      type: 'MCQs',
      correctAnswers: [
        "A powerful secret society of elders that helped check the king's power",
      ],
      score: 1,
    
      rationale: 'The correct answer is "A powerful secret society of elders that helped check the king".',},
    {
      question:
        'In the pre-colonial Igbo political system, the title societies were known as:',
      choices: ['Oyo Mesi', 'Nze and Ozo', 'Madawaki', 'Alaafin'],
      type: 'MCQs',
      correctAnswers: ['Nze and Ozo'],
      score: 1,
    
      rationale: 'The correct answer is "Nze and Ozo".',},
    {
      question:
        'In the pre-colonial Hausa hierarchical structure, how did the Sarki relate to common people?',
      choices: [
        'Through direct democratic representation and open assemblies',
        'Through the Oyo Mesi, which mediated between king and people',
        'Through District Heads and Village Heads who formed a chain of command',
        'Through the Aro Confederacy, which governed regional affairs',
      ],
      type: 'MCQs',
      correctAnswers: [
        'Through District Heads and Village Heads who formed a chain of command',
      ],
      score: 1,
    
      rationale: 'The correct answer is "Through District Heads and Village Heads who formed a chain of command".',},
    {
      question:
        'A foreign woman married to an indigenous Nigerian man can acquire citizenship through which pathway?',
      choices: ['Naturalization only', 'Ancestry', 'Registration', 'Birth'],
      type: 'MCQs',
      correctAnswers: ['Registration'],
      score: 1,
    
      rationale: 'The correct answer is "Registration".',},
    {
      question:
        'Which of the following is an economic disruption in Southeastern Nigeria cited as a lingering consequence of the Biafran War?',
      choices: [
        'Hyperinflation caused by wartime currency printing',
        'The Monday sit-at-home movement',
        'The British creation of the Warrant Chiefs system',
        'The colonial blockade of Lagos ports',
      ],
      type: 'MCQs',
      // NOTE: ambiguous - see file header comment.
      correctAnswers: ['The Monday sit-at-home movement'],
      score: 1,
    
      rationale: 'The correct answer is "The Monday sit-at-home movement".',},
    {
      question:
        'Which constitution created regional assemblies in ALL THREE regions (North, East, and West)?',
      choices: [
        'Macpherson Constitution (1951)',
        'Clifford Constitution (1922)',
        'Richard Constitution (1946)',
        'Lyttleton Constitution (1954)',
      ],
      type: 'MCQs',
      correctAnswers: ['Richard Constitution (1946)'],
      score: 1,
    
      rationale: 'The correct answer is "Richard Constitution (1946)".',},
    {
      question:
        'During military rule in Nigeria, constitutional governance was replaced with which form of governing authority?',
      choices: [
        'Consensual democracy',
        'Decrees',
        'Regional assemblies',
        'Traditional warrants',
      ],
      type: 'MCQs',
      correctAnswers: ['Decrees'],
      score: 1,
    
      rationale: 'The correct answer is "Decrees".',},
    {
      question:
        "Which of the following is NOT one of the three linguistic family groupings of Nigeria's indigenous languages?",
      choices: ['Niger-Congo', 'Nilo-Saharan', 'Indo-European', 'Afro-Asiatic'],
      type: 'MCQs',
      correctAnswers: ['Indo-European'],
      score: 1,
    
      rationale: 'The correct answer is "Indo-European".',},
  ],
}