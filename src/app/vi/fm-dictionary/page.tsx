"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import FMDictionaryCaseStudyPage from "../../fm-dictionary/page";

export default function ViFmDictionaryPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("vi");
  }, [setLang]);

  return <FMDictionaryCaseStudyPage />;
}
