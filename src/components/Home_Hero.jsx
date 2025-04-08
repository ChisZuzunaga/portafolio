import React from 'react';
import Chat_Home from './Chats/Chat_Home';
import Projects from './Projects';

const Home_Hero = () => {
  return (
    <>
        <section id="home_hero" className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 bg-hero pb-bottom-50px">
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
                    <Chat_Home />
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
                        I design experiences that feel natural and effortless. From wireframes to polished interfaces, my focus is always on usability, clarity, and creating meaningful interactions for users.
                    </p>
                </div>
                <div>
                    <h2 className='text-xl md:text-2xl text-secondary-blue font-regular pt-custom-9px md-pt-custom-15px'>
                        Web Design <span>&lt;/&gt;</span>
                    </h2>
                    <p className='text-base font-light'>
                        I build websites that are not only visually appealing but also responsive and performance-driven. Every design choice is made with purpose, blending aesthetics with functionality to deliver impactful results.
                    </p>
                </div>
            </article>
        </section>
        {/* <Projects /> */}
    </>
  );
}

export default Home_Hero;