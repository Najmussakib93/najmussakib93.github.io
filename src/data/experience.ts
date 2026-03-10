export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance' | 'Research';
  description: string;
  highlights: string[];
  tech?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Data Analyst',
    company: 'Script Care Ltd',
    location: 'Beaumont, TX',
    period: 'Oct 2024 – Sep 2025',
    type: 'Full-time',
    description: 'Conducted large-scale statistical research and deployed ML solutions for a leading pharmacy benefits management company.',
    highlights: [
      'Analyzed 10M+ pharmacy claims and member records using SQL and Python, contributing to a 15% improvement in rebate accuracy',
      'Built predictive models for claims cost forecasting, enabling early identification of $250K+ in potential cost discrepancies',
      'Developed automated healthcare utilization and cost-containment reports, reducing manual reporting time by 40%',
      'Conducted variance and trend analyses supporting quarterly business reviews, improving operational efficiency by 20%',
      'Ensured 100% audit readiness for state-level PBM submissions through peer-reviewed validation processes',
    ],
    tech: ['Python', 'SQL', 'Tableau', 'Scikit-learn', 'Excel', 'Pandas'],
  },
  {
    title: 'Research Assistant (Data Science)',
    company: 'Lamar University',
    location: 'Beaumont, TX',
    period: 'Mar 2024 – Oct 2024',
    type: 'Research',
    description: 'Applied NLP and machine learning to disaster event detection from social media data.',
    highlights: [
      'Scraped and compiled 27,000+ disaster-related tweets across 9 major events (2011–2019) using BeautifulSoup and Python',
      'Engineered labeled datasets for supervised ML models in disaster detection and event classification',
      'Applied Logistic Regression, SVM, and LSTM models to classify disaster tweets, flagging events within an average of 4 minutes',
    ],
    tech: ['Python', 'BeautifulSoup', 'Scikit-learn', 'LSTM', 'NLP', 'Pandas'],
  },
  {
    title: 'Software Development Engineer Intern',
    company: 'Amazon Music',
    location: 'Los Angeles, CA',
    period: 'May 2023 – Aug 2023',
    type: 'Internship',
    description: 'Worked on the art19 platform, improving developer tooling and deployment infrastructure for a team of 200+ engineers.',
    highlights: [
      'Designed and built a dynamic feature flag service using Ember.js, reducing deployment times by 20%',
      'Built a user-centric interface for feature flag management, improving real-time operability and access control for 200+ developers',
      'Established a "source of truth" for feature flags, significantly reducing configuration errors across dev and QA teams',
      'Authored a comprehensive design document detailing requirements, proposed solutions, and test cases',
      'Participated in full Agile cycle: sprint planning, stand-ups, retrospectives; code reviews via Git, task tracking via JIRA',
    ],
    tech: ['JavaScript', 'Ember.js', 'Git', 'JIRA', 'Agile', 'CI/CD'],
  },
  {
    title: 'Data Analyst',
    company: 'Lamar University',
    location: 'Beaumont, TX',
    period: 'May 2022 – Dec 2023',
    type: 'Full-time',
    description: 'Built data-driven systems and ML models to support university-wide academic decision-making for 8,000+ students and 520+ faculty.',
    highlights: [
      'Developed ML models in Python to predict student success, leading to a 10% increase in student retention',
      'Engineered SEDIE (Strategic Educational Data Insight Engine) using Pandas and Matplotlib, enabling data-driven evaluation for 520 faculty',
      'Built a course recommendation system using Clustering and SVM, optimizing course selection for 8,000+ students',
      'Analyzed enrollment data for 70 courses; presented findings in Excel and Tableau to university leadership',
      'Extracted and manipulated 20,000+ student records using SQL for timely data analysis',
    ],
    tech: ['Python', 'SQL', 'Pandas', 'Scikit-learn', 'Tableau', 'Matplotlib'],
  },
  {
    title: 'Software Engineer',
    company: 'Web and Development Service Centre, NIT Warangal',
    location: 'Warangal, India',
    period: 'Jul 2018 – Oct 2020',
    type: 'Part-time',
    description: 'Developed full-stack MIS applications and data dashboards for a university community of 10,000+ users.',
    highlights: [
      'Built full-stack solutions using Python and JavaScript for MIS applications used by 10,000+ students and faculty',
      'Designed KPIs and reporting dashboards to track performance metrics and optimize departmental operations',
      'Designed responsive UIs with Bootstrap; implemented backend APIs focused on scalability',
    ],
    tech: ['Python', 'JavaScript', 'Bootstrap', 'REST APIs', 'SQL'],
  },
];
