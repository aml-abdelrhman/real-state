'use client';

import React, { useEffect, useState } from 'react';
import ProjectHero from '../../components/ProjectHero';
import ProjectInfo from '../../components/ProjectInfo';
import ProductGallery from '../../components/ProjectGallery';
import ProjectMap from '../../components/ProjectMap';
import ProjectLoader from '../../components/ProjectLoader';
import { notFound } from 'next/navigation';
import { useLang } from '../../../context/LangContext';
import { projectsData } from '../data';
import { ProjectLangItem } from '../../i18n/types';
import LatestProjects from '../../components/LatestProjects';

type Params = { slug: string };
type Props = { params: Promise<Params> };

const ProjectPage: React.FC<Props> = ({ params }) => {
  const { t } = useLang();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  const projectData = slug
    ? projectsData.find((p) => p.slug === slug)
    : null;

  const projectLang: ProjectLangItem =
    slug && t?.projects?.[slug]
      ? t.projects[slug]
      : { title: '', description: '', boxes: [], stats: [] };

  const loading = !projectData;

  if (!slug) return null;
  if (!loading && !projectData) return notFound();

  return (
    <>
      {loading && <ProjectLoader />}

      {!loading && projectData && (
        <section className="project-page">
          <ProjectHero
            hero={projectData.hero}
            title={projectLang.title}
            boxes={projectLang.boxes}
          />

          <ProjectInfo description={projectLang.description} />

          <ProductGallery images={projectData.gallery} />

          <ProjectMap
            lat={projectData.map.lat}
            lng={projectData.map.lng}
            title={projectLang.title}
          />
          <LatestProjects />
        </section>
      )}
    </>
  );
};

export default ProjectPage;
