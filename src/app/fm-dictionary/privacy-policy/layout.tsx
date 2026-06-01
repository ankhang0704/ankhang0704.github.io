import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FM Dictionary",
  description: "Privacy Policy for FM Dictionary application.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
