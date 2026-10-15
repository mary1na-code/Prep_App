// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const cos112: Topic = {
  topic: 'COS 112 - Business Application',
  level: 'null',
  totalQuestions: 40,
  totalScore: 40,
  totalTime: 1200, // estimate (20 min) - source had no time limit, adjust as needed
  questions: [
    {
      question:
        'In MS Word, which specific typography tool allows you to modify the outer edges of text characters by altering their color, weight, and style?',
      choices: ['Shadow', 'Outline', 'Glow', 'Ligatures'],
      type: 'MCQs',
      correctAnswers: ['Outline'],
      score: 1,
      rationale:
        'The Outline tool specifically targets the stroke or border of individual text characters for customization. Shadow and Glow create diffused light effects, and Ligatures deal with character spacing.',
    },
    {
      question:
        'What is the maximum limit of columns or rows MS Word allows in a single cell splitting operation?',
      choices: ['5', '10', '15', 'Unlimited'],
      type: 'MCQs',
      correctAnswers: ['10'],
      score: 1,
      rationale:
        'Word enforces a hard limit of 10 rows or columns during a single split to preserve table stability and prevent layout corruption.',
    },
    {
      question:
        'When constructing a fillable form in Word, which control restricts text formatting but allows raw data entry?',
      choices: [
        'Rich Text Content Control',
        'Check Box Content Control',
        'Plain Text Content Control',
        'Combo Box Content Control',
      ],
      type: 'MCQs',
      correctAnswers: ['Plain Text Content Control'],
      score: 1,
      rationale:
        'Plain Text blocks formatting options like bold or italics, ensuring standardized structural input from the user, unlike Rich Text.',
    },
    {
      question:
        'Which view must you use to utilize the Master Document tool for merging long manuscripts by different authors?',
      choices: ['Print Layout View', 'Draft View', 'Outline View', 'Web Layout View'],
      type: 'MCQs',
      correctAnswers: ['Outline View'],
      score: 1,
      rationale:
        'Outline View provides the structural hierarchy (headings and subheadings) necessary to link and manage external sub-documents effectively.',
    },
    {
      question:
        'To secure a Word document with a password, what is the minimum required character length for a strong password standard?',
      choices: ['6 characters', '8 characters', '10 characters', '12 characters'],
      type: 'MCQs',
      correctAnswers: ['8 characters'],
      score: 1,
      rationale:
        'A minimum of 8 characters combining different data types (uppercase, lowercase, numbers, symbols) is the required baseline to establish strong encryption.',
    },
    {
      question:
        "What is the primary function of checking 'Mirror Margins' in the Page Setup dialog?",
      choices: [
        'To duplicate the top and bottom margins.',
        'To add a deeper gutter cushion on inside margins for bookbinding.',
        'To flip the text horizontally for custom printing.',
        'To link headers between odd and even pages.',
      ],
      type: 'MCQs',
      correctAnswers: ['To add a deeper gutter cushion on inside margins for bookbinding.'],
      score: 1,
      rationale:
        'This layout setting safeguards text blocks from being swallowed by the physical spine binding when printing a double-sided book.',
    },
    {
      question:
        'When configuring a macro in Word, which file extension MUST be used to ensure the macro is retained in the specific file?',
      choices: ['.docx', '.dotx', '.docm', '.xltx'],
      type: 'MCQs',
      correctAnswers: ['.docm'],
      score: 1,
      rationale:
        "The 'm' indicates Macro-Enabled. The standard .docx format actively strips out executing code (VBA) for security reasons.",
    },
    {
      question:
        'Which action will permanently wipe out all tracked markup histories in a document?',
      choices: [
        'Turning off Track Changes.',
        "Selecting 'Mark as Final'.",
        "Selecting 'Reject All Changes'.",
        "Selecting 'Lock Tracking'.",
      ],
      type: 'MCQs',
      correctAnswers: ["Selecting 'Reject All Changes'."],
      score: 1,
      rationale:
        "Disabling the tool only stops future tracking. 'Reject All Changes' actively denies the edits, reverting the document and clearing the revision log entirely.",
    },
    {
      question:
        'When an image fails to load or is encountered by a screen reader, what provides the descriptive context?',
      choices: ['Picture Effects', 'Alternative Text (Alt Text)', 'Artistic Effects', 'Caption'],
      type: 'MCQs',
      correctAnswers: ['Alternative Text (Alt Text)'],
      score: 1,
      rationale:
        'Alt text embeds a 1-2 sentence description directly into the object\'s metadata specifically for accessibility compliance, independent of standard visual captions.',
    },
    {
      question:
        'In MS Excel, what type of chart is utilized to highlight how positive or negative intermediate factors shift an initial value?',
      choices: ['Line Chart', 'XY Scatter Plot', 'Waterfall Chart', 'Donut Chart'],
      type: 'MCQs',
      correctAnswers: ['Waterfall Chart'],
      score: 1,
      rationale:
        'Waterfall charts are engineered to visualize how sequential positive and negative incremental values build to a final cumulative total.',
    },
    {
      question:
        'According to the rules of clean data visualization in Excel, what is the maximum recommended number of categories for a Pie Chart?',
      choices: ['3 categories or fewer', '5 categories or fewer', '7 categories or fewer', 'Unlimited'],
      type: 'MCQs',
      correctAnswers: ['3 categories or fewer'],
      score: 1,
      rationale:
        'Exceeding 3 slices makes proportional area comparisons too difficult for the human eye to process quickly, rendering the visualization ineffective.',
    },
    {
      question:
        'When inserting a shape in Excel, what key must be held down during insertion to constrain dimensions and generate a perfect circle or square?',
      choices: ['Ctrl', 'Alt', 'Shift', 'Tab'],
      type: 'MCQs',
      correctAnswers: ['Shift'],
      score: 1,
      rationale:
        'The Shift key locks the aspect ratio, forcing the width and height to scale equally during the drawing process.',
    },
    {
      question:
        'In Excel Custom Data Formats, the syntax architecture is separated by semicolons into a maximum of four sections. What is the correct order?',
      choices: [
        'Positive; Zeros; Negative; Text',
        'Positive; Negative; Zeros; Text',
        'Negative; Positive; Zeros; Text',
        'Text; Zeros; Positive; Negative',
      ],
      type: 'MCQs',
      correctAnswers: ['Positive; Negative; Zeros; Text'],
      score: 1,
      rationale:
        'The formatting engine evaluates numerical inputs chronologically: Positives first, Negatives second, exact Zeros third, and string Text last.',
    },
    {
      question:
        'Which Custom Data Validation formula blocks users from entering duplicate values in the range A1:A100?',
      choices: [
        '=ISTEXT(A1)',
        '=ISERROR(FIND(" ", A1))',
        '=COUNTIF($A$1:$A$100, A1)=1',
        '=WEEKDAY(A1, 2)<6',
      ],
      type: 'MCQs',
      correctAnswers: ['=COUNTIF($A$1:$A$100, A1)=1'],
      score: 1,
      rationale:
        'By asserting that the count of a specific entry in the defined array must strictly equal 1, the system rejects any subsequent identical entries.',
    },
    {
      question:
        'In Excel\'s Advanced Filter, placing your criteria rules on DIFFERENT rows in the Criteria Range executes which logical operation?',
      choices: ['AND logic', 'OR logic', 'NOT logic', 'XOR logic'],
      type: 'MCQs',
      correctAnswers: ['OR logic'],
      score: 1,
      rationale:
        'Different rows instruct Excel to evaluate each line independently, returning true if ANY of the row conditions are met (widening the filter).',
    },
    {
      question:
        'If you want Excel to automatically launch a specific layout configuration as the global default for all new worksheets, what must you name the template file in the XLStart folder?',
      choices: ['default.xltx', 'book.xltx', 'master.xltx', 'start.xltx'],
      type: 'MCQs',
      correctAnswers: ['book.xltx'],
      score: 1,
      rationale:
        "Saving an .xltx file with the exact name 'book' intercepts Excel's standard startup sequence, overriding the factory defaults with your customized template.",
    },
    {
      question:
        'What function is natively used in Excel 365 to identify the language of a specific string in survey data?',
      choices: ['=TRANSLATE(text)', '=FINDLANGUAGE(text)', '=DETECTLANGUAGE(text)', '=ISTEXT(text)'],
      type: 'MCQs',
      correctAnswers: ['=DETECTLANGUAGE(text)'],
      score: 1,
      rationale:
        'This specific API parses the string and returns the language locale identifier, operating passively rather than converting the text.',
    },
    {
      question:
        "Which Excel wildcard parameter is used to target a single variable character position (e.g., matching 'smith' or 'smyth')?",
      choices: ['* (Asterisk)', '? (Question Mark)', '~ (Tilde)', '# (Hash)'],
      type: 'MCQs',
      correctAnswers: ['? (Question Mark)'],
      score: 1,
      rationale:
        'The question mark locks onto precisely one character slot, whereas the asterisk matches an undefined, infinite string of characters.',
    },
    {
      question: "In PowerPoint, what are the parameters of 'The 6x6 Rule' for slide text design?",
      choices: [
        '6 paragraphs per slide, 6 sentences per paragraph.',
        '6 bullet points maximum, 6 words per line maximum.',
        '6pt font minimum, 6 colors maximum.',
        '6 images per slide, 6 text boxes per slide.',
      ],
      type: 'MCQs',
      correctAnswers: ['6 bullet points maximum, 6 words per line maximum.'],
      score: 1,
      rationale:
        'This strict constraint ensures visual breathing room and prevents cognitive overload, forcing the audience to listen to the presenter rather than read dense paragraphs.',
    },
    {
      question: 'What is the minimum recommended font size for titles on a digital PowerPoint slide?',
      choices: ['18pt', '24pt', '36pt', '48pt'],
      type: 'MCQs',
      correctAnswers: ['36pt'],
      score: 1,
      rationale:
        '36pt establishes a clear visual hierarchy for titles, while 24pt is the recommended minimum for body text to ensure legibility from a distance.',
    },
    {
      question:
        'To achieve symmetrical balance and prevent text crowding in PowerPoint, what is the optimal line spacing setting?',
      choices: ['1.0', '1.2', '1.5', '2.0'],
      type: 'MCQs',
      correctAnswers: ['1.2'],
      score: 1,
      rationale:
        '1.2 spacing adds necessary whitespace to make lines readable on a screen without breaking the visual unity of the paragraph, which happens at 1.5 or 2.0.',
    },
    {
      question:
        'In the Slide Master view, any formatting changes made to the top layout will automatically cascade downwards. What is this top layout called?',
      choices: ['Child Layout', 'Parent Master', 'Title Layout', 'Theme Core'],
      type: 'MCQs',
      correctAnswers: ['Parent Master'],
      score: 1,
      rationale:
        'The Parent Master acts as the foundational engine. Modifications here dictate the global theme for all dependent Child Layouts beneath it.',
    },
    {
      question:
        'If you want to remove the global corporate logo from just the Title Slide while keeping it everywhere else, what must you do in the Slide Master?',
      choices: [
        'Delete the logo manually from the Parent Master.',
        "Check 'Hide Background Graphics' on the Title Child Layout.",
        'Use the Eraser tool on the Title Slide.',
        'Change the background color to white.',
      ],
      type: 'MCQs',
      correctAnswers: ["Check 'Hide Background Graphics' on the Title Child Layout."],
      score: 1,
      rationale:
        "This command isolates the specific slide layout from the Parent Master's graphical inheritance without breaking the hierarchical link.",
    },
    {
      question:
        'What is the correct file extension for saving a custom PowerPoint Master layout as a reusable Template?',
      choices: ['.pptx', '.ppsx', '.potx', '.xltx'],
      type: 'MCQs',
      correctAnswers: ['.potx'],
      score: 1,
      rationale:
        "The 't' designates the file as a structural template (.potx) meant to be stored in the Custom Office Templates folder, rather than a standard presentation (.pptx).",
    },
    {
      question:
        'If a user messes up the layout of placeholders on a slide by dragging text boxes around, what button on the Home tab snaps everything back to the Master rules?',
      choices: ['Format Painter', 'Align Center', 'Reset Slide', 'Undo'],
      type: 'MCQs',
      correctAnswers: ['Reset Slide'],
      score: 1,
      rationale:
        'This command acts as a hard override, forcing errant elements instantly back into their pre-defined coordinate positions established by the Slide Master.',
    },
    {
      question:
        'Which SmartArt graphic type is utilized to map out structural correlations between two unique numeric variables?',
      choices: ['Scatter Plot', 'Histogram', 'Hierarchy', 'Cycle'],
      type: 'MCQs',
      correctAnswers: ['Scatter Plot'],
      score: 1,
      rationale:
        'Scatter Plots pinpoint intersections on an X and Y axis to reveal trends and correlations between distinct variables, unlike process or distribution graphics.',
    },
    {
      question: 'When customizing the PowerPoint Ribbon, commands can ONLY be added into:',
      choices: ['Default groups', 'Custom groups', 'The Quick Access Toolbar', 'The Slide Master'],
      type: 'MCQs',
      correctAnswers: ['Custom groups'],
      score: 1,
      rationale:
        'To maintain interface integrity, Microsoft locks default groups. User-defined commands must be isolated within custom-created group containers on the ribbon.',
    },
    {
      question: "What is the primary function of a Microsoft Access 'Select Query'?",
      choices: [
        'To perform bulk operations that change data states like deleting records.',
        'To prompt users to enter filter values at runtime using square brackets.',
        'To retrieve and isolate matching data cells using specific criteria boundaries without altering master entries.',
        'To construct a graphical entry screen for users.',
      ],
      type: 'MCQs',
      correctAnswers: [
        'To retrieve and isolate matching data cells using specific criteria boundaries without altering master entries.',
      ],
      score: 1,
      rationale:
        'A Select Query is a passive data retrieval tool. It views and filters data but does not destroy or modify the source tables (unlike an Action Query).',
    },
    {
      question: "In Access query criteria, what comparison operator signifies 'Not equal to'?",
      choices: ['!=', '<>', 'NOT', '><'],
      type: 'MCQs',
      correctAnswers: ['<>'],
      score: 1,
      rationale:
        'Native Access SQL uses the combination of the less than and greater than symbols facing each other to denote strict inequality.',
    },
    {
      question: 'When building an Access Query, what symbol must enclose text strings in the criteria field?',
      choices: ['Square brackets [ ]', 'Parentheses ( )', "Single quotes ' '", 'Hashtags # #'],
      type: 'MCQs',
      correctAnswers: ["Single quotes ' '"],
      score: 1,
      rationale:
        'Single quotes explicitly dictate to the database engine that the enclosed characters should be parsed as a literal text string, whereas hashtags define dates and brackets define fields.',
    },
    {
      question:
        'If you apply Multi-Field Sorting in an Access query design grid, how does the database process the priority?',
      choices: ['From right to left.', 'From left to right.', 'Alphabetically by field name.', 'By the primary key only.'],
      type: 'MCQs',
      correctAnswers: ['From left to right.'],
      score: 1,
      rationale:
        'The field placed furthest to the left in the design grid acts as the primary sort. Subsequent columns to the right act as tie-breakers.',
    },
    {
      question:
        'On an Access Form, what do you call a text box that is connected directly to a database field, allowing live editing of the master table?',
      choices: ['Unbound Control', 'Bound Control', 'Combo Box', 'Calculated Field'],
      type: 'MCQs',
      correctAnswers: ['Bound Control'],
      score: 1,
      rationale:
        "Being 'Bound' means the user interface element is tethered securely to the backend data architecture. Unbound controls handle isolated tasks like calculations.",
    },
    {
      question:
        'Which section of a Microsoft Access Report prints at the top of every single page and is used to house column labels?',
      choices: ['Report Header', 'Page Header', 'Detail Section', 'Group Header'],
      type: 'MCQs',
      correctAnswers: ['Page Header'],
      score: 1,
      rationale:
        'The Page Header repeats its contents at the top margin of every physical page, whereas the Report Header prints only once at the beginning of the document.',
    },
    {
      question:
        'To display a grand summary calculation (like a total sum) on the final page of a printed Access report, where must the unbound text box be placed?',
      choices: ['Page Footer', 'Detail Section', 'Report Footer', 'Group Footer'],
      type: 'MCQs',
      correctAnswers: ['Report Footer'],
      score: 1,
      rationale:
        'The Report Footer processes the aggregate function against all records and prints exclusively at the very end of the entire dataset output.',
    },
    {
      question: "In Access, using the logical operator 'AND' in a query will result in:",
      choices: ['Widening the results.', 'Narrowing the results.', 'Reversing the logic to exclude groups.', 'No change to the dataset.'],
      type: 'MCQs',
      correctAnswers: ['Narrowing the results.'],
      score: 1,
      rationale:
        "Because ALL mapped conditions must evaluate to TRUE, the 'AND' operator acts as a strict bottleneck, significantly reducing the volume of the output.",
    },
    {
      question:
        "If you need an Access combo box to reference a static, manual array of choices (e.g., 'High;Medium;Low') instead of a live table, what character must separate the items?",
      choices: ['Comma (,)', 'Colon (:)', 'Semicolon (;)', 'Pipe (|)'],
      type: 'MCQs',
      correctAnswers: ['Semicolon (;)'],
      score: 1,
      rationale:
        'Access explicitly requires semicolons to parse raw text strings into individual dropdown list options within the property sheet.',
    },
    {
      question:
        'Exporting an Access Report to which format locks the formatting layout parameters to ensure the document appears identical on any device?',
      choices: ['Excel', 'Plain Text (.txt)', 'PDF', 'Word'],
      type: 'MCQs',
      correctAnswers: ['PDF'],
      score: 1,
      rationale:
        "The Portable Document Format (PDF) 'bakes' the layout, fonts, and graphics into a static, unalterable digital print, preventing the shifts that occur in Word or Excel.",
    },
    {
      question:
        'To write an Access expression tracking page counts in the Page Footer, what is the correct syntax?',
      choices: [
        '="Page " + [Page] + " of " + [Pages]',
        '="Page " & [Page] & " of " & [Pages]',
        'Count(Pages)',
        '=Page/Pages',
      ],
      type: 'MCQs',
      correctAnswers: ['="Page " & [Page] & " of " & [Pages]'],
      score: 1,
      rationale:
        'The ampersand (&) is the proper concatenation operator in Access used to cleanly merge literal text strings with system variable brackets.',
    },
    {
      question:
        'In MS Excel, what conditional entry rule formula forces input strictly to alphabetical characters, blocking direct numeric overrides?',
      choices: ['=ISALPHA(A1)', '=ISTEXT(A1)', '=FIND(TEXT, A1)', '=NOTNUMBER(A1)'],
      type: 'MCQs',
      correctAnswers: ['=ISTEXT(A1)'],
      score: 1,
      rationale:
        'This logical function evaluates if the data type is a string, intentionally throwing a FALSE error to block numerical inputs.',
    },
    {
      question:
        'If you wish to configure a Parameter Query in MS Access that acts as a dynamic filter, prompting the user for input, what characters must enclose the prompt message?',
      choices: ['Parentheses ( )', 'Curly brackets { }', 'Square brackets [ ]', 'Asterisks * *'],
      type: 'MCQs',
      correctAnswers: ['Square brackets [ ]'],
      score: 1,
      rationale:
        'Placing a text phrase in square brackets within the Criteria row instructs the database engine to halt execution and pop up an input dialog box for the user.',
    },
  ],
}