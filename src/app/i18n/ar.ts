import { faBuilding, faSackDollar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Lang, ProjectsLang } from './types';
import { OverviewLang } from './types';
import { IRLang } from "./types";
import { FooterLang } from "./types";
import { projectsAr } from "./projectsAr";

const projects: ProjectsLang = {
};

const ar: Lang = {
   projects: projectsAr,

  nav: {
    works: 'الرئيسية',
    about: ' نبذة عن الشركة',
    contact: 'المشاريع',
    chairman: '  المركز الاعلامي',
    board: ' علاقات المستثمرين',
    last: ' اتصل بنا ',
  },

  hero: {
    title1: 'استثمار عقاري واعد',
    title2: 'تطوير عمراني مبتكر',
    desc:
     "تُعد شركة الجادة الأولى للتطوير العقاري من الشركات الرائدة في مجال الاستثمار والتطوير العقاري، ومقرها الرياض. حققت الشركة نموًا متسارعًا لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار المستدام من خلال التطوير العقاري المبتكر.",
    btn: 'أعمالنا',
  },

  about: {
    overlayFirst: 'من',
    overlaySecond: 'نحن',
    text:
      'الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري، والتي يقع مقرها في الرياض. حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة في صناعة فرص الاستثمار المستدام من خلال التطوير العقاري المبتكر.',
    boxes: [
      { number: '+129 ألف م²', desc: 'إجمالي المساحة المبنية', icon: faBuilding },
      { number: '+2 مليار ريال', desc: 'حجم المشاريع', icon: faSackDollar },
      { number: '+25 مشروع', desc: 'إجمالي المشاريع', icon: faHouse },
    ],
  },

  ux: {
    firstWord: 'صور',
    secondWord: 'المشروع',
    thirdWord: '↙',
  },

  uxx: {
    first: 'أحدث',
    second: 'المشاريع',
    third: '↙',
  },

  ui: {
    interestBtn: 'سجل اهتمامك',
  },
  uii: {
  interestBtn: ' معلومات ',
},
uiii: {
  interestBtn: 'المشروع ',
},
   mi: {first: 'موقع',
    second: 'المشاريع',
    third: '↙',
  },
 mii: {
  btn: 'الرياض',
  btn2: 'جدة ',
},
   mix: {first: 'المركز',
    second: 'اللاعلامي',
    third: '↙',
     title: 'حققت الشركة نمو متسارعا لتصبح إحدى الشركات البارزة والرائدة...',
    date: '12 أبريل 2025',
    description: 'الجادة الأولى للتطوير العقاري هي أحد الشركات المتميزة في الاستثمار والتطوير العقاري، والتي يقع مقرها في الرياض.'
  
  },
  mixx:  {first: 'شركاء',
    second: 'النجاح',
    third: '',
    },
  footer: {
    slogan: {
      enTitle: "FIRST AVENUE",
      enSubTitle: "Real Estate Development",
      arTitle: "الجادّة الأولى للتطوير العقاري",
    },

    company: {
      title: "الشركة",
      links: [
        { label: "كلمة الرئيس", arrow: "↖" },
        { label: "نبذة عن الشركة", arrow: "↖" },
        { label: "تواصلوا معنا", arrow: "↖" },
      ],
    },

    projects: {
      title: "المشاريع",
      links: [
        { label: "الفريق التنفيذي", arrow: "↖" },
        { label: "كبار التنفيذيين", arrow: "↖" },
        { label: "أعمالنا", arrow: "↖" },
      ],
    },

    contact: {
      title: "معلومات الاتصال",
      address:
        "الرياض: طريق الأمير تركي بن عبد العزيز الأول - حي حطين مبنى 6957 - وحدة رقم 3",
      phone: "٠٩٦٦١١٢٣٦٢٠٠٩+",
      email: "info@the1stavenue.com",
    },

    copyright:
      "جميع الحقوق محفوظة . شركة الجادة الأولى للتطوير العقاري 2025",
  },
};


