import { motion } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';

const RsvpWishes = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerForm = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemField = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-6 bg-white text-center relative overflow-hidden">
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeUp} 
        viewport={{ amount: 0.2 }} 
        className="max-w-[380px] mx-auto"
      >
        <h2 className="font-heading text-4xl text-dark mb-3 tracking-wide">RSVP & Ucapan</h2>
        <p className="font-body text-[12px] text-gray-500 mb-10 font-light leading-relaxed px-4">
          Kehadiran dan doa restu Anda merupakan hadiah terindah bagi kami. Mohon konfirmasi kehadiran Anda melalui form di bawah ini.
        </p>
        
        {/* --- Form RSVP --- */}
        <motion.form 
          variants={staggerForm}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="bg-[#FAF8F5] p-6 md:p-8 rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] text-left mb-12 border border-gray-100"
        >
          <motion.div variants={itemField} className="mb-5">
            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 ml-1">Nama Anda</label>
            <input 
              type="text" 
              className="w-full bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-body text-sm text-gray-700 transition-all outline-none shadow-sm placeholder:text-gray-300" 
              placeholder="Tuliskan nama lengkap Anda..." 
            />
          </motion.div>

          <motion.div variants={itemField} className="mb-5">
            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 ml-1">Kehadiran</label>
            <div className="relative">
              <select 
                defaultValue=""
                className="w-full appearance-none bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 pr-10 font-body text-sm text-gray-700 transition-all outline-none shadow-sm cursor-pointer invalid:text-gray-300"
              >
                <option value="" disabled hidden>Apakah Anda akan hadir?</option>
                <option value="Hadir" className="text-gray-700">Ya, Saya Akan Hadir</option>
                <option value="Tidak Hadir" className="text-gray-700">Maaf, Tidak Bisa Hadir</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                <FaChevronDown size={14} />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemField} className="mb-8">
            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 ml-1">Pesan & Doa</label>
            <textarea 
              className="w-full bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-body text-sm text-gray-700 transition-all outline-none shadow-sm h-32 resize-none placeholder:text-gray-300" 
              placeholder="Berikan ucapan dan doa terbaik Anda untuk kedua mempelai..."
            ></textarea>
          </motion.div>

          <motion.button 
            variants={itemField}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button" 
            className="w-full bg-primary text-white font-body py-4 rounded-xl hover:bg-[#8A6A4B] transition-all shadow-md flex justify-center items-center gap-2 font-medium tracking-wide"
          >
            Kirim Ucapan
          </motion.button>
        </motion.form>

        {/* --- Daftar Ucapan --- */}
        <motion.div 
          variants={fadeUp}
          className="no-scrollbar bg-white rounded-3xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] h-[500px] overflow-y-auto text-left border border-gray-200 relative"
        >
          {/* Header List Ucapan */}
          {/* PERBAIKAN 2: Gunakan -top-[1px] dan beri padding px-6 di dalam header */}
          <div className="sticky -top-[1px] bg-white/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-gray-300 z-20 flex items-center shadow-sm justify-between rounded-t-3xl">
            <h3 className="font-heading text-lg text-dark">Pesan Termanis</h3>
            <span className="bg-primary/10 text-primary text-[10px] font-semibold px-3 py-1 rounded-full">2 Pesan</span>
          </div>

          {/* Wrapper untuk daftar pesan (Padding dipindah ke sini) */}
          <div className="px-6 pt-2 pb-6">
            <div className="mb-6">
              <h4 className="font-accent text-xl text-primary flex items-center gap-2">
                Keluarga Bapak Rudi 
              </h4>
              <p className="font-body text-[10px] text-gray-400 mb-2">Beberapa detik yang lalu</p>
              <p className="font-body text-sm text-gray-600 bg-[#FAF8F5] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-50">
                Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, dan warahmah. Tuhan memberkati selalu.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="font-accent text-xl text-primary flex items-center gap-2">
                Sarah Wijayanto 
              </h4>
              <p className="font-body text-[10px] text-gray-400 mb-2">2 jam yang lalu</p>
              <p className="font-body text-sm text-gray-600 bg-[#FAF8F5] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-50">
                Maaf banget belum bisa hadir karena ada dinas luar kota. Doa terbaik untuk kalian berdua ya, semoga acaranya lancar sampai hari H!
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-accent text-xl text-primary flex items-center gap-2">
                Budi Santoso 
              </h4>
              <p className="font-body text-[10px] text-gray-400 mb-2">5 jam yang lalu</p>
              <p className="font-body text-sm text-gray-600 bg-[#FAF8F5] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-50">
                Mantap! Akhirnya nikah juga bro. Sampai ketemu di lokasi ya!
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default RsvpWishes;