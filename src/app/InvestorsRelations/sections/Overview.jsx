"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "../../styles/InvestorsRelations.css";
import IndicatorChart from "../../components/IndicatorChart";
import { overviewEn } from "../../i18n/en";
import { overviewAr } from "../../i18n/ar";
import { useLang } from "../../../context/LangContext";

const PdfWithAmpersandIcon = () => (
  <div className="pdf-amp-icon">
    <svg width="22" height="26" viewBox="0 0 24 28">
      <path d="M4 1H14L20 7V26C20 27.1 19.1 28 18 28H4C2.9 28 2 27.1 2 26V3C2 1.9 2.9 1 4 1Z" />
      <path d="M14 1V7H20" />
    </svg>
    <span className="amp-symbol">&</span>
  </div>
);

export default function Overview() {
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => [...prev.slice(1), generateData()[0]]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { locale } = useLang();

  const t = locale === "ar" ? overviewAr : overviewEn;

  return (
    <>
      <div className="ir-top">
        <div className="company-box">
          <div className="company-name">
            {t.companyName}
            <span className="highlight-blue">{t.companyShort}</span>
          </div>
          <div className="company-stats">
            {t.companyStats.map((stat, idx) => (
              <span key={idx} className={`stat-${stat.label.toLowerCase()}`}>
                {stat.value} {stat.change ? `(${stat.change})` : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="market-card">
            <div className="market-chart">
    <IndicatorChart />
  </div>
          <div className="market-numbers">
            <span className="price">{t.marketCard.price}</span>
            <span className="change up">{t.marketCard.change}</span>
          </div>
          <Link href={t.marketCard.moreLink} className="more-link">
            {locale === "ar" ? "المزيد" : "More"}
          </Link>
        </div>

        <div className="stock-details-card">
          <div className="stock-main-titles">
            <div className="main-title title-large blue">
              {t.stockDetails.titles[0]}
            </div>
            <div className="main-title title-medium blue">
              {t.stockDetails.titles[1]}
            </div>
            <div className="main-title title-verylarge gray">
              {t.stockDetails.mainValue}{" "}
              <span className="currency">{t.stockDetails.mainCurrency}</span>
            </div>
          </div>

          <div className="stock-row green-row">
            <span>{t.stockDetails.rows[0][0].label}</span>
            <span>{t.stockDetails.rows[0][1].label}</span>
            <span>{t.stockDetails.rows[0][2].label}</span>
            <span>{t.stockDetails.rows[0][3].label}</span>
          </div>

          <div className="stock-row gray-row">
            <span>{t.stockDetails.rows[0][0].value}</span>
            <span>{t.stockDetails.rows[0][1].value}</span>
            <span>{t.stockDetails.rows[0][2].value}</span>
            <span>{t.stockDetails.rows[0][3].value}</span>
          </div>

          <div className="stock-row-single">
            <span className="green">{t.stockDetails.rows[1][0].label}</span>
            <span className="gray">{t.stockDetails.rows[1][0].value}</span>
          </div>

          <div className="stock-main-titles">
            <div className="main-title green">{t.stockDetails.changeTitle}</div>
          </div>

          <div className="stock-change">
            <div className="stock-row gray-row">
              <span>{t.stockDetails.changePeriods[0]}</span>
              <span>{t.stockDetails.changePeriods[1]}</span>
              <span>{t.stockDetails.changePeriods[2]}</span>
            </div>
            <div className="stock-row secondgray-row">
              <span>{t.stockDetails.changeValues[0]}</span>
              <span>{t.stockDetails.changeValues[1]}</span>
              <span>{t.stockDetails.changeValues[2]}</span>
            </div>
            <div className="stock-row-single">
              <span className="gray">
                {t.stockDetails.changeFromStartOfYearLabel}
              </span>
              <span className="gray">
                {t.stockDetails.changeFromStartOfYear}
              </span>
            </div>
          </div>

          <div className="stock-row green-row">
            <span>{t.stockDetails.tradingVolumeLabel}</span>
            <span>{t.stockDetails.tradesCountLabel}</span>
          </div>
          <div className="stock-row gray-row">
            <span>{t.stockDetails.tradingVolumeValue}</span>
            <span>{t.stockDetails.tradesCountValue}</span>
          </div>

          <Link href={t.stockDetails.moreLink} className="more-link">
            {t.stockDetails.moreLinkLabel}
          </Link>
        </div>
      </div>

      <div className="ir-three-cards">
        <div
          className="ir-card with-bg"
          style={{ backgroundImage: `url(${t.cardsImages[0]})` }}
        >
          <div className="card-overlay">
            <span>{t.cardsTitles[0]}</span>
          </div>
        </div>
        <div
          className="ir-card with-bg"
          style={{ backgroundImage: `url(${t.cardsImages[1]})` }}
        >
          <div className="card-overlay">
            <span>{t.cardsTitles[1]}</span>
          </div>
        </div>
        <div
          className="ir-card with-bg"
          style={{ backgroundImage: `url(${t.cardsImages[2]})` }}
        >
          <div className="card-overlay">
            <span>{t.cardsTitles[2]}</span>
          </div>
        </div>
      </div>

      <div className="ir-reports">
        <div className="reports-table">
          <h3>{t.reportsTitle}</h3>

          <div className="reports-header">
            <span>{locale === "ar" ? "عنوان التقرير" : "Report Title"}</span>
            <span>{locale === "ar" ? "مرحلي" : "Period"}</span>
            <span>{locale === "ar" ? "سنوي" : "Year"}</span>
          </div>

          <div className="reports-row">
            <span className="report-title">{t.reports[0].title}</span>
            <span className="report-period">{t.reports[0].period}</span>
            <span className="report-year">{t.reports[0].year}</span>
          </div>

          <div className="reports-row">
            <span className="report-title">{t.reports[1].title}</span>
            <span className="report-period">{t.reports[1].period}</span>
            <span className="report-year">{t.reports[1].year}</span>
          </div>

          <div className="reports-row">
            <span className="report-title">{t.reports[2].title}</span>
            <span className="report-period">{t.reports[2].period}</span>
            <span className="report-year">{t.reports[2].year}</span>
          </div>

          <div className="reports-row">
            <span className="report-title">{t.reports[3].title}</span>
            <span className="report-period">{t.reports[3].period}</span>
            <span className="report-year">{t.reports[3].year}</span>
          </div>

          <div className="reports-row">
            <span className="report-title">{t.reports[4].title}</span>
            <span className="report-period">{t.reports[4].period}</span>
            <span className="report-year">{t.reports[4].year}</span>
          </div>

          <Link href={t.moreReportsLink} className="more-link">
            {locale === "ar" ? "المزيد" : "More"}
          </Link>
        </div>

        {/* شبكة السنوات و PDF */}
        <div className="reports-years-grid">
          <div className="contact-title">
            <span>{locale === "ar" ? "التقارير" : "Reports"}</span>
          </div>

          <div className="years-grid">
            {t.yearsGrid.map((yearItem, index) => (
              <div className="year-card" key={yearItem.year}>
                <div className="year-top">
                  <span className={`year-index year-index-${index + 1}`}>
                    {index + 1}
                  </span>
                  <span className="year-q">Q</span>
                </div>

                <div className="year-bottom">
                  <span className={`year-text year-${index + 1}`}>
                    {yearItem.year}
                  </span>
                  <div className="pdf-icons-space">
                    <a
                      href={yearItem.pdf}
                      target="_blank"
                      className="pdf-icon envelope"
                    >
                      <PdfWithAmpersandIcon />
                    </a>
                    <a
                      href={yearItem.pdfAr}
                      target="_blank"
                      className="pdf-icon blue"
                    >
                      AR
                    </a>
                    <a
                      href={yearItem.pdfEn}
                      target="_blank"
                      className="pdf-icon gray"
                    >
                      EN
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href={t.moreReportsLink} className="more-link">
            {locale === "ar" ? "المزيد" : "More"}
          </Link>
        </div>
      </div>

      <div className="ir-contact-wide">
        <div className="contact-title">
          <span>{t.contactTitle}</span>
        </div>

        <div className="contact-column">
          <span className="contact-label">
            {locale === "ar" ? "الموقع الإلكتروني" : "Website"}:
          </span>
          <span className="contact-value">
            <a
              href={t.contactInfo[0].link}
              target="_blank"
              className="contact-link"
            >
              {t.contactInfo[0].value}
            </a>
          </span>
        </div>

        <div className="contact-column">
          <span className="contact-label">
            {locale === "ar" ? "البريد الإلكتروني" : "Email"}:
          </span>
          <span className="contact-value">
            <a
              href={`mailto:${t.contactInfo[1].value}`}
              className="contact-link"
            >
              {t.contactInfo[1].value}
            </a>
          </span>
        </div>

        <div className="contact-column">
          <span className="contact-label">
            {locale === "ar" ? "الجوال" : "Mobile"}:
          </span>
          <span className="contact-value">{t.contactInfo[2].value}</span>
        </div>

        <div className="contact-full">
          <span className="contact-label">
            {locale === "ar" ? "العنوان" : "Address"}:
          </span>
          <span className="contact-value">{t.contactInfo[3].value}</span>
        </div>

        <div className="contact-button-wrapper">
          <Link href={t.contactMoreLink} className="more-link">
            {locale === "ar" ? "المزيد" : "More"}
          </Link>
        </div>
      </div>
    </>
  );
}
