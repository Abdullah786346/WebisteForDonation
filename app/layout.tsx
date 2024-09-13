import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Raleway } from "next/font/google";
import MainProvider from "@/providers/MainProvider";

import { ToastContainer } from "react-toastify";

const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Heal Me",
  description:
    "A non-profit organization set up to provide comprehensive support and assistance to vulnerable individuals and communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ToastContainer position='top-right' />

          <MainProvider>{children}</MainProvider>
        </body>
      </html>
    </>
  );
}
