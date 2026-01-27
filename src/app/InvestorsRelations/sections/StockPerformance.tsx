"use client";

import { useState } from "react";
import "../../styles/stock-performance.css";

type Tab =
  | "chart"
  | "summary"
  | "calculator"
  | "sector"
  | "deals";

export default function StockPerformance() {
  const [activeTab, setActiveTab] = useState<Tab>("chart");

  return (
    <div className="stock-page">
      <h1 className="page-title">أداء السهم</h1>

      {/* Buttons */}
      <div className="tabs">
        <button onClick={() => setActiveTab("chart")} className={activeTab === "chart" ? "active" : ""}>
          أداء السهم
        </button>
        <button onClick={() => setActiveTab("summary")} className={activeTab === "summary" ? "active" : ""}>
          ملخص السهم
        </button>
        <button onClick={() => setActiveTab("calculator")} className={activeTab === "calculator" ? "active" : ""}>
          حاسبة الاستثمار
        </button>
        <button onClick={() => setActiveTab("sector")} className={activeTab === "sector" ? "active" : ""}>
          شركات القطاع
        </button>
        <button onClick={() => setActiveTab("deals")} className={activeTab === "deals" ? "active" : ""}>
          الصفقات الخاصة
        </button>
      </div>

      {/* Content */}
      {activeTab === "chart" && <ChartTab />}
      {activeTab === "summary" && <SummaryTab />}
      {activeTab === "calculator" && <CalculatorTab />}
      {activeTab === "sector" && <SectorTab />}
      {activeTab === "deals" && <DealsTab />}
    </div>
  );
}

/* ================= TAB 1 ================= */
function ChartTab() {
  return (
    <div className="tab-content">
      <div className="chart-box">📈 الرسم البياني هنا</div>

      <table className="data-table">
        <thead>
          <tr>
            <th>التاريخ</th>
            <th>السعر</th>
            <th>التغيير</th>
            <th>التغيير (%)</th>
            <th>حجم التداول</th>
            <th>قيمة التداول</th>
            <th>الافتتاح</th>
            <th>الأعلى</th>
            <th>الأدنى</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>15/01/2026</td>
            <td>6.20</td>
            <td>0.14</td>
            <td className="green">2.35%</td>
            <td>10,807</td>
            <td>66,036</td>
            <td>6.20</td>
            <td>6.20</td>
            <td>5.90</td>
          </tr>
          <tr>
            <td>14/01/2026</td>
            <td>6.15</td>
            <td>0.12</td>
            <td className="red">(1.98%)</td>
            <td>71,298</td>
            <td>428,312</td>
            <td>6.15</td>
            <td>6.15</td>
            <td>5.90</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ================= TAB 2 ================= */
function SummaryTab() {
  return (
    <div className="summary-grid">
      <SummaryItem label="القيمة السوقية (ريال)" value="6.09" color="black" />
      <SummaryItem label="3 أشهر" value="(24.63%)" color="red" />
      <SummaryItem label="6 أشهر" value="(30.00%)" color="red" />
      <SummaryItem label="12 أشهر" value="(33.44%)" color="red" />
      <SummaryItem label="من بداية العام" value="1.33%" color="blue" />
      <SummaryItem label="آخر سعر" value="6.09" color="black" />
      <SummaryItem label="حجم التداول" value="10,807.00" color="gray" />
      <SummaryItem label="قيمة التداول" value="66,036.00" color="gray" />
      <SummaryItem label="عدد الصفقات" value="15" color="black" />
    </div>
  );
}

function SummaryItem({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="summary-item">
      <span>{label}</span>
      <strong className={color}>{value}</strong>
    </div>
  );
}

/* ================= TAB 3 ================= */
function CalculatorTab() {
  return (
    <div className="calculator-box">
      <h3>حاسبة الاستثمار</h3>

      <div className="calc-row">
        <label>بداية تاريخ الاستثمار</label>
        <input type="date" />
      </div>

      <div className="calc-row">
        <label>نهاية تاريخ الاستثمار</label>
        <input type="date" />
      </div>

      <div className="calc-row">
        <label>عدد الأسهم المستثمرة</label>
        <input type="number" />
      </div>

      <button className="calc-btn">عرض المعطيات</button>
    </div>
  );
}

/* ================= TAB 4 ================= */
function SectorTab() {
  const [section, setSection] = useState("info");

  return (
    <div>
      <div className="sub-tabs">
        <button onClick={() => setSection("info")}>معلومات عامة</button>
        <button onClick={() => setSection("rank")}>ترتيب الشركات</button>
        <button onClick={() => setSection("growth")}>النمو</button>
        <button onClick={() => setSection("performance")}>أداء الشركة</button>
      </div>

      <div className="tab-content">
        <p>محتوى: {section}</p>
      </div>
    </div>
  );
}

/* ================= TAB 5 ================= */
function DealsTab() {
  return (
    <div className="tab-content">
      <h3>الصفقات الخاصة</h3>

      <table className="data-table">
        <thead>
          <tr>
            <th>التاريخ</th>
            <th>سعر السوق</th>
            <th>سعر الصفقة</th>
            <th>فرق السعر</th>
            <th>قيمة الصفقة</th>
            <th>كمية الصفقة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25/12/2025</td>
            <td>6.00</td>
            <td>5.95</td>
            <td>(0.83%)</td>
            <td>5,950,000</td>
            <td>1,000,000</td>
          </tr>
          <tr>
            <td>24/11/2025</td>
            <td>6.10</td>
            <td>4.75</td>
            <td>(22.13%)</td>
            <td>9,999,999</td>
            <td>2,105,263</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
