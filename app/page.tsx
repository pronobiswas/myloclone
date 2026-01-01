'use client'
import Banner from './_component/banner';
import Formsection from './_component/formsection';
import Beforeourupcomingcall from './_component/beforeourupcomingcall';
import Ourprogram from './_component/ourprogram';
import Footertext from './_component/footertext';
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true
    });
  }, [])
  return (
    <div className="flex h-full items-center justify-center font-sans bg-black">
      <main className="w-full h-full flex flex-col items-center px-5 justify-between bg-[#0dc09315] sm:items-start">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Banner />
            <Formsection />
            <Beforeourupcomingcall />
            <Ourprogram />
            <Footertext />
          </div>
        </div>
      </main >
    </div >
  );
}
