"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import HotelManagementCaseStudy from "../../hotel-management/page";

export default function ViHotelManagementPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("vi");
  }, [setLang]);

  return <HotelManagementCaseStudy />;
}
