import "./globals.css";

export const metadata = {
  title: "Dis-Hos",
  description: "Geographic Infromation System for Discover Hospitals in Bali",
  icon: "/hospital.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/hospital.png" type="image/png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>{children}</body>
    </html>
  );
}
