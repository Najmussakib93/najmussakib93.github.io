export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: 'Attentive-Normalized GAN for Image Synthesis',
    description: 'Novel GAN architecture for layout-to-image synthesis introducing Attentive Normalization (AN). Trained on MS COCO (70k+ images), achieving FID 38.02 vs. 38.14 baseline and 50.7% vs. 49.8% classification accuracy over Layout2Im. Also applied to CIFAR-10 class imbalance correction.',
    tech: ['Python', 'PyTorch', 'GANs', 'CNNs', 'MS COCO', 'convLSTM'],
    github: 'https://github.com/Najmussakib93/Attentive-Normalized-Generation-of-Images-from-Semantic-Layout-Information',
    featured: true,
  },
  {
    title: 'SoccerIQ — Agentic Match Insights',
    description: 'AI-powered football analytics platform using LangChain and GPT-4o to answer natural-language queries about match data. Analyzes 38-match seasons across MLS and European leagues, generating 10+ derived KPIs. Reduced manual analysis time by ~70%.',
    tech: ['Python', 'LangChain', 'GPT-4o', 'Streamlit', 'API-Football'],
    github: 'https://github.com/Najmussakib93/SoccerIQ-Agentic-Match-Insights',
    featured: true,
  },
  {
    title: 'Fraud Risk Prediction — Credit Card Transactions',
    description: 'End-to-end fraud detection pipeline on the ULB dataset (0.17% fraud rate). Applied SMOTE for class balancing and tuned a Random Forest classifier achieving 98.3% ROC-AUC and 89% recall — identifying the most predictive PCA components (V17, V14, V12).',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'Random Forest', 'PCA', 'Pandas'],
    github: 'https://github.com/Najmussakib93/FRAUD-RISK-PREDICTION-MODEL-CREDIT-CARD-TRANSACTIONS',
    featured: true,
  },
  {
    title: 'Texas Election Shift Analyzer',
    description: 'Interactive dashboard analyzing county-level voting pattern shifts across Texas (2016–2024). Features choropleth maps, stacked bar charts, and AI-generated political insights via GPT-4.',
    tech: ['Python', 'Streamlit', 'Plotly', 'GPT-4', 'Pandas', 'GeoJSON'],
    github: 'https://github.com/Najmussakib93/texas-election-shift-analyzer',
    featured: false,
  },
  {
    title: 'Pharmacy Claims Fraud Detection',
    description: 'End-to-end healthcare fraud detection system for pharmacy billing data. Uses Azure SQL for data warehousing with Python-based ML models to flag anomalous claims patterns.',
    tech: ['Python', 'Azure SQL', 'Machine Learning', 'SQL'],
    github: 'https://github.com/Najmussakib93/pharmacy-claims-fraud-detection',
    featured: false,
  },
  {
    title: 'Stroke Risk Prediction',
    description: 'Predictive model assessing stroke risk from patient health data (age, gender, health conditions, smoking status), achieving 95% accuracy. Comprehensive EDA with Matplotlib and Seaborn.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/Najmussakib93/Stroke-Prediction-Using-Machine-Learning',
    featured: false,
  },
  {
    title: 'Strategic Educational Data Insight Engine (SEDIE)',
    description: 'Python analytics platform processing 20,000+ student records to support data-driven decision-making for 520+ faculty. Features comparative studies, interactive visualizations, and a course recommendation system using Clustering and SVM.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn', 'SQL', 'SVM'],
    featured: false,
  },
  {
    title: 'Multi-Threaded Chat Room Service',
    description: 'Client-server application in C enabling real-time multi-client communication via socket connections and pthreads. Implements server-side queue management, thread handling, and built-in error recovery.',
    tech: ['C', 'Sockets', 'pthreads', 'Systems Programming'],
    github: 'https://github.com/Najmussakib93/MULTI-THREADED-CHAT-ROOM-SERVICE',
    featured: false,
  },
];
