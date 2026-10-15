import { Topic } from '.'

export const cos118: Topic = {
  topic: 'COS 118 - Gen Ai',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 3600, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    {
  question:
    'What five elements make up an effective academic prompt structure?',
  choices: [
    'Topic + Length + Tone + Source + Format',
    'Task + Context + Format + Constraints + Tone',
    'Context + Examples + Code + Output + Limits',
    'Question + Hypothesis + Data + Method + Conclusion',
  ],
  type: 'MCQs',
  correctAnswers: ['Task + Context + Format + Constraints + Tone'],
  score: 1,
  rationale:
    'B. Task + Context + Format + Constraints + Tone.\n\nAn effective academic prompt clearly defines the task, provides context, specifies the desired format, sets constraints, and indicates the preferred tone for the response.',
},
    {
  question:
    'How do modern diffusion-based image generation models typically create realistic images?',
  choices: [
    'By copying images directly from the internet',
    'By gradually refining random noise into a meaningful image',
    'By converting videos into photographs',
    'By combining existing clip-art images',
  ],
  type: 'MCQs',
  correctAnswers: ['By gradually refining random noise into a meaningful image'],
  score: 1,
  rationale:
    'B. By gradually refining random noise into a meaningful image.\n\nDiffusion models begin with random noise and gradually remove it over multiple steps until a realistic image matching the prompt is produced.',
},

{
  question:
    'Why is Adobe Firefly widely accepted for commercial creative work?',
  choices: [
    'It generates images faster than every competitor',
    'It is trained primarily on licensed and public-domain content',
    'It only works with Adobe Photoshop',
    'It creates videos instead of images',
  ],
  type: 'MCQs',
  correctAnswers: ['It is trained primarily on licensed and public-domain content'],
  score: 1,
  rationale:
    'B. It is trained primarily on licensed and public-domain content.\n\nAdobe Firefly emphasizes commercially safe content by using licensed and public-domain datasets, making it suitable for business and professional creative work.',
},
{
  question:
    'Which AI platform specializes in creating realistic talking-avatar videos for presentations, training, and education?',
  choices: ['Udio', 'Synthesia', 'Suno AI', 'Grammarly'],
  type: 'MCQs',
  correctAnswers: ['Synthesia'],
  score: 1,
  rationale:
    'B. Synthesia.\n\nSynthesia creates AI-powered talking-avatar videos that are widely used for training, educational content, business presentations, and corporate communication.',
},
{
  question:
    'Which two video tools are best known for realistic physics and motion consistency between frames?',
  choices: [
    'Synthesia and HeyGen',
    'Pika and Canva',
    'Sora and Kling AI',
    'Runway Gen-3 and ElevenLabs',
  ],
  type: 'MCQs',
  correctAnswers: ['Sora and Kling AI'],
  score: 1,
  rationale:
    'C. Sora and Kling AI.\n\nSora and Kling AI are designed to generate highly realistic videos with smooth motion, consistent objects, and natural-looking physics across frames.',
},
{
  question:
    "Which tool can translate a video into another language with the AI avatar's lips synced to the new audio?",
  choices: ['HeyGen', 'Sora', 'AIVA', 'Play.ht'],
  type: 'MCQs',
  correctAnswers: ['HeyGen'],
  score: 1,
  rationale:
    'A. HeyGen.\n\nHeyGen can translate videos into multiple languages while synchronizing the avatar\'s lip movements with the translated speech, creating natural-looking multilingual videos.',
},
{
  question:
    'Which video tool do major film studios use mainly for VFX and advanced editing?',
  choices: ['Runway Gen-3', 'ElevenLabs', 'Kling AI', 'HeyGen'],
  type: 'MCQs',
  correctAnswers: ['Runway Gen-3'],
  score: 1,
  rationale:
    'A. Runway Gen-3.\n\nRunway Gen-3 provides advanced AI tools for video generation, visual effects, and editing, making it valuable for professional creative and film production workflows.',
},
{
  question:
    'Which tools does the module highlight for text-to-video and personalized ads in marketing?',
  choices: ['Jasper', 'HubSpot Breeze', 'Canva Magic Studio', 'Synthesia / Runway'],
  type: 'MCQs',
  correctAnswers: ['Synthesia / Runway'],
  score: 1,
  rationale:
    'D. Synthesia / Runway.\n\nSynthesia and Runway are highlighted for creating AI-generated marketing videos, personalized advertisements, and other professional video content from text prompts.',
},
{
  question:
    'What is the primary purpose of the Text Normalization stage in a TTS system (e.g. converting "Dr." to "Doctor" and "2026" to "two thousand and twenty-six")?',
  choices: [
    'To generate speech waveforms directly',
    'To identify emotional tone in speech',
    'To convert abbreviations, numbers, and symbols into readable text',
    'To translate speech into another language',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To convert abbreviations, numbers, and symbols into readable text',
  ],
  score: 1,
  rationale:
    'C. To convert abbreviations, numbers, and symbols into readable text.\n\nText Normalization expands abbreviations, numbers, dates, and symbols into words so they can be pronounced correctly during speech synthesis.',
},
{
  question:
    'In a TTS system, which stage uses grammar and context to determine a word\'s correct pronunciation (e.g. deciding whether "read" is past or present tense)?',
  choices: [
    'Waveform Synthesis',
    'Linguistic Analysis',
    'Audio Compression',
    'Text Rendering',
  ],
  type: 'MCQs',
  correctAnswers: ['Linguistic Analysis'],
  score: 1,
  rationale:
    'B. Linguistic Analysis.\n\nLinguistic Analysis examines grammar and context to determine the correct pronunciation of words that have multiple possible pronunciations.',
},
{
  question:
    'Which TTS stage breaks words into their smallest sound units, e.g. turning "cat" into /k/ /ae/ /t/?',
  choices: [
    'Phoneme Conversion',
    'Prosody Modelling',
    'Waveform Synthesis',
    'Text Normalisation',
  ],
  type: 'MCQs',
  correctAnswers: ['Phoneme Conversion'],
  score: 1,
  rationale:
    'A. Phoneme Conversion.\n\nPhoneme Conversion transforms written words into phonemes, which are the smallest units of sound used to produce spoken language.',
},
{
  question:
    'Which component of a TTS system controls rhythm, stress, intonation, and speaking pace so the output doesn\'t sound robotic?',
  choices: [
    'Text Normalization Layer',
    'Audio Compression Layer',
    'Prosody Modeling Layer',
    'Tokenization Layer',
  ],
  type: 'MCQs',
  correctAnswers: ['Prosody Modeling Layer'],
  score: 1,
  rationale:
    'C. Prosody Modeling Layer.\n\nProsody Modeling controls rhythm, stress, intonation, and speaking speed to produce natural and expressive speech.',
},
{
  question:
    'Which final TTS stage uses neural vocoder models like Google\'s WaveNet to produce the actual audio waveform?',
  choices: [
    'Text Normalisation',
    'Waveform Synthesis (Vocoder)',
    'Phoneme Conversion',
    'Linguistic Analysis',
  ],
  type: 'MCQs',
  correctAnswers: ['Waveform Synthesis (Vocoder)'],
  score: 1,
  rationale:
    'B. Waveform Synthesis (Vocoder).\n\nThe vocoder converts processed speech features into the final audio waveform, producing natural-sounding speech for the listener.',
},
{
  question:
    'According to the module, which two deep learning techniques are mainly used for AI audio generation?',
  choices: [
    'Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs)',
    'HiFi-GAN and Runway',
    'WaveNet and Pika',
    'Sora and Kling',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs)',
  ],
  score: 1,
  rationale:
    'A. Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs).\n\nVAEs learn compressed representations for generating new content, while GANs use competing neural networks to produce realistic audio outputs.',
},
{
  question:
    'Which tool generates lyrics, melody, and vocal performance from a single text prompt?',
  choices: ['AIVA', 'Suno AI', 'Murf.ai', 'Synthesia'],
  type: 'MCQs',
  correctAnswers: ['Suno AI'],
  score: 1,
  rationale:
    'B. Suno AI.\n\nSuno AI generates complete songs from text prompts, including lyrics, melody, instruments, and realistic vocal performances.',
},
{
  question:
    'Voice cloning needs only a short audio sample. What major ethical risk does this create?',
  choices: [
    'Loss of video quality',
    'Deepfakes and misinformation',
    'AI hallucinating text',
    'Higher computing costs',
  ],
  type: 'MCQs',
  correctAnswers: ['Deepfakes and misinformation'],
  score: 1,
  rationale:
    'B. Deepfakes and misinformation.\n\nVoice cloning can imitate a person\'s voice with only a short audio sample, making it possible to create convincing fake recordings that spread misinformation or enable fraud.',
},
{
  question:
    'What is a key best practice when publishing AI-generated audio or video?',
  choices: [
    'Never tell the audience AI was used',
    'Let AI do 100% of the work to save time',
    'Combine AI with human creativity and review everything for accuracy',
    'Only use open-source tools',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Combine AI with human creativity and review everything for accuracy',
  ],
  score: 1,
  rationale:
    'C. Combine AI with human creativity and review everything for accuracy.\n\nHuman review helps verify accuracy, identify errors, and ensure AI-generated content is ethical, reliable, and appropriate for its intended audience.',
},
{
  question:
    'In academic research, an AI hallucination refers to:',
  choices: [
    'A temporary internet connection failure',
    'AI producing convincing but factually incorrect information, such as fabricated citations',
    'A virus affecting AI software',
    'Corrupted PDF documents',
  ],
  type: 'MCQs',
  correctAnswers: [
    'AI producing convincing but factually incorrect information, such as fabricated citations',
  ],
  score: 1,
  rationale:
    'B. AI producing convincing but factually incorrect information, such as fabricated citations.\n\nAn AI hallucination occurs when an AI generates information that appears believable but is false, inaccurate, or unsupported by reliable sources.',
},
{
  question:
    'When an AI chatbot generates a journal citation, what should a student do before using it in academic work?',
  choices: [
    'Accept it without verification',
    'Modify the author\'s name',
    'Verify the source using trusted academic databases',
    'Delete the publication year',
  ],
  type: 'MCQs',
  correctAnswers: ['Verify the source using trusted academic databases'],
  score: 1,
  rationale:
    'C. Verify the source using trusted academic databases.\n\nAI-generated citations should always be checked against trusted academic databases to confirm that the source exists and the citation details are accurate.',
},
{
  question:
    'Which AI-powered academic platform provides evidence-based research summaries and displays a Consensus Meter?',
  choices: ['Grammarly', 'Consensus', 'Midjourney', 'Runway'],
  type: 'MCQs',
  correctAnswers: ['Consensus'],
  score: 1,
  rationale:
    'B. Consensus.\n\nConsensus searches published research and provides evidence-based summaries along with a Consensus Meter that shows the level of agreement across scientific studies.',
},
{
  question:
    'Why is Google NotebookLM considered less prone to factual hallucinations than general-purpose chatbots?',
  choices: [
    'It only answers questions with fewer than 50 words',
    'It bases its responses on documents uploaded by the user',
    'It is operated entirely by human editors',
    'It has no language model',
  ],
  type: 'MCQs',
  correctAnswers: ['It bases its responses on documents uploaded by the user'],
  score: 1,
  rationale:
    'B. It bases its responses on documents uploaded by the user.\n\nNotebookLM generates responses from the documents users provide, helping reduce hallucinations by grounding its answers in those sources.',
},
{
  question:
    'Which AI application enables users to analyze datasets, generate Python code, and create charts using natural language instructions?',
  choices: ['Jasper AI', 'QuillBot', 'Julius AI', 'Canva AI'],
  type: 'MCQs',
  correctAnswers: ['Julius AI'],
  score: 1,
  rationale:
    'C. Julius AI.\n\nJulius AI allows users to analyze data, generate Python code, create charts, and answer data-related questions using natural language prompts.',
},
{
  question:
    'What is generative AI generally NOT reliable at doing during a literature review?',
  choices: [
    'Suggesting search terms',
    'Summarizing uploaded papers',
    'Judging whether a study\'s methodology was rigorous',
    'Identifying thematic connections across sources',
  ],
  type: 'MCQs',
  correctAnswers: ['Judging whether a study\'s methodology was rigorous'],
  score: 1,
  rationale:
    'C. Judging whether a study\'s methodology was rigorous.\n\nEvaluating research quality requires human critical thinking and subject expertise. AI can assist with summaries and organization but should not be relied on to judge methodological rigor.',
},
{
  question:
    'Which tool is specifically recommended for literature discovery and systematic reviews?',
  choices: ['Julius AI', 'Elicit', 'Canva', 'NotebookLM'],
  type: 'MCQs',
  correctAnswers: ['Elicit'],
  score: 1,
  rationale:
    'B. Elicit.\n\nElicit helps researchers discover relevant academic papers, summarize findings, and support literature reviews using evidence from published research.',
},
{
  question:
    'What is the purpose of a "Devil\'s Advocate" prompt in research?',
  choices: [
    'Importing ideas from adjacent fields',
    'Identifying gaps in the literature',
    'Challenging your assumptions before you commit to a research direction',
    'Generating practical constraints for a project',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Challenging your assumptions before you commit to a research direction',
  ],
  score: 1,
  rationale:
    'C. Challenging your assumptions before you commit to a research direction.\n\nA Devil\'s Advocate prompt encourages the AI to question your ideas, identify weaknesses, and present alternative viewpoints before you finalize your conclusions.',
},
{
  question:
    'Using AI to draft an outline before writing your own research report is considered:',
  choices: [
    'Academic misconduct',
    'Responsible use of AI assistance',
    'Data fabrication',
    'Plagiarism',
  ],
  type: 'MCQs',
  correctAnswers: ['Responsible use of AI assistance'],
  score: 1,
  rationale:
    'B. Responsible use of AI assistance.\n\nUsing AI to organize ideas or create an outline supports the writing process while leaving the analysis, interpretation, and final work to the student.',
},
{
  question:
    'Which of the following is an unethical use of AI in academic work?',
  choices: [
    'Verifying facts against original sources',
    'Disclosing that AI was used',
    'Using AI to support your own learning',
    'Using AI to bypass the learning process or submitting its output as your own work',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Using AI to bypass the learning process or submitting its output as your own work',
  ],
  score: 1,
  rationale:
    'D. Using AI to bypass the learning process or submitting its output as your own work.\n\nAI should support learning, not replace it. Presenting AI-generated work as your own without meaningful contribution undermines academic integrity.',
},
{
  question:
    'How does AI primarily help with data analysis?',
  choices: [
    'By inventing new statistical formulas',
    'By automatically collecting primary survey data',
    'By providing a natural-language interface that removes the need to code',
    'By guaranteeing error-free predictions',
  ],
  type: 'MCQs',
  correctAnswers: [
    'By providing a natural-language interface that removes the need to code',
  ],
  score: 1,
  rationale:
    'C. By providing a natural-language interface that removes the need to code.\n\nAI data analysis tools allow users to analyze datasets, generate charts, and perform statistical tasks using plain language instead of writing code manually.',
},
{
  question:
    'In the standard academic report structure, what section comes right after "Methodology"?',
  choices: [
    'Introduction',
    'Objectives',
    'Findings',
    'Recommendations',
  ],
  type: 'MCQs',
  correctAnswers: ['Findings'],
  score: 1,
  rationale:
    'C. Findings.\n\nThe Findings section presents the results obtained from the study after the methodology has been applied, before discussing conclusions or recommendations.',
},
{
  question:
    'One major advantage of Generative AI in modern digital marketing is its ability to provide:',
  choices: [
    'Manual spreadsheet calculations',
    'Personalized customer experiences at scale',
    'Hardware maintenance services',
    'Database encryption',
  ],
  type: 'MCQs',
  correctAnswers: ['Personalized customer experiences at scale'],
  score: 1,
  rationale:
    'B. Personalized customer experiences at scale.\n\nGenerative AI can tailor content, recommendations, and customer interactions to individual users while serving large numbers of people efficiently.',
},
{
  question:
    'Research suggests that Generative AI can help marketing professionals save approximately:',
  choices: [
    '30 minutes each month',
    '1 hour every day',
    '5 hours per week',
    '20 hours per month',
  ],
  type: 'MCQs',
  correctAnswers: ['5 hours per week'],
  score: 1,
  rationale:
    'C. 5 hours per week.\n\nStudies highlighted in the module indicate that Generative AI can automate repetitive marketing tasks, allowing professionals to save about five hours each week.',
},
{
  question:
    'How does the module define personalization in marketing?',
  choices: [
    'Creating generic content for a global audience',
    'Delivering the right message, product, or experience to the right person at the right time',
    'Dividing customers into broad groups like age bracket and income range',
    'Reducing customer lifetime value',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Delivering the right message, product, or experience to the right person at the right time',
  ],
  score: 1,
  rationale:
    'B. Delivering the right message, product, or experience to the right person at the right time.\n\nPersonalization uses customer data and preferences to deliver relevant content, products, or experiences that better meet individual needs.',
},
{
  question:
    'How does Generative AI support sentiment analysis in marketing?',
  choices: [
    'By analyzing customer feedback and social media interactions to gauge public perception',
    'By automating video production and captions',
    'By generating unstructured data from scratch',
    'By limiting multimedia marketing efforts',
  ],
  type: 'MCQs',
  correctAnswers: [
    'By analyzing customer feedback and social media interactions to gauge public perception',
  ],
  score: 1,
  rationale:
    'A. By analyzing customer feedback and social media interactions to gauge public perception.\n\nGenerative AI analyzes customer reviews, comments, and social media conversations to identify opinions, emotions, and overall public sentiment toward a brand or product.',
},

