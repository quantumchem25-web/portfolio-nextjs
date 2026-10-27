import "./globals.css";

export const metadata = {
  title: "Your Name — Portfolio",
  description: "Portfolio of Your Name — Full-Stack Developer & Designer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
