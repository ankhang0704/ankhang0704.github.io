import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Dictionary | An Khang Studio",
  description: "Master FM Vocabulary - The Smart Way. Specialized dictionary for Facilities Management.",
};

export default function FMDictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
