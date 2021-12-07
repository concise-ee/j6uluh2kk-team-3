import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Allan from './Allan';
import Anti from './Anti';
import Kaur from './Kaur';
import Kurmo from './Kurmo';
import Margus from './Margus';
import Rene from './Rene';

const comps = [<Margus />, <Anti />, <Allan />, <Rene />, <Kurmo />, <Kaur />];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoop, setIsLoop] = useState(true);

  useEffect(() => {
    if (isLoop) {
      const interval = setInterval(() => setCurrentIndex(p => p >= comps.length - 1 ? 0 : p += 1), 10000);
      return () => clearInterval(interval);
    }
  }, [isLoop]);

  const setPrev = () => {
    setIsLoop(false);
    setCurrentIndex((p) => p === 0 ? comps.length - 1 : p - 1)
  };
  const setNext = () => {
    setIsLoop(false);
    setCurrentIndex((p) => p >= comps.length - 1 ? 0 : p += 1);
  }
  const setLoop = () => setIsLoop((p) => !p);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {comps[currentIndex]}

      <div style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100vw',
        height: '75px',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        pointerEvents: 'none',
      }}>
        <button type="button" style={{ ...btnStyles, }} onClick={setPrev}>
          EELMINE
        </button>
        <button type="button" style={{ ...btnStyles, backgroundColor: isLoop ? 'lightgreen' : '#FFF' }} onClick={setLoop}>
          LOOP
        </button>
        <button type="button" style={{ ...btnStyles, }} onClick={setNext}>
          JÄRGMINE
        </button>
      </div>
    </div>
  );
}

const btnStyles = {
  pointerEvents: 'all',
  border: 'none',
  background: 'none',
  backgroundColor: '#FFF',
  padding: '0.5rem 1rem',
  border: '1px solid #000',
  boxShadow: 'none'
}

export default App;