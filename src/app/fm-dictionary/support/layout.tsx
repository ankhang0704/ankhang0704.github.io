import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | FM Dictionary",
  description: "Support and Contact information for FM Dictionary application.",
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
