import Head from 'next/head';
import { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  title?: string;
  transparent?: boolean;
}

const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='ICONE-32x32-1.png' type='image/x-icon' />
        <link rel='apple-touch-icon' href='ICONE-180x180-1.png' />
      </Head>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
