// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

// NOTE: The source material (a Google Form) did not include an answer key.
// Answers below were derived from general knowledge of Igbo grammar,
// orthography, and traditional Igbo culture. Confidence is high for the
// language/orthography questions (letter counts, syllables, tone, etc.)
// but lower for several culture-specific questions and one question that
// was visibly garbled by OCR in the source document. Flagged below -
// please cross-check these against your lecture notes/answer key:
//   Q5, Q8, Q9, Q12, Q13, Q15, Q16, Q17, Q29 (badly garbled source text),
//   Q34, Q35, Q36, Q38, Q39, Q40

import { Topic } from '.'

export const gst114: Topic = {
  topic: 'GST 114',
  level: 'Beginner',
  totalQuestions: 40,
  totalScore: 40,
  totalTime: 900, // estimate (15 min) - source form had no time limit, adjust as needed
  questions: [
    {
      question: "Mkpuru abidii Igbo di ___ n'onuogugu.",
      choices: ['iri ato na isii', 'iri abuo na asato', 'iri ato', 'iri abuo na isii'],
      type: 'MCQs',
      correctAnswers: ['iri ato na isii'],
      score: 1,
    
      rationale: 'The correct answer is "iri ato na isii".',},
    {
      question:
        "Akara asusu o bula ji edeputa asusu ha n'uzo nsoroedide (otografii) bu ___.",
      choices: ['usoro edemede', 'mkpuruasusu', 'mkpuruokwu', 'mkpuruedemede'],
      type: 'MCQs',
      correctAnswers: ['mkpuruedemede'],
      score: 1,
    
      rationale: 'The correct answer is "mkpuruedemede".',},
    {
      question:
        "Akara a na-etinye iji gosiputa n'ahiriokwu a biala n'isi njedebe bu akara ___.",
      choices: ['ngudo', 'kpom', 'uhie', 'edu'],
      type: 'MCQs',
      correctAnswers: ['kpom'],
      score: 1,
    
      rationale: 'The correct answer is "kpom".',},
    {
      question: "Deputa Nkejiokwu ole di na mkpurukowu ndia? 'ABALIDIEGWU' ___.",
      choices: ['ato', 'otu', 'asaa', 'isii'],
      type: 'MCQs',
      correctAnswers: ['isii'],
      score: 1,
    
      rationale: 'The correct answer is "isii".',},
    {
      question: "Deputa Nkejiokwu ole di na mkpurukowu ndia? 'Mma' ___.",
      // NOTE: lower confidence - see file header comment.
      choices: ['otu', 'abuo', 'onao', 'ato'],
      type: 'MCQs',
      correctAnswers: ['abuo'],
      score: 1,
    
      rationale: 'The correct answer is "abuo".',},
    {
      question:
        'Na isi ututu, eligwe na ebido ichawaputa ihe, nke na egosi na ___.',
      choices: ['chi efowela', 'mmiri na ezo', 'izu ohuruchi', 'otutu'],
      type: 'MCQs',
      correctAnswers: ['chi efowela'],
      score: 1,
    
      rationale: 'The correct answer is "chi efowela".',},
    {
      question: 'Otu na ihe ndia ka ndi Igbo ji agu oge? ___.',
      choices: ['ugbo eme ja', 'mmadu ura', 'onodu anyanwu', 'mkpu'],
      type: 'MCQs',
      correctAnswers: ['onodu anyanwu'],
      score: 1,
    
      rationale: 'The correct answer is "onodu anyanwu".',},
    {
      question:
        "E jikwa ekwe nche egosiputa mgbe enwere nche n' obodo nke putara na ___ ga aputa na ikem.",
      // NOTE: lower confidence - see file header comment.
      choices: ['umu okorobia', 'ndi nne', 'ndi nna', 'umu aka'],
      type: 'MCQs',
      correctAnswers: ['umu okorobia'],
      score: 1,
    
      rationale: 'The correct answer is "umu okorobia".',},
    {
      question: 'Ndi igbo jikwa oja akwa ndi na ete egwu mgbe ha ga ___.',
      // NOTE: lower confidence - see file header comment.
      choices: [
        'azoghara okpa egwu',
        'eti mkpue',
        'je ka ndi ogaranya boo ha ego',
        'awuli elu',
      ],
      type: 'MCQs',
      correctAnswers: ['je ka ndi ogaranya boo ha ego'],
      score: 1,
    
      rationale: 'The correct answer is "je ka ndi ogaranya boo ha ego".',},
    {
      question:
        'Usorommebe okwu ebe a na-ewepu ufodu akuku okwu iji nweta okwu ozu bu ___.',
      choices: ['mmenha', 'nsinaahaaka', 'nchabi', 'mbite'],
      type: 'MCQs',
      correctAnswers: ['nchabi'],
      score: 1,
    
      rationale: 'The correct answer is "nchabi".',},
    {
      question:
        "...na-enweta nke a site n'ijikọ ngwaa na mmeju ngwaa na-eso ya bia gbakwunye nganiihu na ya, ha ewee ghoọ otu mkpurukowu ___.",
      choices: ['mbite', 'chabi', 'mmemkpọkọ', 'olu Igbo'],
      type: 'MCQs',
      correctAnswers: ['mmemkpọkọ'],
      score: 1,
    
      rationale: 'The correct answer is "mmemkpọkọ".',},
    {
      question: 'Otu n\'ime ndi a esoghi n\'udi edemede e nwere. Edemede ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['nkowa', 'taliu', 'anamachoihe', 'akuko'],
      type: 'MCQs',
      correctAnswers: ['taliu'],
      score: 1,
    
      rationale: 'The correct answer is "taliu".',},
    {
      question:
        "Udi edemede mmadu abuo kwekoritara n'otu ihe, o nweghi onye na-agbagha nke onye ozo na-ekwu bu edemede ___.",
      // NOTE: lower confidence - see file header comment.
      choices: ['arumuika', 'mkparita uka', 'nkowa', "nru'rita'uka"],
      type: 'MCQs',
      correctAnswers: ['mkparita uka'],
      score: 1,
    
      rationale: 'The correct answer is "mkparita uka".',},
    {
      question: 'Umuada are daughters of ___.',
      choices: ['the society', 'nation', 'the land', 'country'],
      type: 'MCQs',
      correctAnswers: ['the land'],
      score: 1,
    
      rationale: 'The correct answer is "the land".',},
    {
      question:
        'Umuada have initiated various training programs aimed at equipping women with ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['pride', 'perfection', 'none', 'skill'],
      type: 'MCQs',
      correctAnswers: ['skill'],
      score: 1,
    
      rationale: 'The correct answer is "skill".',},
    {
      question: 'Omugo is done for ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['the mother', 'fatherinlaw', 'child', 'parents'],
      type: 'MCQs',
      correctAnswers: ['the mother'],
      score: 1,
    
      rationale: 'The correct answer is "the mother".',},
    {
      question: '___ fund omugo or post partum care.',
      // NOTE: lower confidence - see file header comment.
      choices: ['parents', 'child', 'father', 'mother'],
      type: 'MCQs',
      correctAnswers: ['father'],
      score: 1,
    
      rationale: 'The correct answer is "father".',},
    {
      question:
        'N\'asusu Igbo, mkpụrụedemede ndị nwere ụda na-enwe ụda bụ ụdaume na ___.',
      choices: ['mgbochiume', 'myiriụdaume', 'akara edemede', 'udaolu'],
      type: 'MCQs',
      correctAnswers: ['myiriụdaume'],
      score: 1,
    
      rationale: 'The correct answer is "myiriụdaume".',},
    {
      question: 'Asusu Igbo nwere mkpụrụedemede udaume ___.',
      choices: ['asato', 'isii', 'iri ato', 'iri abuo'],
      type: 'MCQs',
      correctAnswers: ['asato'],
      score: 1,
    
      rationale: 'The correct answer is "asato".',},
    {
      question: 'Digraphs like gb, kp, nw count as ___.',
      choices: ['otu mkpụrụedemede', 'abụọ mkpụrụedemede', 'mkpụrụokwu', 'udaume'],
      type: 'MCQs',
      correctAnswers: ['otu mkpụrụedemede'],
      score: 1,
    
      rationale: 'The correct answer is "otu mkpụrụedemede".',},
    {
      question:
        "Usoro ndakọrịta ụdaume na-achọ ka okwu jiri ụdaume sitere n'otu ___.",
      choices: ['usoro', 'otu ahụ', 'nkejiokwu', 'udaolu'],
      type: 'MCQs',
      correctAnswers: ['otu ahụ'],
      score: 1,
    
      rationale: 'The correct answer is "otu ahụ".',},
    {
      question: 'Tonal language means the _____ of a word determines its meaning.',
      choices: ['pitch', 'length', 'spelling', 'letter'],
      type: 'MCQs',
      correctAnswers: ['pitch'],
      score: 1,
    
      rationale: 'The correct answer is "pitch".',},
    {
      question: 'Ụdaolu dị elu na-apụta na mkpụrụokwu dịka ___.',
      choices: ['áká', 'àlà', 'ísì', 'úkwù'],
      type: 'MCQs',
      correctAnswers: ['áká'],
      score: 1,
    
      rationale: 'The correct answer is "áká".',},
    {
      question: "Akara ụdaala (\\) na-egosi na olu okwu anyị gara ___.",
      choices: ['ala', 'elu', 'etiti', 'ogwu'],
      type: 'MCQs',
      correctAnswers: ['ala'],
      score: 1,
    
      rationale: 'The correct answer is "ala".',},
    {
      question: 'Myiriụdaume bụ mkpụrụedemede m na ___.',
      choices: ['n', 'r', 'g', 'w'],
      type: 'MCQs',
      correctAnswers: ['n'],
      score: 1,
    
      rationale: 'The correct answer is "n".',},
    {
      question: 'Nkejiokwu na Igbo na-eji otu ___.',
      choices: ['ụdaume', 'mgbochiume', 'akara', 'mkpuru'],
      type: 'MCQs',
      correctAnswers: ['ụdaume'],
      score: 1,
    
      rationale: 'The correct answer is "ụdaume".',},
    {
      question:
        'In the word nkejiokwu, the syllables are N/ke/ji/o/kwu. The first syllable is the syllabic nasal ___.',
      choices: ['m', 'n', 'u', 'k'],
      type: 'MCQs',
      correctAnswers: ['n'],
      score: 1,
    
      rationale: 'The correct answer is "n".',},
    {
      question:
        'Akara a na-eji egosipụta mmetụta iwe ma ọ bụ ihe mberede bụ ___.',
      choices: ['!', '?', '.', ';'],
      type: 'MCQs',
      correctAnswers: ['!'],
      score: 1,
    
      rationale: 'The correct answer is "!".',},
    {
      question: "Akara n'ụlọ na-egosi na e wepụrụ a na okwu ___.",
      // NOTE: this question is badly garbled in the source document (OCR
      // artifacts) - low confidence, please verify against the original slide.
      choices: ['na', 'ma', 'ụ', 'lo'],
      type: 'MCQs',
      correctAnswers: ['na'],
      score: 1,
    
      rationale: 'The correct answer is "na".',},
    {
      question: 'Mofim ndabe bụ mgbakwunye nke na-enweghị ike ___.',
      choices: ['akwụrụ onwe ya', 'nwee nghọta', 'igbanwe', 'kewapụ'],
      type: 'MCQs',
      correctAnswers: ['akwụrụ onwe ya'],
      score: 1,
    
      rationale: 'The correct answer is "akwụrụ onwe ya".',},
    {
      question: 'Usoro Nchabi bụ ụzọ e si ewepụ akụkụ okwu iji nweta okwu ___.',
      choices: ['ọhụrụ', 'ochie', 'ọzọ', 'nta'],
      type: 'MCQs',
      correctAnswers: ['ọhụrụ'],
      score: 1,
    
      rationale: 'The correct answer is "ọhụrụ".',},
    {
      question: 'The word tebụl is an example of ___.',
      choices: ['mbite', 'nchabi', 'mmenha', 'nso'],
      type: 'MCQs',
      correctAnswers: ['mbite'],
      score: 1,
    
      rationale: 'The correct answer is "mbite".',},
    {
      question: "Ụdị mgbakwunye a na-etinye n'ihu okwu bụ ___.",
      choices: ['nganiihu', 'nonsazụ', 'nganetiti', 'nso'],
      type: 'MCQs',
      correctAnswers: ['nganiihu'],
      score: 1,
    
      rationale: 'The correct answer is "nganiihu".',},
    {
      question: 'Ndi Igbo na-eji onyonyoo mmadu ama na ọ bụ ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['ututu', 'ehihie', 'abali', 'izu'],
      type: 'MCQs',
      correctAnswers: ['ehihie'],
      score: 1,
    
      rationale: 'The correct answer is "ehihie".',},
    {
      question: 'Ndi Igbo ji oja akpọku ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['ndị okenye', 'umu okorobia', 'nne', 'mọnu'],
      type: 'MCQs',
      correctAnswers: ['mọnu'],
      score: 1,
    
      rationale: 'The correct answer is "mọnu".',},
    {
      question: "Umuada bụ ndị nwanyị nwụrụ n'ala ma ọ bụ ___.",
      // NOTE: lower confidence - see file header comment.
      choices: ['lụrụ di', 'na nwunye', 'ụmụaka', 'ndị okenye'],
      type: 'MCQs',
      correctAnswers: ['lụrụ di'],
      score: 1,
    
      rationale: 'The correct answer is "lụrụ di".',},
    {
      question: "N'ezinaụlọ, oru ịga ahia na isi nri bụ nke ___.",
      choices: ['nna', 'nne', 'nwa', 'ogo'],
      type: 'MCQs',
      correctAnswers: ['nne'],
      score: 1,
    
      rationale: 'The correct answer is "nne".',},
    {
      question: 'Omugwo na-enyere nne na nwa aka site na ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['mmiri ọkụ', 'nri ụtọ', 'akwa', 'ube'],
      type: 'MCQs',
      correctAnswers: ['nri ụtọ'],
      score: 1,
    
      rationale: 'The correct answer is "nri ụtọ".',},
    {
      question: 'Nna nwe ulo na-akwụ ugwo akwụkwọ maka ___.',
      // NOTE: lower confidence - see file header comment.
      choices: ['ụmụ ya', 'nwunye ya', 'nne ya', 'onwe ya'],
      type: 'MCQs',
      correctAnswers: ['ụmụ ya'],
      score: 1,
    
      rationale: 'The correct answer is "ụmụ ya".',},
    {
      question: "N'igba alụmdi na nwunye, a na-akwụ ___.",
      // NOTE: lower confidence - see file header comment.
      choices: ['ego', 'nri', 'akwa', 'ugbo'],
      type: 'MCQs',
      correctAnswers: ['ego'],
      score: 1,
    
      rationale: 'The correct answer is "ego".',},
  ],
}