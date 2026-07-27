import type { LocalizedText } from '@/lib/collections';

export interface Job {
  role: string;
  org: string;
  period: string;
  points: LocalizedText[];
}
export interface School {
  degree: string;
  school: string;
  period: string;
  note?: string;
}
export interface Publication {
  title: string;
  year: number;
}
export interface Certificate {
  name: string;
  issuer?: string;
}

/** Photos for the About carousel. Drop files in public/images/about/ and list them
 *  here (e.g. '/images/about/1.jpg'). Empty entries render styled placeholders. */
export const photos: { src: string | null; alt: string }[] = [
  { src: null, alt: 'Photo 1' },
  { src: null, alt: 'Photo 2' },
  { src: null, alt: 'Photo 3' },
  { src: null, alt: 'Photo 4' },
];

export const profile: LocalizedText = {
  en: "A Computer Engineering master's graduate with experience across software engineering, artificial intelligence, and data science. Detail-oriented and endlessly curious — focused on full-stack development and AI, and always eager to learn something new.",
  id: 'Lulusan magister Teknik Komputer dengan pengalaman di rekayasa perangkat lunak, kecerdasan buatan, dan ilmu data. Teliti dan sangat ingin tahu — berfokus pada pengembangan full-stack dan AI, serta selalu bersemangat mempelajari hal baru.',
};

export const skills = [
  'TypeScript', 'React / MERN', 'Node.js', 'Laravel / PHP', 'Golang',
  'Python', 'Machine Learning', 'Data Science', 'AWS',
];

export const experience: Job[] = [
  {
    role: 'Fullstack Engineer — Apprenticeship',
    org: 'GoTo Impact Foundation',
    period: 'Jun – Dec 2023',
    points: [
      { en: 'Worked directly with industry professionals on the MERN stack.', id: 'Bekerja langsung dengan profesional industri menggunakan MERN stack.' },
      { en: 'Built a sales information system (UD. Mekar Sari), a multi-tenant car-wash service system, a coffee-shop landing page, and an online auction site.', id: 'Membangun sistem informasi penjualan (UD. Mekar Sari), sistem layanan cuci mobil multi-tenant, landing page kedai kopi, dan situs lelang daring.' },
      { en: 'Developed several sites with Laravel and vanilla PHP.', id: 'Mengembangkan beberapa situs dengan Laravel dan PHP murni.' },
    ],
  },
  {
    role: 'Facilitator — IT Support',
    org: 'Google Career Certificates 2024 × Telkom',
    period: 'May – Sep 2024',
    points: [
      { en: 'Mentored participants through their online learning journey and supported certification completion.', id: 'Membimbing peserta dalam perjalanan belajar daring dan mendukung penyelesaian sertifikasi.' },
    ],
  },
  {
    role: 'Facilitator — IT Support',
    org: 'Digital Talent Scholarship × Google Career Certificates',
    period: 'Apr – Jul 2024',
    points: [
      { en: 'Provided mentorship and guided participants to certification completion.', id: 'Memberikan bimbingan dan mengarahkan peserta hingga menyelesaikan sertifikasi.' },
    ],
  },
];

export const education: School[] = [
  { degree: 'Master of Computing — Social Computing', school: 'Universitas Telkom, Bandung', period: '2023 – 2025', note: 'GPA 3.84' },
  { degree: 'B.Eng Informatics — Information Management & Enterprise Systems', school: 'Universitas Surabaya', period: '2018 – 2022', note: 'GPA 3.52' },
];

export const publications: Publication[] = [
  { title: 'A Comparative Analysis of CNN and Vision Transformer Models for Smoker Identification', year: 2024 },
  { title: 'Enhancing Drug-Target Affinity Prediction with Multi-scale Graph Attention Network and Attention Mechanism', year: 2025 },
  { title: 'Improving Drug-Target Affinity Prediction Using Dynamic Graph Attention Network with Multi-scale Features and Attention Mechanism', year: 2025 },
];

export const certificates: Certificate[] = [
  { name: 'Cloud Practitioner Essentials', issuer: 'AWS' },
  { name: 'Node.js Developer (Express)' },
  { name: 'Google IT Support' },
  { name: 'Scalable Web Service with Golang' },
];

export const languages = [
  { name: 'Indonesian', level: 'Native' },
  { name: 'English', level: 'EPRT 570' },
];
