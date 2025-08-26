// src/components/TechIcon.jsx
import React from "react";

/**
 * TechIcon
 * - Íconos SVG sin dependencias externas.
 * - Usa `slug` para seleccionar el ícono y `label` para accesibilidad (aria-label).
 * - Tamaño por props o por CSS. Monocromo con currentColor.
 *
 * Uso:
 * <TechIcon slug="react" label="React" className="w-6 h-6 text-cyan-400" />
 * <TechIcon slug="adobephotoshop" label="Adobe Photoshop" style={{ width: 24, height: 24, color: '#31A8FF' }} />
 */

const SIZE = 24;

function SvgBase({ children, label, size = SIZE, ...rest }) {
  return (
    <svg
      role="img"
      aria-label={label}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{label}</title>
      {children}
    </svg>
  );
}

// ——— Íconos ———

// React: 3 elipses cruzadas + círculo central
function IconReact(props) {
  return (
    <SvgBase {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(-60 12 12)" />
      </g>
      <circle cx="12" cy="12" r="1.8" />
    </SvgBase>
  );
}

// JavaScript: placa con “JS”
function IconJavaScript(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <g fill="#000">
        <text x="7" y="16" fontSize="8" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial" fontWeight="700" fill="currentColor">
          JS
        </text>
      </g>
    </SvgBase>
  );
}

// Python: dos bloques apilados con esquinas redondeadas + “ojos”
function IconPython(props) {
  return (
    <SvgBase {...props}>
      <path d="M7 5.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.5H10a2.5 2.5 0 0 1-2.5-2.5V5.5Z" />
      <circle cx="10.5" cy="6.8" r="0.7" fill="#000" />
      <path d="M17 18.5a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V15h7a2.5 2.5 0 0 1 2.5 2.5v1Z" />
      <circle cx="13.5" cy="17.2" r="0.7" fill="#000" />
    </SvgBase>
  );
}

// HTML5: escudo simple
function IconHTML5(props) {
  return (
    <SvgBase {...props}>
      <path d="M4 3h16l-1.8 16.2L12 22l-6.2-2.8L4 3Z" />
      <path d="M7.5 6.5h9L16 18l-4 1.7L8 18l-.5-4h3L11.8 15l2.6-1 .6-4.5h-7.5v-3Z" opacity=".35" />
    </SvgBase>
  );
}

// CSS3: escudo similar con franja
function IconCSS3(props) {
  return (
    <SvgBase {...props}>
      <path d="M4 3h16l-1.8 16.2L12 22l-6.2-2.8L4 3Z" />
      <path d="M7.5 6.5h9L16.8 18 12 19.7 9 18.8l.4-2.8h5.2l.3-2.4H9.6l.3-2.4h7l.3-2.7h-9Z" opacity=".35" />
    </SvgBase>
  );
}

// Neo4j: nodos conectados
function IconNeo4j(props) {
  return (
    <SvgBase {...props}>
      <circle cx="7" cy="17" r="2.2" />
      <circle cx="17" cy="7" r="2.4" />
      <circle cx="17" cy="17" r="1.8" />
      <path d="M8.6 15.6 15.5 8.7" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <path d="M9.3 16.9h5.8" stroke="currentColor" strokeWidth="1.6" fill="none" />
    </SvgBase>
  );
}

// PHP: pastilla con “PHP”
function IconPHP(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="6" width="18" height="12" rx="6" />
      <text x="6.3" y="14" fontSize="6.5" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial" fontWeight="800" fill="#000">
        PHP
      </text>
    </SvgBase>
  );
}

// Kotlin: diagonales geométricas
function IconKotlin(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <polygon points="5,21 19,7 19,3 5,17" opacity=".35" />
      <polygon points="5,3 13,3 5,11" opacity=".35" />
    </SvgBase>
  );
}

// Git: grafo de branches
function IconGit(props) {
  return (
    <SvgBase {...props}>
      <path d="M12 3 21 12l-9 9L3 12l9-9Z" />
      <circle cx="9" cy="9" r="1.6" fill="#000" />
      <circle cx="15" cy="15" r="1.6" fill="#000" />
      <circle cx="15" cy="9" r="1.6" fill="#000" />
      <path d="M9 9c3 0 6 3 6 6" stroke="#000" strokeWidth="1.6" fill="none" />
      <path d="M9 9c3 0 6 0 6 0" stroke="#000" strokeWidth="1.6" fill="none" />
    </SvgBase>
  );
}

// Figma: 5 formas típicas
function IconFigma(props) {
  return (
    <SvgBase {...props}>
      <rect x="6.5" y="3" width="5" height="7" rx="2.5" />
      <rect x="11.5" y="3" width="5" height="7" rx="2.5" opacity=".35" />
      <rect x="6.5" y="10" width="5" height="7" rx="2.5" opacity=".35" />
      <rect x="11.5" y="10" width="5" height="7" rx="2.5" opacity=".35" />
      <circle cx="9" cy="18.5" r="3" />
    </SvgBase>
  );
}

// Photoshop: tarjeta con “Ps”
function IconPhotoshop(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <text x="7" y="16" fontSize="9" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial" fontWeight="800" fill="#000">
        Ps
      </text>
    </SvgBase>
  );
}

// UX/UI: rejillas como wireframes
function IconUXUI(props) {
  return (
    <SvgBase {...props}>
      <rect x="3" y="4" width="8" height="7" rx="2" />
      <rect x="13" y="4" width="8" height="4.5" rx="2" />
      <rect x="13" y="9.5" width="8" height="10.5" rx="2" />
      <rect x="3" y="13" width="8" height="7" rx="2" />
    </SvgBase>
  );
}

// ——— Fallback genérico (círculo + abreviatura) ———
function abbrev(label = "") {
  const parts = label.trim().split(/\s+/);
  const letters =
    parts.length === 1 ? parts[0].slice(0, 2) : (parts[0][0] || "") + (parts[1][0] || "");
  return letters.toUpperCase();
}
function IconFallback({ label, ...props }) {
  return (
    <SvgBase label={label} {...props}>
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="13.8"
        textAnchor="middle"
        fontSize="8"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Arial"
        fontWeight="800"
        fill="#000"
      >
        {abbrev(label)}
      </text>
    </SvgBase>
  );
}

const ICONS = {
  react: IconReact,
  javascript: IconJavaScript,
  python: IconPython,
  html5: IconHTML5,
  css3: IconCSS3,
  neo4j: IconNeo4j,
  php: IconPHP,
  kotlin: IconKotlin,
  git: IconGit,
  figma: IconFigma,
  adobephotoshop: IconPhotoshop,
  uxui: IconUXUI
};

/**
 * slug: "react" | "javascript" | "python" | "html5" | "css3" | "neo4j" | "php" | "kotlin" | "git" | "figma" | "adobephotoshop" | "uxui"
 */
export default function TechIcon({ slug, label, size, ...rest }) {
  const Cmp = ICONS[slug?.toLowerCase?.()] || IconFallback;
  return <Cmp label={label || slug} size={size} {...rest} />;
}
