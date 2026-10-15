import { Topic } from '.'

export const cos100: Topic = {
  topic: 'COS 100 - Version Control ',
  level: 'null',
  totalQuestions: 40,
  totalScore: 50,
  totalTime: 2400, // estimate (40 min) - source had no time limit, adjust as needed
  questions: [
    {
  question:
    'What is the primary purpose of a Version Control System (VCS)?',
  choices: [
    'To record and manage changes made to files over time',
    'To compile source code into executable programs',
    'To design graphical user interfaces',
    'To increase a computer’s processing speed',
  ],
  type: 'MCQs',
  correctAnswers: ['To record and manage changes made to files over time'],
  score: 1,
  rationale:
    'A Version Control System tracks changes to files over time, allowing users to view history, compare versions, restore previous versions, and collaborate effectively.',
},
{
  question:
    'Which of the following is NOT a benefit of using a Version Control System?',
  choices: [
    'Maintaining a history of file modifications',
    'Supporting collaboration among multiple developers',
    'Automatically fixing programming errors',
    'Allowing users to restore previous versions',
  ],
  type: 'MCQs',
  correctAnswers: ['Automatically fixing programming errors'],
  score: 1,
  rationale:
    'A VCS tracks and manages changes but does not automatically detect or fix programming errors.',
},
{
  question:
    'A programmer repeatedly saves files as Project_v1, Project_v2, and Project_v3. Which problem does a Version Control System solve in this situation?',
  choices: [
    'It automatically manages file versions and history',
    'It converts the project into machine code',
    'It compresses the project into a ZIP file',
    'It permanently deletes old versions',
  ],
  type: 'MCQs',
  correctAnswers: ['It automatically manages file versions and history'],
  score: 1,
  rationale:
    'A VCS eliminates the need for manually creating multiple versions by recording every change in an organized history.',
},
{
  question:
    'Which of the following is one reason Version Control Systems improve productivity?',
  choices: [
    'Developers spend less time manually managing file versions',
    'Programs execute faster after every commit',
    'Internet connectivity is no longer required for all projects',
    'All programming bugs are automatically removed',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Developers spend less time manually managing file versions',
  ],
  score: 1,
  rationale:
    'By handling version tracking automatically, a VCS allows developers to focus on development instead of file management.',
},
{
  question:
    'Which type of Version Control System stores all versions on a single computer?',
  choices: [
    'Local Version Control System (LVCS)',
    'Centralized Version Control System (CVCS)',
    'Distributed Version Control System (DVCS)',
    'Cloud Version Control System',
  ],
  type: 'MCQs',
  correctAnswers: ['Local Version Control System (LVCS)'],
  score: 1,
  rationale:
    'A Local Version Control System keeps version history on one computer without relying on a server.',
},
{
  question:
    'Which of the following is an example of a Local Version Control System?',
  choices: ['RCS', 'Git', 'Mercurial', 'Subversion (SVN)'],
  type: 'MCQs',
  correctAnswers: ['RCS'],
  score: 1,
  rationale:
    'RCS (Revision Control System) is the example of a Local Version Control System given in the lecture note.',
},
{
  question:
    'Which of the following is a major disadvantage of a Local Version Control System?',
  choices: [
    'It does not support collaboration effectively',
    'It requires every user to have a complete repository',
    'It cannot store project files',
    'It always requires an internet connection',
  ],
  type: 'MCQs',
  correctAnswers: ['It does not support collaboration effectively'],
  score: 1,
  rationale:
    'Since all versions are stored locally, LVCS provides little or no support for collaborative software development.',
},
{
  question:
    'Which type of Version Control System stores project files and versions on a central server?',
  choices: [
    'Centralized Version Control System (CVCS)',
    'Distributed Version Control System (DVCS)',
    'Local Version Control System (LVCS)',
    'Manual Version Control System',
  ],
  type: 'MCQs',
  correctAnswers: ['Centralized Version Control System (CVCS)'],
  score: 1,
  rationale:
    'In a CVCS, all project files and version history are maintained on a central server that clients connect to.',
},
{
  question:
    'Which pair consists entirely of Centralized Version Control Systems?',
  choices: [
    'CVS and Subversion (SVN)',
    'Git and Mercurial',
    'RCS and Git',
    'Mercurial and RCS',
  ],
  type: 'MCQs',
  correctAnswers: ['CVS and Subversion (SVN)'],
  score: 1,
  rationale:
    'CVS and Subversion (SVN) are both examples of Centralized Version Control Systems.',
},
{
  question:
    'Why is a Centralized Version Control System considered to have a single point of failure?',
  choices: [
    'If the central server fails, users cannot access the shared repository',
    'Every developer keeps a complete copy of the repository',
    'It permanently deletes project history after each commit',
    'It only works on one operating system',
  ],
  type: 'MCQs',
  correctAnswers: [
    'If the central server fails, users cannot access the shared repository',
  ],
  score: 1,
  rationale:
    "Because the central server stores the project's shared history, its failure or downtime affects every connected user.",
},
{
  question:
    'Which statement best describes a Distributed Version Control System (DVCS)?',
  choices: [
    'Each user has a complete copy of the repository',
    'Only the server stores the complete repository',
    'Files are stored only on the developer’s local machine without synchronization',
    'It requires a constant internet connection for every operation',
  ],
  type: 'MCQs',
  correctAnswers: ['Each user has a complete copy of the repository'],
  score: 1,
  rationale:
    'A DVCS allows every user to clone the entire repository, including its complete history, making development possible even when offline.',
},
{
  question:
    'Which pair consists entirely of Distributed Version Control Systems?',
  choices: [
    'Git and Mercurial',
    'Git and CVS',
    'RCS and Mercurial',
    'SVN and CVS',
  ],
  type: 'MCQs',
  correctAnswers: ['Git and Mercurial'],
  score: 1,
  rationale:
    'Git and Mercurial are both Distributed Version Control Systems, whereas CVS and SVN are centralized systems.',
},
{
  question:
    'Which of the following is an advantage of a Distributed Version Control System?',
  choices: [
    'It allows developers to work offline',
    'It has only one copy of the repository',
    'It depends entirely on a central server',
    'It prevents developers from creating branches',
  ],
  type: 'MCQs',
  correctAnswers: ['It allows developers to work offline'],
  score: 1,
  rationale:
    'Since every developer has a complete local copy of the repository, most Git operations can be performed without an internet connection.',
},
{
  question:
    'Which of the following is a disadvantage of a Distributed Version Control System?',
  choices: [
    'It has a steeper learning curve for beginners',
    'It cannot support branching',
    'It does not keep project history',
    'It cannot be used for team collaboration',
  ],
  type: 'MCQs',
  correctAnswers: ['It has a steeper learning curve for beginners'],
  score: 1,
  rationale:
    'Although DVCSs are powerful and flexible, they are generally more difficult for beginners to learn than simpler systems.',
},
{
  question:
    'What is a repository (repo) in the context of version control?',
  choices: [
    'A storage location that contains project files, version history, and related information',
    'A software program used to write code',
    'A programming language',
    'A folder that stores only executable files',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A storage location that contains project files, version history, and related information',
  ],
  score: 1,
  rationale:
    'A repository stores the project files along with commit history and other information needed for version control.',
},
{
  question:
    'Which of the following is NOT typically contained in a repository?',
  choices: [
    'Source code',
    'Commit history',
    'Configuration files',
    'Computer hardware components',
  ],
  type: 'MCQs',
  correctAnswers: ['Computer hardware components'],
  score: 1,
  rationale:
    'Repositories contain digital project resources such as source code, documents, images, configuration files, and commit history—not physical hardware.',
},
{
  question:
    'Which of the following is NOT a function of a repository?',
  choices: [
    'Executing source code automatically',
    'Tracking modifications',
    'Maintaining project history',
    'Supporting collaboration',
  ],
  type: 'MCQs',
  correctAnswers: ['Executing source code automatically'],
  score: 1,
  rationale:
    'A repository stores and tracks project data; it does not automatically execute or run source code.',
},
{
  question:
    'Which type of repository is stored directly on a user’s computer?',
  choices: [
    'Local repository',
    'Remote repository',
    'Central repository',
    'Shared repository',
  ],
  type: 'MCQs',
  correctAnswers: ['Local repository'],
  score: 1,
  rationale:
    'A local repository resides on the developer’s own computer, allowing fast access and offline work.',
},
{
  question:
    'Which of the following is an advantage of a remote repository?',
  choices: [
    'It enables collaboration and centralized backup',
    'It eliminates the need for an internet connection',
    'It removes the need for local repositories',
    'It guarantees complete protection from security threats',
  ],
  type: 'MCQs',
  correctAnswers: ['It enables collaboration and centralized backup'],
  score: 1,
  rationale:
    'Remote repositories make collaboration easier by providing a shared location for project storage and backup.',
},
{
  question:
    'Which of the following platforms is commonly used to host remote Git repositories?',
  choices: [
    'GitHub',
    'Visual Studio Code',
    'Notepad++',
    'Microsoft Word',
  ],
  type: 'MCQs',
  correctAnswers: ['GitHub'],
  score: 1,
  rationale:
    'GitHub is one of the most popular cloud platforms for hosting remote Git repositories and supporting team collaboration.',
},
{
  question:
    'Which statement best defines Git?',
  choices: [
    'A distributed version control system used to manage software development projects',
    'A programming language for building web applications',
    'A cloud storage service for multimedia files',
    'A database management system',
  ],
  type: 'MCQs',
  correctAnswers: [
    'A distributed version control system used to manage software development projects',
  ],
  score: 1,
  rationale:
    'Git is a Distributed Version Control System (DVCS) developed to efficiently track changes, maintain project history, and support collaboration.',
},
{
  question:
    'Who developed Git in 2005?',
  choices: [
    'Linus Torvalds',
    'James Gosling',
    'Guido van Rossum',
    'Dennis Ritchie',
  ],
  type: 'MCQs',
  correctAnswers: ['Linus Torvalds'],
  score: 1,
  rationale:
    'Git was created by Linus Torvalds in 2005 to support the development of the Linux kernel.',
},
{
  question:
    'Which Git principle ensures that every developer has a complete copy of the repository?',
  choices: [
    'Distributed Architecture',
    'Data Integrity',
    'Snapshot-Based Storage',
    'Branching and Merging',
  ],
  type: 'MCQs',
  correctAnswers: ['Distributed Architecture'],
  score: 1,
  rationale:
    'Git follows a distributed architecture where each user clones the entire repository, including its complete history.',
},
{
  question:
    'Git uses hashing algorithms primarily to provide:',
  choices: [
    'Data integrity',
    'Internet connectivity',
    'Automatic code compilation',
    'Graphical user interfaces',
  ],
  type: 'MCQs',
  correctAnswers: ['Data integrity'],
  score: 1,
  rationale:
    'Git uses cryptographic hashing to ensure that data remains consistent and that changes can be verified reliably.',
},
{
  question:
    'Unlike some older version control systems, Git stores project history as:',
  choices: [
    'Snapshots of the project',
    'Only differences between files',
    'Compressed executable files',
    'Database records only',
  ],
  type: 'MCQs',
  correctAnswers: ['Snapshots of the project'],
  score: 1,
  rationale:
    'Git stores snapshots of the project at different points in time rather than only recording file differences.',
},
{
  question:
    'Which Git command is used to initialize a new Git repository in the current directory?',
  choices: [
    'git init',
    'git clone',
    'git status',
    'git add',
  ],
  type: 'MCQs',
  correctAnswers: ['git init'],
  score: 1,
  rationale:
    'The git init command creates a new Git repository so that Git can begin tracking the project.',
},
{
  question:
    'Which Git command displays modified, new, and staged files in a repository?',
  choices: [
    'git status',
    'git log',
    'git diff',
    'git reset',
  ],
  type: 'MCQs',
  correctAnswers: ['git status'],
  score: 1,
  rationale:
    'git status provides information about the current state of the working directory and staging area.',
},
{
  question:
    'After editing a file, which Git command places it in the staging area?',
  choices: [
    'git add',
    'git commit',
    'git merge',
    'git checkout',
  ],
  type: 'MCQs',
  correctAnswers: ['git add'],
  score: 1,
  rationale:
    'The git add command moves changes from the working directory into the staging area, preparing them for a commit.',
},
{
  question:
    'Which Git command permanently records staged changes in the local repository?',
  choices: [
    'git commit',
    'git push',
    'git pull',
    'git diff',
  ],
  type: 'MCQs',
  correctAnswers: ['git commit'],
  score: 1,
  rationale:
    'git commit saves a snapshot of the staged changes in the local repository along with a commit message.',
},
{
  question:
    'Which sequence correctly represents the basic Git workflow?',
  choices: [
    'Working Directory → git add → Staging Area → git commit → Local Repository → git push → Remote Repository',
    'Working Directory → git commit → git add → Remote Repository',
    'Remote Repository → git push → Local Repository → Staging Area',
    'Working Directory → git merge → git checkout → Remote Repository',
  ],
  type: 'MCQs',
  correctAnswers: [
    'Working Directory → git add → Staging Area → git commit → Local Repository → git push → Remote Repository',
  ],
  score: 1,
  rationale:
    'The standard Git workflow begins in the working directory, stages changes with git add, commits them locally with git commit, and finally uploads them to a remote repository using git push.',
},
]}