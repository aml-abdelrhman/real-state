"use client";

import { useState } from "react";
import "../../styles/financial-statements.css";

type MainTab = "statements" | "ratios" | "reports";

export default function FinancialStatements() {
  const [activeTab, setActiveTab] = useState<MainTab>("statements");
  const [dropdownCount, setDropdownCount] = useState(2);

  return (
    <div className="financial-page">
      <h1 className="page-title">القوائم والتقارير المالية</h1>

      {/* Main Buttons */}
      <div className="main-tabs">
        <button
          className={activeTab === "statements" ? "active" : ""}
          onClick={() => {
            setActiveTab("statements");
            setDropdownCount(3);
          }}
        >
          القوائم المالية
        </button>
        <button
          className={activeTab === "ratios" ? "active" : ""}
          onClick={() => {
            setActiveTab("ratios");
            setDropdownCount(3);
          }}
        >
          المؤشرات المالية
        </button>
        <button
          className={activeTab === "reports" ? "active" : ""}
          onClick={() => {
            setActiveTab("reports");
            setDropdownCount(2);
          }}
        >
          التقارير المالية
        </button>
      </div>

      {/* Content Box */}
      <div className="content-box">
        {/* Dropdowns */}
        <div className="dropdowns">
          {Array.from({ length: dropdownCount }).map((_, i) => (
            <select key={i}>
              <option>اختر</option>
              <option>قائمة الدخل</option>
              <option>المركز المالي</option>
              <option>التدفق النقدي</option>
            </select>
          ))}
        </div>

        {/* Content */}
        {activeTab !== "reports" && <FinancialTable />}

        {activeTab === "reports" && <ReportsSection />}
      </div>
    </div>
  );
}

/* ================= TABLE ================= */
function FinancialTable() {
  return (
    <table className="financial-table">
      <thead>
        <tr>
          <th>التفاصيل</th>
          <th>2024</th>
          <th>2023</th>
          <th>2022</th>
          <th>2021</th>
          <th>2020</th>
        </tr>
      </thead>
      <tbody>
        <tr className="section">
          <td colSpan={6}>قائمة الدخل</td>
        </tr>

        <tr>
          <td>الإيرادات</td>
          <td>254.95</td>
          <td>237.85</td>
          <td>204.65</td>
          <td>204.92</td>
          <td>70.49</td>
        </tr>

        <tr>
          <td>تكلفة الإيرادات</td>
          <td>-182.39</td>
          <td>-188.29</td>
          <td>-153.58</td>
          <td>-145.96</td>
          <td>-50.85</td>
        </tr>

        <tr>
          <td>إجمالي الدخل</td>
          <td>72.56</td>
          <td>49.56</td>
          <td>51.07</td>
          <td>58.96</td>
          <td>19.64</td>
        </tr>

        <tr>
          <td>دخل العمليات</td>
          <td>53.37</td>
          <td>34.65</td>
          <td>46.01</td>
          <td>48.13</td>
          <td>16.47</td>
        </tr>

        <tr>
          <td>صافي الدخل</td>
          <td>59.30</td>
          <td>41.95</td>
          <td>42.71</td>
          <td>50.61</td>
          <td>16.03</td>
        </tr>
      </tbody>
    </table>
  );
}

/* ================= REPORTS ================= */
function ReportsSection() {
  return (
    <div className="reports-grid">
      {["2023", "2022", "2021", "2020"].map((year) => (
        <div key={year} className="report-card">
          <h3>العام: {year}</h3>
          <p>سنوي</p>

          <div className="report-links">
            <a href="#">PDF EN</a>
            <a href="#">PDF AR</a>
          </div>
        </div>
      ))}
    </div>
  );
}
