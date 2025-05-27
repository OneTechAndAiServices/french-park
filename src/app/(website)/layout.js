// "use client"
import Notice from "@/components/notice/Notice";
import Footer from "@/components/website/footer/Footer";
import Navbar from "@/components/website/navbar/Navbar";

export default function WebsiteLayout({ children }) {
  return (

  <>
  <Notice/>
  <Navbar/>
        {children}
        <Footer/>
  </>
   
  );
}
