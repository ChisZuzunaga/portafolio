import React from "react";
import {
  SiCss3,
  SiEspressif,
  SiExpo,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import {
  LuCodeXml,
  LuDatabase,
  LuFrame,
  LuLayoutGrid,
  LuMapPinned,
  LuPalette,
  LuPanelsTopLeft,
  LuRadioTower,
} from "react-icons/lu";

const icons = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  html5: SiHtml5,
  css3: SiCss3,
  sql: LuDatabase,
  react: SiReact,
  expo: SiExpo,
  vite: SiVite,
  fastapi: SiFastapi,
  websocket: LuRadioTower,
  tkinter: SiPython,
  supabase: SiSupabase,
  sqlite: SiSqlite,
  esp32: SiEspressif,
  maps: LuMapPinned,
  git: SiGit,
  uiux: LuPalette,
  mockups: LuPanelsTopLeft,
  prototyping: LuFrame,
  kanban: LuLayoutGrid,
};

export default function TechIcon({ slug, size = 22, ...props }) {
  const Icon = icons[slug] || LuCodeXml;
  return <Icon size={size} aria-hidden="true" focusable="false" {...props} />;
}
