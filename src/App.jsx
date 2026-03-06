import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaCompactDisc, FaPause } from 'react-icons/fa'; // Icon untuk tombol musik

// Import Komponen
import Cover from './components/Cover';
import BrideGroom from './components/BrideGroom';
import Event from './components/Event';
import Gallery from './components/Gallery';
import HealthProtocol from './components/HealthProtocol';
import Gift from './components/Gift';
import RsvpWishes from './components/RsvpWishes';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State untuk status musik
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    
    // Memutar musik saat tombol ditekan
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio autoplay diblokir browser:", err));
    }
  };

  // Fungsi untuk pause/play musik melalui tombol melayang
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <main className="h-screen w-full flex bg-dark font-body overflow-hidden relative">
      
      {/* 1. BAGIAN DESKTOP STATIS (Kiri) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hidden lg:flex flex-1 h-screen bg-cover bg-center items-center justify-center relative"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative z-10 text-center text-white px-8"
        >
          <p className="tracking-widest uppercase mb-4 text-sm font-light">The Wedding Of</p>
          <h1 className="font-accent text-7xl text-primary mb-4 drop-shadow-lg">Ben & Hannah</h1>
          <p className="text-lg font-light">1 April 2026</p>
        </motion.div>
      </motion.div>

      {/* 2. BAGIAN UNDANGAN (Kanan / Mobile) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-[420px] h-screen bg-secondary shadow-[-10px_0_20px_rgba(0,0,0,0.15)] relative overflow-x-hidden overflow-y-auto flex-shrink-0 mx-auto lg:mx-0"
      >
        
        {/* Audio Element: Arahkan ke folder public/songs/bg-sound.mp3 */}
        <audio ref={audioRef} loop src="/songs/bg-sound.mp3" preload="auto" />

        <AnimatePresence>
          {!isOpened && (
            <motion.div
              key="cover"
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className="absolute inset-0 z-50 bg-secondary"
            >
              <Cover onOpen={handleOpenInvitation} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Konten Utama */}
        <div className={`${isOpened ? 'h-auto' : 'h-0 overflow-hidden'} relative`}>
          <BrideGroom />
          <Event />
          <Gallery />
          <HealthProtocol />
          <Gift />
          <RsvpWishes />
          
          {/* --- Footer Penutup --- */}
          <motion.footer 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
            className="py-20 bg-dark text-center text-secondary flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

            <p className="font-body text-xs tracking-[0.3em] text-gray-400 uppercase mb-4">Terima Kasih</p>
            <h2 className="font-accent text-5xl md:text-6xl text-primary drop-shadow-md mb-6">Ben & Hannah</h2>
            
            <div className="flex items-center gap-3 mb-8 opacity-70">
              <div className="w-10 h-[1px] bg-primary/50"></div>
              <div className="w-2 h-2 rotate-45 bg-primary"></div>
              <div className="w-10 h-[1px] bg-primary/50"></div>
            </div>

            <p className="font-body text-[11px] text-gray-400 leading-relaxed max-w-[280px] mx-auto font-light mb-16">
              Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
            </p>

            <div className="text-[9px] text-gray-500 font-light tracking-widest uppercase">
              <p className="mb-2">© 2026 Ben & Hannah. All Rights Reserved.</p>
              <p>
                Created with ♥ by <a href="#" className="text-primary hover:text-white transition-colors font-medium">Love</a>
              </p>
            </div>
          </motion.footer>

        </div>
        
        {/* --- Floating Music Button (Hanya Muncul Setelah Undangan Dibuka) --- */}
        {isOpened && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[99] w-12 h-12 bg-white/95 backdrop-blur-md border border-gray-200 text-primary rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer"
          >
            {/* Animasi memutar piringan hitam jika lagu sedang play */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              {isPlaying ? <FaCompactDisc size={22} /> : <FaPause size={18} />}
            </motion.div>
          </motion.button>
        )}

      </motion.div>
    </main>
  );
}

export default App; 