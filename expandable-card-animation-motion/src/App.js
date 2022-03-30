import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <motion.div
        transition={{ layout: { duration: 0.5, type: 'spring' } }}
        layout
        onClick={() => setIsOpen((prevstate) => !prevstate)}
        className='card'
        style={{ borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)' }}
      >
        <motion.h2 layout="position">Framer motion 🚀</motion.h2>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='expand'
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi officia voluptatibus libero neque officiis consequatur impedit eveniet nisi quos!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, beatae.</p>
            <button>Read more</button>
          </motion.div>
        )
        }
      </motion.div>
    </div>
  );
}

export default App;
