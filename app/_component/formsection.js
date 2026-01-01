'use client'
import React from 'react'

const Formsection = () => {
    return (
        <>
            <section id='section2' className='w-full h-fit bg-transparent py-8' >
                <div className='w-full h-fit'>
                    {/* ===heading=== */}
                    <div className='text-white text-center pb-8 '>
                        <span className='text-4xl font-bold text-emerald-400'>STEP 2</span>
                        <h2 className='text-3xl' >Fill out the <span className='text-emerald-400'>form below</span> and <span className='text-emerald-400'>book a call</span></h2>
                    </div>
                    {/* ===forrm section=== */}
                    <div className='w-full max-w-3xl text-white mx-auto hidden'>
                        {/* ---heading--- */}
                        <div>
                            <h2 className='text-3xl font-bold'>Easy Step</h2>
                        </div>
                        {/* -----question---- */}
                        <div className='p-7'>
                            <div className='pb-5'>
                                <div className='flex gap-5 pb-4 font-bold'>
                                    <span className='inline-block py-1 px-3 bg-emerald-400 rounded-tl-md rounded-br-md'>1</span>
                                    <h3 className='text-xl'>Which of the following describes you best?*</h3>
                                </div>
                                <p>The reason we are asking is so we can best help <b>you accomplish your goals.</b></p>
                            </div>
                            <div>
                                <ul className='w-full max-w-3xs flex flex-col gap-5'>
                                    <li className='border-2 border-emerald-400 rounded-full p-2 flex gap-3 items-center'>
                                        <span className='inline-block border-2 border-emerald-400 rounded-full px-2 py-[2px]' >A</span>
                                        <span>I work full time.</span>
                                    </li>
                                    <li className='border-2 border-emerald-400 rounded-full p-2 flex gap-3 items-center'>
                                        <span className='inline-block border-2 border-emerald-400 rounded-full px-2 py-[2px]' >A</span>
                                        <span>I work full time.</span>
                                    </li>
                                    <li className='border-2 border-emerald-400 rounded-full p-2 flex gap-3 items-center'>
                                        <span className='inline-block border-2 border-emerald-400 rounded-full px-2 py-[2px]' >A</span>
                                        <span>I work full time.</span>
                                    </li>
                                    <li className='border-2 border-emerald-400 rounded-full p-2 flex gap-3 items-center'>
                                        <span className='inline-block border-2 border-emerald-400 rounded-full px-2 py-[2px]' >A</span>
                                        <span>I work full time.</span>
                                    </li>


                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-full h-fit flex items-center justify-center'>
                    <div className='w-full h-full max-w-6xl'>
                        
                        <iframe
                            src="https://form.typeform.com/to/VehliYSJ"
                            width="100%"
                            height="100%"
                            title="Typeform"
                            style={{
                                width:'100%',
                                height:'100%',
                                minHeight:'700px',
                                borderRadius:'12px',
                            }}
                        />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Formsection