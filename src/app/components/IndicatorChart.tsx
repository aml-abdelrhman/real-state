"use client";

import { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "../styles/IndicatorChart.css";
import { useLang } from "../../context/LangContext";

type ChartPoint = {
  date: number;
  value: number;
};

type RangeType =
  | "day"
  | "fiveDays"
  | "threeMonths"
  | "sixMonths"
  | "year"
  | "twoYears"
  | "fiveYears"
  | "all";

const translations = {
  ar: {
    title: "مؤشر الرسم البياني",
    ranges: {
      day: "يوم",
      fiveDays: "5 أيام",
      threeMonths: "3 شهور",
      sixMonths: "6 شهور",
      year: "سنة",
      twoYears: "سنتين",
      fiveYears: "5 سنين",
      all: "الكل",
    },
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    am: "ص",
  },
  en: {
    title: "Chart Indicator",
    ranges: {
      day: "Day",
      fiveDays: "5 Days",
      threeMonths: "3 Months",
      sixMonths: "6 Months",
      year: "1 Year",
      twoYears: "2 Years",
      fiveYears: "5 Years",
      all: "All",
    },
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    am: "AM",
  },
};

const yearTicks = [
  new Date(2012, 3).getTime(),
  new Date(2012, 6).getTime(),
  new Date(2012, 9).getTime(),
  new Date(2013, 0).getTime(),
];

const twoYearsTicks = [
  new Date(2012, 0).getTime(),
  new Date(2012, 4).getTime(),
  new Date(2012, 8).getTime(),
  new Date(2013, 0).getTime(),
];

const ranges: RangeType[] = [
  "day",
  "fiveDays",
  "threeMonths",
  "sixMonths",
  "year",
  "twoYears",
  "fiveYears",
  "all",
];

const charts: Record<string, ChartPoint[]> = {
  day: [
    { date: 6, value: 5.91 },
    { date: 6.5, value: 5.91 },
    { date: 6.8, value: 5.91 },
    { date: 6.9, value: 5.91 },
    { date: 7, value: 5.87 },
    { date: 7.2, value: 5.9 },
    { date: 7.6, value: 5.9 },
    { date: 7.7, value: 5.95 },
    { date: 7.8, value: 5.9 },
    { date: 8.2, value: 5.9 },
    { date: 8.5, value: 5.88 },
    { date: 8.51, value: 6 },
    { date: 8.6, value: 5.9 },
    { date: 8.63, value: 6 },
    { date: 9.0, value: 5.99 },
    { date: 9.2, value: 5.99 },
    { date: 9.3, value: 6 },
    { date: 9.32, value: 5.99 },
    { date: 9.55, value: 6 },
    { date: 9.6, value: 5.993 },
    { date: 9.79, value: 5.993 },
    { date: 10.4, value: 5.965 },
    { date: 10.45, value: 5.99 },
    { date: 10.98, value: 5.99 },
    { date: 11, value: 6 },
    { date: 11.2, value: 6 },
  ],

  fiveDays: [
    { date: 6, value: 10.91 },
    { date: 6.14, value: 5.91 },
    { date: 6.2, value: 7 },
    { date: 6.21, value: 5.99 },
    { date: 6.24, value: 7 },
    { date: 6.26, value: 5.99 },
    { date: 7.7, value: 6.9 },
    { date: 7.73, value: 5.95 },
    { date: 7.75, value: 6.98 },
    { date: 7.76, value: 7 },
    { date: 8.63, value: 6 },
    { date: 8.64, value: 6.2 },
    { date: 8.64, value: 6.2 },
    { date: 8.63, value: 6.1 },
    { date: 9.0, value: 5.99 },
    { date: 9.2, value: 5.99 },
    { date: 9.3, value: 6 },
    { date: 9.32, value: 5.99 },
    { date: 9.55, value: 6 },
    { date: 9.79, value: 6.2 },
    { date: 9.8, value: 7.7 },
    { date: 9.81, value: 7 },
    { date: 9.82, value: 5.9 },
    { date: 9.83, value: 7 },
    { date: 9.84, value: 5.9 },
    { date: 9.85, value: 7 },
    { date: 9.86, value: 5.9 },
    { date: 10.2, value: 5.9 },
    { date: 10.4, value: 6 },
    { date: 10.41, value: 6 },
    { date: 10.85, value: 6 },
    { date: 10.9, value: 6 },
    { date: 10.88, value: 6 },
    { date: 10.88, value: 5.7 },
    { date: 10.95, value: 7 },
    { date: 10.96, value: 6.5 },
    { date: 10.97, value: 6.5 },
    { date: 10.98, value: 7 },
    { date: 10.99, value: 5.9 },
    { date: 11, value: 7 },
  ],

  year: [],
};

const fullData: [number, number][] = [
  [1327446000000, 6.34],
  [1327532400000, 12.18],
  [1327618800000, 11.05],
  [1327878000000, 12.0],
  [1328050800000, 10.24],
  [1328137200000, 9.29],
  [1328223600000, 11.85],
  [1328482800000, 10.86],
  [1328569200000, 10.28],
  [1328655600000, 12.1],
  [1328742000000, 11.65],
  [1328828400000, 11.21],
  [1329087600000, 11.45],
  [1329174000000, 10.44],
  [1329260400000, 11.46],
  [1329346800000, 11.86],
  [1329433200000, 7.75],
  [1329778800000, 7.54],
  [1329865200000, 7.33],
  [1329951600000, 9.37],
  [1330038000000, 8.41],
  [1330297200000, 8.27],
  [1330383600000, 8.27],
  [1330470000000, 9.9],
  [1330556400000, 9.1],
  [1330642800000, 8.73],
  [1330902000000, 8.22],
  [1330988400000, 6.99],
  [1331074800000, 7.41],
  [1331161200000, 8.05],
  [1331247600000, 8.64],
  [1331506800000, 8.56],
  [1331593200000, 9.22],
  [1331679600000, 8.77],
  [1331766000000, 9.17],
  [1331852400000, 8.82],
  [1332111600000, 9.51],
  [1332198000000, 8.16],
  [1332284400000, 8.56],
  [1332370800000, 8.71],
  [1332457200000, 8.81],
  [1332712800000, 9.4],
  [1332799200000, 9.63],
  [1332885600000, 9.46],
  [1332972000000, 9.48],
  [1333058400000, 9.31],
  [1333317600000, 9.7],
  [1333404000000, 9.31],
  [1333490400000, 8.46],
  [1333576800000, 8.59],
  [1333922400000, 8.22],
  [1334008800000, 7.61],
  [1334095200000, 8.01],
  [1334181600000, 8.55],
  [1334268000000, 8.18],
  [1334527200000, 7.84],
  [1334613600000, 8.84],
  [1334700000000, 8.39],
  [1334786400000, 7.91],
  [1334872800000, 8.06],
  [1335132000000, 7.62],
  [1335218400000, 7.4],
  [1335304800000, 8.13],
  [1335391200000, 8.26],
  [1335477600000, 8.58],
  [1335736800000, 8.55],
  [1335823200000, 8.77],
  [1335909600000, 8.76],
  [1335996000000, 8.32],
  [1336082400000, 7.61],
  [1336341600000, 7.52],
  [1336428000000, 7.67],
  [1336514400000, 7.52],
  [1336600800000, 6.92],
  [1336687200000, 7.2],
  [1336946400000, 7.23],
  [1337032800000, 7.33],
  [1337119200000, 7.36],
  [1337205600000, 7.01],
  [1337292000000, 6.31],
  [1337551200000, 7.01],
  [1337637600000, 7.01],
  [1337724000000, 7.18],
  [1337810400000, 6.54],
  [1337896800000, 6.6],
  [1338242400000, 7.05],
  [1338328800000, 6.29],
  [1338415200000, 6.05],
  [1338933600000, 6.69],
  [1339020000000, 6.32],
  [1339106400000, 6.65],
  [1339365600000, 6.13],
  [1339452000000, 6.77],
  [1339538400000, 6.79],
  [1339624800000, 6.67],
  [1339711200000, 7.39],
  [1339970400000, 11.63],
  [1340056800000, 10.89],
  [1340143200000, 10.69],
  [1340229600000, 10.23],
  [1340316000000, 10.57],
  [1340661600000, 10.07],
  [1340748000000, 10.41],
  [1340834400000, 8.98],
  [1340920800000, 8.44],
  [1341180000000, 6.19],
  [1341266400000, 6.51],
  [1341439200000, 7.53],
  [1341525600000, 6.87],
  [1342562400000, 6.53],
  [1342562400000, 6.23],
  [1342562400000, 6.93],
  [1342648800000, 7.49],
  [1342735200000, 6.38],
  [1343340000000, 6.89],
  [1343599200000, 6.61],
  [1343944800000, 6.02],
  [1344204000000, 7.14],
  [1344290400000, 5.37],
  [1344376800000, 5.51],
  [1344463200000, 5.65],
  [1344549600000, 5.64],
  [1344808800000, 5.27],
  [1344895200000, 5.1],
  [1344981600000, 5.91],
  [1345068000000, 6.65],
  [1345154400000, 6.8],
  [1345413600000, 6.92],
  [1345500000000, 6.75],
  [1345586400000, 6.84],
  [1345672800000, 6.5],
  [1345759200000, 7.26],
  [1346018400000, 7.32],
  [1346104800000, 7.06],
  [1346191200000, 9.96],
  [1346277600000, 10.56],
  [1346364000000, 10.07],
  [1346709600000, 10.43],
  [1346796000000, 7.26],
  [1346882400000, 7.79],
  [1346968800000, 7.46],
  [1347228000000, 7.13],
  [1347314400000, 7.43],
  [1347400800000, 7.42],
  [1347487200000, 7.81],
  [1347573600000, 8.34],
  [1347832800000, 8.41],
  [1347919200000, 7.57],
  [1348005600000, 8.12],
  [1348092000000, 9.53],
  [1348178400000, 8.83],
  [1348437600000, 8.41],
  [1348524000000, 7.9],
  [1348610400000, 7.53],
  [1348696800000, 7.8],
  [1348783200000, 7.44],
  [1349042400000, 7.62],
  [1349128800000, 7.57],
  [1349215200000, 7.6],
  [1349301600000, 7.68],
  [1349388000000, 7.47],
  [1349647200000, 7.23],
  [1349733600000, 6.68],
  [1349820000000, 6.51],
  [1349906400000, 6.78],
  [1349992800000, 6.94],
  [1350252000000, 7.33],
  [1350338400000, 8.24],
  [1350424800000, 8.44],
  [1350511200000, 8.48],
  [1350597600000, 8.24],
  [1350856800000, 8.49],
  [1350943200000, 8.31],
  [1351029600000, 8.36],
  [1351116000000, 8.4],
  [1351202400000, 9.01],
  [1351638000000, 9.02],
  [1351724400000, 9.36],
  [1351810800000, 9.39],
  [1352070000000, 9.24],
  [1352156400000, 9.39],
  [1352242800000, 8.47],
  [1352329200000, 7.98],
  [1352415600000, 7.9],
  [1352674800000, 5.7],
  [1352761200000, 5.54],
  [1352847600000, 2.23],
  [1352934000000, 5.64],
  [1353020400000, 5.65],
  [1353279600000, 2.92],
  [1353366000000, 2.64],
  [1353452400000, 5.84],
  [1353625200000, 5.4],
  [1353884400000, 5.3],
  [1353970800000, 8.18],
  [1354057200000, 8.88],
  [1354143600000, 9.09],
  [1354230000000, 9.61],
  [1354489200000, 9.7],
  [1354575600000, 10.3],
  [1354662000000, 10.4],
  [1354748400000, 10.14],
  [1354834800000, 10.48],
  [1355094000000, 10.75],
  [1355180400000, 10.54],
  [1355266800000, 10.96],
  [1355353200000, 15.59],
];

type AxisConfig = {
  xDomain: [number, number];
  xTicks?: number[];
  xFormatter: (v: number) => string;

  yDomain: [number, number];
  yTicks: number[];
  yFormatter: (v: number) => string;
};

const axisConfigs: Record<RangeType, AxisConfig> = {
  day: {
    xDomain: [6, 11],
    xFormatter: (v) => `${v} ص`,
    xTicks: [6, 7, 8, 9, 10, 11],
    yDomain: [5.85, 6],
    yTicks: [5.85, 5.875, 5.9, 5.925, 5.95, 5.975, 6],
    yFormatter: (v) => v.toFixed(2),
  },

  fiveDays: {
    xDomain: [6, 11],
    xFormatter: (v) => `${v} ص`,
    xTicks: [6, 7, 8, 9, 10, 11],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  year: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xTicks: yearTicks,
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  twoYears: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xTicks: twoYearsTicks,
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  fiveYears: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xTicks: twoYearsTicks,
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  threeMonths: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  sixMonths: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },

  all: {
    xDomain: [fullData[0][0], fullData[fullData.length - 1][0]],
    xTicks: twoYearsTicks,
    xFormatter: (v) => translations.ar.months[new Date(v).getMonth()],
    yDomain: [5, 11],
    yTicks: [5, 6, 7, 8, 9, 10, 11],
    yFormatter: (v) => v.toFixed(0),
  },
};

function squeezeValues(data: ChartPoint[], factor = 0.35) {
  const min = Math.min(...data.map((d) => d.value));
  const max = Math.max(...data.map((d) => d.value));
  const mid = (min + max) / 2;

  return data.map((d) => ({
    date: d.date,
    value: mid + (d.value - mid) * factor,
  }));
}

function liftAfterMidFixed(data: ChartPoint[], lift: number) {
  const midIndex = Math.floor(data.length / 2);

  return data.map((point, index) => {
    if (index <= midIndex) {
      return point;
    }

    return {
      ...point,
      value: point.value + lift,
    };
  });
}

function dropToMinAfterMid(data: ChartPoint[], minValue = 5) {
  const midIndex = Math.floor(data.length / 2);

  return data.map((p, i) => {
    if (i <= midIndex) return p;

    const ratio = (i - midIndex) / (data.length - 1 - midIndex);
    const newValue = p.value - (p.value - minValue) * ratio;

    return { ...p, value: newValue };
  });
}

function generateYearData() {
  const base = fullData.map((item) => ({ date: item[0], value: item[1] }));
  const squeezed = squeezeValues(base, 0.35);
  const lifted = liftAfterMidFixed(squeezed, 1);
  const dropped = dropToMinAfterMid(lifted, 6);
  return dropped;
}

function liftRange(
  data: ChartPoint[],
  lift: number,
  startIndex: number,
  endIndex: number
) {
  return data.map((p, i) => {
    if (i < startIndex || i > endIndex) return p;
    return { ...p, value: p.value + lift };
  });
}

function generateTwoYearsData() {
  const base = fullData.map((item) => ({ date: item[0], value: item[1] }));
  const squeezed = squeezeValues(base, 0.35);

  let result = squeezed;
  result = liftRange(result, 1.7, 25, 31);
  result = liftRange(result, 0.7, 40, 60);

  const lifted = result;
  const dropped = dropToMinAfterMid(lifted, 6);

  return dropped;
}

function generate5DaysData() {
  return charts.fiveDays;
}

function getRangeData(active: RangeType) {
  if (active === "day") return charts.day;
  if (active === "fiveDays") return generate5DaysData();
  if (active === "year") return generateYearData();
  if (active === "twoYears") return generateTwoYearsData();
  if (active === "fiveYears") return generateTwoYearsData();
  if (active === "all") return generateTwoYearsData();

  if (active === "threeMonths") {
    const yearData = generateYearData();
    let result = yearData;

    result = liftRange(result, 0.4, 126, 190);
    result = liftRange(result, 1.8, 1, 19);
    result = liftRange(result, -1.8, 32, 59);
    result = liftRange(result, -1.8, 60, 68);
    result = liftRange(result, -1.8, 69, 95);
    result = liftRange(result, -0.7, 96, 120);
    result = liftRange(result, -1.8, 96, 158);
    result = liftRange(result, -0.9, 159, 198);

    return result;
  }

  if (active === "sixMonths") {
    const yearData = generateYearData();
    let result = yearData;

    result = liftRange(result, -0.7, 126, 190);
    result = liftRange(result, 0.2, 1, 20);
    result = liftRange(result, 1.3, 60, 68);
    result = liftRange(result, -0.7, 96, 120);
    result = liftRange(result, -1.7, 96, 158);
    result = liftRange(result, -0.4, 159, 198);

    return result;
  }

  return charts.day;
}

export default function IndicatorChart() {
  const { locale } = useLang();
  const t = translations[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";

  const [active, setActive] = useState<RangeType>("day");
  const chartData = useMemo(() => getRangeData(active), [active]);
  const axis = axisConfigs[active];

  const tooltipLabel = (label: number) => {
    if (active === "day" || active === "fiveDays") {
      return `${label} ${t.am}`;
    }
    return t.months[new Date(label).getMonth()];
  };

  return (
    <div className="chart-wrapper" dir={dir}>
      <h3 className="chart-title">{t.title}</h3>

      <div className="chart-buttons">
        {ranges.map((r) => (
          <button
            key={r}
            onClick={() => setActive(r)}
            className={`chart-btn ${active === r ? "active" : ""}`}
          >
            {t.ranges[r]}
          </button>
        ))}
      </div>

      <div className="chart-container" style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: -40, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="fillArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5a3b2d" stopOpacity={1} />
                <stop offset="100%" stopColor="#f2e8df" stopOpacity={1} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} stroke="#ddd" strokeDasharray="4 4" />

            <XAxis
              dataKey="date"
              type="number"
              domain={axis.xDomain}
              ticks={axis.xTicks}
              tickFormatter={axis.xFormatter}
              angle={-45}
              height={80}
              dy={18}
            />

            <YAxis
              orientation={locale === "ar" ? "right" : "left"}
              domain={axis.yDomain}
              ticks={axis.yTicks}
              tickFormatter={axis.yFormatter}
              interval={0}
            />

            <Tooltip labelFormatter={tooltipLabel} />

            <Area
              type={active === "day" || active === "fiveDays" ? "monotone" : "basis"}
              dataKey="value"
              stroke="#6b4a3b"
              strokeWidth={2}
              fill="url(#fillArea)"
              dot={false}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
