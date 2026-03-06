import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HiMail } from 'react-icons/hi'; // Gunakan ikon surat tertutup agar lebih mirip gambar

const Cover = ({ onOpen }) => {
  const [guestName, setGuestName] = useState("Marco Antonio"); // Default name

  // Tangkap nama dari URL ?to=
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get('to');
    if (to) {
      // Mengubah '+' atau '%20' menjadi spasi otomatis oleh URLSearchParams
      setGuestName(to);
    }
  }, []);

  // Varian untuk kontainer (pembungkus teks) agar ada delay bertahap
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay 0.15 detik antar anak-anaknya
      },
    },
  };

  // Varian untuk setiap elemen teks agar muncul perlahan ke atas
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Mulai dari transparan dan agak di bawah
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }, // Selesai dalam 0.6 detik
    },
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070')" }} // Gunakan gambar prewed yang sama dengan desktop panel
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 text-center text-secondary px-4 lg:w-[420px]"
      >
        {/* 1. "THE WEDDING OF" */}
        <motion.p variants={itemVariants} className="font-heading text-xs lg:text-sm tracking-widest uppercase mb-4 text-white/90 font-medium">
          The Wedding Of
        </motion.p>

        {/* 2. Nama Pasangan */}
        <motion.h1 variants={itemVariants} className="font-accent text-6xl lg:text-7xl mb-6 text-primary drop-shadow-lg">
          Ben & Hannah
        </motion.h1>

        {/* 3. Tanggal */}
        <motion.p variants={itemVariants} className="font-heading text-lg lg:text-xl mb-10 text-white/90 font-medium tracking-wide">
          1 April 2026
        </motion.p>

        {/* 4. "Kepada Yth..." */}
        <motion.p variants={itemVariants} className="font-body text-xs lg:text-sm mb-4 text-white/90 font-light">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </motion.p>

        {/* 5. Nama Tamu */}
        <motion.h2 variants={itemVariants} className="font-heading text-2xl lg:text-3xl font-semibold mb-8 capitalize text-white drop-shadow-lg font-playfair">
          {guestName}
        </motion.h2>

        {/* 6. Tombol "Buka Undangan" */}
        <motion.button 
          onClick={onOpen}
          variants={itemVariants}
          className="relative group overflow-hidden bg-primary text-secondary px-8 py-3 rounded-full font-body text-sm tracking-wide mx-auto cursor-pointer block"
        >
          {/* Efek Hover */}
          <span className="absolute inset-y-0 left-0 w-0 bg-black/20 transition-all duration-500 ease-out group-hover:w-full"></span>
          
          {/* Konten Tombol (Teks & Ikon) */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <HiMail size={18} /> 
            <span>Buka Undangan</span>
          </span>
        </motion.button>

      </motion.div>
    </div>
  );
};

export default Cover;