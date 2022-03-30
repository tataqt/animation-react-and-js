import { useState } from 'react';
import {
  motion,
  AnimatePresence
} from 'framer-motion'
import Modal from './Components/Modal';
import './App.css';

function App() {
  const [modalOpen, setmodalOpen] = useState(false);

  const close = () => setmodalOpen(false);
  const open = () => setmodalOpen(true);

  return (
    <div className="App" >
      <motion.button className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => (modalOpen ? close() : open())}>
        Launch modal
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} hanldeClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;