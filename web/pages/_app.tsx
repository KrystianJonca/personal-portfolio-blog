import type { AppProps } from 'next/app';
import { Layout } from '../components';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <NextNProgress color="#ecf0f1" />
      <Layout>
        <motion.main
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: 'easeInOut' }}
          style={{ position: 'relative' }}
        >
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </motion.main>
      </Layout>
    </>
  );
}

export default App;
