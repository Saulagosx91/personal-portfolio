export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Primer lugar en la feria Científica y Tecnológica. Categoría Tecnologías de la información y comunicación',
    issuer: 'Universidad Nacional de Ingeniería',
    date: '18/05/2023',
    url: '/feria-uni.jpeg',
  },
   {
    title: 'Tercer lugar en la categoría de innovación en el Rally Latinoamericano',
    issuer: 'Rally Latinoamericano de Innovación',
    date: '11/10/2023',
    url: '/Rally.jpeg',
  },
  {
    title: 'Curso de React y TypeScript - La Guía Completa',
    issuer: 'Udemy',
    date: '07/09/2025',
    url: '/certificado-udemy.jpg',
  },
];
