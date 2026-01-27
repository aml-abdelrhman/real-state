"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/project-card.css";
import { useLang } from "../../context/LangContext";
import { lastProjectsEn } from "../i18n/lastProjectsEn";
import { lastProjectsAr } from "../i18n/lastProjectsAr";

type Project = {
  id: number;
  title: string;
  type?:'سكني' | 'تجاري' | 'مكتبي';
  image: string;
  description: string[][];
  details: string[];
  slug: string;
};
type Props = {
  project: Project;
};

type ProjectCardProps = { project: Project };

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { locale } = useLang();

  return (
    <div className="project-content">
    <Link href={`/projects/${project.slug}`} className="card-link">
      <div className="project-card" dir={locale === "ar" ? "rtl" : "ltr"}>
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
                <FontAwesomeIcon icon={faLocationDot} className="info-icon" />
                <span className="info-label">
                  {locale === "ar" ? "الموقع:" : "Location:"}
                </span>
                <span className="info-value">{project.description[0][1]}</span>
              </span>

              <span className="info-value">
                {project.description[0][2]} {project.description[0][3]}
              </span>
              <span className="info-value">
                {project.description[1][0]} {project.description[1][1]}
              </span>
            </div>

            <div className="row">
              <span className="progress-row">
                <span className="info-label">
                  {locale === "ar" ? "نسبة الإنجاز:" : "Completion:"}
                </span>
                <span className="info-value">{project.description[1][3]}</span>
              </span>
            </div>
          </div>

          <div className="project-col project-col-details">
            <p>{project.details[0]}</p>
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProjectCard;
