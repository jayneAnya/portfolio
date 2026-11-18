import type { Metadata } from "next";
import "./globals.css";

const description =
  "Jane Anyanwu is a backend engineer (C# / .NET) with 4 years in Nigerian banking and fintech, and hands-on DevOps skills: Docker, Kubernetes, Terraform, AWS and CI/CD.";

export const metadata: Metadata = {
  title: "Jane Anyanwu | Backend Engineer (C# / .NET) & DevOps",
  description,
  openGraph: {
    title: "Jane Anyanwu | Backend Engineer (C# / .NET) & DevOps",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
