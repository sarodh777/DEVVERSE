export const EVENTS_DATA = [
  {
    id: "technical-awareness-quiz",
    code: "DEVCS00QT1",
    number: "EVENT 01",
    title: "Quiz on Technical Awareness",
    shortTitle: "Technical Awareness",
    subtitle: "Inter-Collegiate Mind Sport on Computer & Technical Awareness",
    category: "Technical Quiz",
    badgeColor: "from-white to-neutral-400",
    glowColor: "rgba(255, 255, 255, 0.4)",
    teamFormat: "Team of 2 Members", // Strictly highlighted per instructions
    isTeamEvent: true,
    mode: "Online",
    date: "25 November 2026",
    day: "Wednesday",
    time: "9:00 AM",
    hasStartTime: true,
    organizer: "DEVVERSE, Dept. of CSE, Karavali Institute of Technology, Mangalore",
    about: "The Forum events series is organized by DEVVERSE, under the aegis of the Department of Computer Science & Engineering, Karavali Institute of Technology, Mangalore. A platform for mind sport played between teams of two, wherein the competitors are asked questions on various domains. It is an assessment of a person’s knowledge, skills, and abilities.",
    objectives: [
      "To improve reading habits and technical curiosity",
      "To teach accepting failure and strategic resilience",
      "To build confidence in competitive time-bound assessments",
      "To hone your ability to think under pressure",
      "Knowing and identifying your knowledge gaps in computing"
    ],
    eligibility: {
      targetGroup: "1st & 2nd Year Students",
      disciplines: "Open for only 1st & 2nd Year from any Engineering Discipline",
      teamRequirement: "Each team must consist of two members from the same college or university.",
      capacity: "A maximum of 60 participants will be admitted on a first-come, first-served basis.",
      systemRequirement: "Laptop with high-speed internet connection is mandatory."
    },
    competitionStructure: {
      summary: "The competition will be conducted online in three rounds:",
      rounds: [
        {
          name: "Preliminary Round",
          theme: "Computer General Awareness",
          structure: "25 Questions in 15 minutes",
          scoring: "+2 points for each correct answer; -1 point deduction for each incorrect answer",
          qualification: "The top 50% participants will qualify for the next round.",
          details: "All successfully registered participants will take part. Login links and individual user ID & Password will be delivered via email."
        },
        {
          name: "Semi-Final Round",
          theme: "Social Media & Awareness on Social Networking Sites + Traffic Rules and Road Safety Awareness",
          structure: "20 Questions in 10 minutes",
          scoring: "+5 points for each correct answer; -2 points deduction for each incorrect answer",
          qualification: "The top 50% participants of the semifinal round will advance to the final round.",
          details: "Administered strictly under Safe Browser Mode."
        },
        {
          name: "Final Round",
          theme: "Student Health Awareness + Awareness on Excessive & Uncontrollable Mobile Phone Usage",
          structure: "15 Questions in 10 minutes",
          scoring: "+10 points for each correct answer; -3 points deduction for each incorrect answer",
          qualification: "Crowns the top team champions based on aggregate precision and speed.",
          details: "Bonus round questions will be utilized to break ties if scores match."
        }
      ]
    },
    rules: [
      "Quiz participation is strictly for a TEAM OF TWO (2) MEMBERS. Individual participation is not permitted.",
      "Laptop with active internet is mandatory.",
      "Quiz will be conducted through only 'Safe Browser Mode'. During the quiz, you will be unable to open any browser, new tab, or laptop file system. The desktop will be blank from any other applications.",
      "Participation in the Mock Round is mandatory before entering the elimination round.",
      "Bonus questions with a special round will be used to resolve ties and determine advancement.",
      "Participants must maintain fair competition and avoid misconduct.",
      "The quizmasters' decisions will be final and binding."
    ],
    coordinators: [
      { name: "Aparna", phone: "9019761447" },
      { name: "Riza", phone: "9632572674" },
      { name: "P O Rakshitha", phone: "8904154377" },
      { name: "Nawaz", phone: "7795308065" },
      { name: "Palesh", phone: null }
    ]
  },
  {
    id: "codewars-1",
    code: "Codewars:-I",
    number: "EVENT 02",
    title: "Codewars-I (Code War)",
    shortTitle: "Codewars-I",
    subtitle: "Intense C Language Combat to Decode 100+ Programs",
    category: "Coding Battle",
    badgeColor: "from-white to-neutral-400",
    glowColor: "rgba(255, 255, 255, 0.4)",
    teamFormat: "Individual Competition",
    isTeamEvent: false,
    mode: "Online",
    date: "25 November 2026",
    day: "Wednesday",
    time: "12:00 PM",
    hasStartTime: true,
    organizer: "DEVVERSE, Dept. of CSE, Karavali Institute of Technology, Mangalore",
    about: "Codewars-I is a premier Coding competition in 'C Language' to decode 100+ C Programs. Designed to test your coding efficiency in C, verify your industry readiness for placement preparation, and excel in your programming career.",
    objectives: [
      "Test coding efficiency and low-level algorithmic mastery in C",
      "Check your industry readiness for top tier engineering campus placements",
      "Excel your programming career with strong foundations in pointers, memory, and data structures",
      "Cultivate speed, syntax accuracy, and debugging proficiency under timed constraints"
    ],
    eligibility: {
      targetGroup: "3rd & 4th Year Students",
      disciplines: "Registration open for only 3rd & 4th Year from any Engineering Discipline",
      teamRequirement: "Individual participation only",
      capacity: "A maximum of 50 participants will be admitted on a first-come, first-served basis.",
      systemRequirement: "Laptop with high-speed internet connection is mandatory."
    },
    competitionStructure: {
      summary: "The competition will be conducted online in three rounds:",
      rounds: [
        {
          name: "Preliminary Round",
          theme: "Fundamental C Programs",
          structure: "Write two programs in C Language and show output in 30 minutes",
          scoring: "Evaluated on correctness and execution speed",
          qualification: "Maximum top 50% participants will qualify as per shortest time of successful execution of 2 programs for the next round.",
          details: "All registered participants use the online platform to compile code through safe browser platform. Credentials sent via email."
        },
        {
          name: "Semi-Final Round",
          theme: "Array C Programs",
          structure: "Write 1 program in C Language and show output in 20 minutes",
          scoring: "Evaluated on correctness and execution time",
          qualification: "Maximum top 50% participants will qualify as per shortest time of successful execution of 1 program for the next round.",
          details: "Advanced multi-dimensional arrays, searching, and sorting operations."
        },
        {
          name: "Final Round (Two Phases)",
          theme: "Miscellaneous C Programs",
          structure: "Phase-I: Execute one Program successfully in 20 minutes. Phase-II: Compete in 5 technical questions in 10 minutes.",
          scoring: "Phase-II: +5 points for correct answer; -3 points deduction for incorrect answer.",
          qualification: "Final standing determined by cumulative score of Phase-I execution and Phase-II technical quiz.",
          details: "Bonus viva questions on programming with a special round will be used to resolve ties."
        }
      ]
    },
    testSyllabus: [
      "Print statement and C Syntax",
      "Variables and datatypes",
      "Operators",
      "Strings",
      "User inputs",
      "Conditional statements",
      "Debugging in C",
      "Arrays",
      "Loops",
      "Functions in C",
      "Pointers and Structures"
    ],
    hasInteractiveCatalog: true,
    totalCatalogCount: "100+ Programs (178 Detailed Challenges)",
    rules: [
      "Laptop with internet connection is mandatory.",
      "Event will be conducted through only 'Safe Browser Mode'. During the event you will be unable to open any browser, new tab, or laptop file system. Desktop will be blank from any other applications.",
      "Participation in Mock Round is mandatory before entering elimination round.",
      "Bonus viva questions on programming with a special round will be used to resolve ties and determine advancement.",
      "Participants must maintain fair competition and avoid misconduct. Malpractice results in instant cancellation.",
      "The Codemasters' decisions will be final and binding."
    ],
    coordinators: [
      { name: "Yakshayini", phone: null },
      { name: "Wilma", phone: null },
      { name: "Samskruta", phone: "7619327387" },
      { name: "Khushi", phone: "9632118507" },
      { name: "Varshan", phone: "7353291749" },
      { name: "Prashanth", phone: "6362976502" }
    ]
  },
  {
    id: "preplacement-preparation-quiz",
    code: "DEVCS00QP01",
    number: "EVENT 03",
    title: "Quiz on Preplacement Preparation",
    shortTitle: "Preplacement Prep Quiz",
    subtitle: "Aptitude, Reasoning & Technical Gateway for Placement Drives",
    category: "Placement Aptitude",
    badgeColor: "from-white to-neutral-400",
    glowColor: "rgba(255, 255, 255, 0.4)",
    teamFormat: "Individual Competition",
    isTeamEvent: false,
    mode: "Online",
    date: "26 November 2026",
    day: "Thursday",
    time: "To Be Announced",
    hasStartTime: false,
    organizer: "DEVVERSE, Dept. of CSE, Karavali Institute of Technology, Mangalore",
    targetedCompanies: [
      "Infosys",
      "Accenture",
      "Capgemini",
      "HCL Technologies",
      "IBM",
      "HP",
      "TCS",
      "Nokia",
      "L & T"
    ],
    about: "Aptitude is one of the basic requirements for every job seeker. Strong aptitude skills will help you boost your confidence and develop your decision-making skills. To improve your skills in verbal ability, reasoning, and technical efficiency in order to face the interview, competitive examination, and various entrance tests boldly, you can learn and practice through this comprehensive multi-round benchmark.",
    objectives: [
      "Boost your confidence and develop sharp decision-making skills under timed pressure",
      "Master Quantitative Aptitude required by top tier recruitment firms",
      "Sharpen Verbal Ability and Logical Reasoning instincts",
      "Enhance Technical Efficiency in C Language and Pseudocode interpretation"
    ],
    eligibility: {
      targetGroup: "4th Year Students",
      disciplines: "Registration open for only 4th Year from any Engineering Discipline",
      teamRequirement: "Individual participation only",
      capacity: "A maximum of 60 participants will be admitted on a first-come, first-served basis.",
      systemRequirement: "Laptop with high-speed internet connection is mandatory."
    },
    competitionStructure: {
      summary: "The competition will be conducted online in 3 rounds:",
      rounds: [
        {
          name: "Preliminary Round",
          theme: "Quantitative Aptitude",
          structure: "20 Questions in 15 minutes",
          scoring: "+2 points for each correct answer; -1 point deduction for each incorrect answer",
          qualification: "The top 50% participants will qualify for the next round.",
          details: "All registered will participate. Login links and individual user ID & Password delivered via email. Mock round mandatory beforehand."
        },
        {
          name: "Semifinal Round",
          theme: "Verbal Ability & Reasoning Ability",
          structure: "20 Questions in 10 minutes",
          scoring: "+5 points for each correct answer; -2 points deduction for each incorrect answer",
          qualification: "The top 50% participants of semifinal round will advance to the final round.",
          details: "Evaluates verbal interpretation, logical deductions, and analytical speed."
        },
        {
          name: "Final Round",
          theme: "Technical Ability (C Language & Pseudocode)",
          structure: "6 Questions in 10 minutes",
          scoring: "+10 points for each correct answer; -3 points deduction for each incorrect answer",
          qualification: "Final standing determines the premier preplacement toppers.",
          details: "High-level algorithmic trace, complexity analysis, and output prediction."
        }
      ]
    },
    rules: [
      "Open exclusively to 4th Year Engineering students across any discipline.",
      "Laptop with internet connection is mandatory.",
      "Quiz will be conducted through only 'Safe Browser Mode'. During quiz you will be unable to open any browser, new tab, or laptop file system. Desktop will be blank from other applications.",
      "Participation of Mock Round is mandatory before entering elimination round.",
      "Bonus questions with special round will be used to resolve ties and determine advancement.",
      "Participants must maintain fair competition and avoid misconduct.",
      "The quizmasters' decisions will be final and binding."
    ],
    coordinators: [
      { name: "Sharadhi", phone: "8217651859" },
      { name: "Parvati", phone: "7892412043" },
      { name: "Meghana", phone: null },
      { name: "Likitha", phone: null },
      { name: "Tushar", phone: null },
      { name: "Pradeep", phone: null }
    ]
  },
  {
    id: "tech-room-escape",
    code: "DEVCS00QN01",
    number: "EVENT 04",
    title: "Tech Room Escape",
    shortTitle: "Tech Room Escape",
    subtitle: "Three-Room Progressive Algorithmic & Decryption Challenge",
    category: "Technical Escape Arena",
    badgeColor: "from-white to-neutral-400",
    glowColor: "rgba(255, 255, 255, 0.4)",
    teamFormat: "Individual Challenge",
    isTeamEvent: false,
    mode: "Online",
    date: "26 November 2026",
    day: "Thursday",
    time: "To Be Announced",
    hasStartTime: false,
    organizer: "DEVVERSE, Dept of CSE, KIT, Mangalore",
    collaborators: "Institution’s Innovation Council (IIC), KIT, Mangalore",
    about: "Tech Room Escape is an immersive technical challenge structured around a three-room progressive format. Designed to assess rapid problem-solving, algorithmic deduction, and conceptual reasoning, participants must solve computational riddles and cryptographic puzzles to unlock sequential rooms and achieve final escape clearance.",
    objectives: [
      "Promote analytical problem-solving and rapid computational decryption",
      "Navigate through sequential locked room challenges and logic barriers",
      "Reinforce digital awareness, constitutional fundamentals, and algorithmic reasoning",
      "Complete all escape checkpoints under strict time-locked evaluation"
    ],
    eligibility: {
      targetGroup: "All UG & PG Students",
      disciplines: "Open to all undergraduate and postgraduate students from any stream or discipline",
      teamRequirement: "Individual participation only",
      capacity: "Open participant access across university",
      systemRequirement: "Computer or laptop with internet capability"
    },
    competitionStructure: {
      summary: "Three-Room Sequential Escape Structure:",
      rounds: [
        {
          name: "Room 1: Decryption Chamber",
          theme: "Making of the Indian Constitution, Preamble & Foundational Tech Puzzles",
          structure: "20 Questions to be completed within 10 minutes (600 seconds)",
          scoring: "Timed accuracy. All questions must be completed correctly to unlock access token for Room 2.",
          qualification: "Clearing Room 1 qualifies participants for Room 2 breach.",
          details: "Available in English. Single attempt per participant allowed. Mock round mandatory beforehand."
        },
        {
          name: "Room 2: The Logic Vault",
          theme: "Algorithmic Gates, Voting Rights & Democratic System Mazes",
          structure: "Time-bound logic puzzles & verification hurdles",
          scoring: "Precision and deduction speed",
          qualification: "Top qualifying participants advance to the final escape gate.",
          details: "Administered strictly under locked Safe Browser environment."
        },
        {
          name: "Room 3: The Terminal Gate",
          theme: "Master Escape Challenge & Rapid Output Decryption",
          structure: "Final rapid execution & terminal decryption",
          scoring: "Shortest completion time wins",
          qualification: "Winners are selected through an automated verification process among cleared escapees.",
          details: "Bonus tie-breaker questions used if completion times match."
        }
      ]
    },
    rules: [
      "Open to all undergraduate and postgraduate students.",
      "Individual participation only.",
      "Participants must complete all three-room escape challenges within the stipulated time.",
      "Only one attempt per participant is allowed.",
      "Participants must clear all room milestones correctly to qualify for winner selection.",
      "Winners are selected through an automated verification process.",
      "Participation in Mock Round is mandatory before the event."
    ],
    coordinators: [
      { name: "Shrusti", phone: null },
      { name: "Suhas", phone: null },
      { name: "Likith", phone: null },
      { name: "Riha", phone: "8197037110" },
      { name: "Sukany J", phone: null },
      { name: "Rakshitha", phone: null },
      { name: "Spruti", phone: null },
      { name: "Shruti", phone: "7259412992" }
    ]
  }
];

export const FESTIVAL_INFO = {
  name: "DEVVERSE 2026",
  tagline: "Think. Compete. Create. Conquer.",
  department: "Department of Computer Science & Engineering",
  institution: "Karavali Institute of Technology, Mangalore",
  dates: "25 & 26 November 2026",
  mode: "100% Online Competitions",
  accreditation: "In collaboration with Institution’s Innovation Council (IIC), KIT",
  aboutOverview: "DEVVERSE 2026 is the flagship inter-collegiate technical event series organized by the Department of Computer Science & Engineering at Karavali Institute of Technology, Mangalore. Designed as a high-octane digital arena across two days of technology, DEVVERSE bridges theoretical computing, low-level systems programming, placement aptitude, and cryptographic escape challenges into an elite competitive arena conducted entirely through modern Safe Browser protocols."
};

export const REGISTRATION_URL = "https://forms.gle/qx9YKdKizJaDkb2J6";
