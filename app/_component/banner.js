'use client'
import Image from 'next/image'
import React, { use, useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
import bannerImage from '../../public/bannerimage.png'

export default function Banner() {
  const typedTex = useRef(null);

  useEffect(() => {
    let index = 0;
    let current = 0;
    const texts = ["$5k-10k+", "Per month"];
    let ctx = gsap.context(() => {
            function animateText(index) {
                typedTex.current.innerHTML = texts[index];
                const split = new SplitText(typedTex.current, {
                    type: "words,chars",
                });
                const tl = gsap.timeline();
                tl.from(split.chars, {
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.1,
                })
                    .to(split.chars, {
                        opacity: 0,
                        duration: 0.1,
                        stagger: 0.01,
                        onComplete: () => {
                            split.revert();
                            current = (index + 1) % texts.length;
                            animateText(current);
                        }
                    });
            }
            animateText(current);
        });
        return () => ctx.revert();
  }, []);
  return (
    <div className='w-full h-full bg-[#33ff0000] text-center flex flex-col items-center pt-12 lg:pt-24' >

      <div className='absolute top-0 w-full z-10'>
        <Image
          src={'https://cdn.prod.website-files.com/669a02598d461cec73e64fc5/669a977656b8b90ec5857973_bg%20pattern.svg'}
          alt="bg-pattern"
          className="w-full h-full object-cover"
          width={250}
          height={250}
        />
      </div>
      <Image
        src={'/revenueIcon.png'}
        alt="Revenue Icon"
        className="absolute lg:top-100 md:top-100 top-100 left-80 z-1 w-40 sm:w-55 -rotate-6"
        width={250}
        height={250}
      />

      {/* Profit Icon */}
      <Image
        src={'/profitIcon.png'}
        alt="Profit Icon"
        className="absolute lg:top-100 md:top-100 top-100 right-80 z-1 w-40 sm:w-55 rotate-4"
        width={250}
        height={250}
      />
      {/* banner text  */}
      <div className='w-full max-w-5xl z-20 px-5'>
        <div className='w-fit mx-auto bg-emerald-700/30 px-5 py-2 border border-emerald-400 rounded-2xl'>
          <p className="text-white text-xs md:text-base">
            <span className="text-emerald-400">$</span>99% client success rate within the first <span className="text-emerald-400">60 days</span>
          </p>
        </div>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-8'>Replace your income and earn <br/> <span ref={typedTex} className='text-emerald-500'></span> Per by Dropshipping with TikTok Ads within the <br/> next 60 days</h1>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-emerald-500 font-bold mt-7 mb-5'>GUARANTEED</h1>
        <p className="text-white text-2xl md:text-3xl lg:text-4xl">The Proven, Zero-Risk Method to Make <strong>$5–10k+</strong>/month Online — With Absolutely No Experience Needed.</p>
      </div>
      {/* banner video */}
      <div className="w-full h-full min-h-80 max-w-[1600px] aspect-1660/728 py-10 rounded-3xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full h-full object-cover rounded-3xl"
        >
          <source src="/videos/kai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* banner image */}
      <div className='w-full '>
        <Image
          src={bannerImage}
          alt="Banner Image"
          width={'100%'}
          height={'100%'}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  )
}
