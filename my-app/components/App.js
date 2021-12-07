import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Allan from './Allan';
import Anti from './Anti';
import Kaur from './Kaur';
import Kurmo from './Kurmo';
import Margus from './Margus';
import Rene from './Rene';

const comps = [<Margus />, <Anti />, <Allan />, <Rene />, <Kurmo />, <Kaur />];

const randIdx = Math.floor(Math.random() * comps.length);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(randIdx);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex(p => p > comps.length - 1 ? 0 : p += 1), 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {comps[currentIndex]}
    </>
  );
}

export default App;