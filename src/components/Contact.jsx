import React from 'react'
import Chat_Contact from './Chats/Chat_Contact';
import Input from './Input';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
    faGithub, 
    faInstagram, 
    faLinkedin,
    faMicrosoft,
} from "@fortawesome/free-brands-svg-icons"; 

const socials = [
    { 
        icon: faLinkedin, 
        url: "https://www.linkedin.com/in/ignacio-guerra-torres-409a22337/",
        text: "LinkedIn",
    },
    { 
        icon: faInstagram, 
        url: "https://www.instagram.com/chis_zuzunaga/", 
        text: "Instagram",
    }, 
    { 
      icon: faGithub, 
      url: "https://github.com/ChisZuzunaga", 
      text: "GitHub",
    },
    { 
      icon: faMicrosoft, 
      url: "https://github.com/ChisZuzunaga", 
      text: "Outlook",
    }
]; 

const Contact = () => {
  return (
    <>
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-hero pb-bottom-50px">
          <article className="bg-white-500 ml-230px-md sm-m-custom-5 mt-100px-md md:text-left text-center pt-custom-40px animate-fadeInLeft">
              <header className="text-black text-3xl md:text-4xl font-regular">
                  <h1>
                      <span className="text-3xl md:text-6xl font-bold">Contact</span>
                  </h1>
              </header>
              <h2>
                <span className='text-xl md:text-4xl font-light'>Get in touch with me via social media or send me an email.</span>
              </h2>
              <div className='grid grid-cols-2 grid-rows-2 gap-2 pt-10px'>
                {socials.map(({ icon, url, text }) => ( 
                  <a 
                      key={url} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className='font-light text-xl justify-center align-items-center'
                  > 
                      <FontAwesomeIcon icon={icon} size="2x" key={url} className="socials-logos" /> {text}
                  </a> 
                ))} 
              </div>
          </article>
          <article className="bg-white-500 p-4 row-span-2 mr-230px-md sm-m-custom-5 mt-80px-md animate-fadeInRight">
              <div>
                  <Chat_Contact />
              </div>
          </article>
        </section>
        <Input />
    </>
  )
}

export default Contact