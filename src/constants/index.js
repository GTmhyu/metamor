const navLinks = [
  {
    name: "Project",
    link: "#work",
  },
  {
    name: "Pengalaman",
    link: "#experience",
  },
  {
    name: "Keterampilan",
    link: "#skills",
  },
  {
    name: "Testimoni",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ide", imgPath: "/images/ideas.svg" },
  { text: "Konsep", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Anda", imgPath: "/images/code.svg" },
  { text: "Ide", imgPath: "/images/ideas.svg" },
  { text: "Konsep", imgPath: "/images/concepts.svg" },  
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Anda", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 10, suffix: "+", label: "Tahun Pengalaman" },
  { value: 213, suffix: "+", label: "Total Client" },
  { value: 103, suffix: "+", label: "Project yang Diselesaikan" },
  { value: 99, suffix: "%", label: "Kepuasa Client" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Menghadirkan hasil berkualitas premium dengan ketelitian pada setiap aspek",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Menyampaikan perkembangan secara berkala di setiap langkah untuk menjamin transparansi dan kejelasan penuh",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time",
    desc: "Mengelola proyek agar selesai tepat waktu, dengan tetap mengutamakan kualitas dan kecermatan",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Merupakan project TKDN yang sukses kami realisasikan berdasarkan imajinasi dan konsep yang dimiliki oleh client.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Sculpture Park at Night",
    date: "17 January 2026 ",
    responsibilities: [
      "Dengan LED flexible yang dapat mengikuti krangka struktur.",
      "Bahan berkualitas yang membuatnya menjadi sangat baik untuk jangka panjang.",
      "Desain arsitektur yang modern dan berseni yang membuat tampilan menjadi lebih exclusive.",
    ],
  },
  {
    review: "Belum tau",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Project",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Dengan LED flexible yang dapat mengikuti krangka struktur.",
      "Bahan berkualitas yang membuatnya menjadi sangat baik untuk jangka panjang.",
      "Desain arsitektur yang modern dan berseni yang membuat tampilan menjadi lebih exclusive.",
    ],
  },
  {
    review: ".",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Dengan LED flexible yang dapat mengikuti krangka struktur.",
      "Bahan berkualitas yang membuatnya menjadi sangat baik untuk jangka panjang.",
      "Desain arsitektur yang modern dan berseni yang membuat tampilan menjadi lebih exclusive.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};