"use client"
import Notice from "@/components/notice/Notice";
import CookieConsent from "@/components/policy/CookieConsent";
import Footer from "@/components/website/footer/Footer";
import LandingPage from "@/components/website/landingPage/LandingPage";
import Navbar from "@/components/website/navbar/Navbar";

export default function Home() {
  return (
  <>
  <Notice/>
  <Navbar/>
  <LandingPage/>
  <Footer/>
  <CookieConsent/>
  </>
  );
}
