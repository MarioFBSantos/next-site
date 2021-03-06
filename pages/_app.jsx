import '../style/index.css';
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useRef } from 'react';

export default function MyApp({ Component, pageProps }) {
  return( 
  <AnimatePresence exitBeforeEnter>
   <Component {...pageProps} />
  </AnimatePresence>
  );
}

