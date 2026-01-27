'use client';
import React from 'react';
import '../styles/project-info.css';
import ReusableText from '../components/ReusableText';
import { useLang } from '../../context/LangContext';

type Stat = {
  number: string;
  desc: string;
};

type Props = {
  description: string;
  stats?: Stat[];
};

const ProjectInfo: React.FC<Props> = ({ description, stats = [] }) => {
  const { t, locale } = useLang();

  return (
    <section className="project-info" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="project-content">
        <div className="project-content-two">
          <div className="projects-bar">
            <ReusableText 
              firstWord={t.uii.interestBtn}
              secondWord={t.uiii.interestBtn}
              thirdWord="↙"
            />
          </div>

          <p className="project-description">{description}</p>
        </div>

        {stats.length > 0 && (
          <div className="project-stats">
            {stats.map((stat, index) => (
              <div className="stat-box" key={index}>
                {stat.number} {stat.desc}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectInfo;
