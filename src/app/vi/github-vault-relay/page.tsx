"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import GithubVaultRelayPage from "../../github-vault-relay/page";

export default function ViGithubVaultRelayPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("vi");
  }, [setLang]);

  return <GithubVaultRelayPage />;
}
