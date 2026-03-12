import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Import koneksi database yang kita buat

const RsvpWishes = () => {
  // State untuk menyimpan inputan form
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('');
  const [message, setMessage] = useState('');
  
  // State untuk menyimpan daftar ucapan dari database
  const [wishes, setWishes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fungsi untuk mengambil data dari Firebase secara Real-Time
  useEffect(() => {
    const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const wishesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setWishes(wishesData);
    });

    // Cleanup listener saat komponen di-unmount
    return () => unsubscribe();
  }, []);

  // Fungsi saat tombol Kirim ditekan
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah halaman reload
    
    if (!name || !attendance || !message) {
      alert("Mohon isi semua kolom yang tersedia ya.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Menyimpan data ke Firebase Firestore
      await addDoc(collection(db, "wishes"), {
        name: name,
        attendance: attendance,
        message: message,
        createdAt: serverTimestamp()
      });
      
      // Kosongkan form setelah berhasil dikirim
      setName('');
      setAttendance('');
      setMessage('');
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Gagal mengirim ucapan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Varian Animasi
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
          onSubmit={handleSubmit}
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-body text-sm text-gray-700 transition-all outline-none shadow-sm placeholder:text-gray-300" 
              placeholder="Tuliskan nama lengkap Anda..." 
            />
          </motion.div>

          <motion.div variants={itemField} className="mb-5">
            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-2 ml-1">Kehadiran</label>
            <div className="relative">
              <select 
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                className={`w-full appearance-none bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 pr-10 font-body text-sm transition-all outline-none shadow-sm cursor-pointer ${attendance === "" ? "text-gray-300" : "text-gray-700"}`}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-xl p-4 font-body text-sm text-gray-700 transition-all outline-none shadow-sm h-32 resize-none placeholder:text-gray-300" 
              placeholder="Berikan ucapan dan doa terbaik Anda untuk kedua mempelai..."
            ></textarea>
          </motion.div>

          <motion.button 
            variants={itemField}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-body py-4 rounded-xl hover:bg-[#8A6A4B] transition-all shadow-md flex justify-center items-center gap-2 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </motion.button>
        </motion.form>

        {/* --- Daftar Ucapan --- */}
        <motion.div 
          variants={fadeUp}
          className="no-scrollbar bg-white rounded-3xl shadow-[inset_0_2px_15px_rgba(0,0,0,0.03)] h-[500px] overflow-y-auto text-left border border-gray-200 relative"
        >
          {/* Header List Ucapan */}
          <div className="sticky -top-[1px] bg-white/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-gray-300 z-20 flex items-center shadow-sm justify-between rounded-t-3xl">
            <h3 className="font-heading text-lg text-dark">Pesan Termanis</h3>
            <span className="bg-primary/10 text-primary text-[10px] font-semibold px-3 py-1 rounded-full">
              {wishes.length} Pesan
            </span>
          </div>

          {/* Wrapper untuk daftar pesan */}
          <div className="px-6 pt-4 pb-6">
            {wishes.length === 0 ? (
              <p className="text-center font-body text-xs text-gray-400 py-10">Belum ada ucapan. Jadilah yang pertama!</p>
            ) : (
              wishes.map((wish) => (
                <div key={wish.id} className="mb-6">
                  <h4 className="font-accent text-xl text-primary flex items-center gap-2">
                    {wish.name}
                    {/* Kondisi untuk Icon/Badge Kehadiran */}
                    {wish.attendance === "Hadir" ? (
                      <FaCheckCircle className="text-green-500 text-[12px]" title="Hadir"/>
                    ) : (
                      <span className="text-red-400 text-[10px] font-body font-semibold border border-red-200 px-2 py-0.5 rounded-full ml-1">Absen</span>
                    )}
                  </h4>
                  <p className="font-body text-[10px] text-gray-400 mb-2">
                    {/* Mengubah format waktu serverTimestamp ke format lokal */}
                    {wish.createdAt ? wish.createdAt.toDate().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) : 'Baru saja'}
                  </p>
                  <p className="font-body text-sm text-gray-600 bg-[#FAF8F5] p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-sm border border-gray-50 break-words">
                    {wish.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default RsvpWishes;