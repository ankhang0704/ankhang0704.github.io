import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Deletion Request | FM Dictionary",
  description: "Request account deletion and data removal for your FM Dictionary account.",
};

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
