"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ProjectsPage from "../../projects/page";

export default function ViProjectsPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("vi");
  }, [setLang]);

  return <ProjectsPage />;
}
