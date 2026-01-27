"use client";

import { useState } from "react";
import "../../styles/presentations.css";

/* ================= TYPES ================= */

type DocItem = {
  title: string;
  type: string;
  date: string;
};

type DropdownKey = "first" | "second" | "third" | "fourth";

/* ================= DATA ================= */

const dropdownData: Record<DropdownKey, DocItem[]> = {
  first: Array.from({ length: 8 }, () => ({
    title: "النظام الأساسي للشركة",
    type: "النظام الأساسي",
    date: "01/01/2025",
  })),
  second: Array.from({ length: 6 }, () => ({
    title: "النظام الأساسي للشركة",
    type: "النظام الأساسي",
    date: "01/01/2025",
  })),
  third: Array.from({ length: 10 }, () => ({
    title: "النظام الأساسي للشركة",
    type: "النظام الأساسي",
    date: "01/01/2025",
  })),
  fourth: Array.from({ length: 5 }, () => ({
    title: "النظام الأساسي للشركة",
    type: "النظام الأساسي",
    date: "01/01/2025",
  })),
};

/* ================= PAGE ================= */

export default function Presentations() {
  const [activeDropdown, setActiveDropdown] =
    useState<DropdownKey | null>(null);

  return (
    <div className="presentations-page">
      <h1 className="page-title">Presentations</h1>

      {/* Top Dropdown */}
      <div className="top-dropdown">
        <select
          value={activeDropdown ?? ""}
          onChange={(e) =>
            setActiveDropdown(
              e.target.value === ""
                ? null
                : (e.target.value as DropdownKey)
            )
          }
        >
          <option value="">اختر الفئة</option>
          <option value="first">القائمة الأولى</option>
          <option value="second">القائمة الثانية</option>
          <option value="third">القائمة الثالثة</option>
          <option value="fourth">القائمة الرابعة</option>
        </select>
      </div>

      {/* Content Box */}
      <div className="content-box">
        <div className="dropdowns-row">
          <Dropdown
            title="القائمة الأولى"
            active={activeDropdown === "first"}
            items={dropdownData.first}
          />
          <Dropdown
            title="القائمة الثانية"
            active={activeDropdown === "second"}
            items={dropdownData.second}
          />
          <Dropdown
            title="القائمة الثالثة"
            active={activeDropdown === "third"}
            items={dropdownData.third}
          />
          <Dropdown
            title="القائمة الرابعة"
            active={activeDropdown === "fourth"}
            items={dropdownData.fourth}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENT ================= */

function Dropdown({
  title,
  active,
  items,
}: {
  title: string;
  active: boolean;
  items: DocItem[];
}) {
  return (
    <div className={`dropdown-box ${active ? "show" : ""}`}>
      <div className="dropdown-header">{title}</div>

      {active && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <div key={index} className="doc-item">
              <div className="doc-info">
                <strong>{item.title}</strong>
                <span>النوع: {item.type}</span>
                <span>التاريخ: {item.date}</span>
              </div>

              <div className="doc-links">
                <a href="#">EN</a>
                <a href="#">AR</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
