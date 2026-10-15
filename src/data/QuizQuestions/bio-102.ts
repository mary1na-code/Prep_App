import { Topic } from '.'

export const bio102: Topic = {
  topic: 'BIO 102 - Biology Fundamentals',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 1800, // estimate (30 min) - source had no time limit, adjust as needed
  questions: [
   {
  question: 'Microorganisms are best defined as:',
  choices: [
    'Large organisms visible to the naked eye',
    'Microscopic organisms that cannot be seen with the naked eye',
    'Organisms that only live in water',
    'Multicellular organisms with complex tissues',
  ],
  type: 'MCQs',
  correctAnswers: ['Microscopic organisms that cannot be seen with the naked eye'],
  score: 1,
  rationale:
    'B. Microscopic organisms that cannot be seen with the naked eye.\n\nMicroorganisms are microscopic organisms that cannot be seen with the naked eye and are found almost everywhere in the environment.',
},
{
  question: 'Which bacterium converts atmospheric nitrogen into a form usable by plants?',
  choices: [
    'Lactobacillus',
    'E. coli',
    'Rhizobium',
    'Penicillium',
  ],
  type: 'MCQs',
  correctAnswers: ['Rhizobium'],
  score: 1,
  rationale:
    'C. Rhizobium.\n\nRhizobium performs nitrogen fixation by converting atmospheric nitrogen into forms that plants can absorb and use for growth.',
},
{
  question: 'Which of the following is classified as a non-cellular infectious agent?',
  choices: [
    'Bacteria',
    'Fungi',
    'Viruses',
    'Algae',
  ],
  type: 'MCQs',
  correctAnswers: ['Viruses'],
  score: 1,
  rationale:
    'C. Viruses.\n\nViruses are non-cellular infectious agents that require living host cells to reproduce, unlike bacteria, fungi, and algae which are cellular organisms.',
},
{
  question: 'The cell wall of fungi is primarily composed of:',
  choices: [
    'Peptidoglycan',
    'Cellulose',
    'Chitin',
    'Lipopolysaccharide',
  ],
  type: 'MCQs',
  correctAnswers: ['Chitin'],
  score: 1,
  rationale:
    'C. Chitin.\n\nFungal cell walls are made mainly of chitin, which provides strength and structural support.',
},
{
  question: 'A typical virus consists of genetic material enclosed within a:',
  choices: [
    'Cell membrane',
    'Protein coat called a capsid',
    'Cytoplasmic matrix',
    'Nuclear envelope',
  ],
  type: 'MCQs',
  correctAnswers: ['Protein coat called a capsid'],
  score: 1,
  rationale:
    'B. Protein coat called a capsid.\n\nA typical virus consists of DNA or RNA enclosed in a protective protein coat known as a capsid.',
},
{
  question: 'Which virus possesses a helical capsid?',
  choices: [
    'Adenovirus',
    'HIV',
    'Tobacco mosaic virus',
    'Herpesvirus',
  ],
  type: 'MCQs',
  correctAnswers: ['Tobacco mosaic virus'],
  score: 1,
  rationale:
    'C. Tobacco mosaic virus.\n\nThe Tobacco mosaic virus is the classic example of a virus with a helical capsid structure.',
},
{
  question: 'Viruses are described as obligate parasites because they:',
  choices: [
    'Can only reproduce inside living host cells',
    'Feed on dead organic matter',
    'Carry out independent metabolism',
    'Are free-living in soil and water',
  ],
  type: 'MCQs',
  correctAnswers: ['Can only reproduce inside living host cells'],
  score: 1,
  rationale:
    'A. Can only reproduce inside living host cells.\n\nViruses lack the cellular machinery needed for reproduction and therefore must infect living host cells to multiply.',
},
{
  question: 'Which laboratory technique is commonly used to detect viral nucleic acids?',
  choices: [
    'Gram staining',
    'Electron microscopy',
    'PCR (Polymerase Chain Reaction)',
    'Catalase test',
  ],
  type: 'MCQs',
  correctAnswers: ['PCR (Polymerase Chain Reaction)'],
  score: 1,
  rationale:
    'C. PCR (Polymerase Chain Reaction).\n\nPCR detects and amplifies viral DNA or RNA, making it one of the most sensitive methods for diagnosing viral infections.',
},
{
  question: 'Bacteria are classified as prokaryotes because they:',
  choices: [
    'Have a membrane-bound nucleus',
    'Lack a true nucleus and membrane-bound organelles',
    'Have chitin cell walls',
    'Are multicellular organisms',
  ],
  type: 'MCQs',
  correctAnswers: ['Lack a true nucleus and membrane-bound organelles'],
  score: 1,
  rationale:
    'B. Lack a true nucleus and membrane-bound organelles.\n\nProkaryotic cells do not possess a true nucleus or membrane-bound organelles, which distinguishes them from eukaryotic cells.',
},
{
  question: 'After the alcohol decolorization step in Gram staining, Gram-positive bacteria appear:',
  choices: [
    'Pink/Red',
    'Colorless',
    'Purple/Violet',
    'Green',
  ],
  type: 'MCQs',
  correctAnswers: ['Purple/Violet'],
  score: 1,
  rationale:
    'C. Purple/Violet.\n\nGram-positive bacteria retain the crystal violet stain because of their thick peptidoglycan cell wall, causing them to appear purple or violet.',
},
{
  question: 'Rod-shaped bacteria are classified as:',
  choices: [
    'Cocci',
    'Bacilli',
    'Spirilla',
    'Vibrio',
  ],
  type: 'MCQs',
  correctAnswers: ['Bacilli'],
  score: 1,
  rationale:
    'B. Bacilli.\n\nBacilli are rod-shaped bacteria, whereas cocci are spherical, spirilla are spiral-shaped, and Vibrio are comma-shaped.',
},
{
  question: 'Which bacterium is an example of a facultative anaerobe?',
  choices: [
    'Clostridium',
    'Pseudomonas',
    'E. coli',
    'Cyanobacteria',
  ],
  type: 'MCQs',
  correctAnswers: ['E. coli'],
  score: 1,
  rationale:
    'C. E. coli.\n\nE. coli is a facultative anaerobe, meaning it can survive and grow in both the presence and absence of oxygen.',
},
{
  question: 'Bacteria that thrive at temperatures above 45°C are known as:',
  choices: [
    'Psychrophiles',
    'Mesophiles',
    'Thermophiles',
    'Halophiles',
  ],
  type: 'MCQs',
  correctAnswers: ['Thermophiles'],
  score: 1,
  rationale:
    'C. Thermophiles.\n\nThermophiles are heat-loving bacteria that grow best at temperatures above 45°C.',
},
{
  question: 'Fungi obtain their nutrients primarily through:',
  choices: [
    'Photosynthesis',
    'Absorption',
    'Ingestion',
    'Chemosynthesis',
  ],
  type: 'MCQs',
  correctAnswers: ['Absorption'],
  score: 1,
  rationale:
    'B. Absorption.\n\nFungi are heterotrophs that obtain nutrients by secreting enzymes into their environment and absorbing the digested nutrients.',
},
{
  question: 'The network of thread-like structures that forms the body of a mold is called:',
  choices: [
    'Sporangium',
    'Mycelium',
    'Hypha',
    'Spore',
  ],
  type: 'MCQs',
  correctAnswers: ['Mycelium'],
  score: 1,
  rationale:
    'B. Mycelium.\n\nMycelium is the mass or network of hyphae that forms the vegetative body of a fungus.',
},
{
  question: 'Which group of fungi produces ascospores in sac-like structures called asci?',
  choices: [
    'Zygomycota',
    'Ascomycota',
    'Basidiomycota',
    'Deuteromycota',
  ],
  type: 'MCQs',
  correctAnswers: ['Ascomycota'],
  score: 1,
  rationale:
    'B. Ascomycota.\n\nMembers of Ascomycota produce sexual spores called ascospores inside sac-like structures known as asci.',
},
{
  question: 'Penicillium is medically important because it is used in the production of:',
  choices: [
    'Insulin',
    'Penicillin',
    'Vaccines',
    'Vitamins',
  ],
  type: 'MCQs',
  correctAnswers: ['Penicillin'],
  score: 1,
  rationale:
    'B. Penicillin.\n\nThe fungus Penicillium is used to produce penicillin, one of the earliest and most widely used antibiotics.',
},
{
  question: 'In the Five Kingdom System, prokaryotic organisms belong to which kingdom?',
  choices: [
    'Protista',
    'Fungi',
    'Monera',
    'Plantae',
  ],
  type: 'MCQs',
  correctAnswers: ['Monera'],
  score: 1,
  rationale:
    'C. Monera.\n\nThe kingdom Monera consists of prokaryotic organisms, including bacteria, which lack a true nucleus.',
},
{
  question: 'Which kingdom consists of multicellular, photosynthetic organisms with cellulose cell walls?',
  choices: [
    'Animalia',
    'Fungi',
    'Plantae',
    'Protista',
  ],
  type: 'MCQs',
  correctAnswers: ['Plantae'],
  score: 1,
  rationale:
    'C. Plantae.\n\nPlants are multicellular, photosynthetic organisms whose cell walls are primarily composed of cellulose.',
},
{
  question: 'Animals are classified as vertebrates or invertebrates based on the presence or absence of a:',
  choices: [
    'Brain',
    'Backbone',
    'Heart',
    'Exoskeleton',
  ],
  type: 'MCQs',
  correctAnswers: ['Backbone'],
  score: 1,
  rationale:
    'B. Backbone.\n\nVertebrates possess a backbone, while invertebrates do not.',
},
{
  question: 'Which characteristic is shared by both plants and animals?',
  choices: [
    'Both are autotrophic',
    'Both have cell walls',
    'Both are made of cells',
    'Both store food as starch',
  ],
  type: 'MCQs',
  correctAnswers: ['Both are made of cells'],
  score: 1,
  rationale:
    'C. Both are made of cells.\n\nPlants and animals are living organisms composed of cells, although they differ in many other characteristics.',
},
{
  question: 'Which plant group lacks vascular tissues as well as true roots, stems, and leaves?',
  choices: [
    'Pteridophytes',
    'Bryophytes',
    'Gymnosperms',
    'Angiosperms',
  ],
  type: 'MCQs',
  correctAnswers: ['Bryophytes'],
  score: 1,
  rationale:
    'B. Bryophytes.\n\nBryophytes are non-vascular plants and do not possess true roots, stems, or leaves.',
},
{
  question: 'Gymnosperms are known as "naked seed plants" because their seeds are:',
  choices: [
    'Enclosed in fruits',
    'Exposed and not enclosed in fruits',
    'Produced inside flowers',
    'Found only in aquatic environments',
  ],
  type: 'MCQs',
  correctAnswers: ['Exposed and not enclosed in fruits'],
  score: 1,
  rationale:
    'B. Exposed and not enclosed in fruits.\n\nGymnosperm seeds develop without being enclosed by a fruit, which is why they are called naked seeds.',
},
{
  question: 'Which plant group is the most diverse and produces both flowers and fruits?',
  choices: [
    'Bryophytes',
    'Pteridophytes',
    'Gymnosperms',
    'Angiosperms',
  ],
  type: 'MCQs',
  correctAnswers: ['Angiosperms'],
  score: 1,
  rationale:
    'D. Angiosperms.\n\nAngiosperms are flowering plants that produce fruits enclosing their seeds and are the most diverse plant group.',
},
{
  question: 'Which of the following is NOT a function of plant roots?',
  choices: [
    'Anchoring the plant',
    'Absorbing water and minerals',
    'Photosynthesis',
    'Storing food',
  ],
  type: 'MCQs',
  correctAnswers: ['Photosynthesis'],
  score: 1,
  rationale:
    'C. Photosynthesis.\n\nRoots anchor the plant, absorb water and minerals, and often store food. Photosynthesis mainly occurs in the leaves.',
},
{
  question: 'The functional unit of the kidney responsible for blood filtration is the:',
  choices: [
    'Nephron',
    'Ureter',
    'Alveolus',
    'Neuron',
  ],
  type: 'MCQs',
  correctAnswers: ['Nephron'],
  score: 1,
  rationale:
    'A. Nephron.\n\nThe nephron is the functional unit of the kidney where filtration, reabsorption, and secretion take place.',
},
{
  question: 'Which organ of the excretory system stores urine before it is excreted?',
  choices: [
    'Kidney',
    'Ureter',
    'Urinary bladder',
    'Urethra',
  ],
  type: 'MCQs',
  correctAnswers: ['Urinary bladder'],
  score: 1,
  rationale:
    'C. Urinary bladder.\n\nThe urinary bladder temporarily stores urine until it is expelled from the body.',
},
{
  question: 'In humans, fertilization normally occurs in the:',
  choices: [
    'Uterus',
    'Ovary',
    'Fallopian tube',
    'Vagina',
  ],
  type: 'MCQs',
  correctAnswers: ['Fallopian tube'],
  score: 1,
  rationale:
    'C. Fallopian tube.\n\nIn humans, fertilization typically occurs in the fallopian tube before the embryo moves to the uterus for implantation.',
},
{
  question: 'Which male reproductive organ produces both sperm and testosterone?',
  choices: [
    'Epididymis',
    'Vas deferens',
    'Testes',
    'Prostate gland',
  ],
  type: 'MCQs',
  correctAnswers: ['Testes'],
  score: 1,
  rationale:
    'C. Testes.\n\nThe testes are the male reproductive organs responsible for producing sperm cells and the hormone testosterone.',
},
{
  question: "A camel's hump, which stores fat, is an example of:",
  choices: [
    'Behavioral adaptation',
    'Structural adaptation',
    'Physiological adaptation',
    'Reproductive adaptation',
  ],
  type: 'MCQs',
  correctAnswers: ['Structural adaptation'],
  score: 1,
  rationale:
    "B. Structural adaptation.\n\nA camel's hump is a physical feature that stores fat, helping the animal survive long periods without food in desert environments.",
},
{
  question: 'Birds migrating to warmer regions during winter is an example of:',
  choices: [
    'Structural adaptation',
    'Behavioral adaptation',
    'Physiological adaptation',
    'Evolutionary adaptation',
  ],
  type: 'MCQs',
  correctAnswers: ['Behavioral adaptation'],
  score: 1,
  rationale:
    'B. Behavioral adaptation.\n\nMigration is an action or behavior that helps birds survive unfavorable weather and food shortages during winter.',
},
{
  question: 'Desert plants opening their stomata at night to reduce water loss is an example of:',
  choices: [
    'Structural adaptation',
    'Behavioral adaptation',
    'Physiological adaptation',
    'Defensive adaptation',
  ],
  type: 'MCQs',
  correctAnswers: ['Physiological adaptation'],
  score: 1,
  rationale:
    'C. Physiological adaptation.\n\nOpening stomata at night is an internal physiological process that minimizes water loss while allowing gas exchange.',
},
{
  question: 'The complete equation for aerobic respiration produces which of the following end products?',
  choices: [
    'Alcohol and carbon dioxide',
    'Lactic acid only',
    'Carbon dioxide, water, and energy (ATP)',
    'Glucose and oxygen',
  ],
  type: 'MCQs',
  correctAnswers: ['Carbon dioxide, water, and energy (ATP)'],
  score: 1,
  rationale:
    'C. Carbon dioxide, water, and energy (ATP).\n\nDuring aerobic respiration, glucose reacts with oxygen to produce carbon dioxide, water, and ATP, the cell’s usable form of energy.',
},
{
  question: 'In humans, gaseous exchange occurs primarily in the:',
  choices: [
    'Trachea',
    'Lungs',
    'Gills',
    'Skin',
  ],
  type: 'MCQs',
  correctAnswers: ['Lungs'],
  score: 1,
  rationale:
    'B. Lungs.\n\nThe lungs contain millions of alveoli where oxygen diffuses into the blood and carbon dioxide diffuses out.',
},
{
  question: 'Which type of blood vessel carries blood away from the heart?',
  choices: [
    'Vein',
    'Capillary',
    'Artery',
    'Venule',
  ],
  type: 'MCQs',
  correctAnswers: ['Artery'],
  score: 1,
  rationale:
    'C. Artery.\n\nArteries carry blood away from the heart to various parts of the body, while veins return blood to the heart.',
},
{
  question: 'In the human double circulatory system, blood passes through the heart:',
  choices: [
    'Once in one complete cycle',
    'Twice in one complete cycle',
    'Three times in one complete cycle',
    'Only during physical activity',
  ],
  type: 'MCQs',
  correctAnswers: ['Twice in one complete cycle'],
  score: 1,
  rationale:
    'B. Twice in one complete cycle.\n\nIn double circulation, blood passes through the heart once during pulmonary circulation and again during systemic circulation.',
},
{
  question: 'Animals with jointed limbs and a hard exoskeleton belong to which phylum?',
  choices: [
    'Mollusca',
    'Arthropoda',
    'Annelida',
    'Echinodermata',
  ],
  type: 'MCQs',
  correctAnswers: ['Arthropoda'],
  score: 1,
  rationale:
    'B. Arthropoda.\n\nArthropods are characterized by jointed appendages and a hard exoskeleton made of chitin.',
},
{
  question: 'Which phylum is characterized by radial symmetry and the presence of stinging cells?',
  choices: [
    'Porifera',
    'Cnidaria',
    'Platyhelminthes',
    'Nematoda',
  ],
  type: 'MCQs',
  correctAnswers: ['Cnidaria'],
  score: 1,
  rationale:
    'B. Cnidaria.\n\nCnidarians possess radial symmetry and specialized stinging cells called cnidocytes used for capturing prey and defense.',
},
{
  question: 'What is the correct hierarchical order of biological classification from largest to smallest?',
  choices: [
    'Kingdom → Phylum → Class → Order → Family → Genus → Species',
    'Species → Genus → Family → Order → Class → Phylum → Kingdom',
    'Kingdom → Class → Phylum → Order → Family → Genus → Species',
    'Phylum → Kingdom → Class → Order → Family → Genus → Species',
  ],
  type: 'MCQs',
  correctAnswers: ['Kingdom → Phylum → Class → Order → Family → Genus → Species'],
  score: 1,
  rationale:
    'A. Kingdom → Phylum → Class → Order → Family → Genus → Species.\n\nBiological classification proceeds from the broadest category (Kingdom) to the most specific category (Species).',
},
{
  question: 'Which feature correctly distinguishes prokaryotes from eukaryotes?',
  choices: [
    'Prokaryotes have a nucleus; eukaryotes do not',
    'Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes',
    'Prokaryotes are larger than eukaryotes',
    'Prokaryotes have membrane-bound organelles; eukaryotes do not',
  ],
  type: 'MCQs',
  correctAnswers: ['Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes'],
  score: 1,
  rationale:
    'B. Prokaryotes have 70S ribosomes; eukaryotes have 80S ribosomes.\n\nOne major distinction is that prokaryotic cells contain 70S ribosomes, whereas eukaryotic cells contain larger 80S ribosomes. Prokaryotes also lack a true nucleus and membrane-bound organelles.',
},
]}