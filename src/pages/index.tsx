import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Layout title='IPCM Pesquisas - Inteligência de Pesquisas Comunicação & Marketing'>
      <Hero />
      <WhatWeDo />
      <WhoWeAre />
      <HowWeDo />
      <OurGoals />
      <OurServices />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

/// Page Sections
const Hero = () => {
  return (
    <div
      className='relative pt-16 pb-32 flex content-center items-center justify-center'
      style={{
        minHeight: '75vh',
      }}
    >
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <span id='blackOverlay' className='w-full h-full absolute opacity-75 bg-black'></span>
      </div>
      <div className='absolute opacity-50 bottom-20 right-3'>
        <img src='/img/marca.svg' className='h-full' alt='IPCM' />
      </div>

      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap'>
          <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
            <div className='pr-12'>
              <h1 data-aos='fade-up' className='text-white font-extralight text-5xl'>
                <span className='font-semibold'>IPCM</span> PESQUISAS
              </h1>
              <p data-aos='fade-down' className='mt-4 text-lg text-white font-extralight'>
                Inteligência de Pesquisas Comunicação & Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
        style={{ height: '70px' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon className='text-cyan-900 fill-current' points='2560 0 2560 100 0 100'></polygon>
        </svg>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section id='o_que_fazemos' className='pb-20 bg-gradient-to-r from-cyan-500 to-cyan-900 -mt-24'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap'>
          <div data-aos='fade-right' className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400'>
                  oi
                </div>
                <h6 className='text-gray-500 text-xl font-semibold'>Awarded Agency</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Divide details about your product or agency work into parts. A paragraph describing a feature will be
                  enough.
                </p>
              </div>
            </div>
          </div>

          <div data-aos='zoom-in' className='w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                  oi
                </div>
                <h6 className='text-gray-500 text-xl font-semibold'>Free Revisions</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Keep you user engaged by providing meaningful information. Remember that by this time, the user is
                  curious.
                </p>
              </div>
            </div>
          </div>

          <div data-aos='fade-left' className='pt-6 w-full md:w-4/12 px-4 text-center'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
              <div className='px-4 py-5 flex-auto'>
                <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400'>
                  oi
                </div>
                <h6 className='text-gray-500 text-xl font-semibold'>Verified Company</h6>
                <p className='mt-2 mb-4 text-gray-600'>
                  Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user
                  engaged!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap items-center mt-32'>
          <div data-aos='fade-right' className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
            <div className='text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100'>
              oi
            </div>
            <h3 className='text-3xl mb-2 font-semibold leading-normal'>O QUE FAZEMOS</h3>
            <p className='text-lg font-light leading-relaxed mt-4 mb-4'>
              O propósito central do IPCM - Inteligência de Pesquisas Comunicação & Marketing é contribuir para o
              desenvolvimento econômico e social e para preencher essa lacuna, surge a pesquisa de mercado que, nos dias
              de hoje, tem como objetivo principal orientar os diversos segmentos empresariais para que desenvolvam suas
              operações a partir da identificação das prioridades, desejos e expectativas de seu público alvo. Dois
              resultados favoráveis que merecem destaque, obtidos através do trabalho de pesquisa de mercado:
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4'>
              Maximização dos recursos aplicados no desenvolvimento de produtos e de serviços oferecidos pela empresa;
            </p>
            <p className='text-lg font-light leading-relaxed mt-0 mb-4'>
              Suporte na identificação da melhor estratégia e direcionamento das ações de marketing e comunicação
              integrada, em suas diversas áreas: publicidade, propaganda, assessoria de imprensa, relações públicas e
              promoções.
            </p>
          </div>

          <div data-aos='fade-left' className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
            <div className='relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg'>
              <img alt='...' src='img/amostra.svg' className='w-full align-middle mt-2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => (
  <section id='quem_somos' className='relative py-20'>
    <div
      className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
      style={{ height: '80px' }}
    >
      <svg
        className='absolute bottom-0 overflow-hidden'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 2560 100'
        x='0'
        y='0'
      >
        <polygon className='text-cyan-900 fill-current' points='2560 0 2560 100 0 100'></polygon>
      </svg>
    </div>

    <div className='container mx-auto px-4'>
      <div className='items-center flex flex-wrap'>
        <div data-aos='fade-right' className='w-full md:w-4/12 ml-auto mr-auto px-4'>
          <img
            alt='...'
            className='max-w-full rounded-lg shadow-lg'
            src='https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
          />
        </div>
        <div data-aos='fade-left' className='w-full md:w-5/12 ml-auto mr-auto px-4'>
          <div className='md:pr-12'>
            <div className='text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300'>
              <i className='fas fa-rocket text-xl'></i>
            </div>
            <h3 className='text-3xl font-semibold'>A growing company</h3>
            <p className='mt-4 text-lg leading-relaxed text-gray-600'>
              The extension comes with three pre-built pages to help you get started faster. You can change the text and
              images and you're good to go.
            </p>
            <ul className='list-none mt-6'>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                      <i className='fas fa-fingerprint'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>Carefully crafted components</h4>
                  </div>
                </div>
              </li>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                      <i className='fab fa-html5'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>Amazing page examples</h4>
                  </div>
                </div>
              </li>
              <li className='py-2'>
                <div className='flex items-center'>
                  <div>
                    <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3'>
                      <i className='far fa-paper-plane'></i>
                    </span>
                  </div>
                  <div>
                    <h4 className='text-gray-600'>Dynamic components</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowWeDo = () => (
  <section id='como_fazemos' className='pt-20 pb-48'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center text-center mb-24'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold'>Here are our heroes</h2>
          <p className='text-lg leading-relaxed m-4 text-gray-600'>
            According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the
            potentially record maximum.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6'>
            <img
              alt='...'
              src='/img/team-1-800x800.jpg'
              className='shadow-lg rounded-full max-w-full mx-auto'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Ryan Tompson</h5>
              <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>Web Developer</p>
              <div className='mt-6'>
                <button
                  className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-facebook-f'></i>
                </button>
                <button
                  className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6'>
            <img
              alt='...'
              src='img/team-2-800x800.jpg'
              className='shadow-lg rounded-full max-w-full mx-auto'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Romina Hadid</h5>
              <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>Marketing Specialist</p>
              <div className='mt-6'>
                <button
                  className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-facebook-f'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6'>
            <img
              alt='...'
              src='img/team-3-800x800.jpg'
              className='shadow-lg rounded-full max-w-full mx-auto'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Alexa Smith</h5>
              <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>UI/UX Designer</p>
              <div className='mt-6'>
                <button
                  className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-instagram'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
          <div className='px-6'>
            <img
              alt='...'
              src='img/team-4-470x470.png'
              className='shadow-lg rounded-full max-w-full mx-auto'
              style={{ maxWidth: '120px' }}
            />
            <div className='pt-6 text-center'>
              <h5 className='text-xl font-bold'>Jenna Kardi</h5>
              <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>Founder and CEO</p>
              <div className='mt-6'>
                <button
                  className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-dribbble'></i>
                </button>
                <button
                  className='bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-google'></i>
                </button>
                <button
                  className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                >
                  <i className='fab fa-instagram'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const OurGoals = () => (
  <section id='nossos_objetivos' className='pb-20 relative block bg-gray-900'>
    <div
      className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
      style={{ height: '80px' }}
    >
      <svg
        className='absolute bottom-0 overflow-hidden'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 2560 100'
        x='0'
        y='0'
      >
        <polygon className='text-gray-900 fill-current' points='2560 0 2560 100 0 100'></polygon>
      </svg>
    </div>

    <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
      <div className='flex flex-wrap text-center justify-center'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold text-white'>Build something</h2>
          <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
            Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National
            Oceanic and Atmospheric Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap mt-12 justify-center'>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-medal text-xl'></i>
          </div>
          <h6 className='text-xl mt-5 font-semibold text-white'>Excelent Services</h6>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-poll text-xl'></i>
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Grow your market</h5>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-lightbulb text-xl'></i>
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Launch time</h5>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OurServices = () => (
  <section id='nossos_servicos' className='pb-20 relative block bg-gray-900'>
    <div
      className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
      style={{ height: '80px' }}
    >
      <svg
        className='absolute bottom-0 overflow-hidden'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
        version='1.1'
        viewBox='0 0 2560 100'
        x='0'
        y='0'
      >
        <polygon className='text-gray-900 fill-current' points='2560 0 2560 100 0 100'></polygon>
      </svg>
    </div>

    <div className='container mx-auto px-4 lg:pt-24 lg:pb-64'>
      <div className='flex flex-wrap text-center justify-center'>
        <div className='w-full lg:w-6/12 px-4'>
          <h2 className='text-4xl font-semibold text-white'>Build something</h2>
          <p className='text-lg leading-relaxed mt-4 mb-4 text-gray-500'>
            Put the potentially record low maximum sea ice extent tihs year down to low ice. According to the National
            Oceanic and Atmospheric Administration, Ted, Scambos.
          </p>
        </div>
      </div>
      <div className='flex flex-wrap mt-12 justify-center'>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-medal text-xl'></i>
          </div>
          <h6 className='text-xl mt-5 font-semibold text-white'>Excelent Services</h6>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-poll text-xl'></i>
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Grow your market</h5>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className='w-full lg:w-3/12 px-4 text-center'>
          <div className='text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center'>
            <i className='fas fa-lightbulb text-xl'></i>
          </div>
          <h5 className='text-xl mt-5 font-semibold text-white'>Launch time</h5>
          <p className='mt-2 mb-4 text-gray-500'>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id='contato' className='relative block py-24 lg:pt-0 bg-gray-900'>
    <div className='container mx-auto px-4'>
      <div className='flex flex-wrap justify-center lg:-mt-64 -mt-48'>
        <div className='w-full lg:w-6/12 px-4'>
          <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300'>
            <div className='flex-auto p-5 lg:p-10'>
              <h4 className='text-2xl font-semibold'>Want to work with us?</h4>
              <p className='leading-relaxed mt-1 mb-4 text-gray-600'>
                Complete this form and we will get back to you in 24 hours.
              </p>
              <div className='relative w-full mb-3 mt-8'>
                <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='full-name'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Full Name'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className='relative w-full mb-3'>
                <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input
                  type='email'
                  className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Email'
                  style={{ transition: 'all .15s ease' }}
                />
              </div>

              <div className='relative w-full mb-3'>
                <label className='block uppercase text-gray-700 text-xs font-bold mb-2' htmlFor='message'>
                  Message
                </label>
                <textarea
                  rows={4}
                  cols={80}
                  className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                  placeholder='Type a message...'
                />
              </div>
              <div className='text-center mt-6'>
                <button
                  className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                  type='button'
                  style={{ transition: 'all .15s ease' }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
