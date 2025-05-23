import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/AuthProvider";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import { SkeletonTheme } from 'react-loading-skeleton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: '200',
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable}`}>
        <SkeletonTheme baseColor="#E0E0E0" highlightColor="#525252" duration={3}>
          <AuthProvider>
            <div className="container">
              <NavBar />
              <Toaster position="top-right" />
              {children}
            </div>
          </AuthProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
