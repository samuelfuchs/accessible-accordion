import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title="Accessible Accordion">
      <body>{children}</body>
    </html>
  );
}
