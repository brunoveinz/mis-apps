import React from 'react';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Aquí puedes modificar el contenido del encabezado */}
        <title>Politicas de seguridad para mi App</title>
        <meta name="description" content="Politicas de seguridad" />
        {/* Otros elementos de encabezado */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}