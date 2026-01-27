import { faBuilding, faSackDollar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Lang, ProjectsLang } from './types';
import { OverviewLang } from './types';
import { IRLang } from "./types";
import { PageKey } from "./types";
import { FooterLang } from "./types";
import { projectsEn } from "./projectsEn";


const projects: ProjectsLang = {
 
};

const en: Lang = {
  projects: projectsEn,

  nav: {
    works: 'Home ',
    about: 'About Us',
    contact: 'Projects',
    chairman: 'Media center',
    board: 'investors Relations',
    last: 'Contact',
  },

  hero: {
    title1: 'Promising Real Estate Investment',
    title2: 'Innovative Urban Development',
    desc:
      "The First Avenue Real Estate Development Company is one of the leading companies in the field of real estate investment and development, headquartered in Riyadh. The company has achieved rapid growth to become one of the prominent and leading players in creating sustainable investment opportunities through innovative real estate development.",
    btn: 'Our Works',
  },

  about: {
    overlayFirst: 'About',
    overlaySecond: 'Us',
    text:
     "Al Jada First Real Estate Development is one of the distinguished companies in real estate investment and development, headquartered in Riyadh. The company has achieved rapid growth to become one of the leading and prominent companies in creating sustainable investment opportunities through innovative real estate development.",
    boxes: [
      { number: '+129k m²', desc: 'Total Built Area', icon: faBuilding },
      { number: '+2 Billion SAR', desc: 'Project Volume', icon: faSackDollar },
      { number: '+25 Projects', desc: 'Total Projects', icon: faHouse },
    ],
  },

  ux: {
    firstWord: 'Project',
    secondWord: 'Images',
    thirdWord: '',
  },

  uxx: {
    first: 'Latest',
    second: 'Projects',
    third: '↙',
  },

  ui: {
    interestBtn: 'Register Interest',
  },
  uii: {
  interestBtn: ' Information',
},
uiii: {
  interestBtn: ' Project',
},
mi: {
    first: 'location',
    second: 'Projects',
    third: '↙',
  },
   mii: {
 btn: "Riyadh",
  btn2: "Jeddah",
},
mix: {
  first: "Media",
  second: "Center",
  third: "↙",
title: "The company achieved rapid growth to become one of the prominent and leading companies...",
  date: "April 12, 2025",
  description: "Aljada Aloula Real Estate Development is one of the distinguished companies in real estate investment and development, headquartered in Riyadh."
},
mixx: {
  first: "success",
  second: "partners",
  third: "",
  },
 footer:{
    slogan: {
      enTitle: "FIRST AVENUE",
      enSubTitle: "Real Estate Development",
      arTitle: "First Avenue Real Estate Development",
    },

    company: {
      title: "Company",
      links: [
        { label: "Chairman's Message", arrow: "↗" },
        { label: "About the Company", arrow: "↗" },
        { label: "Contact Us", arrow: "↗" },
      ],
    },

    projects: {
      title: "Projects",
      links: [
        { label: "Executive Team", arrow: "↗" },
        { label: "Senior Management", arrow: "↗" },
        { label: "Our Work", arrow: "↗" },
      ],
    },

    contact: {
      title: "Contact Information",
      address:
        "Riyadh: Prince Turki Bin Abdulaziz Al-Awwal Road, Hittin District, Building 6957, Unit 3",
      phone: "+966112362009",
      email: "info@the1stavenue.com",
    },

    copyright:
      "All rights reserved. First Avenue Real Estate Development 2025",
  },
};

export const overviewEn: OverviewLang = {
  companyName: 'First Avenue Real Estate Development',
  companyShort: '(First Avenue) NMO',
  companyStats: [
    { label: 'Price', value: '6.00' },
    { label: 'Change', value: '↓ 0.03', change: '0.49%' },
    { label: 'Volume', value: '9610' },
  ],

  marketCard: {
    title: 'Market Value',
    price: '6.21',
    change: '+0.12%',
    chartDomain: [5.5, 6.8],
    moreLink: '/stocks',
  },

  stockDetails: {
  titles: ['Stock Performance', 'Market Value'],
  mainValue: '6.29',
  mainCurrency: 'SAR',
  rows: [
    [
      { label: 'Last Price', value: '6.80' },
      { label: 'Open', value: '6.80' },
      { label: 'Previous Close', value: '6.26' },
      { label: 'High', value: '6.80' },
    ],
    [
      { label: 'Low', value: '5.90' },
    ],
  ],
  changeTitle: 'Change',
  changePeriods: ['3 Months', '6 Months', '12 Months'],
  changeValues: ['-25.71 %', '-34.98 %', '0.00 %'],
  changeFromStartOfYearLabel: 'Change from Start of Year',
  changeFromStartOfYear: '0.50 %',
  tradingVolumeLabel: 'Trading Volume',
  tradesCountLabel: 'Number of Trades',
  tradingVolumeValue: '639,362.00',
  tradesCountValue: '110.00',
  moreLinkLabel: 'More',
  moreLink: '/stocks',
},

  cardsTitles: ['Disclosures', 'News', 'Calendar'],
  cardsImages: ['/images/i.png', '/images/e.png', '/images/F.png'],

  reportsTitle: 'Financial Results',
  reports: [
    { title: 'First Avenue profits 78.1M SAR (+152%) H1 2025', period: '6 Months', year: 2025, pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { title: 'First Avenue profits 78M SAR Q1 2025', period: '3 Months', year: 2025, pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { title: 'First Avenue profits 59.3M SAR (+41%) H2 2024', period: 'Year', year: 2024, pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { title: 'First Avenue profits 31M SAR (+22%) H1 2024', period: '6 Months', year: 2024, pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { title: 'First Avenue profits 42M SAR (-2%) 2023', period: 'Year', year: 2023, pdfAr: '/pdfs/2023-ar.pdf', pdfEn: '/pdfs/2023-en.pdf' },
  ],

  yearsGrid: [
    { year: 2025, pdf: '/pdfs/2025.pdf', pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { year: 2024, pdf: '/pdfs/2024.pdf', pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { year: 2023, pdf: '/pdfs/2023.pdf', pdfAr: '/pdfs/2023-ar.pdf', pdfEn: '/pdfs/2023-en.pdf' },
  ],
  moreReportsLink: '/stocks',

  contactTitle: 'Contact',
  contactInfo: [
    { label: 'Website', value: 'https://www.the1stavenue.com.sa', link: 'https://www.the1stavenue.com.sa' },
    { label: 'Email', value: 'IR@The1stAvenue.com', link: 'mailto:IR@The1stAvenue.com' },
    { label: 'Mobile', value: '+966 55 850 6969' },
    { label: 'Address', value: 'Riyadh: Prince Turki Bin Abdulaziz 1st St, Hittin - Bldg 6957, Unit 3, Zip: 2447-13512, Saudi Arabia' },
  ],
  contactMoreLink: '/stocks',
};


export const irEn: IRLang = {
  pageName: "Investor Relations",
  sidebar: {
    overview: "Overview",
    profile: "Profile",
    board: "Board of Directors",
    stock: "Stock Performance",
    financials: "Financials",
    presentations: "Investor Presentations",
    disclosures: "Disclosures",
    actions: "Corporate Actions",
    shareholders: "Major Shareholders",
  },
  tickerItems: [
    { title: "News:", date: "December 22, 2025", content: "First Avenue acquires Business Tower in Riyadh for SAR 310M" },
    { title: "Growth:", date: "6.10 SAR", content: "0.06 (0.99%)" },
    { title: "Calendar:", date: "June 4, 2025", content: "Extraordinary General Assembly" },
  ],
   };



export default en;
