"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import FMDictionaryCaseStudyPage from "../page";

export default function FmDictionaryCaseStudyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/fm-dictionary/");
  }, [router]);

  return <FMDictionaryCaseStudyPage />;
}
