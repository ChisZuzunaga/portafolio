import React from 'react';
import Chat_Portfolio from './Chats/Chat_Portfolio';
import ProjectsFull from './ProjectsFull';

const Portfolio_Hero = () => {
  return (
    <>
        <section id="portfolio_hero" className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-hero pb-bottom-50px">
          <article className="bg-white-500 p-4 row-span-2 ml-230px-md sm-m-custom-5 mt-80px-md order-2 md:order-1">
              <div>
                  <Chat_Portfolio />
              </div>
          </article>
          <article className="bg-white-500 mr-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px order-1 md:order-2">
              <header className="text-black text-3xl md:text-4xl font-regular">
                  <h1>
                      <span className="text-3xl md:text-6xl font-bold">Portfolio</span>
                  </h1>
              </header>
              <h2>
                <span className='text-xl md:text-4xl font-regular'>Check out some of my latest projects.</span>
              </h2>
              <p className="text-xl font-light pt-custom-9px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
              </p>
          </article>
        </section>
        <ProjectsFull />
    </>
  );
}

export default Portfolio_Hero;