import { ProfileLang } from "./types";

export const profileEn: ProfileLang = {
  companyFieldTitle: "Company Business",
  companyFieldText: "Real estate development and investment.",

  aboutTitle: "About Us",
  aboutParagraphs: [
    "Aljada First Real Estate Development Company was established as a limited liability company in Riyadh with a capital of SAR 500,000 in 2017. After three years, the company was converted into a closed joint-stock company.",
    "The company operates through two main sectors: real estate investment, which includes buying, selling, and subdividing land and properties, and the contracting sector, which includes general construction activities for residential and non-residential buildings. The company’s current activity focuses on real estate development and investment, as well as the construction of residential and commercial units, with revenues largely dependent on the real estate investment sector."
  ],

  basicInfoTitle: "Basic Information",
  basicInfo: [
    { label: "Ownership Type", value: "Public Joint Stock Company" },
    { label: "Country", value: "Kingdom of Saudi Arabia" },
    { label: "Year Established", value: "2017" },
    { label: "Mobile", value: "+966 55 850 6969" },
    {
      label: "Website",
      value: "www.the1stavenue.com.sa",
      link: "https://www.the1stavenue.com.sa"
    },
    { label: "Phone", value: "+966 11 203 3116" },
    { label: "Email", value: "IR@The1stAvenue.com" },
    {
      label: "Address",
      value:
        "Building No. 3718, Al Mohammadiyah Promenade, First Floor, Khalifa Bin Badee Street, Al Mohammadiyah District, Riyadh 12363"
    },
    { label: "P.O. Box", value: "2447" }
  ],

  sectorsTitle: "Sectors & Figures",
  numbers: [
    { label: "Market", value: "Nomu" },
    { label: "Fiscal Year End", value: "December" },
    { label: "Free Float Shares (Million)", value: "140.88" },
    { label: "Free Float %", value: "68.72" },
    { label: "Company Weight", value: "4.05" },
    {
      label: "Average Trading Volume (Shares) – Last 3 Months",
      value: "151,990.14"
    }
  ],

  stats: [
    {
      label: "Average Daily Number of Trades – Last 3 Months",
      value: "34.21"
    },
    { label: "Change (12 Months) %", value: "-" }
  ],

  financialSummaryTitle: "Financial Results Summary",
  tableHeaders: ["Statement", "Chart", "2024", "2023", "2022", "2021", "2020"],

  financialRows: [
    {
      title: "Revenue",
      sar: ["254.95", "237.85", "204.65", "204.92", "70.49"],
      usd: ["67.99", "63.43", "54.57", "54.64", "18.80"]
    },
    {
      title: "Net Income",
      sar: ["59.30", "41.95", "42.71", "50.61", "16.03"],
      usd: ["15.81", "11.19", "11.39", "13.50", "4.27"]
    },
    {
      title: "Total Assets",
      sar: ["960.10", "500.69", "428.43", "195.30", "155.36"],
      usd: ["256.03", "133.52", "114.25", "52.08", "41.43"]
    },
    {
      title: "Shareholders’ Equity",
      sar: ["529.81", "328.24", "281.75", "121.49", "22.11"],
      usd: ["141.28", "87.53", "75.13", "32.40", "5.89"]
    }
  ],

  shareDataTitle: "Share Data (Latest Financial Period)",
  shareDataSAR: [
    { label: "Number of Shares (Million)", value: "205" },
    { label: "Nominal Value (SAR)", value: "1.02" },
    { label: "Book Value per Share (SAR)", value: "3.02" },
    { label: "Market Capitalization (Million)", value: "4,818.45" }
  ],
  shareDataUSD: [
    { label: "Number of Shares (Million)", value: "205" },
    { label: "Nominal Value (USD)", value: "0.27" },
    { label: "Book Value per Share (USD)", value: "0.79" },
    { label: "Market Capitalization (Million)", value: "1,248.45" }
  ],

  subsidiariesTitle: "Subsidiaries & Associates",
  subsidiariesHeaders: ["Company", "Country", "Ownership %"],
  subsidiaries: [
    {
      name: "Jadwa Capital Avenue Real Estate Fund",
      country: "Kingdom of Saudi Arabia",
      percent: "100.00 %"
    },
    {
      name: "Jada Al Bahr Real Estate Company",
      country: "Kingdom of Saudi Arabia",
      percent: "50.00 %"
    },
    {
      name: "LaPerle Real Estate Fund",
      country: "Kingdom of Saudi Arabia",
      percent: "42.66 %"
    },
    {
      name: "Aljada Capital Investment Fund",
      country: "Kingdom of Saudi Arabia",
      percent: "24.27 %"
    },
    {
      name: "Bloom Real Estate Investment Fund No.1",
      country: "Kingdom of Saudi Arabia",
      percent: "100.00 %"
    },
    {
      name: "Jada Diriyah Investment Fund",
      country: "Kingdom of Saudi Arabia",
      percent: "37.89 %"
    }
  ],

  shareholdersTitle: "Major Shareholders",
  shareholdersHeaders: ["Name", "Ownership %", "Shares (Million)"],
  shareholders: [
    {
      name: "Nader bin Hassan Al Omari",
      percent: "57.61%",
      shares: "28.10"
    },
    {
      name: "Makkah Construction & Development Co.",
      percent: "56.83%",
      shares: "27.72"
    },
    {
      name: "Dar Al Majed Real Estate Co.",
      percent: "18.86%",
      shares: "9.20"
    }
  ],

  developmentsTitle: "Key Developments",
 developments: [
  {
    date: "22-12-2025",
    text: "The company acquired the Jada Business Tower – Al Qirawan project by purchasing the partners’ shares in the project fund Jadwa Capital Avenue Real Estate Fund."
  },
  {
    date: "16-10-2024",
    text: "Listing and commencement of trading of the company’s shares on the Nomu market."
  },
  {
    date: "7-6-2023",
    text: "The nominal value of the share was split from SAR 10 per share to SAR 1 per share, making the number of shares 113.627 million shares instead of 11.36 million shares, and the company’s capital was increased from SAR 113.627 million to SAR 188.576 million by issuing new shares through capitalizing the share premium account."
  },
  {
    date: "22-11-2022",
    text: "The company’s capital was increased from SAR 100 million to SAR 113.627 million by issuing new shares."
  },
  {
    date: "13-9-2021",
    text: "The company’s capital was increased from SAR 45 million to SAR 100 million through the issuance of bonus shares."
  }
],


  buttons: {
    more: "More",
    indicators: "Financial Indicators"
  },

  currency: {
    sar: "SAR",
    usd: "USD"
  }
};
