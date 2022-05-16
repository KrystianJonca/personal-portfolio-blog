import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Krystian Jonca | Passionate Web Developer</title>
        <meta
          name="description"
          content="Eighteen years old passionate and enthusiastic programmer, based in Poland, who has worked with multiple modern front-end as well as full-stack technologies. Writing quality JavaScript code for 4+ years."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Hello app!</main>
    </>
  );
};

export default Home;
