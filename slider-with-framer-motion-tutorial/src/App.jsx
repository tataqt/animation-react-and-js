import './App.css';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="App">
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {images.map((image, index) => <motion.div className='item' key={index}>
            <img src={image} alt='img' />
          </motion.div>)}
        </motion.div>
      </motion.div>
    </div >
  );
}

export default App;
