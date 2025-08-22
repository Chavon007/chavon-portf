import "./globals.css";

import Header from "@/component/header";

export const metadata = {
  title: "Salvation Azuh || Web Developer",
  description: "Salvation Azuh Full-stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
