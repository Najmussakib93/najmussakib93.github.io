export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  description?: string;
  highlights?: string[];
  research?: {
    title: string;
    points: string[];
    tech: string[];
  };
}

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science (M.Sc.) in Computer Science',
    institution: 'Lamar University',
    location: 'Beaumont, TX, USA',
    period: 'Jan 2022 – Dec 2023',
    description: 'Focused on machine learning, distributed systems, and algorithm analysis.',
    highlights: [
      'Relevant Coursework: Software Engineering, Computer Networks, Distributed Computing Systems, Advanced Operating Systems, Analysis of Algorithms',
    ],
  },
  {
    degree: 'Bachelor of Technology (B.Tech.) in Computer Science and Engineering',
    institution: 'National Institute of Technology Warangal',
    location: 'Warangal, India',
    period: 'Jun 2017 – Oct 2021',
    description: 'Graduated from one of India\'s premier technical institutes. Recipient of the ICCR Scholarship awarded by the Government of India.',
    highlights: [
      'Relevant Coursework: Foundations of CS, Linear Algebra, Algorithms, Numerical Methods, Automata & Computability, Artificial Intelligence, OS, DBMS, IoT',
      '2nd place — Inter NIT & IIT ICPC Coding Competition',
    ],
    research: {
      title: 'Attentive-Normalized Generation of Images for Semantic Layout Information',
      points: [
        'Designed a novel GAN architecture for layout-to-image synthesis, introducing Attentive Normalization (AN) for improved semantic consistency',
        'Built a multi-stage generator (Object Composer → Encoder → convLSTM Object Fuser → Decoder) with dual discriminators',
        'Trained on MS COCO (70k+ images) — achieved FID 38.02 vs. 38.14 and 50.7% vs. 49.8% classification accuracy over Layout2Im',
        'Applied to CIFAR-10 class imbalance correction, improving ResNet-110 classification across severely imbalanced classes',
      ],
      tech: ['Python', 'PyTorch', 'GANs', 'convLSTM', 'MS COCO', 'Computer Vision'],
    },
  },
];