{
  question:
    'What is the ultimate goal of content marketing, as defined in the module?',
  choices: [
    'Paying outright for customer attention',
    'Driving profitable customer action by earning attention',
    'Replacing human content creators entirely',
    'Creating unstructured data for predictive analytics',
  ],
  type: 'MCQs',
  correctAnswers: ['Driving profitable customer action by earning attention'],
  score: 1,
  rationale:
    'B. Driving profitable customer action by earning attention.\n\nContent marketing focuses on creating valuable and relevant content that attracts, engages, and encourages customers to take profitable actions.',
},
{
  question:
    'Which of these is listed as a business you could start using Generative AI?',
  choices: [
    'Manual data entry and filing',
    'Traditional billboard advertising agency',
    'Faceless YouTube Channel Management',
    'Physical product manufacturing',
  ],
  type: 'MCQs',
  correctAnswers: ['Faceless YouTube Channel Management'],
  score: 1,
  rationale:
    'C. Faceless YouTube Channel Management.\n\nGenerative AI can help create scripts, voice-overs, images, videos, and thumbnails, making faceless YouTube channel management a practical AI-powered business.',
},
{
  question:
    'What real-world example illustrates using AI to keep brand design consistent globally?',
  choices: [
    "Amazon's recommendation engine",
    "Spotify's Discover Weekly",
    'Project Fizzion (Coca-Cola + Adobe Firefly)',
    'Meta Ads Manager',
  ],
  type: 'MCQs',
  correctAnswers: ['Project Fizzion (Coca-Cola + Adobe Firefly)'],
  score: 1,
  rationale:
    'C. Project Fizzion (Coca-Cola + Adobe Firefly).\n\nProject Fizzion demonstrates how Generative AI can produce marketing assets that maintain a consistent brand identity across different campaigns and global markets.',
},
{
  question:
    'What is identified as a major risk of using Generative AI in business?',
  choices: [
    'Increased time spent on content tasks',
    'Over-reliance on AI, leading to a loss of the human touch',
    'Decreased ability to scale campaigns',
    'Inability to track real-time analytics',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Over-reliance on AI, leading to a loss of the human touch',
  ],
  score: 1,
  rationale:
    'B. Over-reliance on AI, leading to a loss of the human touch.\n\nRelying too heavily on AI can reduce creativity, authenticity, and human judgment, making content feel less personal and trustworthy.',
},
{
  question:
    "Per the module's 2026 best practices, how should strategy and AI execution be ordered?",
  choices: [
    'Focus on strategy first, then use AI for execution',
    'Let AI determine both strategy and execution',
    'Execute campaigns first, then have AI build a strategy retroactively',
    'Use AI only for brainstorming, never for execution',
  ],
  type: 'MCQs',
  correctAnswers: ['Focus on strategy first, then use AI for execution'],
  score: 1,
  rationale:
    'A. Focus on strategy first, then use AI for execution.\n\nA clear strategy should guide every campaign before AI is used to create content or automate tasks. AI is most effective when it supports a well-defined business objective.',
},
{
  question:
    'Why does the module emphasize ethics as an essential part of using Generative AI?',
  choices: [
    'Because AI systems are slow and difficult to use',
    'Because AI can create harmful content if used irresponsibly',
    'Because AI only works in academic environments',
    'Because ethics improves internet speed',
  ],
  type: 'MCQs',
  correctAnswers: ['Because AI can create harmful content if used irresponsibly'],
  score: 1,
  rationale:
    'B. Because AI can create harmful content if used irresponsibly.\n\nGenerative AI can quickly produce realistic text, images, audio, and videos. Without responsible use, it can spread misinformation, reinforce bias, or misuse creative works.',
},
{
  question:
    'According to the module, which of the following is an example of cultural bias in AI?',
  choices: [
    'An AI model generating faster responses',
    'An AI system ignoring Nigerian or African contexts when producing answers',
    'An AI correcting grammar automatically',
    'An AI translating text into multiple languages',
  ],
  type: 'MCQs',
  correctAnswers: [
    'An AI system ignoring Nigerian or African contexts when producing answers',
  ],
  score: 1,
  rationale:
    'B. An AI system ignoring Nigerian or African contexts when producing answers.\n\nCultural bias occurs when AI reflects limited cultural perspectives and fails to represent people, traditions, or contexts from different regions fairly.',
},
{
  question:
    'Which practice is most effective for reducing bias when using Generative AI?',
  choices: [
    'Accept every AI response without review',
    'Use diverse prompts and review the output for fairness',
    'Always generate the shortest possible prompt',
    'Only use AI models trained before 2024',
  ],
  type: 'MCQs',
  correctAnswers: ['Use diverse prompts and review the output for fairness'],
  score: 1,
  rationale:
    'B. Use diverse prompts and review the output for fairness.\n\nWriting inclusive prompts, requesting multiple perspectives, and reviewing AI-generated content help reduce biased or stereotypical outputs.',
},
{
  question:
    'Why are deepfakes considered a serious ethical concern?',
  choices: [
    'They reduce image quality',
    'They can be used to deceive people through realistic fake media',
    'They permanently damage computer hardware',
    'They prevent AI from learning new information',
  ],
  type: 'MCQs',
  correctAnswers: [
    'They can be used to deceive people through realistic fake media',
  ],
  score: 1,
  rationale:
    'B. They can be used to deceive people through realistic fake media.\n\nDeepfakes can create convincing fake videos or audio that damage reputations, spread misinformation, influence public opinion, or enable financial scams.',
},
{
  question:
    'Which principle of responsible AI requires users to openly acknowledge when AI has assisted in creating content?',
  choices: [
    'Privacy',
    'Transparency',
    'Automation',
    'Scalability',
  ],
  type: 'MCQs',
  correctAnswers: ['Transparency'],
  score: 1,
  rationale:
    'B. Transparency.\n\nTransparency means being honest about how AI was used so others understand the origin of the work and can evaluate it appropriately.',
},
{
  question:
    'Which principle ensures that humans remain responsible for important decisions even when AI is involved?',
  choices: [
    'Automation',
    'Human oversight',
    'Compression',
    'Tokenization',
  ],
  type: 'MCQs',
  correctAnswers: ['Human oversight'],
  score: 1,
  rationale:
    'B. Human oversight.\n\nHuman oversight ensures that people review AI-generated outputs and remain responsible for important decisions instead of relying entirely on AI.',
},
{
  question:
    'Which of the following is NOT listed as a principle of responsible AI in the module?',
  choices: [
    'Fairness',
    'Privacy',
    'Accountability',
    'Maximum automation',
  ],
  type: 'MCQs',
  correctAnswers: ['Maximum automation'],
  score: 1,
  rationale:
    'D. Maximum automation.\n\nThe module identifies Transparency, Fairness, Accountability, Privacy, and Human Oversight as responsible AI principles. Maximum automation is not one of them.',
},
{
  question:
    "A student uses Gemini to generate initial ideas, rewrites the content in their own words, verifies the facts, and acknowledges the AI's assistance. Which responsible AI principles does this demonstrate?",
  choices: [
    'Transparency and accountability',
    'Automation and scalability',
    'Tokenization and prompting',
    'Diffusion and synthesis',
  ],
  type: 'MCQs',
  correctAnswers: ['Transparency and accountability'],
  score: 1,
  rationale:
    'A. Transparency and accountability.\n\nDisclosing AI assistance demonstrates transparency, while verifying, editing, and taking responsibility for the final work demonstrates accountability.',
},
{
  question:
    'According to the module, what is the primary role of AI during data analysis?',
  choices: [
    'Replacing human decision-making completely',
    'Finding patterns and generating insights from data more efficiently',
    'Collecting all primary data automatically',
    'Guaranteeing that every conclusion is correct',
  ],
  type: 'MCQs',
  correctAnswers: ['Finding patterns and generating insights from data more efficiently'],
  score: 1,
  rationale:
    'B. Finding patterns and generating insights from data more efficiently.\n\nAI analyzes large datasets to identify patterns, trends, and relationships quickly, helping users make informed decisions while still requiring human interpretation.',
},
{
  question:
    'After a dataset has been collected and cleaned, what is the next major step in the AI-assisted data analysis workflow presented in the module?',
  choices: [
    'Deploy the AI model',
    'Analyze the data for patterns and trends',
    'Publish the final report',
    'Delete duplicate records permanently',
  ],
  type: 'MCQs',
  correctAnswers: ['Analyze the data for patterns and trends'],
  score: 1,
  rationale:
    'B. Analyze the data for patterns and trends.\n\nOnce data has been prepared, AI is used to discover meaningful patterns, relationships, and trends that can support decision-making.',
},
{
  question:
    'Why does the module recommend visualizing AI-generated results after analysis?',
  choices: [
    'To reduce file size',
    'To make patterns and insights easier to understand',
    'To improve internet speed',
    'To increase the number of data records',
  ],
  type: 'MCQs',
  correctAnswers: ['To make patterns and insights easier to understand'],
  score: 1,
  rationale:
    'B. To make patterns and insights easier to understand.\n\nCharts, graphs, and dashboards help users quickly identify trends, compare values, and communicate findings more effectively.',
},
{
  question:
    'A sales manager asks an AI tool to identify which products consistently sell together so they can improve promotions. This is an example of AI helping to:',
  choices: [
    'Generate synthetic data',
    'Discover patterns within data',
    'Encrypt customer information',
    'Replace business strategy',
  ],
  type: 'MCQs',
  correctAnswers: ['Discover patterns within data'],
  score: 1,
  rationale:
    'B. Discover patterns within data.\n\nOne of AI\'s strengths is recognizing hidden relationships and patterns that may not be obvious through manual analysis.',
},
{
  question:
    'Which AI tool highlighted in the module allows users to analyze datasets, write Python code, and generate charts using natural language?',
  choices: [
    'Midjourney',
    'Julius AI',
    'Canva AI',
    'Firefly',
  ],
  type: 'MCQs',
  correctAnswers: ['Julius AI'],
  score: 1,
  rationale:
    'B. Julius AI.\n\nJulius AI enables users to upload datasets, ask questions in natural language, generate Python code, and create visualizations without extensive programming knowledge.',
},
{
  question:
    'What is the main advantage of using natural-language prompts for AI data analysis?',
  choices: [
    'They eliminate the need for any data',
    'They allow users to analyze data without writing complex code',
    'They guarantee perfect statistical results',
    'They automatically publish research papers',
  ],
  type: 'MCQs',
  correctAnswers: ['They allow users to analyze data without writing complex code'],
  score: 1,
  rationale:
    'B. They allow users to analyze data without writing complex code.\n\nNatural-language interfaces make data analysis more accessible by allowing users to ask questions and generate insights without advanced programming skills.',
},
{
  question:
    'According to the module, why should AI-generated insights always be reviewed by humans?',
  choices: [
    'AI cannot display charts',
    'AI may produce incorrect interpretations or overlook important context',
    'AI only works with spreadsheets',
    'AI cannot process numerical data',
  ],
  type: 'MCQs',
  correctAnswers: ['AI may produce incorrect interpretations or overlook important context'],
  score: 1,
  rationale:
    'B. AI may produce incorrect interpretations or overlook important context.\n\nAI can identify patterns, but human expertise is still needed to verify conclusions, interpret results, and make sound decisions.',
},
{
  question:
    'Which sequence best matches the AI-assisted data analysis process presented in the module?',
  choices: [
    'Visualize → Collect → Analyze → Decide',
    'Collect → Prepare → Analyze → Visualize → Decide',
    'Analyze → Collect → Clean → Publish',
    'Prepare → Publish → Analyze → Visualize',
  ],
  type: 'MCQs',
  correctAnswers: ['Collect → Prepare → Analyze → Visualize → Decide'],
  score: 1,
  rationale:
    'B. Collect → Prepare → Analyze → Visualize → Decide.\n\nThe module presents AI-assisted data analysis as a process that begins with collecting and preparing data before analysis, visualization, and decision-making.',
},
{
  question:
    'Which AI-powered business intelligence tool mentioned in the module is integrated into Microsoft Power BI?',
  choices: [
    'NotebookLM',
    'Power BI Copilot',
    'Consensus',
    'QuillBot',
  ],
  type: 'MCQs',
  correctAnswers: ['Power BI Copilot'],
  score: 1,
  rationale:
    'B. Power BI Copilot.\n\nPower BI Copilot uses Generative AI to help users explore datasets, generate reports, and explain business insights using natural language.',
},
{
  question:
    'Which statement best summarizes the module\'s view of AI in data analysis?',
  choices: [
    'AI should replace analysts completely',
    'AI supports faster analysis, while humans remain responsible for interpreting results and making decisions',
    'AI eliminates the need for data cleaning',
    'AI guarantees unbiased business decisions',
  ],
  type: 'MCQs',
  correctAnswers: [
    'AI supports faster analysis, while humans remain responsible for interpreting results and making decisions',
  ],
  score: 1,
  rationale:
    'B. AI supports faster analysis, while humans remain responsible for interpreting results and making decisions.\n\nThe module emphasizes that AI is a decision-support tool. Human judgment remains essential for validating insights, understanding context, and making final decisions.',
},
    {
        
  question:
    'Instead of processing complete words, LLMs primarily analyze smaller text units known as:',
  choices: ['Phonemes', 'Tokens', 'Pixels', 'Layers'],
  type: 'MCQs',
  correctAnswers: ['Tokens'],
  score: 1,
  rationale:
    'B. Tokens.\n\nLLMs break text into tokens, which may represent whole words, parts of words, or punctuation. This allows them to efficiently process different languages and unfamiliar words.',
},
{
  question: 'The main function of a Large Language Model is to:',
  choices: [
    'Store every webpage on the internet',
    'Predict the next most likely token in a sequence',
    'Translate every language perfectly',
    'Memorize complete books',
  ],
  type: 'MCQs',
  correctAnswers: ['Predict the next most likely token in a sequence'],
  score: 1,
  rationale:
    'B. Predict the next most likely token in a sequence.\n\nLarge Language Models generate text by predicting the most likely next token based on the context provided. Repeating this process one token at a time produces coherent responses.',
},
{
  question:
    'Which learning process enables a neural network to improve by adjusting its internal weights after making mistakes?',
  choices: [
    'Tokenization',
    'Normalization',
    'Decoding',
    'Backpropagation',
  ],
  type: 'MCQs',
  correctAnswers: ['Backpropagation'],
  score: 1,
  rationale:
    'D. Backpropagation.\n\nBackpropagation measures the difference between the model’s prediction and the correct output, then adjusts the network’s internal weights to reduce future errors. This process helps the model learn and improve over time.',
},
{
  question:
    'Which layer serves as the underlying AI model that powers applications like chatbots before any user interface is added?',
  choices: [
    'Foundation Model Layer',
    'Browser Layer',
    'Operating System Layer',
    'Database Layer',
  ],
  type: 'MCQs',
  correctAnswers: ['Foundation Model Layer'],
  score: 1,
  rationale:
    'A. Foundation Model Layer.\n\nThe Foundation Model Layer contains the pretrained AI model responsible for understanding prompts and generating responses. User-facing applications such as chatbots are built on top of this layer.',
},
{
  question:
    'During AI text generation, which stage converts probability calculations into readable human language?',
  choices: [
    'Context Retrieval',
    'Input Analysis',
    'Decoding',
    'Training',
  ],
  type: 'MCQs',
  correctAnswers: ['Decoding'],
  score: 1,
  rationale:
    "C. Decoding.\n\nDecoding converts the selected tokens into fluent, readable text. It is the final stage where the model's predictions become a response users can understand.",
},
{
  question:
    'What is the first micro-step performed by an AI model after receiving a prompt?',
  choices: [
    'Decoding',
    'Probabilistic selection',
    'Input analysis',
    'Context retrieval',
  ],
  type: 'MCQs',
  correctAnswers: ['Input analysis'],
  score: 1,
  rationale:
    "C. Input analysis.\n\nInput analysis is the first step after receiving a prompt. During this stage, the AI identifies the user's request, important keywords, and the context needed to generate an appropriate response.",
},
{
  question:
    'During which micro-step does the AI retrieve relevant information from its learned knowledge?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Decoding',
    'Fine-tuning',
  ],
  type: 'MCQs',
  correctAnswers: ['Context retrieval'],
  score: 1,
  rationale:
    'B. Context retrieval.\n\nContext retrieval is the stage where the AI identifies the relevant information needed to answer the prompt before predicting the next tokens.',
},
{
  question:
    'Which micro-step involves predicting the most likely next word or token?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Probabilistic selection',
    'Compression',
  ],
  type: 'MCQs',
  correctAnswers: ['Probabilistic selection'],
  score: 1,
  rationale:
    'C. Probabilistic selection.\n\nProbabilistic selection chooses the next token based on the highest probability calculated from the available context. Repeating this process allows the AI to generate complete responses.',
},
{
  question:
    'Which of the following is NOT one of the four micro-steps an AI performs when processing a prompt?',
  choices: [
    'Input analysis',
    'Context retrieval',
    'Software installation',
    'Decoding',
  ],
  type: 'MCQs',
  correctAnswers: ['Software installation'],
  score: 1,
  rationale:
    'C. Software installation.\n\nSoftware installation is unrelated to how an AI processes prompts. The four processing steps are input analysis, context retrieval, probabilistic selection, and decoding.',
},
{
  question:
    "Why is Meta's Llama model popular among researchers and software developers?",
  choices: [
    'It only runs on cloud servers',
    'It is designed exclusively for spreadsheets',
    'It is open-source and can be deployed locally',
    'It requires Google Search to operate',
  ],
  type: 'MCQs',
  correctAnswers: ['It is open-source and can be deployed locally'],
  score: 1,
  rationale:
    "C. It is open-source and can be deployed locally.\n\nMeta's Llama models can be downloaded, customized, and deployed on local hardware, giving researchers and developers greater flexibility for experimentation and application development.",
},

