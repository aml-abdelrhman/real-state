"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ReusableText from "../components/ReusableText";
import Arrows from "./Arrows";
import "../styles/LatestProjects.css";
import { useLang } from "../../context/LangContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";

import { lastProjectsEn } from "../i18n/lastProjectsEn";
import { lastProjectsAr } from "../i18n/lastProjectsAr";

type Project = {
  id: number;
  title: string;
  description: string[][];
  details: string[];
  image: string;
  slug: string;
};

export default function LatestProjects() {
  const swiperRef = useRef<SwiperType | null>(null);
  const { locale, t } = useLang();

  const projects: Project[] =
    locale === "ar"
      ? Object.values(lastProjectsAr)
      : Object.values(lastProjectsEn);

  return (
    <section
      className="latest-projects-section"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="container">
        <div className="projects-top-bar">
          <ReusableText
            firstWord={t?.uxx?.first ?? ""}
            secondWord={t?.uxx?.second ?? ""}
            thirdWord={t?.uxx?.third ?? ""}

          />

          <Arrows
            onPrev={() => swiperRef.current?.slidePrev()}
            onNext={() => swiperRef.current?.slideNext()}
            leftColor="#808080"
            rightColor="#808080"
            leftBorderColor="#808080"
            rightBorderColor="#808080"
            leftBackground="transparent"
            rightBackground="transparent"
            rightHoverBackground="#4297a7"
            leftHoverBackground="#4297a7"
          />
        </div>

        <Swiper
          key={locale} 
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          slidesPerView={1.9}
          centeredSlides
          spaceBetween={40}
          loop
          onSwiper={(s) => (swiperRef.current = s)}
          breakpoints={{
            0: { slidesPerView: 1, loop: false },
            768: { slidesPerView: 1, loop: false },
            1024: { slidesPerView: 1.9, loop: true },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link href={`/projects/${project.slug}`} className="card-link">
                <div className="project-card">
                  <div className="image-wrapper">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
 <div className="project-info-grid">
                      <div className="project-col project-col-info">
                        <h3>{project.title}</h3>

                        <div className="row">
                          <span className="location-first">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="info-icon"
                            />
                            <span className="info-label">
                              {locale === "ar" ? "الموقع:" : "Location:"}
                            </span>
                            <span className="info-value">
                              {project.description[0][1]}
                            </span>
                          </span>

                          <span className="info-value">
                            {project.description[0][2]}{" "}
                            {project.description[0][3]}
                          </span>
                          <span className="info-value">
                            {project.description[1][0]}{" "}
                            {project.description[1][1]}
                          </span>
                        </div>

                        <div className="row">
                          <span className="progress-row">
                            <span className="info-label">
                              {locale === "ar"
                                ? "نسبة الإنجاز:"
                                : "Completion:"}
                            </span>
                            <span className="info-value">
                              {project.description[1][3]}
                            </span>
                          </span>
                        </div>
                      </div>


                    <div className="project-col project-col-details">
                      <p>{project.details[0]}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
