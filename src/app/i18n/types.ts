import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ReactNode } from "react";

/* ---------- Shared ---------- */
export type Box = {
  number: string;
  desc: string;
  icon?: IconProp;
};


export type Projectss = {
  id: number;
  slug: string;
  title: string;
  description: string[][];
  details: string[];
  image: string;
  type?:  'سكني' | 'تجاري' | 'مكتبي';

};

export type LastProjects = {
  [key: string]: Projectss;
};

/* ---------- Projects ---------- */
export type ProjectLangItem = {
  title: string;
  description: string;
  boxes?: Box[];
  hero?: string;
  gallery?: string[];
  stats?: string[];
};

export type ProjectsLang = {
  [slug: string]: ProjectLangItem;
};

/* ---------- UI ---------- */
export type UILang = {
  interestBtn: string;

};

/* ---------- UX ---------- */
export type uxLang = {
  firstWord: string;
  secondWord: string;
  thirdWord: string;
};

export type uxxLang = {
  first: string;
  second: string;
  third: string;
};
export type miLang = {
  first: string;
  second: string;
  third: string;
};
export type miiLang = {
  btn: string;
  btn2: string;
};
export type mixLang = {
  first: string;
  second: string;
  third: string;
    title: string;
    date:  string;
    description:  string;
};
export type mixxLang = {
  first: string;
  second: string;
  third: string;
};
/* ---------- About ---------- */
export type aboutLang = {
  overlayFirst: string;
  overlaySecond: string;
  text: string;
  boxes: Box[];
};

/* ---------- Main Lang ---------- */
export type Lang = {
  projects: ProjectsLang;

  nav: {
    works: string;
    about: string;
    contact: string;
    chairman: string;
    board: string;
    last: string;
  };

  hero: {
    title1: string;
    title2: string;
    desc: string;
    btn: string;
  };

  about: aboutLang;

  ux?: uxLang;
  uxx: uxxLang;
  ui: UILang;
  uii: UILang;
  uiii: UILang;
  mi: miLang;
  mii: miiLang;
  mix: mixLang;
  mixx:mixxLang;
  footer: FooterLang;
};

// overviewTypes.ts
export type StockStats = {
  label: string;
  value: string;
  change?: string; // optional for change %
};

export type Report = {
  title: string;
  period: string;
  year: number | string;
  pdfAr?: string;
  pdfEn?: string;
};

export type YearCard = {
  year: number;
  pdf: string;
  pdfAr?: string;
  pdfEn?: string;
};

export type ContactInfo = {
  label: string;
  value: string;
  link?: string;
};

export type OverviewLang = {
  companyName: string;
  companyShort: string;
  companyStats: StockStats[];

  marketCard: {
    title: string;
    price: string;
    change: string;
    chartDomain: [number, number];
    moreLink: string;
  };

  stockDetails: {
     changeTitle: string;
      changeFromStartOfYearLabel: string;
      tradingVolumeLabel: string;
      tradesCountLabel: string;
      tradingVolumeValue:string;
      tradesCountValue:string;
       moreLinkLabel:string;
    titles: string[];
    mainValue: string;
    mainCurrency: string;
    rows: StockStats[][];
    changePeriods: string[];
    changeValues: string[];
    changeFromStartOfYear: string;
    moreLink: string;
  };

  cardsTitles: string[];
  cardsImages: string[];

  reportsTitle: string;
  reports: Report[];
  yearsGrid: YearCard[];
  moreReportsLink: string;

  contactTitle: string;
  contactInfo: ContactInfo[];
  contactMoreLink: string;
};

export type IRSection =
  | "overview"
  | "profile"
  | "board"
  | "stock"
  | "financials"
  | "presentations"
  | "disclosures"
  | "actions"
  | "shareholders";

export interface IRLang {
  pageName: string;
  sidebar: Record<IRSection, string>;
  tickerItems: {
    title: string;
    date: string;
    content: string;
  }[];
}

export interface InfoItem {
  label: string;
  value: string;
  full?: boolean;   
  link?: string;    
}

export interface Subsidiary {
  name: string;
  country: string;
  percent: string;
}

export interface Shareholder {
  name: string;
  percent: string;
  shares: string;
}

export interface Development {
  date: string;
  text: string;
}

export type TableRow = {
  label: string;
  values: string[];
};
export type Currency = "SAR" | "USD";
export interface BasicInfoItem {
  label: string;
  value: string;
  full?: boolean;  // Added
  link?: string;
}

export interface NumberItem {
  label: string;
  value: string;
}

export interface FinancialRow {
  title: string;
  sar: string[];
  usd: string[];
}

export interface ShareDataItem {
  label: string;
  value: string;
}

export interface SubsidiaryItem {
  name: string;
  country: string;
  percent: string;
}

export interface ShareholderItem {
  name: string;
  percent: string;
  shares: string;
}

export interface DevelopmentItem {
  date: string;
  text: string;
}

export interface ProfileLang {
  companyFieldTitle: string;
  companyFieldText: string;

  aboutTitle: string;
  aboutParagraphs: string[];

  basicInfoTitle: string;
  basicInfo: BasicInfoItem[];

  sectorsTitle: string;
  numbers: NumberItem[];

  stats: NumberItem[];

  financialSummaryTitle: string;
  tableHeaders: string[];

  financialRows: FinancialRow[];

  shareDataTitle: string;
  shareDataSAR: ShareDataItem[];
  shareDataUSD: ShareDataItem[];

  subsidiariesTitle: string;
  subsidiariesHeaders: string[];
  subsidiaries: SubsidiaryItem[];

  shareholdersTitle: string;
  shareholdersHeaders: string[];
  shareholders: ShareholderItem[];

  developmentsTitle: string;
  developments: DevelopmentItem[];

  buttons: {
    more: string;
    indicators: string;
  };

  currency: {
    sar: string;
    usd: string;
  };
}
export type PageKey =
  | "الرئيسية"
  | "نبذة عن الشركة"
  | "المشاريع"
  | "المركز الإعلامي"
  | "علاقات المستثمرين"
  | "اتصل بنا";

export type FooterLang = {
  slogan: {
    enTitle: string;
    enSubTitle: string;
    arTitle: string;
  };

  company: {
    title: string;
    links: {
      label: string;
      arrow: string;
    }[];
  };

  projects: {
    title: string;
    links: {
      label: string;
      arrow: string;
    }[];
  };

  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
  };

  copyright: string;
};
