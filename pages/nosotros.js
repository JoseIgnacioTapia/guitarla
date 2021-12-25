import Head from 'next/head';
import Link from 'next/link';

const Nosotros = () => {
  return (
    <div>
      <Head>
        <title>GuitarLA - Nosotros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Desde Nosotros</h1>
      <Link href="/">Ir a Inicio</Link>
    </div>
  );
};

export default Nosotros;