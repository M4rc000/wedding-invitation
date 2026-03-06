import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';

const Gift = () => {
  // Pisahkan state copy agar tiap tombol bekerja secara independen
  const [copiedBCA, setCopiedBCA] = useState(false);
  const [copiedMandiri, setCopiedMandiri] = useState(false);

  // Contoh nomor rekening (bisa disesuaikan)
  const rekBCA = "1234567890";
  const rekMandiri = "0987654321"; 

  const handleCopyBCA = () => {
    navigator.clipboard.writeText(rekBCA);
    setCopiedBCA(true);
    setTimeout(() => setCopiedBCA(false), 2000);
  };

  const handleCopyMandiri = () => {
    navigator.clipboard.writeText(rekMandiri);
    setCopiedMandiri(true);
    setTimeout(() => setCopiedMandiri(false), 2000);
  };

  // Varian animasi container agar konten muncul berurutan (Stagger)
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Varian animasi per elemen (Masuk dari bawah & Keluar saat di-scroll menjauh)
  const fadeUp = {
    hidden: { opacity: 0, y: 40, transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    // Background dibuat senada dengan tema putih
    <section className="py-24 px-6 bg-white text-center overflow-hidden">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        // Hapus 'once: true' agar animasi berulang saat di-scroll naik-turun
        viewport={{ amount: 0.2 }} 
        variants={staggerContainer}
        className="max-w-2xl mx-auto"
      >
        <motion.h2 variants={fadeUp} className="font-heading text-4xl text-dark mb-4 tracking-wide">
          Wedding Gift
        </motion.h2>
        
        <motion.p variants={fadeUp} className="font-body text-[12px] text-gray-500 mb-12 font-light leading-relaxed max-w-[320px] mx-auto">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </motion.p>

        <div className="flex flex-col gap-6 max-w-[340px] mx-auto">
          
          {/* Kartu BCA */}
          <motion.div variants={fadeUp} className="bg-[#FAF8F5] p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Aksen estetika di bagian atas kartu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>
            
            <h3 className="font-heading font-semibold text-2xl mb-2 text-dark">BCA</h3>
            <p className="font-body text-gray-700 text-lg mb-1 tracking-widest font-medium">{rekBCA}</p>
            <p className="font-body text-[11px] text-gray-400 uppercase tracking-widest mb-8">a.n Ben Arthur</p>
            
            <button 
              onClick={handleCopyBCA}
              className="w-full bg-primary text-white py-3 rounded-xl font-body text-sm flex justify-center items-center gap-2 hover:bg-[#8A6A4B] transition-all shadow-md"
            >
              {copiedBCA ? <FaCheck /> : <FaCopy />}
              {copiedBCA ? 'Berhasil Disalin!' : 'Salin No. Rekening'}
            </button>
          </motion.div>

          {/* Kartu Mandiri */}
          <motion.div variants={fadeUp} className="bg-[#FAF8F5] p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
            {/* Aksen estetika di bagian atas kartu */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>

            <h3 className="font-heading font-semibold text-2xl mb-2 text-dark">Mandiri</h3>
            <p className="font-body text-gray-700 text-lg mb-1 tracking-widest font-medium">{rekMandiri}</p>
            <p className="font-body text-[11px] text-gray-400 uppercase tracking-widest mb-8">a.n Hannah Putri</p>
            
            <button 
              onClick={handleCopyMandiri}
              className="w-full bg-primary text-white py-3 rounded-xl font-body text-sm flex justify-center items-center gap-2 hover:bg-[#8A6A4B] transition-all shadow-md"
            >
              {copiedMandiri ? <FaCheck /> : <FaCopy />}
              {copiedMandiri ? 'Berhasil Disalin!' : 'Salin No. Rekening'}
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Gift;