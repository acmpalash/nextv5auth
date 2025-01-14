import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider, ClerkLoading, ClerkLoaded
  
} from '@clerk/nextjs'
import "./globals.css";
import Navbar from "../components/Navbar";
import { dark } from "@clerk/themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  console.log({children})
  return (
    <ClerkProvider appearance={{baseTheme: dark }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ClerkLoading>
            <div className='flex justify-center items-center h-screen text-2xl'>
              Loading ....
            </div>
          </ClerkLoading>
          <ClerkLoaded>
          <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col h-screen'> 
            <Navbar /> 
          {children}
          </div>
          </div> 
          </ClerkLoaded>         
        </body>
      </html>
    </ClerkProvider>
  );
}