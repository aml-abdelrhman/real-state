'use client';

import { useState } from "react";
import "../../styles/Profile.css";
import Image from "next/image";
import { useLang } from "../../../context/LangContext";

import { profileAr } from "../../i18n/profileAr";
import { profileEn } from "../../i18n/profileEn";
import { ProfileLang, Currency } from "../../i18n/types";

const DashIcon = () => (
  <div className="chart-cell">
    <Image src="/images/Capture2.PNG" alt="chart" width={24} height={21} />
  </div>
);

export default function Profile() {
 const { locale } = useLang();
  const data: ProfileLang = locale === "ar" ? profileAr : profileEn;

  const [activeCurrency, setActiveCurrency] = useState<Currency>("SAR");

  return (
    <div className={`profile-page ${locale === "ar" ? "lang-ar" : "lang-en"}`}>
      <div className="section section-top">
        <div className="card small-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.companyFieldTitle}</span>
          </div>

          <p>{data.companyFieldText}</p>
        </div>

        <div className="card tall-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.aboutTitle}</span>
          </div>

          {data.aboutParagraphs.map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="card large-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.basicInfoTitle}</span>
          </div>

          <div className="card-content grid-two-columns">
            {data.basicInfo.map((item, index: number) => (
              <div
                key={index}
                className={item.full ? "info-full" : "info-pair"}
              >
                <span className="info-label">{item.label}</span>

                {item.link ? (
                  <a
                    className="info-value blue-text"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="info-value">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="section section-side-by-side">
          <div className="card medium-card">
            <div className="title-wrapper">
              <span className="separator">|</span>
              <span className="card-title">{data.sectorsTitle}</span>
            </div>

            <div className="numbers-grid">
              {data.numbers.map((numberItem, index: number) => (
                <div className="number-item" key={index}>
                  <span className="label">{numberItem.label}</span>
                  <span className="value">{numberItem.value}</span>
                </div>
              ))}
            </div>

            <div className="stats-wrapper">
              {data.stats.map((statItem, index: number) => (
                <div className="stats-column" key={index}>
                  <span className="stats-label">{statItem.label}</span>
                  <span className="stats-value">{statItem.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card large-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.financialSummaryTitle}</span>
          </div>

          <div className="currency-boxes end">
            <div
              className={`currency-box ${activeCurrency === "SAR" ? "active" : ""}`}
              onClick={() => setActiveCurrency("SAR")}
            >
              {data.currency.sar}
            </div>
            <div
              className={`currency-box ${activeCurrency === "USD" ? "active" : ""}`}
              onClick={() => setActiveCurrency("USD")}
            >
              {data.currency.usd}
            </div>
          </div>

          <div className="financial-table-wrapper">
            <div className="financial-table">
              <div className="table-row header">
                {data.tableHeaders.map((headerItem: string, index: number) => (
                  <div key={index}>{headerItem}</div>
                ))}
              </div>

              {data.financialRows.map((row, index: number) => (
                <div className="table-row" key={index}>
                  <div>{row.title}</div>
                  <div>
                    <DashIcon />
                  </div>

                  {(activeCurrency === "SAR" ? row.sar : row.usd).map(
                    (valueItem: string, valueIndex: number) => (
                      <div key={valueIndex}>{valueItem}</div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section section-side-by-side">
        <div className="card medium-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.shareDataTitle}</span>
          </div>

          <div className="currency-boxes">
            <div
              className={`currency-box ${activeCurrency === "SAR" ? "active" : ""}`}
              onClick={() => setActiveCurrency("SAR")}
            >
              {data.currency.sar}
            </div>
            <div
              className={`currency-box ${activeCurrency === "USD" ? "active" : ""}`}
              onClick={() => setActiveCurrency("USD")}
            >
              {data.currency.usd}
            </div>
          </div>

          <div className="finance-list">
            {(activeCurrency === "SAR"
              ? data.shareDataSAR
              : data.shareDataUSD
            ).map((item, index: number) => (
              <div
                className={`finance-item ${index === 0 ? "raw" : ""}`}
                key={index}
              >
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>

          <button className="card-btn">{data.buttons.indicators}</button>
        </div>

        <div className="card medium-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.subsidiariesTitle}</span>
          </div>

          <div className="subsidiaries-scroll-wrapper">
            <div className="subsidiaries-scroll">
              <div className="subsidiary-row header-row-line">
                {data.subsidiariesHeaders.map((headerItem: string, index: number) => (
                  <div className="cell fixed-width" key={index}>
                    {headerItem}
                  </div>
                ))}
              </div>

              {data.subsidiaries.map((sub, index: number) => (
                <div className="subsidiary-row" key={index}>
                  <div className="cell fixed-width">{sub.name}</div>
                  <div className="cell fixed-width">{sub.country}</div>
                  <div className="cell fixed-width">{sub.percent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card large-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.shareholdersTitle}</span>
          </div>

          <div className="simple-table">
            <div className="table-h">
              {data.shareholdersHeaders.map((headerItem: string, index: number) => (
                <span key={index}>{headerItem}</span>
              ))}
            </div>

            {data.shareholders.map((sh, index: number) => (
              <div className="table-r" key={index}>
                <span>{sh.name}</span>
                <span>{sh.percent}</span>
                <span>{sh.shares}</span>
              </div>
            ))}
          </div>

          <button className="card-btn">{data.buttons.more}</button>
        </div>

        <div className="card large-card developments-card">
          <div className="title-wrapper">
            <span className="separator">|</span>
            <span className="card-title">{data.developmentsTitle}</span>
          </div>

          <div className="developments-list">
            {data.developments.map((dev, index: number) => (
              <div className="development-item" key={index}>
                <span className="development-date">{dev.date}</span>
                <p className="development-text">{dev.text}</p>
              </div>
            ))}
          </div>

          <button className="card-btn developments-btn">{data.buttons.more}</button>
        </div>
      </div>
    </div>
  );
}
