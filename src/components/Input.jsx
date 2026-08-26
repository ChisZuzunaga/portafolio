import React from 'react';
import { useTranslation } from "react-i18next";

const Input = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <section className='bg-projects-custom ptb-80px-md'>
      <article className='ml-230px-md mr-230px-md ml-mr-30px'>
        <h1 className='type-title type-light mb-6'>{t('contact_input.send')}</h1>
        <form className='grid grid-cols-1 gap-4'>
          {/* Name and Email Inputs */}
          <div className='grid lg:grid-cols-2 gap-4'>
            {/* Name Input */}
            <div>
              <label htmlFor='name' className='block type-body-large type-light mb-2'>{t('contact_input.name')}</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Your Name'
                className='w-full p3px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor='email' className='block type-body-large type-light mb-2'>{t('contact_input.email')}</label>
              <input
                type='email'
                id='email'
                name='email'
                placeholder='Your Email'
                className='w-full p3px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor='message' className='block type-body-large type-light mb-2'>{t('contact_input.message')}</label>
            <textarea
              id='message'
              name='message'
              placeholder='Your Message'
              rows='4'
              className='w-full p3px border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='type-body type-semibold bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
            >
              {t('contact_input.submit')}
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Input;
