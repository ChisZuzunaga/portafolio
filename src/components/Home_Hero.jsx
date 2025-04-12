import React from 'react';
import Chat_Home from './Chats/Chat_Home';
import { useTranslation } from 'react-i18next';
import Projects from './Projects';

const Home_Hero = () => {
    const { i18n, t } = useTranslation(); // Hook para traducciones
    const currentLang = i18n.language; // Obtén el idioma actual

    return (
        <>
            <section id="home_hero" className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2 bg-hero pb-bottom-50px">
                <article className="bg-white-500 ml-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px animate-fadeInLeft">
                    <header className="text-black text-3xl md:text-4xl font-regular">
                        <h1>
                            <span className="text-secondary-blue text-3xl md:text-4xl font-bold">{t('home_hero.engineer')}</span> {t('home_hero.title')}
                        </h1>
                    </header>
                    <p className="text-xl md:text-[22.5px] font-light pt-custom-9px">
                        {t('home_hero.desc')}
                    </p>
                </article>
                <article className="bg-white-500 p-4 row-span-2 mr-230px-md sm-m-custom-5 mt-80px-md animate-fadeInRight">
                    <div>
                        <Chat_Home />
                    </div>
                </article>
                <article className="bg-white-500 p-4 ml-230px-md sm-m-custom-5 mt-45px-md md:text-left text-center animate-fadeInLeft">
                    <header className="text-black text-3xl md:text-4xl font-regular">
                        <h1>
                            <span className="text-secondary-blue text-3xl md:text-4xl font-bold">{t('home_hero.specialities')}</span>
                        </h1>
                    </header>
                    <div>
                        <h2 className='text-xl md:text-2xl text-secondary-blue font-regular pt-custom-9px md-pt-custom-15px'>
                            {t('home_hero.subtitle_uno')}
                        </h2>
                        <p className='text-base font-light'>
                            {t('home_hero.desc_uno')}
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl md:text-2xl text-secondary-blue font-regular pt-custom-9px md-pt-custom-15px'>
                            {t('home_hero.subtitle_dos')} <span>&lt;/&gt;</span>
                        </h2>
                        <p className='text-base font-light'>
                            {t('home_hero.desc_dos')}
                        </p>
                    </div>
                </article>
            </section>
            <Projects />
        </>
    );
}

export default Home_Hero;