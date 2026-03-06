import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800",
    "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800",
  ];

  // Varian animasi untuk teks (Header)
  const fadeUp = {
    hidden: { opacity: 0, y: 30, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Varian animasi container agar foto muncul berurutan (Stagger)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Varian animasi per foto (Scale in dari bawah)
  const itemScale = {
    hidden: { opacity: 0, scale: 0.8, y: 30, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // Background dibuat warna krem muda agar kontras dengan section lain
    <section className="py-24 px-6 bg-[#FAF8F5] text-center overflow-hidden">
      
      {/* Header Galeri */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ amount: 0.3 }} 
        variants={fadeUp}
        className="mb-12"
      >
        <h2 className="font-heading text-4xl text-dark tracking-wide">Our Moments</h2>
        <p className="font-body text-[12px] text-gray-500 mt-3 font-light leading-relaxed max-w-[300px] mx-auto">
          Sebab segala sesuatu yang indah patut untuk diabadikan dan dikenang.
        </p>
      </motion.div>
      
      {/* Grid Galeri Asimetris */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ amount: 0.1 }} 
        variants={staggerContainer}
        className="grid grid-cols-2 gap-4 max-w-[380px] mx-auto"
      >
        {images.map((img, index) => {
          // Logika untuk membuat layout asimetris yang dinamis dan proporsional
          let gridClass = "";
          let heightClass = ""; 
          
          if (index === 0) {
            gridClass = "col-span-2"; // Foto pertama full width
            heightClass = "h-64 sm:h-72"; // Tinggi maksimal
          } else if (index === 1 || index === 2) {
            gridClass = "col-span-1"; // Foto 2 & 3 setengah width
            heightClass = "h-40 sm:h-48"; // Tinggi sedang
          } else if (index === 3) {
            gridClass = "col-span-2"; // Foto 4 full width kembali
            heightClass = "h-56 sm:h-64"; // Tinggi proporsional
          }

          return (
            <motion.div 
              key={index}
              variants={itemScale}
              // Overflow hidden penting agar saat img di-hover (zoom in), dia tidak keluar kotak
              className={`overflow-hidden rounded-3xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] relative group ${gridClass}`}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={img} 
                alt={`Moment ${index}`} 
                className={`w-full ${heightClass} object-cover cursor-pointer`} 
              />
              {/* Layer gelap tipis yang muncul saat foto disentuh/di-hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
};

export default Gallery;