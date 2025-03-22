import Bestsellers from "@/components/bestsellers";
import Hero from "@/components/hero";
import CookieConsent from "@/components/cookie-consent";
import AboutUs from "@/components/about-us";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Bestsellers />
      <CookieConsent />
      <AboutUs />
      <Testimonials />
    </>
  );
}
