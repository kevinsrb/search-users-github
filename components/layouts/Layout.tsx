import { FC, useState } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
  title?: string;
  findUser?: Function;
}


const origin = (typeof window === 'undefined') ? '' : window.location.origin;


export const Layout: FC<Props> = ({ children, title, findUser }) => {



  return (
      <>
        <Head>
            <title>{ title || 'GitHub Searh App' }</title>
            <meta name="author" content="Kevin Rodriguez" />
            <meta name="description" content={`Información sobre el usuario ${ title }`} />
            <meta name="keywords" content={ `${ title }, github, search`} />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />

        </Head>
      
        <Navbar  
          findUser={findUser} 
        />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
      
      </>
  )
};