export const overviewAr: OverviewLang = {
  companyName: 'شركة الجادة الأولى للتطوير العقاري',
  companyShort: '(الجادة الأولى) نمو',
  companyStats: [
    { label: 'السعر', value: '6.00' },
    { label: 'التغيير', value: '↓ 0.03', change: '0.49%' },
    { label: 'حجم التداول', value: '9610' },
  ],

  marketCard: {
    title: 'القيمة السوقية',
    price: '6.21',
    change: '+0.12%',
    chartDomain: [5.5, 6.8],
    moreLink: '/stocks',
  },

  stockDetails:{
  titles: ['أداء السهم', 'القيمة السوقية'],
  mainValue: '6.29',
  mainCurrency: 'ريال',
  rows: [
    [
      { label: 'أخر سعر', value: '6.80' },
      { label: 'الإفتتاح', value: '6.80' },
      { label: 'الإغلاق السابق', value: '6.26' },
      { label: 'الأعلى', value: '6.80' },
    ],
    [
      { label: 'الأدنى', value: '5.90' },
    ],
  ],
  changeTitle: 'التغيير',
  changePeriods: ['3 أشهر', '6 أشهر', '12 أشهر'],
  changeValues: ['-25.71 %', '-34.98 %', '0.00 %'],
  changeFromStartOfYearLabel: 'التغير من بداية العام',
  changeFromStartOfYear: '0.50 %',
  tradingVolumeLabel: 'حجم التداول',
  tradesCountLabel: 'عدد الصفقات',
  tradingVolumeValue: '639,362.00',
  tradesCountValue: '110.00',
  moreLinkLabel: 'المزيد',
  moreLink: '/stocks',
},


  cardsTitles: ['الإفصاحات', 'الأخبار', 'المفكرة'],
  cardsImages: ['/images/i.png', '/images/e.png', '/images/F.png'],

  reportsTitle: 'النتائج المالية',
  reports: [
    { title: 'أرباح الجادة الأولى 78.1 مليون ريال (+152%) بنهاية النصف الأول 2025', period: '6 أشهر', year: 2025, pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { title: 'أرباح الجادة الأولى 78 مليون ريال بنهاية الربع الأول 2025', period: '3 أشهر', year: 2025, pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { title: 'أرباح الجادة الأولى 59.3 مليون ريال (+41%) بنهاية 2024، وأرباح النصف الثاني 28.3 مليون ريال (+71%)', period: 'سنة', year: 2024, pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { title: 'ارتفاع أرباح الجادة الأولى إلى 31 مليون ريال (+22%) بنهاية النصف الأول 2024', period: '6 أشهر', year: 2024, pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { title: 'انخفاض أرباح الجادة الأولى إلى 42 مليون ريال (-2%) بنهاية 2023', period: 'سنة', year: 2023, pdfAr: '/pdfs/2023-ar.pdf', pdfEn: '/pdfs/2023-en.pdf' },
  ],

  yearsGrid: [
    { year: 2025, pdf: '/pdfs/2025.pdf', pdfAr: '/pdfs/2025-ar.pdf', pdfEn: '/pdfs/2025-en.pdf' },
    { year: 2024, pdf: '/pdfs/2024.pdf', pdfAr: '/pdfs/2024-ar.pdf', pdfEn: '/pdfs/2024-en.pdf' },
    { year: 2023, pdf: '/pdfs/2023.pdf', pdfAr: '/pdfs/2023-ar.pdf', pdfEn: '/pdfs/2023-en.pdf' },
  ],
  moreReportsLink: '/stocks',

  contactTitle: 'التواصل',
  contactInfo: [
    { label: 'الموقع الإلكتروني', value: 'https://www.the1stavenue.com.sa', link: 'https://www.the1stavenue.com.sa' },
    { label: 'البريد الإلكتروني', value: 'IR@The1stAvenue.com', link: 'mailto:IR@The1stAvenue.com' },
    { label: 'الجوال', value: '+966 55 850 6969' },
    { label: 'العنوان', value: 'الرياض: طريق الأمير تركي بن عبد العزيز الأول - حي حطين - مبنى 6957 - وحدة رقم 3 - الرمز البريدي: 2447-13512، المملكة العربية السعودية' },
  ],
  contactMoreLink: '/stocks',
};


export const irAr: IRLang = {
  pageName: "علاقات المستثمرين",
  sidebar: {
    overview: "نظرة عامة",
    profile: "الملف التعريفي",
    board: "مجلس الإدارة",
    stock: "أداء السهم",
    financials: "الأداء المالي",
    presentations: "عرض المستثمرين",
    disclosures: "الإفصاحات",
    actions: "إجراءات الشركة",
    shareholders: "كبار المساهمين",
  },
  tickerItems: [
    { title: "الأخبار:", date: "22 ديسمبر 2025", content: "الجادة الأولى تستحوذ على برج جادة الأعمال في الرياض بقيمة 310 ملايين ريال" },
    { title: "نمو:", date: "6.10 ريال", content: "0.06 (0.99%)" },
    { title: "المفكرة:", date: "4 يونيو 2025", content: "جمعية عمومية غير عادية" },
  ],
};




export default ar;
