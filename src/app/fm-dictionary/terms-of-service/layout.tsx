import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FM Dictionary",
  description: "Terms of Service for FM Dictionary application.",
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
