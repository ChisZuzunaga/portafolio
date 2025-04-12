import React from 'react';
import Chat_Portfolio from './Chats/Chat_Portfolio';
import ProjectsFull from './ProjectsFull';
import { useTranslation } from "react-i18next";

const Portfolio_Hero = () => {
  const { i18n, t } = useTranslation(); // Hook para traducciones
  const currentLang = i18n.language; // Obtén el idioma actual

  return (
    <>
        <section id="portfolio_hero" className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-hero pb-bottom-50px">
          <article className="bg-white-500 p-4 row-span-2 ml-230px-md sm-m-custom-5 mt-80px-md order-2 md:order-1 animate-fadeInLeft">
              <div>
                  <Chat_Portfolio />
              </div>
          </article>
          <article className="bg-white-500 mr-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px order-1 md:order-2 animate-fadeInRight">
              <header className="text-black text-3xl md:text-4xl font-regular">
                  <h1>
                      <span className="text-3xl md:text-6xl font-bold">{t('portfolio.tittle')}</span>
                  </h1>
              </header>
              <h2>
                <span className='text-xl md:text-4xl font-regular'>{t('portfolio.subtitle')}</span>
              </h2>
              <p className="text-xl font-light pt-custom-9px">
                {t('portfolio.desc')}
              </p>
          </article>
        </section>
        <ProjectsFull />
    </>
  );
}

export default Portfolio_Hero;