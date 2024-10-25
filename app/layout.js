import "./globals.css";
import {Navbar} from "@/app/container";

export const metadata = {
  title: "Ash’s Dev Journey",
  description: "Development by ASH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-tr from-blue-700 via-zinc-900 to-blue-700 min-h-screen">
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
