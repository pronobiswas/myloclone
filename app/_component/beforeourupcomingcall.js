'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register once
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}


const Beforeourupcomingcall = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef([]);
    const HeadingRef = useRef(null);
    const videoRow = sectionRef.current?.querySelectorAll('.review-card');

    useEffect(() => {
        let ctx = gsap.context(() => {


            const cards = gsap.utils.toArray('.review-card');
            const h2 = HeadingRef.current.querySelector('h2');
            const downtoup = HeadingRef.current.querySelectorAll('.downtoup');
            let splitH2 = SplitText.create(h2, {
                type: "lines",
                mask: "lines",
                className: "block overflow-hidden"
            });
            let split1 = SplitText.create(".uptodown", {
                type: "words, chars",
                mask: "words",
            });
            let split2 = SplitText.create(".downtoup", {
                type: "words, chars",
                mask: "chars",
            });

            cards.forEach((element) => {
                gsap.from(element, {
                    opacity: 0,
                    scale: 0.8,
                    y: 50,
                    duration: .5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 85%",
                        end: "+=200",
                        scrub: true,
                    }
                });
            });
            gsap.from(split1.words, {
                yPercent: 100,
                duration: 1,
                scrollTrigger: {
                        trigger: h2,
                        start: "top 85%",
                        end: "+=80",
                        scrub: true,
                    }
            });
            gsap.from(split2.words, {
                yPercent: -100,
                duration: 1,
                scrollTrigger: {
                        trigger: h2,
                        start: "top 85%",
                        end: "+=80",
                        scrub: true,
                    }
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <>
            <section ref={sectionRef} className='w-full h-fit'>
                <div className='w-full h-fit flex items-center justify-center'>
                    {/* ===card wrapper=== */}
                    <div
                        className='w-full mx-auto flex flex-col items-center justify-center py-16 rounded-3xl max-w-7xl'>
                        {/* --card heading--- */}
                        <div ref={HeadingRef} className='text-center pb-16 text-white'>
                            <h2
                                className='text-5xl text-center font-semibold mb-2'>
                                <span className='uptodown'>Before Our</span><span className='downtoup text-emerald-400'>Upcoming Call</span>
                            </h2>
                            <p>Check out what our students say about us!</p>
                        </div>
                        {/* &&&&&&&&& card wrapper &&&&&&&&&& */}
                        <div className='w-full h-fit max-w-7xl flex flex-col gap-y-12 lg:gap-y-32'>
                            {/* ====card content==== */}
                            <div
                                className='review-card flex flex-col md:flex-row gap-5 bg-emerald-400/50 p-5 rounded-3xl border border-emerald-400'>
                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Krissa Tewari</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$5,000</span> in One Month</h3>

                                    <p className='text-neutral-400'>Krissa is an 18-year-old full-time university student who was also working long hours as a tutor. After joining Easy Etsy, she generated $5,000 in a single month, allowing her to free up more time to focus on her studies. She now enjoys greater balance and the ability to live life on her own terms.</p>
                                </div>
                                {/* --video wrapper-- */}
                                <div
                                    className="w-full aspect-video rounded-3xl overflow-hidden order-1 lg:order-2 border border-emerald-400">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/kai.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            {/* =====card content 2====== */}
                            <div
                                className='review-card flex flex-col md:flex-row gap-5 bg-emerald-400/50 p-5 rounded-3xl border border-emerald-400'>
                                {/* --video wrapper-- */}
                                <div
                                    className="w-full aspect-video rounded-3xl overflow-hidden order-2 lg:order-1 border border-emerald-400">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/jacob.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* --desc-- */}
                                <div className='rowThree row w-full max-w-xl text-center lg:text-left order-1 lg:order-2'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Geonu Paek</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$7,780</span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Before joining us, Geonu was working two jobs—one as a bartender until 4 a.m., and another starting at 6 a.m.—leaving him with almost no time to rest. Within his first month, he made $7,780 in just 16 days after his first sale. He has since drastically reduced his working hours, giving him the freedom to live life on his own terms.</p>
                                </div>
                            </div>
                            {/* =====card content 2====== */}
                            <div
                                className='review-card flex flex-col md:flex-row gap-5 bg-emerald-400/50 p-5 rounded-3xl border border-emerald-400'>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>David Sokolow</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$6,000</span> in  His First Month</h3>

                                    <p className='text-neutral-400'>David is a 17-year-old from Sydney, Australia. Before joining Easy Etsy, he was studying full-time in high school while juggling a part-time job. Despite having no prior experience in dropshipping, David generated $6,000 in his very first month—all while preparing for his HSC exams at the same time. After graduating, David has now decided to pursue online business full-time.</p>
                                </div>
                                {/* --video wrapper-- */}
                                <div
                                    className="w-full aspect-video rounded-3xl overflow-hidden order-1 lg:order-2 border border-emerald-400">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        controls
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/videos/ollie.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Beforeourupcomingcall