{
  question: 'Who is the creator of Llama?',
  choices: ['Google', 'OpenAI', 'Meta', 'Microsoft'],
  type: 'MCQs',
  correctAnswers: ['Meta'],
  score: 1,
  rationale:
    'C. Meta.\n\nLlama is a family of Large Language Models developed by Meta for research and AI application development.',
},
{
  question: 'What is the full meaning of "Llama" in AI?',
  choices: [
    'Large Language Model Meta AI',
    'Large Learning Machine Architecture',
    'Logical Language Management AI',
    'Linked Learning Model Application',
  ],
  type: 'MCQs',
  correctAnswers: ['Large Language Model Meta AI'],
  score: 1,
  rationale:
    'A. Large Language Model Meta AI.\n\nLlama stands for Large Language Model Meta AI, reflecting Meta’s family of Large Language Models designed for natural language tasks.',
},
{
  question: 'What does the acronym GPT stand for?',
  choices: [
    'General Processing Technology',
    'Generative Pre-trained Transformer',
    'Global Prompt Technology',
    'Graph Processing Tool',
  ],
  type: 'MCQs',
  correctAnswers: ['Generative Pre-trained Transformer'],
  score: 1,
  rationale:
    'B. Generative Pre-trained Transformer.\n\nGPT is trained on large amounts of text before deployment and uses the Transformer architecture to generate human-like responses.',
},
{
  question: 'Who created GPT?',
  choices: ['Google', 'Meta', 'OpenAI', 'Microsoft'],
  type: 'MCQs',
  correctAnswers: ['OpenAI'],
  score: 1,
  rationale:
    'C. OpenAI.\n\nGPT was developed by OpenAI and is the foundation for AI systems such as ChatGPT.',
},
{
  question: 'Which strength is most associated with GPT?',
  choices: [
    'Real-time web search',
    'Image editing',
    'Reasoning and creativity',
    'Video generation only',
  ],
  type: 'MCQs',
  correctAnswers: ['Reasoning and creativity'],
  score: 1,
  rationale:
    'C. Reasoning and creativity.\n\nGPT is widely recognized for generating detailed text, solving problems, brainstorming ideas, and assisting with creative and analytical tasks.',
},
{
  question: 'Why is GPT often called a "Jack of all trades"?',
  choices: [
    'It only answers programming questions',
    'It was pre-trained on a massive amount of internet text',
    'It only works with Google Search',
    'It is open source',
  ],
  type: 'MCQs',
  correctAnswers: ['It was pre-trained on a massive amount of internet text'],
  score: 1,
  rationale:
    'B. It was pre-trained on a massive amount of internet text.\n\nTraining on diverse text enables GPT to perform a wide range of tasks, including writing, coding, summarization, translation, and question answering.',
},
{
  question: 'Gemini was formerly known as:',
  choices: ['Claude', 'Bard (PaLM)', 'Copilot', 'Jasper'],
  type: 'MCQs',
  correctAnswers: ['Bard (PaLM)'],
  score: 1,
  rationale:
    'B. Bard (PaLM).\n\nGoogle rebranded its Bard AI assistant as Gemini while expanding its capabilities with more advanced AI models.',
},
{
  question: 'Which feature is Gemini particularly known for?',
  choices: [
    'Running completely offline',
    'Real-time integration with web information',
    'Creating operating systems',
    'Building databases',
  ],
  type: 'MCQs',
  correctAnswers: ['Real-time integration with web information'],
  score: 1,
  rationale:
    "B. Real-time integration with web information.\n\nGemini can access current web information through Google's ecosystem, making it useful for answering questions about recent events and up-to-date topics.",
},
{
  question: 'What is Prompt Engineering?',
  choices: [
    'The art and science of crafting prompts to guide Generative AI',
    'Training AI models from scratch',
    'Building computer hardware',
    'Writing programming languages',
  ],
  type: 'MCQs',
  correctAnswers: ['The art and science of crafting prompts to guide Generative AI'],
  score: 1,
  rationale:
    "A. The art and science of crafting prompts to guide Generative AI.\n\nPrompt Engineering involves designing clear and effective prompts that help AI generate accurate, relevant, and useful responses.",
},
{
  question:
    'Which component of a prompt tells the AI exactly what to do?',
  choices: ['Context', 'Constraints', 'Task', 'Format'],
  type: 'MCQs',
  correctAnswers: ['Task'],
  score: 1,
  rationale:
    'C. Task.\n\nThe task clearly states what the AI should accomplish, such as summarizing, explaining, translating, or generating content.',
},
{
  question:
    'Which prompt component provides background information?',
  choices: ['Task', 'Context', 'Format', 'Examples'],
  type: 'MCQs',
  correctAnswers: ['Context'],
  score: 1,
  rationale:
    'B. Context.\n\nContext provides background information that helps the AI better understand the situation and generate a more relevant response.',
},
{
  question:
    'What is the purpose of the Format component in a prompt?',
  choices: [
    'To specify the output structure or tone',
    'To connect to the internet',
    'To limit the AI\'s memory',
    'To improve computer performance',
  ],
  type: 'MCQs',
  correctAnswers: ['To specify the output structure or tone'],
  score: 1,
  rationale:
    'A. To specify the output structure or tone.\n\nThe format tells the AI how the response should be presented, such as a table, bullet points, essay, email, or a specific writing style.',
},
{
  question:
    'What is the purpose of Constraints in a prompt?',
  choices: [
    'To provide examples',
    'To place limits on the response',
    'To describe the audience',
    'To identify the AI model',
  ],
  type: 'MCQs',
  correctAnswers: ['To place limits on the response'],
  score: 1,
  rationale:
    'B. To place limits on the response.\n\nConstraints define boundaries such as word count, tone, style, or content requirements, helping the AI produce responses that meet specific expectations.',
},
{
  question:
    '"What is photosynthesis? Explain simply." This is an example of which prompt type?',
  choices: [
    'Question-Answer Prompt',
    'Comparison Prompt',
    'Creative Prompt',
    'Role-Based Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Question-Answer Prompt'],
  score: 1,
  rationale:
    'A. Question-Answer Prompt.\n\nA question-answer prompt asks the AI to explain or provide information about a specific topic by directly answering a question.',
},
{
  question:
    '"List the steps to brush your teeth properly." This prompt belongs to which category?',
  choices: [
    'Creative Prompt',
    'Step-by-Step Prompt',
    'Comparison Prompt',
    'Role-Based Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Step-by-Step Prompt'],
  score: 1,
  rationale:
    'B. Step-by-Step Prompt.\n\nA step-by-step prompt instructs the AI to present information as a sequence of ordered actions or procedures.',
},
{
  question:
    '"Compare WhatsApp and Telegram in a table." This is an example of which prompt type?',
  choices: [
    'Comparison Prompt',
    'Creative Prompt',
    'Instructional Prompt',
    'Question-Answer Prompt',
  ],
  type: 'MCQs',
  correctAnswers: ['Comparison Prompt'],
  score: 1,
  rationale:
    'A. Comparison Prompt.\n\nA comparison prompt asks the AI to identify similarities and differences between two or more items, often using a table for clarity.',
},
{
  question:
    'Which category of AI tools is designed to generate original content from scratch?',
  choices: [
    'Editing & Paraphrasing Tools',
    'Collaboration & Productivity Tools',
    'Content Creation Tools',
    'Security Tools',
  ],
  type: 'MCQs',
  correctAnswers: ['Content Creation Tools'],
  score: 1,
  rationale:
    'C. Content Creation Tools.\n\nContent creation tools generate original text, images, audio, or other creative content from user prompts instead of simply editing existing content.',
},
{
  question:
    'Which of the following is a Content Creation Tool?',
  choices: ['Jasper AI', 'Grammarly', 'QuillBot', 'Microsoft Word'],
  type: 'MCQs',
  correctAnswers: ['Jasper AI'],
  score: 1,
  rationale:
    'A. Jasper AI.\n\nJasper AI is a content creation tool designed to generate original content such as blog posts, marketing copy, emails, and social media content from prompts.',
},
{
  question:
    'Which task is best suited for Content Creation Tools?',
  choices: [
    'Grammar correction',
    'Writing blog posts',
    'Virus scanning',
    'File compression',
  ],
  type: 'MCQs',
  correctAnswers: ['Writing blog posts'],
  score: 1,
  rationale:
    'B. Writing blog posts.\n\nContent Creation Tools are designed to generate original content such as blog posts, articles, emails, and marketing copy from user prompts.',
},
{
  question:
    'What is the primary purpose of Editing & Paraphrasing Tools?',
  choices: [
    'Generate images',
    'Improve, rewrite, or correct text',
    'Create databases',
    'Design websites',
  ],
  type: 'MCQs',
  correctAnswers: ['Improve, rewrite, or correct text'],
  score: 1,
  rationale:
    'B. Improve, rewrite, or correct text.\n\nEditing and paraphrasing tools refine existing text by correcting grammar, improving clarity, rewriting sentences, and preserving the original meaning.',
},
{
  question:
    'Which pair consists entirely of Editing & Paraphrasing Tools?',
  choices: [
    'Jasper AI and Writesonic',
    'Grammarly and QuillBot',
    'Notion AI and Copilot',
    'Gemini and GPT',
  ],
  type: 'MCQs',
  correctAnswers: ['Grammarly and QuillBot'],
  score: 1,
  rationale:
    'B. Grammarly and QuillBot.\n\nGrammarly and QuillBot are designed to improve existing text through grammar checking, rewriting, paraphrasing, and clarity enhancement.',
},
{
  question:
    'A student wants to rewrite an essay to make it clearer without changing its meaning. Which type of AI tool is the best choice?',
  choices: [
    'Content Creation Tool',
    'Editing & Paraphrasing Tool',
    'Collaboration & Productivity Tool',
    'Image Generation Tool',
  ],
  type: 'MCQs',
  correctAnswers: ['Editing & Paraphrasing Tool'],
  score: 1,
  rationale:
    'B. Editing & Paraphrasing Tool.\n\nEditing and paraphrasing tools improve readability while preserving the original meaning, making them ideal for refining essays and other written work.',
},
{
  question:
    'Collaboration & Productivity Tools are mainly designed to:',
  choices: [
    'Help multiple people work together on content',
    'Replace programmers',
    'Train AI models',
    'Generate videos only',
  ],
  type: 'MCQs',
  correctAnswers: ['Help multiple people work together on content'],
  score: 1,
  rationale:
    'A. Help multiple people work together on content.\n\nCollaboration and productivity tools support teamwork by assisting with writing, organizing information, sharing ideas, and managing tasks more efficiently.',
},
{
  question:
    'Which of the following is a Collaboration & Productivity Tool?',
  choices: ['Writesonic', 'Notion AI', 'QuillBot', 'Jasper AI'],
  type: 'MCQs',
  correctAnswers: ['Notion AI'],
  score: 1,
  rationale:
    'B. Notion AI.\n\nNotion AI helps users organize notes, summarize information, generate content, and collaborate within a shared workspace.',
},
{
  question:
    'GitHub Copilot is best described as a:',
  choices: [
    'Citation manager',
    'Programming assistant powered by AI',
    'Grammar checker',
    'Search engine',
  ],
  type: 'MCQs',
  correctAnswers: ['Programming assistant powered by AI'],
  score: 1,
  rationale:
    'B. Programming assistant powered by AI.\n\nGitHub Copilot helps developers write code by suggesting functions, completing code, and generating programming solutions based on context.',
},
{
  question:
    'Rewriting a technical research article into language suitable for primary school pupils is an example of:',
  choices: [
    'Tokenization',
    'Style Transfer',
    'Extractive Summarization',
    'Data Cleaning',
  ],
  type: 'MCQs',
  correctAnswers: ['Style Transfer'],
  score: 1,
  rationale:
    'B. Style Transfer.\n\nStyle transfer changes the tone, complexity, or writing style of a text while preserving its original meaning. In this case, the content is rewritten in simpler language for a younger audience.',
},
{
  question:
    'What distinguishes abstractive summarization from extractive summarization?',
  choices: [
    'It only summarizes images',
    'It copies important sentences exactly',
    'It rewrites ideas using new wording while preserving meaning',
    'It only works with PDFs',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It rewrites ideas using new wording while preserving meaning',
  ],
  score: 1,
  rationale:
    'C. It rewrites ideas using new wording while preserving meaning.\n\nAbstractive summarization creates a concise summary using new sentences, while preserving the original meaning instead of copying text directly.',
}

  ]
}