"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Home from "../page";

export default function ViHomePage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("vi");
  }, [setLang]);

  return <Home />;
}
