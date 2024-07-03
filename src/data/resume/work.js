/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Queen\'s University Dept. of Math and Stats',
    position: 'Multi-Agent Simulations and Control Developer',
    url: 'https://www.youtube.com/watch?v=WFKh2sHlbNU',
    startDate: '2023-04-01',
    endDate: '2023-08-01',
    summary: 'Worked to improve and develop new technical department resources related to the teaching of control mathematics and multi agent simulations.',
    highlights: [
      'Modernized and added functionality to a legacy Matlab application for designing control systems for blackbox systems. Code included implementing numerical methods of systems dynamics.',
      'Designed and developed a multi agent system of Arduino robots using Arduino to communicate over a python server and move according to various group dynamic algorithms. These included Lloyd\'s algorithm and group consensus algorithms including flocking and formation',
    ],
  },
  {
    name: 'Dash Hudson',
    position: 'Full Stack Development Intern',
    url: 'https://www.dashhudson.com/',
    startDate: '2022-04-01',
    endDate: '2022-09-01',
    summary: 'Dash Hudson is a Social Media Analytics platforms for commercial use. Facilitates the extraction of insights from engagement data across all major social media platforms',
    highlights: [
      'Worked with an AGILE team of 6 engineers to deliver production level code on a weekly basis.',
      'Learned best practices of micro-service architecture along with data collection, data integrity, feature engineering, backtesting, deployment, and reporting.',
    ],
  },
  {
    name: 'Queen\'s Algorithmic Trading Team',
    position: 'Director of Education',
    url: 'https://quanttgroup.wixsite.com/quantt/resources',
    startDate: '2022-09-01',
    endDate: '2024-02-01',
    summary: 'Served on the Executive team of Queen\'s University Algorithmic Trading Team (QUANTT), a 60 person club focused on education around quantitative trading techniques',
    highlights: [
      'Delivered lectures to general members on topics including an introduction to trading algorithms, options trading, and natural language processing',
      'Served as a general member in my first year and competed in the live algorithmic trading competition.',
    ],
  },
  {
    name: 'Queen\'s Engineering Society',
    position: 'Engineering Formal Finance Chair',
    url: 'https://scienceformal.ca/',
    startDate: '2023-08-01',
    endDate: '2024-04-01',
    summary: 'A 121 year tradition for the Queen\'s University Engineering Society. At the beginning of the year, our team of 6 chairs was given $70K loan from the society and with this we plan and construct our own themed venue for our engineering formal.',
    highlights: [
      'Worked with a team of 6 chairs, 21 managers, and 430 student volunteers to construct the venue',
      'Managed the finances in areas including logistics, contruction, art, and communications. Ended the year with a successful event and a balanced budget.',
    ],
  },
  {
    name: 'QMIND',
    position: 'Project Manager',
    url: 'https://qmind.ca/',
    startDate: '2021-09-01',
    endDate: '2023-09-01',
    summary: 'Led client facing projects at Canada\'s largest undergraduate machine learning club with over 250 members',
    highlights: [
      'Worked under a non-disclosure agreement with TD bank on a Machine learning project. Created a machine learning pipeline capable of processing sparce datasets to train a custom neural network',
      'Worked for a Health Care Analytics lab to a twitter-based NLP study on the effect of public sentiment on treatments practices in emergency rooms. Designed a RNN to extract sentiment from tweets using the twitter API.',
    ],
  },
  {
    name: 'ACTEAST',
    position: 'Project Manager, Research Assistant',
    url: 'https://www.h-coal.com/',
    startDate: '2021-5-01',
    endDate: '2021-09-01',
    summary: 'The Health Care Optimization and Analytics lab is a NOva Scotia based lab undertaking research in optimizing health care systems across Canada. ACTEAST was one such project that I was the project manager of. A study was conducted to identify pressure points in the emergency stroke treatment process and address them through professional education',
    highlights: [
      'Researched novel and developing uses of artificial intelligence in  health care. My work was centered around developing convolutional neural networks to identfy certain types of occlusions in stroke patient CT scans. Presented my findings to a graduate level lab',
      'Managed the administrative work behind the ACTEAST improvement collaborative. Helped organize event for hundreds of practicing ER physicians in Atlantic Canada.',
    ],
  },
];

export default work;
