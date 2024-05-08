import "./globals.css";

export const metadata = {
  title: "Dis-Hos",
  description: "Geographic Infromation System for Discover Hospitals in Bali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
