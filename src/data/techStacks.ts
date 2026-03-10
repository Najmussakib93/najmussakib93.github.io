export interface TechItem {
  name: string;
}

export interface TechCategory {
  category: string;
  emoji: string;
  items: TechItem[];
}

export const techStacks: TechCategory[] = [
  {
    category: 'Languages',
    emoji: '💻',
    items: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'C / C++' },
      { name: 'SQL' },
      { name: 'Java' },
    ],
  },
  {
    category: 'Machine Learning & AI',
    emoji: '🤖',
    items: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Scikit-learn' },
      { name: 'GANs' },
      { name: 'CNNs' },
      { name: 'NLP' },
      { name: 'LangChain' },
      { name: 'Computer Vision' },
    ],
  },
  {
    category: 'Data Science',
    emoji: '📊',
    items: [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Tableau' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Excel' },
    ],
  },
  {
    category: 'Web Technologies',
    emoji: '🌐',
    items: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Django' },
      { name: 'Flask' },
      { name: 'Ember.js' },
      { name: 'REST APIs' },
      { name: 'Bootstrap' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    category: 'Databases',
    emoji: '🗄️',
    items: [
      { name: 'MySQL' },
      { name: 'Oracle DB' },
      { name: 'AWS DynamoDB' },
      { name: 'Azure SQL' },
      { name: 'NoSQL' },
    ],
  },
  {
    category: 'Tools & Platforms',
    emoji: '🛠️',
    items: [
      { name: 'Git / GitHub' },
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'CI/CD' },
      { name: 'Linux' },
      { name: 'Agile / JIRA' },
      { name: 'Streamlit' },
    ],
  },
];
