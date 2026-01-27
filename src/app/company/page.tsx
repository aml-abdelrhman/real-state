'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import AboutSectionOne from '../components/AboutSectionOne';
import AboutSectionTwo from '../components/AboutSectionTwo';
import { FaBuilding, FaChartBar, FaHandshake, FaProjectDiagram } from 'react-icons/fa';
import { useLang } from '../../context/LangContext';

const CompanyPage: React.FC = () => {
  const { locale } = useLang();

  const slides: {
    imageSrc: string;
    type: 'one-line' | 'two-line' | 'text-only';
    items: { icon?: React.ReactNode; title: string; text: string | string[] }[];
  }[] = locale === 'ar' ? [
    {
      imageSrc: '/images/aboutOne.png',
      type: 'one-line',
      items: [
        {
          icon: <FaBuilding />,
          title: 'الشغف',
          text: ['خبرة عالية وفريق متميز في التطوير العقاري.', 'نحرص على تقديم أفضل الحلول والخدمات لعملائنا.']
        },
        {
          icon: <FaChartBar />,
          title: 'الابتكار',
          text: ['تطوير مشاريع سكنية وتجارية بمستوى عالي.', 'نعتمد على أحدث التقنيات لضمان الجودة.']
        },
        {
          icon: <FaHandshake />,
          title: 'المسؤولية',
          text: ['رؤية استثمارية قائمة على الابتكار.', 'نضع العميل في قلب كل قرار ونسعى لتحقيق أعلى مستوى من الالتزام.']
        },
        {
          icon: <FaProjectDiagram />,
          title: 'الإدارة',
          text: ['تصميم وتنفيذ بأعلى معايير الجودة.', 'فريق هندسي متخصص لمتابعة كل تفاصيل المشروع.']
        },
        {
          icon: <FaBuilding />,
          title: 'التخطيط',
          text: ['دراسة دقيقة للسوق قبل تنفيذ أي مشروع.', 'نضع خطط استراتيجية تضمن نجاح المشروع على المدى الطويل.']
        },
        {
          icon: <FaChartBar />,
          title: 'النمو',
          text: ['مشاريع مدروسة تحقق قيمة طويلة الأمد.', 'نسعى لتوسيع نطاق أعمالنا بطريقة مستدامة.']
        },
        {
          icon: <FaHandshake />,
          title: 'الثقة',
          text: ['ثقة العملاء هي أساس نجاحنا.', 'نحرص على بناء علاقات قوية وطويلة الأمد مع شركائنا.']
        },
        {
          icon: <FaProjectDiagram />,
          title: 'الحلول',
          text: ['من الفكرة حتى التسليم النهائي.', 'نقدم حلولاً متكاملة تلبي جميع احتياجات عملائنا.']
        },
      ],
    },
    {
      imageSrc: '/images/aboutTow.png',
      type: 'two-line',
      items: [
        { icon: <FaChartBar />, title: 'مشاريع سكنية', text: 'تنفيذ بمستوى عالي ومعايير جودة' },
        { icon: <FaChartBar />, title: 'إدارة المبيعات', text: 'علاقات طويلة الأمد مع العملاء' },
      ],
    },
    {
      imageSrc: '/images/aboutThree.png',
      type: 'text-only',
      items: [
        {
          title: '',
          text: 'نحن شركة متخصصة في التطوير العقاري والاستثمار، نعمل على تقديم حلول متكاملة تبدأ من دراسة الفكرة وتحليل السوق، مرورًا بالتصميم والتنفيذ، وصولًا إلى التسويق وإدارة الأصول. نؤمن بأن العقار الناجح هو مزيج من التخطيط الذكي، والجودة العالية، والرؤية طويلة المدى.'
        },
        {
          title: '',
          text: 'يمتلك فريقنا خبرة واسعة في إدارة وتنفيذ المشاريع السكنية والتجارية والإدارية، مع الالتزام بأعلى معايير الجودة والسلامة. نعتمد على أحدث الأساليب الهندسية والتقنيات الحديثة لضمان تحقيق أفضل قيمة استثمارية لعملائنا وشركائنا.'
        },
        {
          title: '',
          text: 'نسعى إلى بناء علاقات طويلة الأمد قائمة على الثقة والشفافية، ونضع احتياجات العملاء في مقدمة أولوياتنا. هدفنا هو تطوير مجتمعات عمرانية مستدامة تواكب متطلبات السوق وتحقق عائدًا استثماريًا حقيقيًا، مع الحفاظ على هوية معمارية مميزة وقيمة مضافة دائمة.'
        },
      ],
    },
  ] : [
    {
      imageSrc: '/images/aboutOne.png',
      type: 'one-line',
      items: [
        {
          icon: <FaBuilding />,
          title: 'Passion',
          text: ['High expertise and a distinguished team in real estate development.', 'We strive to provide the best solutions and services to our clients.']
        },
        {
          icon: <FaChartBar />,
          title: 'Innovation',
          text: ['Developing residential and commercial projects at a high level.', 'We rely on the latest technologies to ensure quality.']
        },
        {
          icon: <FaHandshake />,
          title: 'Responsibility',
          text: ['An investment vision based on innovation.', 'We put the client at the heart of every decision and strive to achieve the highest level of commitment.']
        },
        {
          icon: <FaProjectDiagram />,
          title: 'Management',
          text: ['Design and implementation with the highest quality standards.', 'A specialized engineering team to follow up on every project detail.']
        },
        {
          icon: <FaBuilding />,
          title: 'Planning',
          text: ['A precise market study before implementing any project.', 'We set strategic plans that ensure the success of the project in the long term.']
        },
        {
          icon: <FaChartBar />,
          title: 'Growth',
          text: ['Studied projects that achieve long-term value.', 'We seek to expand our business sustainably.']
        },
        {
          icon: <FaHandshake />,
          title: 'Trust',
          text: ['Customer trust is the foundation of our success.', 'We are keen to build strong and long-term relationships with our partners.']
        },
        {
          icon: <FaProjectDiagram />,
          title: 'Solutions',
          text: ['From idea to final delivery.', 'We provide integrated solutions that meet all our clients\' needs.']
        },
      ],
    },
    {
      imageSrc: '/images/aboutTow.png',
      type: 'two-line',
      items: [
        { icon: <FaChartBar />, title: 'Residential Projects', text: 'High-level implementation and quality standards' },
        { icon: <FaChartBar />, title: 'Sales Management', text: 'Long-term relationships with customers' },
      ],
    },
    {
      imageSrc: '/images/aboutThree.png',
      type: 'text-only',
      items: [
        {
          title: '',
          text: 'We are a company specialized in real estate development and investment, working to provide integrated solutions that start from idea study and market analysis, through design and implementation, to marketing and asset management. We believe that a successful property is a combination of smart planning, high quality, and long-term vision.'
        },
        {
          title: '',
          text: 'Our team has extensive experience in managing and implementing residential, commercial, and administrative projects, with commitment to the highest standards of quality and safety. We rely on the latest engineering methods and modern technologies to ensure the best investment value for our clients and partners.'
        },
        {
          title: '',
          text: 'We seek to build long-term relationships based on trust and transparency, and we place customers\' needs at the forefront of our priorities. Our goal is to develop sustainable urban communities that keep pace with market requirements and achieve real investment returns, while maintaining a distinctive architectural identity and lasting added value.'
        },
      ],
    },
  ];

  const managementMessages = locale === 'ar' ? [
    {
      title: 'رئيس مجلس الإدارة',
      messages: [
        'يسرني أن أرحب بكم جميعا مساهمي وزوار الموقع الرسمي لشركة الجادة الاولى للتطوير العقاري احدى الشركات الرائدة في مجال التطوير العقاري التي استطاعت في فترة وجيزة أن تكون علامة فارقة ومضيئة في القطاع العقاري في المملكة العربية السعودية.',
        'وتحقيق عوائد مجزية لمساهميها الكرام في هذه البيئة المحفزة للاستثمار والدعم اللامحدود الذي نجده من القيادة الحكيمة ومن كافة الوزارات والجهات المعنية في هذه البلاد المباركة.',
        'رحلة الانجازات مستمرة وماضية بفكر ثاقب ورؤية واسعة الافق وتتطور سنة بعد أخرى لتحقيق نتائج مالية تواكب التطلعات لشركائنا الكرام. ان تصفح محتوى هذا الموقع والذي تم تصميمه بلغة واضحة مدعومة بالحقائق وارقام سوف يجعلكم بحول الله وقوته أكثر ثقة وقناعة أن استثماراتكم في أيدي أمينة وتدار بمنتهى الحرفية والمهنية العالية.'
      ],
      name: 'حسن بن عطا الله العمري',
      imageSrc: '/images/person1.png',
    },
    {
      title: 'نائب رئيس مجلس الإدارة',
      messages: [
        'تميزت رحلتنا في الجادة الاولى للتطوير العقاري برؤية استراتيجية تعتمد على بناء التحالفات والشراكات المتينة، مع الجهات المتخصصة في القطاعات العقارية المختلفة، مما يعزز المرونة في نموذج عمل الشركة.',
        'ويتيح دمج خبراتنا العميقة في صناعة القيمة مع الابتكار المتجدد، لنتمكن من تقديم فرص ومنتجات عقارية تتميز بالابتكار والاستدامة، مما يساهم في تعزيز جودة الحياة للمواطنين والمقيمين والزوار الذين يشهدون الإنجازات المتواصلة لرؤية المملكة 2030.',
        'وحيث تفخر الشركة بثقة وتطلعات منسوبي القطاع العقاري، وتجدها مسؤولية كبيرة تستلزم الجدية والمثابرة والالتزام، وهو ما شجعنا على أن نمضي بثقة وحماس في رحلة الاكتتاب العام، كخطوة استراتيجية للنمو والتوسع في مشاريعنا النوعية في المواقع الحيوية، لمواصلة المسيرة في بناء المكان وإثراء تجربة.'
      ],
      name: 'نادر بن حسن العمري',
      imageSrc: '/images/personTwo.png',
    },
  ] : [
    {
      title: 'Chairman of the Board',
      messages: [
        'I am pleased to welcome you all, the shareholders and visitors of the official website of Al-Jada Al-Oula Real Estate Development Company, one of the leading companies in the field of real estate development that has been able in a short period to be a distinctive and luminous mark in the real estate sector in the Kingdom of Saudi Arabia.',
        'Achieving rewarding returns for its valued shareholders in this stimulating investment environment and the unlimited support we find from the wise leadership and all ministries and relevant authorities in this blessed country.',
        'The journey of achievements continues with deep thinking and a wide vision, developing year after year to achieve financial results that keep pace with the aspirations of our valued partners. Browsing the content of this site, which was designed in clear language supported by facts and numbers, will, with God\'s help and power, make you more confident and convinced that your investments are in safe hands and managed with utmost professionalism and high competence.'
      ],
      name: 'Hassan bin Attallah Al-Omari',
      imageSrc: '/images/person1.png',
    },
    {
      title: 'Vice Chairman of the Board',
      messages: [
        'Our journey in Al-Jada Al-Oula Real Estate Development was distinguished by a strategic vision based on building strong alliances and partnerships with specialized entities in different real estate sectors, which enhances flexibility in the company’s business model.',
        'Integrating our deep expertise in value creation with renewed innovation enables us to offer real estate opportunities and products characterized by innovation and sustainability, contributing to enhancing the quality of life for citizens, residents, and visitors who witness the continuous achievements of Saudi Vision 2030.',
        'The company takes pride in the trust and aspirations of real estate sector employees, and it finds it a great responsibility that requires seriousness, perseverance, and commitment. This encouraged us to move forward with confidence and enthusiasm in the journey of public offering, as a strategic step for growth and expansion in our qualitative projects in vital locations, to continue the journey in building the place and enriching the experience.'
      ],
      name: 'Nader bin Hassan Al-Omari',
      imageSrc: '/images/personTwo.png',
    },
  ];

  return (
    <>
      <Navbar />
      <Header imageSrc="/images/about.jpg" pageName="نبذة عن الشركة" showTitle={false} />
      <AboutSectionOne slides={slides} />
      <AboutSectionTwo backgroundSrc="/images/hero7.png" messages={managementMessages} />
    </>
  );
};

export default CompanyPage;
