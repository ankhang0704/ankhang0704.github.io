"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FMDictionaryCaseStudyPage from "../../../fm-dictionary/page";

export default function ViFmDictionaryCaseStudyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/vi/fm-dictionary/");
  }, [router]);

  return <FMDictionaryCaseStudyPage />;
}
