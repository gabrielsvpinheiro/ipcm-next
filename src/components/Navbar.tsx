import React, { ReactElement, useState } from 'react';

interface Props {
  transparent?: boolean;
}

function Navbar(props: Props): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav
      className={
        (props.transparent ? 'top-0 absolute z-50 w-full' : 'relative bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a href='/' className='flex items-center'>
            <img src='/img/logo_branca.svg' className='h-10' alt='IPCM' />
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              className={`${props.transparent ? 'text-white' : 'text-gray-800'} w-6 h-6 `}
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none mr-auto'>
            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='/'
              >
                IPCM PESQUISAS
              </a>
            </li>
          </ul>
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#o_que_fazemos'
              >
                <span className='inline-block ml-2'>O que Fazemos</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#quem_somos'
              >
                <span className='inline-block ml-2'>Quem Somos</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#como_fazemos'
              >
                <span className='inline-block ml-2'>Como Fazemos</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#nossos_objetivos'
              >
                <span className='inline-block ml-2'>Nossos Objetivos</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#nossos_servicos'
              >
                <span className='inline-block ml-2'>Nossos Serviços</span>
              </a>
            </li>

            <li className='flex items-center'>
              <a
                className={
                  (props.transparent
                    ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                    : 'text-gray-800 hover:text-gray-600') +
                  ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                }
                href='#contato'
              >
                <span className='inline-block ml-2'>Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
