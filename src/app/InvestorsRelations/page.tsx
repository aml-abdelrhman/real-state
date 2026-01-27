"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import Overview from "./sections/Overview";
import Profile from "./sections/Profile";
import Board from "./sections/Board";
import StockPerformance from "./sections/StockPerformance";
import Financials from "./sections/Financials";
import Presentations from "./sections/Presentations";
import Disclosures from "./sections/Disclosures";
import Actions from "./sections/Actions";
import Shareholders from "./sections/Shareholders";

import { motion } from "framer-motion";
import { useLang } from "../../context/LangContext";
import { irEn } from "../i18n/en";
import { irAr } from "../i18n/ar";
import { IRSection } from "../i18n/types";

export default function InvestorsRelations() {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { locale } = useLang();

  const t = locale === "ar" ? irAr : irEn;

  return (
    <>
      <Navbar />
      <Header
        imageSrc="/images/about.jpg"
       pageName="علاقات المستثمرين"
        showBar={false}
        topLink={{ label: locale === "ar" ? "الرئيسية" : "Home", href: "/" }}
      />

      <section className="ir-container">
        <button
          className={`hamburger-btn ${sidebarOpen ? "open" : ""}`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? "✕" : "☰"}
        </button>

        <div className="dashboard-grid">
          {/* Sidebar */}
          <aside
            className={`dashboard-sidebar clean-sidebar ${
              sidebarOpen ? "open" : ""
            }`}
          >
            <ul className="sidebar-menu">
              {Object.entries(t.sidebar).map(([key, label]) => (
                <li
                  key={key}
                  className={activeSection === key ? "highlight" : ""}
                  onClick={() => {
                    setActiveSection(key as IRSection);
                    setSidebarOpen(false);
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {activeSection === "overview" && <Overview />}
            {activeSection === "profile" && <Profile />}
            {activeSection === "board" && <Board />}
            {activeSection === "stock" && <StockPerformance />}
            {activeSection === "financials" && <Financials />}
            {activeSection === "presentations" && <Presentations />}
            {activeSection === "disclosures" && <Disclosures />}
            {activeSection === "actions" && <Actions />}
            {activeSection === "shareholders" && <Shareholders />}
          </main>
        </div>

        {/* Marquee / شريط الأخبار */}
        <div className="ir-ticker-second">
          <motion.div
            className="ticker-content"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {t.tickerItems.map((item, idx) => (
              <div className="ticker-item" key={idx}>
                <span className="ticker-title">{item.title}</span>
                <span className="ticker-date">{item.date}</span>
                {item.content}
                <span className="ticker-separator">|</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
