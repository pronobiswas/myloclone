'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { FaFolderOpen } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}
export default function Ourprogram() {
    const whatsInsideRef = useRef(null);
    const whatsInsideHeading = useRef(null);
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Heading Animation
            gsap.from(whatsInsideHeading.current, {
                fontSize: '5vw',
                scrollTrigger: {
                    trigger: whatsInsideHeading.current,
                    start: 'top 70%',
                    end: "+=200",
                    scrub: true,
                }
            });

            // 2. Individual Card Timelines
            const programCrds = whatsInsideRef.current?.querySelectorAll('.programCrd');
            
            programCrds.forEach(card => {
                const icon = card.querySelector(".programCardIcon");
                const title = card.querySelector(".programCardTitle");
                const para = card.querySelector(".programCardParagraph");
                const list = card.querySelector(".programCardList");

                // Split Text
                const splitTitle = new SplitText(title, { type: "chars" });
                const splitPara = new SplitText(para, { type: "chars" });
                
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%", 
                        end: "+=700",
                        scrub: true,
                    }
                });

                tl.from(card, { opacity: 0, y: 60, duration: 0.5 })
                  .from(icon, { filter:'blur(5px)', duration: 0.5 })
                  .from(splitTitle.chars, { opacity: 0, scale: 1.5,duration: 0.2, stagger: 0.02 })
                  .from(splitPara.chars, { opacity: 0, rotateX:270 ,duration: 0.2, stagger: 0.02 })
                  .from(list, { opacity: 0, y:100 ,duration: 0.5, });
            });
        }, whatsInsideRef);

        return () => ctx.revert(); // Auto-cleans up SplitText and ScrollTriggers
    }, []);
    return (
        <div
        ref={whatsInsideRef}
        style={{
                    background: 'radial-gradient(circle,rgba(0, 100, 50, 0.35) 0%, rgba(0, 100, 50, 0.25) 48%, rgba(255, 255, 255, 0) 90%)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
         className='w-full p-0 md:p-3'>
            {/* --card wrapper-- */}
            <h2 ref={whatsInsideHeading} className='text-4xl font-bold text-center mt-2 text-emerald-500 py-12'>What's inside<span className='text-green-600'>Our Program?</span></h2>
            <div
                
                className='w-full flex justify-center items-center'
            >
                <div

                    className='w-full max-w-[1240px] p-3 md:p-5 rounded-3xl grid grid-cols-1 md:grid-cols-2 place-content-center gap-8 justify-center items-center'
                >
                    {/* --card Resources (Including AI Automations)-- */}
                    <div className="programCrd w-full max-w-[640px] h-full p-5 pb-8 md:p-12 md:pb-14 rounded-2xl py-8  flex flex-col gap-6 mx-auto bg-gradient-to-br from-[rgba(0,26,4,0.1)] to-[rgba(0,167,83,0.1)]
                        bg-cover bg-center bg-no-repeat">
                            {/* --programCardIcon-- */}
                        <div className='programCardIcon w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl pl-1 '><FaFolderOpen /></div>
                        {/* --programCardTitle-- */}
                        <h3 className='programCardTitle text-2xl font-semibold text-emerald-500'>Resources (Including AI Automations)</h3>
                        {/* ---programCardParagraph--- */}
                        <p className='programCardParagraph text-base md:text-[18px] text-emerald-500'>Joining the Easy Etsy community unlocks access to exclusive resources that we personally use to outcompete the competition with ease, in order to achieve results in months that takes others years.<br/><br/>
                        <strong>This includes access to our private suppliers that we have built relationships with over the past several years, the softwares that we use to find endless winning, unsaturated products and niches, and more. Additionally, you’ll learn exactly how we leverage AI to save time and make higher-converting Etsy stores.</strong></p>
                        {/* --programCardList-- */}
                        <ul className='programCardList w-full flex flex-col gap-3 p-5 bg-emerald-500/10 rounded-2xl'>
                            <p className='text-base md:text-xl text-emerald-500'><strong>The resources consist of:</strong></p>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>How we leverage AI to scale our Etsy stores</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Personally vetted private suppliers</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Product and niche research softwares</span>
                            </li>
                        </ul>
                    </div>
                    {/* --card  1-1 Modules-- */}
                    <div className='programCrd w-full max-w-[640px] h-full p-5 pb-8 md:p-12 md:pb-14 rounded-2xl py-8 flex flex-col gap-6 mx-auto bg-gradient-to-bl from-[rgba(0,26,4,0.1)] to-[rgba(0,167,83,0.1)]'>
                        {/* --programCardIcon-- */}
                        <div className='programCardIcon w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl pl-1 '>
                            <svg width="36" height="36" viewBox="0 0 141 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.762 28.464C38.7585 32.9451 38.0316 36.2957 36.9116 40.7132C36.742 41.3939 36.5723 42.0746 36.3975 42.776C35.8556 44.9422 35.3009 47.1049 34.7456 49.2678C34.3798 50.7179 34.0148 52.1682 33.6507 53.6187C32.9792 56.2935 32.3019 58.9665 31.62 61.6386C29.0207 72.0552 25.9949 85.1963 31.105 95.2C40.3514 107.49 55.6964 109.812 69.8373 112.593C72.4226 113.115 75.0069 113.642 77.5906 114.171C79.186 114.497 80.7823 114.817 82.3798 115.132C87.8229 116.222 87.8229 116.222 89.9769 117.451C89.9228 118.439 89.8687 119.428 89.813 120.446C83.1879 122.178 76.6753 123.432 69.8718 124.186C68.5305 124.34 68.5305 124.34 67.1621 124.496C65.2853 124.709 63.408 124.918 61.5304 125.124C58.6963 125.438 55.8647 125.77 53.0329 126.103C27.3024 129.03 27.3024 129.03 20.3994 124.972C15.0324 120.25 13.2498 116.058 12.2955 109.068C12.1758 108.273 12.0562 107.478 11.9329 106.66C11.5591 104.142 11.2078 101.621 10.8616 99.0995C10.749 98.2984 10.6365 97.4973 10.5205 96.6719C9.73866 91.0957 9.00389 85.5138 8.28036 79.9298C7.96265 77.4987 7.64406 75.0678 7.32511 72.637C7.12209 71.0886 6.9197 69.5401 6.718 67.9916C6.19083 63.9589 5.63181 59.9338 5.02951 55.9115C4.08249 49.3784 3.56739 43.3421 7.09797 37.4892C11.9529 31.4631 19.0925 29.581 26.4913 28.5357C30.293 28.1698 33.953 28.0484 37.762 28.464Z" fill="#FEFCFB" />
                                <path d="M97.4476 3.55926C100.335 4.0463 103.225 4.51499 106.115 4.98138C107.983 5.28955 109.851 5.59876 111.719 5.90911C112.567 6.04675 113.415 6.18438 114.289 6.32618C131.478 9.26567 131.478 9.26567 137.645 15.7333C142.449 22.7796 140.837 30.7298 139.349 38.6866C139.162 39.643 138.975 40.5995 138.781 41.5849C138.589 42.602 138.396 43.6191 138.198 44.667C137.583 47.899 136.958 51.1286 136.332 54.3583C135.923 56.5027 135.515 58.6473 135.108 60.7919C134.14 65.8743 133.157 70.9537 132.168 76.0319C131.69 78.4981 131.223 80.9659 130.759 83.4348C130.502 84.7778 130.246 86.1208 129.988 87.4638C129.778 88.5817 129.567 89.6995 129.35 90.8513C127.908 96.7451 125.362 101.037 120.145 104.233C109.419 108.526 96.5263 104.941 85.5822 102.858C84.1052 102.585 82.6279 102.313 81.1505 102.042C78.9893 101.645 76.8284 101.247 74.6688 100.842C69.5316 99.8789 64.3827 99.0358 59.2113 98.2746C53.9763 97.1706 48.6537 95.1581 45.172 90.956C40.1715 82.4785 41.4797 74.3858 43.254 65.2138C43.4221 64.3158 43.5902 63.4177 43.7634 62.4924C44.1199 60.595 44.4798 58.6981 44.8429 56.8019C45.3855 53.9685 45.9185 51.1334 46.4494 48.2978C47.3184 43.6743 48.2142 39.0566 49.1205 34.4403C49.6394 31.7604 50.1344 29.0769 50.6271 26.392C50.9498 24.7101 51.2734 23.0283 51.5978 21.3466C51.7302 20.5931 51.8626 19.8396 51.9991 19.0632C53.364 12.1948 56.2323 6.74366 61.6447 2.23333C71.8632 -2.66764 86.8311 1.76433 97.4476 3.55926Z" fill="#FEFDFB" />
                                <line x1="73.3481" y1="25.8237" x2="112.491" y2="33.3191" stroke="#00A63E" strokeWidth="8" strokeLinecap="round" />
                                <line x1="69.2969" y1="44.7494" x2="101.417" y2="50.3704" stroke="#00A63E" strokeWidth="8" strokeLinecap="round" />
                                <line x1="64.2368" y1="61.6655" x2="88.3327" y2="65.4304" stroke="#00A63E" strokeWidth="8" strokeLinecap="round" />
                            </svg>
                        </div>
                        {/* --programCardTitle-- */}
                        <h3 className='programCardTitle text-2xl font-semibold text-emerald-500'>Modules</h3>
                        {/* ---programCardParagraph--- */}
                        <p className='programCardParagraph text-[13px] md:text-[18px] text-emerald-500'>The modules within the Easy Etsy program will teach you step-by-step how to master dropshipping on Etsy and make $10k-15k+ per month, with some of our clients reaching $30k per month and beyond.<br/><br/>
                        <strong>These are proven and battle-tested strategies that we’ve used to generate over 7 figures in sales on Etsy.</strong></p>
                        {/* --programCardList-- */}
                        <ul className='programCardList w-full flex flex-col gap-3 p-5 bg-emerald-500/10 rounded-2xl'>
                            <p className='text-base md:text-xl text-emerald-500'><strong>Our Modules Cover</strong></p>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>An A-Z in-depth guide on Etsy dropshipping</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Winning product research strategies</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Scaling strategies & conversion optimisation</span>
                            </li>
                        </ul>
                    </div>
                    {/* --card  1-1 1-1 Mentorship-- */}
                    <div className='programCrd w-full max-w-[640px] h-full p-5 pb-8 md:p-12 md:pb-14 rounded-2xl py-8 flex flex-col gap-6 mx-auto bg-gradient-to-tr from-[rgba(0,26,4,0.1)] to-[rgba(0,167,83,0.1)]'>
                        {/* --programCardIcon-- */}
                        <div className='programCardIcon w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl pl-1 '>
                            <svg width="34" height="34" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M443.705 17.312C447.354 20.3369 450.691 23.6105 454 26.9999C454.998 27.9667 454.998 27.9667 456.016 28.9531C468.625 42.0166 474.173 61.2295 474 78.9999C472.838 101.469 463.801 119.084 447.562 134.281C438.447 142.077 427.575 147.067 416 150C417.796 150.437 417.796 150.437 419.629 150.883C440.373 156.051 458.992 163.453 475 178C475.519 178.47 476.039 178.941 476.574 179.425C496.48 197.682 507.202 220.611 512 247C512 263.17 512 279.34 512 296C438.08 296 364.16 296 288 296C288 249.346 289.284 213.957 321.312 181.25C338.668 164.103 360.556 155.37 384 150C383.212 149.792 382.425 149.585 381.613 149.371C361.143 143.581 345.612 132.067 335.066 113.617C331.135 106.331 328.531 99.1318 327 90.9999C326.773 89.8656 326.546 88.7312 326.312 87.5624C324.491 66.7965 328.848 47.5247 342 30.9999C342.583 30.242 343.165 29.484 343.766 28.7031C367.306 0.0190907 414.307 -5.30944 443.705 17.312Z" fill="white" />
                                <path d="M156.741 230.28C172.801 243.229 183.311 260.499 186 281C187.985 302.903 181.759 323.202 167.688 340.187C161.498 346.896 154.485 351.97 146.5 356.312C145.908 356.638 145.315 356.963 144.705 357.299C139.677 359.925 134.459 361.506 129 363C129.567 363.135 130.134 363.269 130.718 363.408C150.626 368.233 167.907 375.184 184 388C184.839 388.668 185.678 389.335 186.543 390.023C192.488 395.037 197.276 400.847 202 407C202.596 407.745 203.191 408.49 203.805 409.258C226.201 438.879 224 471.904 224 508C150.08 508 76.16 508 0 508C0 448.167 0 448.167 7.6875 431.187C8.02999 430.407 8.37248 429.627 8.72534 428.824C20.7719 402.235 42.8336 380.879 70 370C74.9516 368.277 79.9892 366.867 85.0542 365.521C88.0474 364.719 91.0225 363.858 94 363C93.2614 362.781 92.5227 362.562 91.7617 362.336C71.3796 355.965 55.7782 343.316 45.7227 324.453C36.7327 306.432 35.2906 286.302 41.2725 267.1C47.9224 247.908 61.0905 232.599 79.375 223.625C104.642 213.037 134.024 213.578 156.741 230.28Z" fill="#F6F9FA" />
                                <path d="M156.741 230.28C172.801 243.229 183.311 260.499 186 281C187.985 302.903 181.759 323.202 167.687 340.188C154.436 354.55 136.699 363.363 117.18 364.375C95.4585 365.031 77.3595 360.019 60.9999 345C46.647 331.247 38.414 312.89 37.663 293.033C37.3123 273.156 44.0058 254.646 57.2421 239.75C83.3993 213.667 126.19 207.819 156.741 230.28Z" fill="white" />
                                <path d="M443.705 17.312C447.354 20.3369 450.691 23.6105 454 26.9999C454.998 27.9667 454.998 27.9667 456.016 28.9531C468.625 42.0166 474.174 61.2295 474 78.9999C472.839 101.469 463.801 119.084 447.563 134.281C431.518 148.004 412.146 152.449 391.495 151.219C372.381 149.543 355.243 139.628 342.66 125.344C334.815 115.104 329.387 103.681 327 90.9999C326.66 89.2984 326.66 89.2984 326.313 87.5624C324.491 66.7965 328.848 47.5247 342 30.9999C342.583 30.242 343.166 29.484 343.766 28.7031C367.307 0.0190907 414.307 -5.30944 443.705 17.312Z" fill="white" />
                                <path d="M225 26C230.522 29.1612 234.742 33.4519 239.207 37.9414C240.356 39.0876 240.356 39.0876 241.528 40.2568C243.138 41.8656 244.746 43.4769 246.351 45.0906C248.815 47.5647 251.288 50.0279 253.764 52.4902C255.329 54.0567 256.893 55.6237 258.457 57.1914C259.198 57.929 259.94 58.6665 260.704 59.4264C261.726 60.4578 261.726 60.4578 262.769 61.51C263.671 62.4146 263.671 62.4146 264.591 63.3374C267.244 66.4688 267.196 69.8095 267.426 73.7695C266.182 80.2839 260.029 85.2634 255.531 89.7344C254.455 90.8132 254.455 90.8132 253.357 91.9139C251.847 93.4257 250.334 94.935 248.819 96.4419C246.5 98.7494 244.193 101.067 241.887 103.387C240.415 104.857 238.942 106.328 237.469 107.797C236.78 108.49 236.091 109.182 235.382 109.896C234.734 110.537 234.087 111.178 233.42 111.839C232.854 112.403 232.289 112.966 231.707 113.547C228.7 116.106 226.511 116.954 222.562 117.313C217.879 116.902 215.57 115.461 212.187 112.313C210.47 108.969 210.309 105.639 211 102C213.277 97.2046 216.933 93.8364 220.687 90.1875C221.294 89.59 221.9 88.9926 222.525 88.377C224.012 86.9134 225.505 85.4561 227 84C222.166 83.8994 217.333 83.8278 212.498 83.7803C210.861 83.7605 209.224 83.7334 207.588 83.6983C193.238 83.3986 179.575 84.7907 166.687 91.6875C165.701 92.2023 165.701 92.2023 164.695 92.7276C147.618 101.959 135.872 117.784 130.187 136.25C129.341 139.65 128.877 142.991 128.558 146.473C128.484 147.27 128.41 148.067 128.333 148.888C128.197 150.467 128.084 152.049 127.997 153.632C127.547 159.311 126.126 162.027 122 166C118.381 167.206 115.808 167.323 112 167C107.998 164.886 105.604 163.238 104 159C101.727 137.158 109.829 113.443 123.318 96.3272C126.362 92.6925 129.63 89.332 133 86C134.203 84.7819 134.203 84.7819 135.43 83.5391C155.217 64.5306 181.153 59.4507 207.562 59.25C209.46 59.2218 211.358 59.1918 213.256 59.1602C217.837 59.0873 222.418 59.0372 227 59C226.52 58.5572 226.041 58.1144 225.547 57.6582C223.367 55.6244 221.215 53.563 219.062 51.5C218.308 50.8039 217.553 50.1078 216.775 49.3906C210.613 43.4218 210.613 43.4218 209.93 38.6758C210.01 34.473 210.543 32.4075 213 29C217.016 26.3226 220.203 25.3004 225 26Z" fill="white" />
                                <path d="M431 337C436.089 343.176 435.754 349.154 435.223 356.744C433.038 378.837 423.238 398.07 408 414C407.08 415.033 407.08 415.033 406.141 416.086C390.744 432.733 366.568 441.509 344.304 442.53C339.994 442.662 335.686 442.715 331.375 442.75C329.578 442.778 327.781 442.808 325.985 442.84C321.656 442.913 317.329 442.963 313 443C313.904 443.88 314.807 444.761 315.738 445.668C316.93 446.841 318.122 448.014 319.313 449.188C319.908 449.766 320.502 450.344 321.115 450.939C328.729 458.468 328.729 458.468 329.375 464.5C328.882 469.106 327.413 471.424 324.375 474.813C320.517 476.741 317.201 476.88 313 476C311.059 474.667 311.059 474.667 309.187 472.921C308.152 471.967 308.152 471.967 307.095 470.993C306.404 470.335 305.712 469.678 305 469C304.044 468.107 304.044 468.107 303.068 467.196C298.915 463.289 294.846 459.293 290.78 455.294C289.297 453.844 287.806 452.401 286.308 450.966C284.125 448.874 281.969 446.757 279.817 444.633C279.147 444.001 278.477 443.37 277.787 442.719C273.914 438.829 271.937 435.754 271.746 430.171C272.576 423.088 278.369 418.201 283.18 413.457C283.87 412.766 284.561 412.075 285.272 411.363C286.726 409.912 288.183 408.464 289.644 407.02C291.87 404.818 294.082 402.602 296.293 400.385C297.713 398.971 299.133 397.557 300.555 396.145C301.211 395.487 301.868 394.83 302.544 394.153C311.53 385.303 311.53 385.303 317.563 384.563C322.103 385.14 324.46 386.619 327.813 389.625C329.725 393.449 329.94 396.833 329 401C327.103 404.132 324.605 406.45 322 409C320.246 410.75 318.494 412.501 316.742 414.254C315.851 415.145 314.961 416.037 314.043 416.955C313.032 417.967 313.032 417.967 312 419C316.159 419.05 320.317 419.086 324.476 419.11C325.884 419.12 327.292 419.133 328.699 419.151C352.496 419.44 373.64 414.729 391.399 397.789C402.537 385.848 409.831 371.128 411.414 354.848C411.491 354.093 411.568 353.339 411.648 352.562C411.796 351.052 411.928 349.54 412.04 348.026C412.499 343.179 413.493 340.405 417 337C422.255 334.72 425.766 334.63 431 337Z" fill="white" />
                            </svg>


                        </div>
                        {/* --programCardTitle-- */}
                        <h3 className='programCardTitle text-2xl font-semibold text-emerald-500'>1-1 Mentorship</h3>
                        {/* ---programCardParagraph--- */}
                        <p className='programCardParagraph text-[13px] md:text-[18px] text-emerald-500'>The Easy Etsy team are here to hold your hand throughout the program whilst working with you 1-on-1 in order to ensure you progress as quickly and seamlessly as possible.
                        <br/><br/>
                        <strong>Ongoing 1-on-1 support and 24/7 access to your coach gives you everything you need to be our next success story.</strong></p>
                        {/* --programCardList-- */}
                        <ul className='programCardList w-full flex flex-col gap-3 p-5 bg-emerald-500/10 rounded-2xl'>
                            <p className='text-base md:text-xl text-emerald-500'><strong>You’ll gain direct access to:</strong></p>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>24/7 contact with your coach</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Personalised mentorship and guidance</span>
                            </li>
                            <li className='flex items-center gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Several coaching calls each week</span>
                            </li>
                        </ul>
                    </div>
                    {/* --card  1-1 1-1 Community-- */}
                    <div className='programCrd w-full max-w-[640px] h-full p-5 pb-8 md:p-12 md:pb-14 rounded-2xl  py-8 flex flex-col gap-6 mx-auto bg-gradient-to-tl from-[rgba(0,26,4,0.1)] to-[rgba(0,167,83,0.1)]'>
                        {/* --programCardIcon-- */}
                        <div className='programCardIcon w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl pl-1 '>
                            <svg width="34" height="34" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="2" r="2" fill="white" />
                                <circle cx="12" cy="2" r="2" fill="white" />
                                <path d="M6 8.66259C6 11.2376 4.65685 10.9939 3 10.9939C1.34315 10.9939 0 11.2376 0 8.66259C0 6.08753 1.34315 4.00004 3 4.00004C4.65685 4.00004 6 6.08753 6 8.66259Z" fill="white" />
                                <path d="M15 8.66255C15 11.2376 13.6569 10.9938 12 10.9938C10.3431 10.9938 9 11.2376 9 8.66255C9 6.08749 10.3431 4 12 4C13.6569 4 15 6.08749 15 8.66255Z" fill="white" />
                                <path d="M7.5 6.25C10.3568 6.25 12.75 9.07363 12.75 12.6611C12.75 13.5558 12.5993 14.1752 12.3506 14.6084C12.1057 15.0349 11.7537 15.3024 11.3018 15.4717C10.8422 15.6438 10.2815 15.7137 9.63184 15.7383C8.97973 15.7629 8.27041 15.7412 7.5 15.7412C6.72959 15.7412 6.02027 15.7629 5.36816 15.7383C4.71853 15.7137 4.15782 15.6438 3.69824 15.4717C3.24628 15.3024 2.89431 15.0349 2.64941 14.6084C2.40066 14.1752 2.25003 13.5558 2.25 12.6611C2.25 9.07363 4.64317 6.25 7.5 6.25Z" fill="#F6F9FA" stroke="#00A63E" strokeWidth="0.5" />
                                <circle cx="7.5" cy="3.5" r="3.25" fill="white" stroke="#00A63E" strokeWidth="0.5" />
                            </svg>
                        </div>
                        {/* --programCardTitle-- */}
                        <h3 className='programCardTitle text-2xl font-semibold text-emerald-500'>Community</h3>
                        {/* ---programCardParagraph--- */}
                        <p className='programCardParagraph text-[13px] md:text-[18px] text-emerald-500'>The Easy Etsy community is full of like-minded ambitious individuals who want to see each other win. From beginners getting their first few sales to those pushing past $5k-30k+ per month, our exclusive network enables all members to maximise their potential.
                        <br/><br/>
                        <strong>Not only are you motivated by everyone else winning, but you also gain access to the unique knowledge, experience and strategies used by other members of the community.</strong></p>
                        {/* --programCardList-- */}
                        <ul className='programCardList w-full flex flex-col gap-3 p-5 bg-emerald-500/10 rounded-2xl'>
                            <p className='text-base md:text-xl text-emerald-500'><strong>The community includes:</strong></p>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Learning directly from top members</span>
                            </li>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>An exclusive network of like-minded people</span>
                            </li>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>Daily advice and a solution to every problem</span>
                            </li>
                        </ul>
                    </div>
                    {/* --card  1-1 1-1 Limited Time Bonus-- */}
                    <div className='programCrd w-full max-w-[640px] h-full p-5 pb-8 md:p-12 md:pb-14 rounded-2xl py-8 flex flex-col gap-6 mx-auto bg-gradient-to-br from-[rgba(0,26,4,0.1)] to-[rgba(0,167,83,0.1)]'>
                        {/* --programCardIcon-- */}
                        <div className='programCardIcon w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-4xl pl-1 '>
                            <svg width="34" height="34" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3" cy="2" r="2" fill="white" />
                                <circle cx="12" cy="2" r="2" fill="white" />
                                <path d="M6 8.66259C6 11.2376 4.65685 10.9939 3 10.9939C1.34315 10.9939 0 11.2376 0 8.66259C0 6.08753 1.34315 4.00004 3 4.00004C4.65685 4.00004 6 6.08753 6 8.66259Z" fill="white" />
                                <path d="M15 8.66255C15 11.2376 13.6569 10.9938 12 10.9938C10.3431 10.9938 9 11.2376 9 8.66255C9 6.08749 10.3431 4 12 4C13.6569 4 15 6.08749 15 8.66255Z" fill="white" />
                                <path d="M7.5 6.25C10.3568 6.25 12.75 9.07363 12.75 12.6611C12.75 13.5558 12.5993 14.1752 12.3506 14.6084C12.1057 15.0349 11.7537 15.3024 11.3018 15.4717C10.8422 15.6438 10.2815 15.7137 9.63184 15.7383C8.97973 15.7629 8.27041 15.7412 7.5 15.7412C6.72959 15.7412 6.02027 15.7629 5.36816 15.7383C4.71853 15.7137 4.15782 15.6438 3.69824 15.4717C3.24628 15.3024 2.89431 15.0349 2.64941 14.6084C2.40066 14.1752 2.25003 13.5558 2.25 12.6611C2.25 9.07363 4.64317 6.25 7.5 6.25Z" fill="#F6F9FA" stroke="#00A63E" strokeWidth="0.5" />
                                <circle cx="7.5" cy="3.5" r="3.25" fill="white" stroke="#00A63E" strokeWidth="0.5" />
                            </svg>


                        </div>
                        {/* --programCardTitle-- */}
                        <h3 className='programCardTitle text-2xl font-semibold text-emerald-500'>Limited Time Bonus</h3>
                        {/* ---programCardParagraph--- */}
                        <p className='programCardParagraph text-[13px] md:text-[18px] text-emerald-500'>To fast-track your success, for a limited time only, we are sending all new clients 1 proven winning niche and 3 vetted winning products.
                            <br/><br/>
                        <strong>This will rapidly accelerate your progress, giving you a massive head-start from day one. Join now to take advantage of this limited time offer.</strong></p>
                        {/* --programCardList-- */}
                        <ul className='programCardList w-full flex flex-col gap-3 p-5 bg-emerald-500/10 rounded-2xl'>
                            <p className='text-base md:text-xl text-emerald-500'><strong>You'll receive:</strong></p>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>1 proven winning niche for your Etsy store</span>
                            </li>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>3 vetted winning products within the chosen niche</span>
                            </li>
                            <li className='flex gap-5 pt-2'>
                                <FaCheckCircle className='text-emerald-500' />
                                <span className='text-[13px] md:text-[18px] text-emerald-500'>The exact strategy on how we found these products</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
