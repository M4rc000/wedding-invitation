import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const BrideGroom = () => {
  // 1. Varian Container untuk mengatur urutan munculnya teks (Stagger Effect)
  const staggerTextContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Jeda 0.3 detik antar kalimat
      }
    }
  };

  // 2. Varian animasi item teks (Masuk dari bawah & Keluar ke bawah)
  const textItem = {
    hidden: { opacity: 0, y: 30, transition: { duration: 0.5 } }, // Animasi keluar
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } // Animasi masuk
  };

  // Varian animasi masuk dari kiri untuk Groom
  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
  };

  // Varian animasi masuk dari kanan untuk Bride
  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
  };

  // Varian animasi pop-up memantul untuk '&'
  const springPop = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 120, damping: 10, delay: 0.6 } 
    }
  };

  return (
    <section className="py-5 px-6 bg-[#FAF8F5] text-center overflow-hidden relative">
      
      {/* --- Bagian Pembuka & Ayat Alkitab (Dianimasikan Bertahap & Berulang) --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={staggerTextContainer} 
        // Hapus 'once: true' agar animasi keluar (hidden) aktif saat di-scroll menjauh
        viewport={{ amount: 0.3 }} 
        className="relative z-10"
      >
        <motion.h2 variants={textItem} className="font-heading text-4xl text-dark mb-8 tracking-wide">
          Groom & Bride
        </motion.h2>
        
        <div className="max-w-[320px] mx-auto mb-16">
          <motion.p variants={textItem} className="font-heading italic text-[15px] leading-relaxed text-gray-600 mb-3">
            "Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia."
          </motion.p>
          
          <motion.p variants={textItem} className="font-body text-[10px] font-semibold text-primary tracking-widest uppercase mb-6">
            — Matius 19:6 —
          </motion.p>
          
          <motion.p variants={textItem} className="font-body text-[12px] leading-relaxed text-gray-500 font-light">
            Atas kasih karunia Tuhan, kami bermaksud mengikat janji suci pernikahan putra-putri kami:
          </motion.p>
        </div>
      </motion.div>

      {/* --- Bagian Profil Mempelai --- */}
      <div className="flex flex-row justify-between items-start max-w-[340px] mx-auto relative z-10">
        
        {/* Profil Groom */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={slideLeft} 
          // Hapus 'once: true' jika Anda ingin foto juga punya efek keluar/masuk saat di scroll
          viewport={{ amount: 0.2 }} 
          className="w-[45%] flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-2 bg-white rounded-t-full rounded-b-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] mb-5 cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" 
              alt="Groom" 
              className="w-full h-40 sm:h-[180px] object-cover rounded-t-full rounded-b-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
            />
          </motion.div>
          <h3 className="font-accent text-3xl sm:text-4xl text-primary mb-1">Ben</h3>
          <p className="font-body text-[9px] text-gray-400 uppercase tracking-widest mt-2 mb-1">Putra Pertama Dari</p>
          <p className="font-body text-xs text-gray-700 font-medium mb-4 leading-tight">Bpk. Arthur <br/> & Ibu Sarah</p>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="#" className="text-gray-300 transition-colors">
            <FaInstagram size={20} className='text-gray-500 hover:text-primary'/>
          </motion.a>
        </motion.div>

        {/* Simbol '&' Melayang di Tengah */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={springPop} 
          viewport={{ amount: 0.2 }} 
          className="absolute top-[80px] left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div 
             animate={{ rotate: [-5, 5, -5] }} 
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="bg-[#FAF8F5] rounded-full px-2"
          >
            <span className="font-accent text-5xl sm:text-6xl text-primary drop-shadow-md">
              &
            </span>
          </motion.div>
        </motion.div>

        {/* Profil Bride */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={slideRight} 
          viewport={{ amount: 0.2 }} 
          className="w-[45%] flex flex-col items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-2 bg-white rounded-t-full rounded-b-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] mb-5 cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800" 
              alt="Bride" 
              className="w-full h-40 sm:h-[180px] object-cover rounded-t-full rounded-b-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" 
            />
          </motion.div>
          <h3 className="font-accent text-3xl sm:text-4xl text-primary mb-1">Hannah</h3>
          <p className="font-body text-[9px] text-gray-400 uppercase tracking-widest mt-2 mb-1">Putri Kedua Dari</p>
          <p className="font-body text-xs text-gray-700 font-medium mb-4 leading-tight">Bpk. Wijaya <br/> & Ibu Lestari</p>
          <motion.a whileHover={{ y: -3, scale: 1.1 }} href="#" className="text-gray-300 transition-colors">
            <FaInstagram size={20} className='text-gray-500 hover:text-primary'/>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default BrideGroom;