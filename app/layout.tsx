import "./globals.css";

export const metadata = {
  title: "Curixgen AI",
  description: "Modern AI systems and automation for businesses."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

