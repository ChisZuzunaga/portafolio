// src/components/SkillsSection.jsx
// Sección tipo CV debajo del Home: resumen, habilidades, tecnologías (con iconos), herramientas, certificaciones y estudios.

import React from "react";
import { useTranslation } from "react-i18next";
import profileData from "../data/profileData";
import TechIcon from "./TechIcon"; // 👈 Asegúrate de tener el archivo sin dependencias externas

// —— Subcomponentes —— //
const SectionHeader = ({ title, subtitle }) => (
  <header style={styles.sectionHeader}>
    <h2 style={styles.h2}>{title}</h2>
    {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
  </header>
);

const Chip = ({ children }) => (
  <span style={styles.chip} role="listitem">{children}</span>
);

const ProgressBar = ({ value = 0, label = "" }) => (
  <div style={styles.progressItem} aria-label={`${label} ${value}%`}>
    <div style={styles.progressTopRow}>
      <span style={styles.progressLabel}>{label}</span>
      <span style={styles.progressValue}>{value}%</span>
    </div>
    <div style={styles.progressTrack} aria-hidden>
      <div style={{ ...styles.progressFill, width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  </div>
);

const TimelineItem = ({ head, subhead, period, description }) => (
  <li style={styles.timelineItem}>
    <div style={styles.timelineBullet} aria-hidden />
    <div style={styles.timelineContent}>
      <div style={styles.timelineHeading}>
        <strong>{head}</strong>
        {period && <span style={styles.timelinePeriod}>{period}</span>}
      </div>
      {subhead && <div style={styles.timelineSubhead}>{subhead}</div>}
      {description && <p style={styles.timelineDesc}>{description}</p>}
    </div>
  </li>
);

// —— Sección principal —— //
export default function SkillsSection({ data = profileData, id = "perfil" }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("es") ? "es" : "en";

  const resumen = data.resumen?.[lang] || "";
  const blandas = data.habilidadesBlandas?.[lang] || [];

  const tecnologias = data.tecnologias || [];
  const herramientas = data.herramientas || [];
  const habilidadesTecnicas = data.habilidadesTecnicas || [];
  const certificaciones = data.certificaciones || [];
  const estudios = data.estudios || [];

  const t = (es, en) => (lang === "es" ? es : en);

  return (
    <section id={id} style={styles.section} aria-labelledby="perfil-title">
      <div style={styles.container}>
        <SectionHeader
          title={t("Perfil & Habilidades", "Profile & Skills")}
          subtitle={t(
            "Resumen profesional, habilidades, certificaciones y estudios",
            "Professional summary, skills, certifications, and education"
          )}
        />

        {/* Resumen & Contacto */}
        <div style={styles.gridTwo}>
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Resumen", "Summary")}</h3>
            <p style={styles.text}>{resumen}</p>
          </article>

          <aside style={styles.card}>
            <h3 style={styles.h3}>{t("Contacto", "Contact")}</h3>
            <ul style={styles.listNoBullets}>
              {data?.contacto?.ubicacion && (
                <li>
                  <strong>{t("Ubicación:", "Location:")}</strong>{" "}
                  {typeof data.contacto.ubicacion === "object"
                    ? data.contacto.ubicacion[lang]
                    : data.contacto.ubicacion}
                </li>
              )}
              {data?.contacto?.email && (
                <li>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${data.contacto.email}`}>{data.contacto.email}</a>
                </li>
              )}
              {data?.contacto?.telefono && (
                <li>
                  <strong>{t("Teléfono:", "Phone:")}</strong>{" "}
                  <a href={`tel:${data.contacto.telefono}`}>{data.contacto.telefono}</a>
                </li>
              )}
              {data?.contacto?.linkedin && (
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a href={data.contacto.linkedin} target="_blank" rel="noreferrer">
                    {t("Perfil", "Profile")}
                  </a>
                </li>
              )}
              {data?.contacto?.github && (
                <li>
                  <strong>GitHub:</strong>{" "}
                  <a href={data.contacto.github} target="_blank" rel="noreferrer">
                    {data.contacto.github.replace(/^https?:\/\//, "")}
                  </a>
                </li>
              )}
            </ul>
            {data?.contacto?.cvUrl && (
              <a
                style={styles.cvButton}
                href={data.contacto.cvUrl}
                target="_blank"
                rel="noreferrer"
                download
              >
                {t("Descargar CV", "Download CV")}
              </a>
            )}
          </aside>
        </div>

        {/* Habilidades blandas */}
        {blandas.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Habilidades blandas", "Soft skills")}</h3>
            <div style={styles.chips} role="list" aria-label={t("Habilidades blandas", "Soft skills")}>
              {blandas.map((h, i) => (
                <Chip key={i}>{h}</Chip>
              ))}
            </div>
          </article>
        )}

        {/* Tecnologías (con iconos) */}
        {tecnologias.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Tecnologías", "Technologies")}</h3>
            <div style={styles.iconGrid}>
              {tecnologias.map((tech) => (
                <div key={tech.id} style={styles.iconItem}>
                  <span style={styles.iconWrap}>
                    <TechIcon slug={tech.slug} label={tech.nombre} />
                  </span>
                  <span>{tech.nombre}</span>
                </div>
              ))}
            </div>
          </article>
        )}

        {/* Herramientas de diseño / otras habilidades (con iconos) */}
        {herramientas.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Herramientas de diseño", "Design tools")}</h3>
            <div style={styles.iconGrid}>
              {herramientas.map((tool) => (
                <div key={tool.id} style={styles.iconItem}>
                  <span style={{ ...styles.iconWrap, color: "#22d3ee" }}>
                    <TechIcon slug={tool.slug} label={tool.nombre} />
                  </span>
                  <span>{tool.nombre}</span>
                </div>
              ))}
            </div>
          </article>
        )}

        {/* (Opcional) Habilidades técnicas con barras de progreso */}
        {habilidadesTecnicas.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Habilidades de desarrollo", "Development skills")}</h3>
            <div style={styles.progressGrid}>
              {habilidadesTecnicas.map((h) => (
                <ProgressBar key={h.nombre} label={h.nombre} value={h.nivel} />
              ))}
            </div>
          </article>
        )}

        {/* Certificaciones */}
        {certificaciones.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Certificaciones", "Certifications")}</h3>
            <ul style={styles.listClean}>
              {certificaciones.map((c, i) => (
                <li key={i}>
                  <div style={styles.certHeader}>
                    <strong>
                      {typeof c.titulo === "object" ? c.titulo[lang] : c.titulo}
                    </strong>
                    <span style={styles.muted}>
                      {c.entidad ? ` · ${c.entidad}` : ""}{c.fecha ? ` · ${c.fecha}` : ""}
                    </span>
                  </div>
                  {c.enlace && (
                    <a href={c.enlace} target="_blank" rel="noreferrer" style={styles.link}>
                      {t("Ver certificado", "View certificate")}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </article>
        )}

        {/* Estudios (timeline) */}
        {estudios.length > 0 && (
          <article style={styles.card}>
            <h3 style={styles.h3}>{t("Estudios", "Education")}</h3>
            <ol style={styles.timeline}>
              {estudios.map((e, i) => (
                <TimelineItem
                  key={i}
                  head={e.institucion}
                  subhead={typeof e.programa === "object" ? e.programa[lang] : e.programa}
                  period={e.periodo}
                  description={
                    typeof e.descripcion === "object" ? e.descripcion[lang] : e.descripcion
                  }
                />
              ))}
            </ol>
          </article>
        )}
      </div>
    </section>
  );
}

// —— Estilos —— //
const purple = "#6D28D9";
const gray700 = "#334155";
const gray500 = "#64748b";
const surface = "#0b0f1a";
const cardBg = "#111827";
const border = "#1f2937";

const styles = {
  section: {
    padding: "64px 0",
    background: surface,
    color: "#e5e7eb"
  },
  container: {
    width: "min(1100px, 92%)",
    margin: "0 auto",
    display: "grid",
    gap: 24
  },
  sectionHeader: { textAlign: "center", marginBottom: 8 },
  h2: { fontSize: 32, margin: 0, color: "#ffffff" },
  subtitle: { marginTop: 8, color: gray500 },
  gridTwo: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: 24
  },
  card: {
    background: cardBg,
    border: `1px solid ${border}`,
    borderRadius: 16,
    padding: 20
  },
  h3: { marginTop: 0, marginBottom: 12, fontSize: 20, color: "#fff" },
  text: { lineHeight: 1.7, color: "#d1d5db" },
  listNoBullets: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 },
  cvButton: {
    display: "inline-block",
    marginTop: 16,
    padding: "10px 14px",
    borderRadius: 12,
    border: `1px solid ${purple}`,
    color: "#fff",
    textDecoration: "none",
    background: "transparent",
    transition: "transform .15s ease, background .15s ease",
    cursor: "pointer"
  },
  chips: { display: "flex", flexWrap: "wrap", gap: 10 },
  chip: {
    padding: "8px 12px",
    borderRadius: 9999,
    background: "#0b1220",
    border: `1px solid ${border}`,
    fontSize: 14,
    color: "#d1d5db"
  },
  iconGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    gap: 12
  },
  iconItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 10,
    border: `1px solid ${border}`,
    borderRadius: 12
  },
  iconWrap: { display: "inline-flex", width: 24, height: 24, color: "#a78bfa" },
  progressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 16
  },
  progressItem: { display: "grid", gap: 8 },
  progressTopRow: { display: "flex", alignItems: "baseline", justifyContent: "space-between" },
  progressLabel: { color: "#e5e7eb", fontWeight: 600 },
  progressValue: { color: gray500, fontSize: 14 },
  progressTrack: {
    height: 10,
    background: "#0b1220",
    borderRadius: 9999,
    border: `1px solid ${border}`,
    overflow: "hidden"
  },
  progressFill: { height: "100%", background: purple },
  listClean: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 },
  certHeader: { display: "flex", gap: 8, alignItems: "baseline" },
  link: { color: "#a78bfa", textDecoration: "underline" },
  timeline: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 },
  timelineItem: { display: "grid", gridTemplateColumns: "16px 1fr", gap: 12 },
  timelineBullet: { width: 16, height: 16, borderRadius: 9999, marginTop: 6, background: purple },
  timelineContent: { borderLeft: `2px solid ${border}`, paddingLeft: 12 },
  timelineHeading: { display: "flex", justifyContent: "space-between", gap: 12, color: "#fff" },
  timelineSubhead: { color: gray700 },
  timelineDesc: { color: "#d1d5db", marginTop: 6 },
  timelinePeriod: { color: gray500 },
  muted: { color: gray500 }
};

// Nota: si usas Tailwind, puedes migrar fácilmente estos estilos a clases.
// Para móviles, cambia gridTwo a 1fr con media queries en tu CSS global.
