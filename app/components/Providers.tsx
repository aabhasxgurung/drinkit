"use client";

import AgeVerification from "./AgeVerification";
import CustomCursor from "./CustomCursor";
import SmoothScroll from "./SmoothScroll";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AgeVerification />
      <CustomCursor />
      <SmoothScroll>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
