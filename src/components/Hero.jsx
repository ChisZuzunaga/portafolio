import React from 'react';
import Chat from './Chat';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 p-4 bg-hero">
        <article className="bg-white-500 ml-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px">
            <header className="text-black text-3xl md:text-4xl font-regular">
                <h1>
                    <span className="text-secondary-blue text-3xl md:text-4xl font-bold">Engineer</span> in Computer Science Front-End Specialist
                </h1>
            </header>
            <p className="text-xl md:text-[22.5px] font-light pt-custom-9px">
                Passionate about crafting seamless user experiences through modern web technologies. I specialize in building intuitive, responsive, and visually appealing interfaces.
            </p>
        </article>
        <article className="bg-white-500 p-4 row-span-2 mr-230px-md sm-m-custom-5 mt-80px-md">
            <div>
                <Chat />
            </div>
        </article>
        <article className="bg-white-500 p-4 ml-230px-md sm-m-custom-5 mt-45px-md md:text-left text-center">
            <header className="text-black text-3xl md:text-4xl font-regular">
                <h1>
                    <span className="text-secondary-blue text-3xl md:text-4xl font-bold">Specialities</span>
                </h1>
            </header>
            <div>
                <h2 className='text-xl md:text-2xl text-secondary-blue font-regular pt-custom-9px md-pt-custom-15px'>
                    UI/UX Design
                </h2>
                <p className='text-base font-light'>
                    Passionate about crafting seamless user experiences through modern web technologies. I specialize in building intuitive, responsive, and visually appealing interfaces.
                </p>
            </div>
            <div>
                <h2 className='text-xl md:text-2xl text-secondary-blue font-regular pt-custom-9px md-pt-custom-15px'>
                    Web Design <span>&lt;/&gt;</span>
                </h2>
                <p className='text-base font-light'>
                    Passionate about crafting seamless user experiences through modern web technologies. I specialize in building intuitive, responsive, and visually appealing interfaces.
                </p>
            </div>
        </article>
    </section>

  )
}

export default Hero;