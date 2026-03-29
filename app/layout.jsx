export const metadata = {
  title: "RuH – Gartenhelfer",
  description:
    "RuH – Gartenhelfer: Rasenmähen, Heckenschnitt, Steinreinigung und Entsorgung.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>{children}</body>
    </html>
  );
}
