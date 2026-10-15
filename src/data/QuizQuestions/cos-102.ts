import { Topic } from '.'

export const cos102: Topic = {
  topic: 'COS 102 - Problem Solving',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    
    {
  question:
    'What is the primary purpose of an algorithm when solving a problem?',
  choices: [
    'To write program code directly',
    'To provide a clear step-by-step procedure for solving a problem',
    'To replace testing completely',
    'To design the user interface',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To provide a clear step-by-step procedure for solving a problem',
  ],
  score: 1,
  rationale:
    'B. To provide a clear step-by-step procedure for solving a problem.\n\nAn algorithm is a sequence of well-defined steps used to solve a problem or accomplish a task before implementation begins.',
},
{
  question:
    'Which characteristic is most important for every step in an algorithm?',
  choices: [
    'It should allow multiple interpretations.',
    'It should be clear and unambiguous.',
    'It should contain programming syntax.',
    'It should always be written in English.',
  ],
  type: 'MCQs',
  correctAnswers: ['It should be clear and unambiguous.'],
  score: 1,
  rationale:
    'B. It should be clear and unambiguous.\n\nEach step of an algorithm should have only one meaning so that anyone following it will reach the same result.',
},
{
  question:
    'Why is pseudocode commonly used before writing program code?',
  choices: [
    'It allows programs to run without compilation.',
    'It helps developers plan program logic without worrying about programming language syntax.',
    'It automatically converts into machine code.',
    'It replaces flowcharts completely.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It helps developers plan program logic without worrying about programming language syntax.',
  ],
  score: 1,
  rationale:
    'B. It helps developers plan program logic without worrying about programming language syntax.\n\nPseudocode focuses on the logic of a solution, making it easier to understand and later translate into any programming language.',
},
{
  question: 'Who created Python, and in what year was it first released?',
  choices: [
    'Guido van Rossum, 1991',
    'Dennis Ritchie, 1972',
    'James Gosling, 1995',
    'Bjarne Stroustrup, 1985',
  ],
  type: 'MCQs',
  correctAnswers: ['Guido van Rossum, 1991'],
  score: 1,
  rationale:
    'A. Guido van Rossum, 1991.\n\nPython was created by Guido van Rossum and was first released in 1991. It was designed to emphasize readability and simplicity.',
},
{
  question: 'What does it mean that Python is a dynamically typed language?',
  choices: [
    "You must declare a variable's type before using it.",
    "Python automatically determines a variable's type without it being declared.",
    'Python code cannot run on multiple operating systems.',
    "A variable's type can never change once set.",
  ],
  type: 'MCQs',
  correctAnswers: [
    "Python automatically determines a variable's type without it being declared.",
  ],
  score: 1,
  rationale:
    "B. Python automatically determines a variable's type without it being declared.\n\nPython assigns a data type automatically when a value is stored in a variable, so programmers do not need to declare the type explicitly.",
},
{
  question:
    'What does Python use to define blocks of code instead of curly braces or semicolons?',
  choices: [
    'Parentheses ( )',
    'Whitespace indentation',
    'Square brackets [ ]',
    'Double colons (::)',
  ],
  type: 'MCQs',
  correctAnswers: ['Whitespace indentation'],
  score: 1,
  rationale:
    'B. Whitespace indentation.\n\nPython uses indentation to group statements into blocks, making the program structure clear and easy to read.',
},
{
  question:
    'Which of the following correctly creates a multi-line comment-style block in Python?',
  choices: [
    '// This is a comment //',
    '/* This is a comment */',
    "''' This is a comment '''",
    '<!-- This is a comment -->',
  ],
  type: 'MCQs',
  correctAnswers: ["''' This is a comment '''"],
  score: 1,
  rationale:
    "C. ''' This is a comment '''.\n\nTriple quotes are commonly used for multi-line documentation or comment-style blocks that span several lines.",
},
{
  question: 'Which of the following is an INVALID Python variable name?',
  choices: [
    'student_name',
    '_total',
    '2nd_score',
    'Age2',
  ],
  type: 'MCQs',
  correctAnswers: ['2nd_score'],
  score: 1,
  rationale:
    'C. 2nd_score.\n\nPython variable names cannot begin with a digit. They must start with a letter or an underscore.',
},
{
  question:
    'Which of the following CANNOT be used as a Python variable name because it is a reserved keyword?',
  choices: [
    'score',
    'class',
    'total_score',
    'age',
  ],
  type: 'MCQs',
  correctAnswers: ['class'],
  score: 1,
  rationale:
    'B. class.\n\n`class` is a reserved keyword in Python used for defining classes, so it cannot be used as a variable name.',
},
{
  question:
    'In pseudocode, which keyword is typically used to accept information from a user?',
  choices: [
    'PRINT',
    'DISPLAY',
    'INPUT',
    'OUTPUT',
  ],
  type: 'MCQs',
  correctAnswers: ['INPUT'],
  score: 1,
  rationale:
    'C. INPUT.\n\nThe INPUT statement is used to receive data from the user before the program processes it.',
},
{
  question:
    'In the student grade calculator example, which grade is assigned to a student who scores 65?',
  choices: [
    'A',
    'B',
    'C',
    'D',
  ],
  type: 'MCQs',
  correctAnswers: ['B'],
  score: 1,
  rationale:
    'B. B.\n\nThe pseudocode assigns Grade B to scores from 60 to 69, so a score of 65 receives a Grade B.',
},
{
  question:
    'According to the lecture, when is a decision table most useful?',
  choices: [
    'When there is only one condition to check',
    'When multiple conditions must be evaluated together before choosing an action',
    'When drawing software interfaces',
    'When creating database tables',
  ],
  type: 'MCQs',
  correctAnswers: [
    'When multiple conditions must be evaluated together before choosing an action',
  ],
  score: 1,
  rationale:
    'B. When multiple conditions must be evaluated together before choosing an action.\n\nDecision tables organize every possible combination of conditions and the correct action for each combination.',
},
{
  question:
    'Which section of a decision table lists the questions or conditions that must be answered?',
  choices: [
    'Condition Stub',
    'Action Entries',
    'Action Stub',
    'Condition Entries',
  ],
  type: 'MCQs',
  correctAnswers: ['Condition Stub'],
  score: 1,
  rationale:
    'A. Condition Stub.\n\nThe Condition Stub lists all the conditions that determine which action should be taken.',
},
{
  question:
    'A decision table contains four conditions. According to the rule 2ⁿ, how many rule columns should the table have?',
  choices: [
    '8',
    '12',
    '16',
    '32',
  ],
  type: 'MCQs',
  correctAnswers: ['16'],
  score: 1,
  rationale:
    'C. 16.\n\nThe number of possible rules is calculated as 2ⁿ. With four conditions, 2⁴ equals 16 possible rules.',
},
{
  question:
    'What symbol is typically used in the Action Entries section of a decision table to indicate that an action should be performed?',
  choices: [
    '✓ or X',
    'Y',
    'N',
    '?',
  ],
  type: 'MCQs',
  correctAnswers: ['✓ or X'],
  score: 1,
  rationale:
    'A. ✓ or X.\n\nAction Entries use a check mark or X to indicate that a particular action should be carried out for that rule.',
},
{
  question:
    'Which step should be completed immediately after calculating the number of rules when constructing a decision table?',
  choices: [
    'Identify all possible actions',
    'Create rule columns',
    'Simplify the table',
    'Write the program code',
  ],
  type: 'MCQs',
  correctAnswers: ['Create rule columns'],
  score: 1,
  rationale:
    'B. Create rule columns.\n\nAfter determining the number of rules using 2ⁿ, the next step is to create one column for each rule before filling in the condition entries.',
},
{
  question:
    'According to the hospital example in the lecture, which action is taken when a patient has valid insurance, it is an emergency, and a doctor is available?',
  choices: [
    'Verify insurance and treat',
    'Treat immediately',
    'Add to waiting list',
    'Refer to another hospital',
  ],
  type: 'MCQs',
  correctAnswers: ['Treat immediately'],
  score: 1,
  rationale:
    'B. Treat immediately.\n\nThe decision table shows that when the patient has insurance, the case is an emergency, and a doctor is available, the patient is treated immediately.',
},
{
  question:
    'What is the main advantage of simplifying a decision table after all rules have been created?',
  choices: [
    'It increases the number of conditions.',
    'It removes unnecessary or duplicate rules while preserving the same decisions.',
    'It converts the table into a decision tree automatically.',
    'It eliminates the need for testing.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It removes unnecessary or duplicate rules while preserving the same decisions.',
  ],
  score: 1,
  rationale:
    'B. It removes unnecessary or duplicate rules while preserving the same decisions.\n\nSimplifying a decision table reduces redundancy by combining rules that lead to the same action.',
},
{
  question:
    'Which modelling tool is better suited for problems where each decision determines the next question to ask?',
  choices: [
    'Decision Table',
    'Decision Tree',
    'Pseudocode',
    'Flowchart',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Tree'],
  score: 1,
  rationale:
    'B. Decision Tree.\n\nA decision tree follows one decision at a time, making it suitable for step-by-step situations where each answer determines the next path.',
},
{
  question:
    'What is the starting point of every decision tree called?',
  choices: [
    'Leaf Node',
    'Root Node',
    'Internal Node',
    'Branch',
  ],
  type: 'MCQs',
  correctAnswers: ['Root Node'],
  score: 1,
  rationale:
    'B. Root Node.\n\nThe Root Node is the first decision point in a decision tree, and every path begins from it.',
},
{
  question:
    'Which part of a decision tree represents the final outcome after all decisions have been made?',
  choices: [
    'Branch',
    'Internal Node',
    'Leaf Node',
    'Root Node',
  ],
  type: 'MCQs',
  correctAnswers: ['Leaf Node'],
  score: 1,
  rationale:
    'C. Leaf Node.\n\nA Leaf Node is the endpoint of a decision tree and represents the final action or outcome.',
},
{
  question:
    'In a decision tree, what does a path represent?',
  choices: [
    'A collection of unrelated conditions',
    'A route from the root node to a final outcome',
    'A list of all possible actions',
    'The total number of decision rules',
  ],
  type: 'MCQs',
  correctAnswers: ['A route from the root node to a final outcome'],
  score: 1,
  rationale:
    'B. A route from the root node to a final outcome.\n\nA path follows one sequence of decisions from the Root Node until it reaches a Leaf Node.',
},
{
  question:
    'According to the lecture, implementation involves more than writing code because it also includes:',
  choices: [
    'Drawing flowcharts only',
    'Planning, testing, documentation, and preparing the solution for delivery',
    'Collecting user requirements only',
    'Designing logos for the application',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Planning, testing, documentation, and preparing the solution for delivery',
  ],
  score: 1,
  rationale:
    'B. Planning, testing, documentation, and preparing the solution for delivery.\n\nImplementation includes building the solution, testing it, documenting it, and preparing it for users, not just coding.',
},
{
  question:
    'Which stage of implementation focuses on installing compilers, libraries, and development tools before coding begins?',
  choices: [
    'Integration',
    'Environment Setup',
    'System Testing',
    'Documentation & Handover',
  ],
  type: 'MCQs',
  correctAnswers: ['Environment Setup'],
  score: 1,
  rationale:
    'B. Environment Setup.\n\nEnvironment Setup prepares the development environment by installing the required software, tools, libraries, and compilers.',
},
{
  question:
    'During which implementation stage is each module tested independently before being combined with other modules?',
  choices: [
    'System Testing',
    'Integration',
    'Unit Testing',
    'Code Writing',
  ],
  type: 'MCQs',
  correctAnswers: ['Unit Testing'],
  score: 1,
  rationale:
    'C. Unit Testing.\n\nUnit Testing verifies that each individual module or function works correctly before integration.',
},
{
  question:
    'What is the primary objective of the Integration stage of implementation?',
  choices: [
    'To write documentation',
    'To connect tested modules into a complete working system',
    'To gather user requirements',
    'To design the database schema',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To connect tested modules into a complete working system',
  ],
  score: 1,
  rationale:
    'B. To connect tested modules into a complete working system.\n\nIntegration combines individually tested modules and checks that they work correctly as one complete system.',
},
    {
  question:
    'Which implementation stage verifies that the complete system satisfies the original requirements after all modules have been integrated?',
  choices: [
    'Unit Testing',
    'Environment Setup',
    'System Testing',
    'Code Writing',
  ],
  type: 'MCQs',
  correctAnswers: ['System Testing'],
  score: 1,
  rationale:
    'C. System Testing.\n\nSystem Testing evaluates the entire assembled solution to ensure all functions work correctly and meet the original requirements.',
},
{
  question:
    'Which implementation stage produces user manuals, technical guides, and code comments before delivering the solution to stakeholders?',
  choices: [
    'Documentation & Handover',
    'Integration',
    'Environment Setup',
    'Unit Testing',
  ],
  type: 'MCQs',
  correctAnswers: ['Documentation & Handover'],
  score: 1,
  rationale:
    'A. Documentation & Handover.\n\nThis stage prepares the documentation needed by users and developers before the completed solution is delivered.',
},
{
  question:
    'What is the main purpose of evaluation after a solution has been implemented?',
  choices: [
    'To rewrite the entire program using another language',
    'To determine whether the completed solution satisfies the original requirements',
    'To convert pseudocode into source code',
    'To increase the number of program features regardless of user needs',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To determine whether the completed solution satisfies the original requirements',
  ],
  score: 1,
  rationale:
    'B. To determine whether the completed solution satisfies the original requirements.\n\nEvaluation checks whether the finished solution solves the original problem correctly, completely, and effectively.',
},
{
  question:
    'What best describes refinement during system development?',
  choices: [
    'Discarding the completed solution and starting over',
    'Improving the solution by correcting weaknesses found during evaluation',
    'Writing pseudocode before coding begins',
    'Replacing system testing with unit testing',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Improving the solution by correcting weaknesses found during evaluation',
  ],
  score: 1,
  rationale:
    'B. Improving the solution by correcting weaknesses found during evaluation.\n\nRefinement improves the completed solution by fixing problems and making necessary enhancements identified during evaluation.',
},
{
  question:
    'Which statement best describes the relationship between evaluation and refinement?',
  choices: [
    'Evaluation and refinement are the same activity.',
    'Evaluation identifies problems, while refinement improves the solution based on those findings.',
    'Refinement is completed before evaluation begins.',
    'Evaluation only checks program appearance.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Evaluation identifies problems, while refinement improves the solution based on those findings.',
  ],
  score: 1,
  rationale:
    'B. Evaluation identifies problems, while refinement improves the solution based on those findings.\n\nEvaluation measures how well the solution meets its requirements, while refinement uses the results to make the solution better.',
},
{
  question:
    'A system has five independent Yes/No conditions. According to the decision table rule, how many possible rules are required?',
  choices: [
    '10',
    '16',
    '25',
    '32',
  ],
  type: 'MCQs',
  correctAnswers: ['32'],
  score: 1,
  rationale:
    'D. 32.\n\nThe number of rules in a decision table is calculated as 2ⁿ. With five conditions, 2⁵ equals 32 possible rules.',
},
{
  question:
    'Which modelling technique presents every possible combination of conditions in a single grid?',
  choices: [
    'Flowchart',
    'Decision Tree',
    'Decision Table',
    'Pseudocode',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Table'],
  score: 1,
  rationale:
    'C. Decision Table.\n\nA decision table displays every combination of conditions and the corresponding actions in one organized grid.',
},
{
  question:
    'Which modelling technique is generally easier to follow when explaining decisions one step at a time to a user?',
  choices: [
    'Decision Tree',
    'Decision Table',
    'Source Code',
    'Data Dictionary',
  ],
  type: 'MCQs',
  correctAnswers: ['Decision Tree'],
  score: 1,
  rationale:
    'A. Decision Tree.\n\nA decision tree presents decisions sequentially, making it easy to follow the path from the first question to the final outcome.',
},
{
  question:
    'Why is pseudocode considered easier to modify than program code during the design stage?',
  choices: [
    'It executes directly on the computer.',
    'It focuses on logic without requiring programming language syntax.',
    'It automatically creates flowcharts.',
    'It eliminates the need for implementation.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'It focuses on logic without requiring programming language syntax.',
  ],
  score: 1,
  rationale:
    "B. It focuses on logic without requiring programming language syntax.\n\nBecause pseudocode is language-independent, developers can revise the solution's logic easily before writing actual code.",
},
{
  question:
    'Why should developers complete planning and design before implementation begins?',
  choices: [
    'Implementation automatically corrects design mistakes.',
    'A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.',
    'Programming languages cannot be used without a decision table.',
    'Documentation can only be written before requirements are gathered.',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.',
  ],
  score: 1,
  rationale:
    'B. A well-prepared design provides a clear blueprint for building, testing, and delivering the solution.\n\nThe lecture compares design to a blueprint. A complete design makes implementation more organized, efficient, and less prone to errors.',
},
  {
    question: 'Who created Python, and in what year was it first released?',
    choices: [
      'A. Guido van Rossum, 1991',
      'B. Dennis Ritchie, 1972',
      'C. James Gosling, 1995',
      'D. Bjarne Stroustrup, 1985',
    ],
    type: 'MCQs',
    correctAnswers: ['A. Guido van Rossum, 1991'],
    score: 1,
    rationale:
      'A. Correct answer.\n\nPython was originally created by Guido van Rossum and first released in 1991, designed with readability and simplicity at its core.',
  },
  {
    question: 'What does it mean that Python is a "dynamically typed" language?',
    choices: [
      'A. You must declare a variable\'s type before using it',
      'B. Python automatically determines a variable\'s type without it being declared',
      'C. Python code cannot run on multiple operating systems',
      'D. A variable\'s type can never change once set',
    ],
    type: 'MCQs',
    correctAnswers: ['B. Python automatically determines a variable\'s type without it being declared'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nIn a dynamically typed language like Python, you don\'t need to declare the type of a variable before using it — Python figures it out automatically when a value is assigned.',
  },
  {
    question: 'What does Python use to define blocks of code (e.g., inside an if statement or loop), instead of curly braces or semicolons?',
    choices: [
      'A. Parentheses ( )',
      'B. Whitespace indentation',
      'C. Square brackets [ ]',
      'D. Double colons ::',
    ],
    type: 'MCQs',
    correctAnswers: ['B. Whitespace indentation'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nPython uses whitespace indentation to define code blocks, which is why the slides describe it as feeling like "executable pseudocode."',
  },
  {
    question: 'Which of the following correctly creates a multi-line comment-style block in Python?',
    choices: [
      "A. // This is a comment //",
      "B. /* This is a comment */",
      "C. ''' This is a comment '''",
      "D. <!-- This is a comment -->",
    ],
    type: 'MCQs',
    correctAnswers: ["C. ''' This is a comment '''"],
    score: 1,
    rationale:
      'C. Correct answer.\n\nMulti-line comments are written using triple quotes (\'\'\' or """). Technically these are multi-line strings, but they are commonly used as comments/documentation.',
  },
  {
    question: 'Which of the following is an INVALID Python variable name?',
    choices: [
      'A. student_name',
      'B. _total',
      'C. 2nd_score',
      'D. Age2',
    ],
    type: 'MCQs',
    correctAnswers: ['C. 2nd_score'],
    score: 1,
    rationale:
      'C. Correct answer.\n\nA variable name must begin with a letter or an underscore — never a digit. "2nd_score" starts with a number, so it breaks Python\'s naming rules.',
  },
  {
    question: 'Which of the following CANNOT be used as a Python variable name because it is a reserved keyword?',
    choices: [
      'A. score',
      'B. class',
      'C. total_score',
      'D. age',
    ],
    type: 'MCQs',
    correctAnswers: ['B. class'],
    score: 1,
    rationale:
      'B. Correct answer.\n\n"class" is one of Python\'s reserved keywords (along with if, else, for, while, def, etc.) and cannot be used to name a variable.',
  },
  {
    question: 'What is the result of evaluating 9 // 2 in Python?',
    choices: [
      'A. 4.5',
      'B. 4',
      'C. 1',
      'D. 5',
    ],
    type: 'MCQs',
    correctAnswers: ['B. 4'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nThe // operator performs floor division, which divides and rounds down to the nearest whole number. 9 // 2 = 4 (the regular / would give 4.5).',
  },
  {
    question: 'No matter what a user types in response to input(\'Enter: \'), what data type does input() always return?',
    choices: [
      'A. int',
      'B. str',
      'C. float',
      'D. It depends on what the user typed',
    ],
    type: 'MCQs',
    correctAnswers: ['B. str'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nThe input() function always returns what the user typed as a string, regardless of the content — you must explicitly convert it (e.g., with int() or float()) if you need a number.',
  },
  {
    question: 'What will print(3 == 7) display, and what is the underlying data type of that result?',
    choices: [
      'A. 3, an int',
      'B. True, a str',
      'C. False, a bool',
      'D. Error, comparisons can\'t use ==',
    ],
    type: 'MCQs',
    correctAnswers: ['C. False, a bool'],
    score: 1,
    rationale:
      'C. Correct answer.\n\n3 == 7 is a comparison, and comparisons always evaluate to a Boolean. Since 3 does not equal 7, the result is False, of type bool.',
  },
  {
    question: 'Which of the following is NOT one of the five fundamental properties an algorithm must satisfy?',
    choices: [
      'A. Finiteness',
      'B. Definiteness',
      'C. Portability',
      'D. Effectiveness',
    ],
    type: 'MCQs',
    correctAnswers: ['C. Portability'],
    score: 1,
    rationale:
      'C. Correct answer.\n\nThe five required properties are Finiteness, Definiteness, Input, Output, and Effectiveness. "Portability" was never listed as one of them — every step instead simply needs to be basic and unambiguous.',
  },
  {
    question: 'Which method of representing an algorithm uses standardized geometric shapes and arrows to show the flow of control?',
    choices: [
      'A. Pseudocode',
      'B. Natural language',
      'C. Flowchart',
      'D. Source code',
    ],
    type: 'MCQs',
    correctAnswers: ['C. Flowchart'],
    score: 1,
    rationale:
      'C. Correct answer.\n\nA flowchart is the diagrammatic representation that uses standardized shapes and arrows to show the order of operations — it is especially useful for visualizing decisions and loops.',
  },
  {
    question: 'In a flowchart, which shape represents a decision point with two possible exit paths (e.g., Yes/No)?',
    choices: [
      'A. Oval',
      'B. Rectangle',
      'C. Diamond',
      'D. Parallelogram',
    ],
    type: 'MCQs',
    correctAnswers: ['C. Diamond'],
    score: 1,
    rationale:
      'C. Correct answer.\n\nThe diamond shape is reserved for decisions — a yes/no or true/false question — and is the only standard symbol with two exit arrows.',
  },
  {
    question: 'What is the main purpose of pseudocode in the algorithm design process?',
    choices: [
      'A. To be directly executed by a computer like real code',
      'B. To serve as a language-independent bridge between human thinking and actual code',
      'C. To permanently replace flowcharts in all documentation',
      'D. To document a program only after it has been fully completed',
    ],
    type: 'MCQs',
    correctAnswers: ['B. To serve as a language-independent bridge between human thinking and actual code'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nPseudocode is not meant to be executed — it combines natural language with simplified programming-like syntax so that an algorithm can later be translated into any actual programming language.',
  },
  {
    question: 'In Python, what does the statement x = 10 actually do?',
    choices: [
      'A. It tests whether x is mathematically equal to 10',
      'B. It assigns the value 10 to the variable x',
      'C. It declares x as a constant equal to 10',
      'D. It compares x with 10 and stores a Boolean',
    ],
    type: 'MCQs',
    correctAnswers: ['B. It assigns the value 10 to the variable x'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nIn Python, = is the assignment operator, meaning "assign the value on the right to the variable on the left." It is critical not to confuse it with mathematical equality, which uses ==.',
  },
  {
    question: 'What is printed by the following code?\np, q = 5, 8\np, q = q, p\nprint(p, q)',
    choices: [
      'A. 5 8',
      'B. 8 5',
      'C. This causes an error',
      'D. 0 0',
    ],
    type: 'MCQs',
    correctAnswers: ['B. 8 5'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nThis is Python\'s elegant variable-swap idiom using tuple unpacking. The right-hand side (q, p) = (8, 5) is evaluated first, then assigned to (p, q), so p becomes 8 and q becomes 5.',
  },
  {
    question: 'Which augmented assignment operator performs floor division and assigns the result back to the variable?',
    choices: [
      'A. /=',
      'B. //=',
      'C. %=',
      'D. **=',
    ],
    type: 'MCQs',
    correctAnswers: ['B. //='],
    score: 1,
    rationale:
      'B. Correct answer.\n\n//= is the floor-divide-and-assign operator, equivalent to writing x = x // 2. /= performs regular division instead, and %= and **= handle modulus and exponentiation respectively.',
  },
  {
    question: 'Python has no built-in keyword for declaring constants. By convention, how should constants be named?',
    choices: [
      'A. camelCase, like maxAttempts',
      'B. ALL_CAPS with underscores, like MAX_ATTEMPTS',
      'C. PascalCase, like MaxAttempts',
      'D. Prefixed with a dollar sign, like $MAX_ATTEMPTS',
    ],
    type: 'MCQs',
    correctAnswers: ['B. ALL_CAPS with underscores, like MAX_ATTEMPTS'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nPython has no actual mechanism for enforcing constants, but by convention they are written in ALL_CAPS (e.g., PI, GRAVITY, MAX_ATTEMPTS) to signal to other programmers that the value should not be changed.',
  },
  {
    question: 'What does the following code output?\nprint(\'A\', \'B\', \'C\', sep=\'-\')',
    choices: [
      'A. A B C',
      'B. A-B-C',
      'C. ABC',
      'D. A, B, C',
    ],
    type: 'MCQs',
    correctAnswers: ['B. A-B-C'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nThe sep parameter of print() controls what string is inserted between each printed object. Setting sep=\'-\' replaces the default space with a hyphen, producing A-B-C.',
  },
  {
    question: 'What does the ternary expression \'Adult\' if age >= 18 else \'Minor\' do?',
    choices: [
      'A. It always returns \'Adult\' regardless of age',
      'B. It raises an error unless age is already defined as 18',
      'C. It evaluates the condition first, then returns one of the two values depending on whether it is True or False',
      'D. It repeatedly loops until age becomes 18 or more',
    ],
    type: 'MCQs',
    correctAnswers: ['C. It evaluates the condition first, then returns one of the two values depending on whether it is True or False'],
    score: 1,
    rationale:
      'C. Correct answer.\n\nA Python ternary expression follows the form value_if_true if condition else value_if_false. The condition is checked first, and exactly one of the two values is returned as a result.',
  },
  {
    question: 'What type of error is raised when this code runs?\nage = int(\'twenty\')',
    choices: [
      'A. SyntaxError',
      'B. ValueError',
      'C. TypeError',
      'D. ZeroDivisionError',
    ],
    type: 'MCQs',
    correctAnswers: ['B. ValueError'],
    score: 1,
    rationale:
      'B. Correct answer.\n\nThis is a runtime error: the code is syntactically valid, but int() cannot convert the text \'twenty\' into a whole number, so Python raises a ValueError at the moment the line executes.',
  },
  
  {
  question:
    'What is the primary purpose of writing constant names in ALL_CAPS in Python?',
  choices: [
    'To make the program run faster',
    'To indicate that the value should not be modified',
    'To convert the value into uppercase automatically',
    'To prevent syntax errors',
  ],
  type: 'MCQs',
  correctAnswers: ['To indicate that the value should not be modified'],
  score: 1,
  rationale:
    'B. To indicate that the value should not be modified.\n\nWriting constant names in ALL_CAPS is a naming convention that signals to programmers the value is intended to remain unchanged throughout the program.',
},
{
  question:
    'Which f-string format specifier displays the value of 3.14159 rounded to two decimal places?',
  choices: [
    '{pi:.2f}',
    '{pi:2f}',
    '{pi:.2}',
    '{pi:f2}',
  ],
  type: 'MCQs',
  correctAnswers: ['{pi:.2f}'],
  score: 1,
  rationale:
    'A. {pi:.2f}.\n\nThe format specifier `.2f` rounds a floating-point number to two decimal places before displaying it.',
},
{
  question:
    'In a Number Guessing Game, what is the purpose of the statement `won = False` before the game loop begins?',
  choices: [
    "To store the player's score",
    'To track whether the player successfully guessed the correct number',
    'To count the number of guesses',
    'To generate a random number',
  ],
  type: 'MCQs',
  correctAnswers: [
    'To track whether the player successfully guessed the correct number',
  ],
  score: 1,
  rationale:
    'B. To track whether the player successfully guessed the correct number.\n\nThe Boolean flag starts as False and changes when the player wins, allowing the program to know whether the game was successful.',
},
{
  question:
    'What is list comprehension in Python?',
  choices: [
    'A method for sorting lists alphabetically',
    'A compact syntax for creating a new list by transforming or filtering an existing one',
    'A function for deleting duplicate list items',
    'A command for converting lists into tuples',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A compact syntax for creating a new list by transforming or filtering an existing one',
  ],
  score: 1,
  rationale:
    'B. A compact syntax for creating a new list by transforming or filtering an existing one.\n\nList comprehension provides a concise way to build new lists while applying conditions or transformations to existing data.',
},
{
  question:
    'What does the `.append()` method do in a Python list?',
  choices: [
    'Removes the last element',
    'Adds an element to the end of the list',
    'Sorts the list automatically',
    'Replaces all existing elements',
  ],
  type: 'MCQs',
  correctAnswers: ['Adds an element to the end of the list'],
  score: 1,
  rationale:
    'B. Adds an element to the end of the list.\n\nThe `.append()` method inserts a single new item at the end of an existing list.',
},
{
  question:
    'Which string method is commonly used to perform case-insensitive name searches in Python?',
  choices: [
    '.upper()',
    '.title()',
    '.capitalize()',
    '.lower()',
  ],
  type: 'MCQs',
  correctAnswers: ['.lower()'],
  score: 1,
  rationale:
    'D. .lower().\n\nConverting strings to lowercase before comparing them ensures that differences in letter case do not affect the search.',
},
{
  question:
    'What programming pattern is implemented using `while True:` together with a `break` statement?',
  choices: [
    'A loop that executes exactly once',
    'An infinite loop that exits only when a specified condition is met',
    'A recursive function',
    'A loop that automatically stops after ten iterations',
  ],
  type: 'MCQs',
  correctAnswers: [
    'An infinite loop that exits only when a specified condition is met',
  ],
  score: 1,
  rationale:
    'B. An infinite loop that exits only when a specified condition is met.\n\n`while True` keeps the loop running indefinitely until a `break` statement is executed when the required condition is satisfied.',
},
{
  question:
    "What is the result of `matric.strip().split('/')` when the input is `EBSU/2022/001234`?",
  choices: [
    "['EBSU/2022/001234']",
    "['EBSU', '2022', '001234']",
    "['EBSU', '2022/001234']",
    "['001234', '2022', 'EBSU']",
  ],
  type: 'MCQs',
  correctAnswers: ["['EBSU', '2022', '001234']"],
  score: 1,
  rationale:
    "B. ['EBSU', '2022', '001234'].\n\nThe `strip()` method removes surrounding whitespace, while `split('/')` separates the string into a list wherever the slash character appears.",
},
{
  question:
    'Which problem-solving technique focuses on generating many ideas without judging them initially?',
  choices: [
    'Trial and Error',
    'Analogy',
    'Brainstorming',
    'Simulation',
  ],
  type: 'MCQs',
  correctAnswers: ['Brainstorming'],
  score: 1,
  rationale:
    'C. Brainstorming.\n\nBrainstorming encourages participants to generate as many ideas as possible before evaluating or selecting the best solution.',
},
{
  question:
    'Which problem-solving technique involves applying a solution that worked for a similar problem in the past?',
  choices: [
    'Brainstorming',
    'Analogy',
    'Trial and Error',
    'Flowcharting',
  ],
  type: 'MCQs',
  correctAnswers: ['Analogy'],
  score: 1,
  rationale:
    'B. Analogy.\n\nAnalogy solves a new problem by applying knowledge or solutions from a similar situation that has already been solved.',
},
{
  question:
    'When is the Trial and Error technique most appropriate?',
  choices: [
    'When a proven algorithm already exists',
    'When troubleshooting a problem with limited known solutions',
    'When mathematical proof is required',
    'When documenting a completed system',
  ],
  type: 'MCQs',
  correctAnswers: [
    'When troubleshooting a problem with limited known solutions',
  ],
  score: 1,
  rationale:
    'B. When troubleshooting a problem with limited known solutions.\n\nTrial and Error is useful when there is no obvious solution, allowing different approaches to be tested until one works.',
},
]}