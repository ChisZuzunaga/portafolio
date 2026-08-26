import React from "react";
import { useTranslation } from "react-i18next";
import {
  LuAward,
  LuBriefcaseBusiness,
  LuCalendarDays,
  LuDownload,
  LuExternalLink,
  LuGithub,
  LuGraduationCap,
  LuLinkedin,
  LuMail,
  LuMapPin,
  LuPhone,
  LuRocket,
  LuWrench,
} from "react-icons/lu";
import profileData from "../data/profileData";
import TechIcon from "./TechIcon";

const SectionTitle = ({ icon, children }) => (
  <header className="resume-card-title">
    <span className="resume-card-title-icon" aria-hidden="true">
      {React.createElement(icon)}
    </span>
    <h3>{children}</h3>
  </header>
);

const Timeline = ({ items }) => (
  <ol className="resume-timeline">
    {items.map((item) => (
      <li key={`${item.title}-${item.period}`} className="resume-timeline-item">
        <span className="resume-timeline-dot" aria-hidden="true" />
        <div className="resume-timeline-content">
          <div className="resume-item-heading">
            <div>
              <h4>{item.title}</h4>
              {item.organization && <p className="resume-organization">{item.organization}</p>}
            </div>
            <span className="resume-period">
              <LuCalendarDays aria-hidden="true" />
              {item.period}
            </span>
          </div>
          {item.location && <p className="resume-location">{item.location}</p>}
          {item.details?.length > 0 && (
            <ul className="resume-detail-list">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export default function SkillsSection({ data = profileData, id = "perfil" }) {
  const { t } = useTranslation();
  const experience = t("resume.experience.items", { returnObjects: true });
  const projects = t("resume.projects.items", { returnObjects: true });
  const certifications = t("resume.certifications.items", { returnObjects: true });

  return (
    <section id={id} className="resume-section" aria-labelledby="resume-title">
      <div className="resume-container">
        <header className="resume-heading">
          <p className="resume-eyebrow">{t("resume.eyebrow")}</p>
          <h2 id="resume-title">{t("resume.title")}</h2>
          <p>{t("resume.subtitle")}</p>
        </header>

        <article className="resume-profile-card">
          <div className="resume-profile-copy">
            <p className="resume-profile-label">{t("resume.profileLabel")}</p>
            <h3>{data.name}</h3>
            <p className="resume-role">{t("resume.role")}</p>
            <a className="resume-download" href={data.contact.cvUrl} download="CV_Ignacio_Guerra.pdf">
              <LuDownload aria-hidden="true" />
              {t("resume.download")}
            </a>
          </div>

          <address className="resume-contact-grid">
            <a href={`mailto:${data.contact.email}`}>
              <LuMail aria-hidden="true" />
              <span><small>{t("resume.contact.email")}</small>{data.contact.email}</span>
            </a>
            <a href={`tel:${data.contact.phoneHref}`}>
              <LuPhone aria-hidden="true" />
              <span><small>{t("resume.contact.phone")}</small>{data.contact.phone}</span>
            </a>
            <span className="resume-contact-item">
              <LuMapPin aria-hidden="true" />
              <span><small>{t("resume.contact.location")}</small>{t("resume.location")}</span>
            </span>
            <a href={data.contact.github} target="_blank" rel="noreferrer">
              <LuGithub aria-hidden="true" />
              <span><small>GitHub</small>ChisZuzunaga</span>
              <LuExternalLink className="resume-external" aria-hidden="true" />
            </a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer">
              <LuLinkedin aria-hidden="true" />
              <span><small>LinkedIn</small>{t("resume.contact.viewProfile")}</span>
              <LuExternalLink className="resume-external" aria-hidden="true" />
            </a>
          </address>
        </article>

        <div className="resume-layout">
          <article className="resume-card resume-experience-card">
            <SectionTitle icon={LuBriefcaseBusiness}>{t("resume.experience.title")}</SectionTitle>
            <Timeline items={Array.isArray(experience) ? experience : []} />
          </article>

          <div className="resume-side-column">
            <article className="resume-card">
              <SectionTitle icon={LuGraduationCap}>{t("resume.education.title")}</SectionTitle>
              <div className="resume-education">
                <h4>{t("resume.education.degree")}</h4>
                <p>{t("resume.education.institution")}</p>
                <span>{t("resume.education.period")}</span>
                <span>{t("resume.education.location")}</span>
              </div>
            </article>

            <article className="resume-card">
              <SectionTitle icon={LuAward}>{t("resume.certifications.title")}</SectionTitle>
              <ul className="resume-certifications">
                {(Array.isArray(certifications) ? certifications : []).map((item) => (
                  <li key={`${item.title}-${item.date}`}>
                    <span className="resume-cert-marker" aria-hidden="true" />
                    <div><h4>{item.title}</h4><p>{item.organization}</p></div>
                    <time>{item.date}</time>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <article className="resume-card">
          <SectionTitle icon={LuRocket}>{t("resume.projects.title")}</SectionTitle>
          <div className="resume-project-grid">
            {(Array.isArray(projects) ? projects : []).map((project) => (
              <section key={project.title} className="resume-project-item">
                <div className="resume-project-heading">
                  <h4>{project.title}</h4>
                  <span>{project.period}</span>
                </div>
                <p className="resume-project-stack">{project.stack}</p>
                <ul className="resume-detail-list">
                  {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </article>

        <article className="resume-card">
          <SectionTitle icon={LuWrench}>{t("resume.skills.title")}</SectionTitle>
          <div className="resume-skill-groups">
            {data.skillGroups.map((group) => (
              <section key={group.id} className="resume-skill-group">
                <h4>{t(`resume.skills.groups.${group.id}`)}</h4>
                <div className="resume-tech-list" role="list">
                  {group.items.map((item) => {
                    const label = item.labelKey ? t(item.labelKey) : item.name;
                    return (
                      <span key={item.id} className="resume-tech-chip" role="listitem">
                        <TechIcon slug={item.slug} />
                        {label}
                      </span>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
