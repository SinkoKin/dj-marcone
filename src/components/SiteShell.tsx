"use client";

import dynamic from "next/dynamic";

const Preloader = dynamic(() => import("@/components/Preloader"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
const CursorFollower = dynamic(() => import("@/components/CursorFollower"), {
  ssr: false,
});
const Marquee = dynamic(() => import("@/components/Marquee"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Music = dynamic(() => import("@/components/Music"), { ssr: false });
const Gigs = dynamic(() => import("@/components/Gigs"), { ssr: false });
const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const BigTextReveal = dynamic(() => import("@/components/BigTextReveal"), {
  ssr: false,
});
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function SiteShell() {
  return (
    <>
      <CursorFollower />
      <ScrollProgress />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <BigTextReveal />
        <Marquee />
        <About />
        <Music />
        <Gigs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
