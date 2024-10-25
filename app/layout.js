import "./globals.css";

export const metadata = {
  title: "Ash’s Dev Journey",
  description: "Development by ASH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
