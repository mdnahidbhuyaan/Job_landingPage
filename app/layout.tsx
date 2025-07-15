import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Home/Navbar/Responsive";
import Provider from "@/components/Hoc/Provider";



const font = Roboto({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Job Portal | landing page",
  description: "Job protal landing page nextjs 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}  antialiased`}>
       
    <Provider>
        <Responsive/>
        {children}
        </Provider>
        
      
       
        
      </body>
    </html>
  );
}
