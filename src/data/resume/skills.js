const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Vue.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Datadog',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 1,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Neural Networks',
    competency: 3,
    category: ['ML Engineering'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Docker',
    competency: 1,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 4,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Control Mathematics',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Information Theory',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Generative Adversarial Networks (GANs)',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
