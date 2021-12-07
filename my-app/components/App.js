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

  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {comps[currentIndex]}
    </div>
  );
}

export default App;