import "./globals.css";

export const metadata = {
  title: "Cawani",
  description: "Your Real Estate Compound",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
