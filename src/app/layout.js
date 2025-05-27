import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "French Park",
  description: "Welcome to French Park ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <meta name="google-site-verification" content="wjnug8v8JeDSWZleoz5KZucu9yqbmtX79CS5Z1mWGbI" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{margin:0}}>
        {children}
      </body>
    </html>
  );
}
