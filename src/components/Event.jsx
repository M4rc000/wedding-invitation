import { motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { FaMapMarkerAlt, FaCalendarAlt, FaRegCalendarPlus, FaClock } from 'react-icons/fa';

const Event = () => {
  // Tanggal acara untuk Countdown
  const targetDate = new Date("2026-04-01T08:00:00");

  // Varian animasi masuk dari bawah
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Varian animasi bertahap untuk kotak countdown
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  // Link Otomatis ke Google Calendar (Format Waktu GMT/UTC)
  const googleCalendarLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pemberkatan+%26+Resepsi+Ben+%26+Hannah&details=Kehadiran+dan+doa+restu+Bapak%2FIbu%2FSaudara%2Fi+sangat+berarti+bagi+kami.&dates=20260401T010000Z/20260401T060000Z";

  // Desain kustom untuk elemen Countdown
  const renderer = ({ days, hours, minutes, seconds }) => {
    const timeUnits = [
      { value: days, label: 'Hari' },
      { value: hours, label: 'Jam' },
      { value: minutes, label: 'Menit' },
      { value: seconds, label: 'Detik' }
    ];

    return (
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="flex justify-center gap-3 md:gap-4 mb-16"
      >
        {timeUnits.map((unit, index) => (
          <motion.div 
            key={index} 
            variants={scaleIn} 
            className="bg-white/70 backdrop-blur-sm border border-primary/10 p-4 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] rounded-2xl min-w-[70px] flex flex-col items-center justify-center"
          >
            <span className="font-accent text-4xl text-primary mb-1">{unit.value}</span>
            <span className="text-[9px] font-body text-gray-400 uppercase tracking-widest">{unit.label}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    // Menggunakan background putih bersih agar kontras dengan section BrideGroom sebelumnya
    <section className="py-20 px-6 bg-white text-center relative overflow-hidden">
      
      {/* --- Judul & Countdown --- */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        variants={fadeUp} 
        viewport={{ amount: 0.3 }}
      >
        <h2 className="font-heading text-4xl text-dark mb-10 tracking-wide">Save The Date</h2>
      </motion.div>
      
      <Countdown date={targetDate} renderer={renderer} />

      {/* --- Detail Acara (Vertikal Layout untuk 420px) --- */}
      <div className="flex flex-col gap-10 max-w-[340px] mx-auto">
        
        {/* Kartu 1: Pemberkatan */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeUp} 
          viewport={{ amount: 0.2 }} 
          className="bg-[#FAF8F5] p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden"
        >
          {/* Aksen garis estetik di atas kartu */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>
          
          <h3 className="font-accent text-4xl text-dark mb-6 mt-2">Pemberkatan</h3>
          
          <div className="flex flex-col gap-3 w-full mb-8">
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaCalendarAlt className="text-primary text-lg flex-shrink-0" />
              <span className="text-left">Minggu, 1 April 2026</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaClock className="text-primary text-lg flex-shrink-0" />
              <span className="text-left">08.00 WIB - Selesai</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-primary text-lg flex-shrink-0" />
              <span className="text-left"><strong>Gereja Katedral Jakarta</strong><br/><span className="text-[11px] text-gray-400">Jl. Katedral No.7B, Jakarta</span></span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="w-full bg-primary text-white py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md">
              <FaMapMarkerAlt /> Buka Google Maps
            </a>
            <a href={googleCalendarLink} target="_blank" rel="noreferrer" className="w-full bg-white text-primary border border-primary py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 hover:bg-[#FAF8F5] transition-all">
              <FaRegCalendarPlus /> Simpan ke Kalender
            </a>
          </div>
        </motion.div>

        {/* Kartu 2: Resepsi */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={fadeUp} 
          viewport={{ amount: 0.2 }} 
          className="bg-[#FAF8F5] p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/40"></div>
          
          <h3 className="font-accent text-4xl text-dark mb-6 mt-2">Resepsi</h3>
          
          <div className="flex flex-col gap-3 w-full mb-8">
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaCalendarAlt className="text-primary text-lg flex-shrink-0" />
              <span className="text-left">Minggu, 1 April 2026</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaClock className="text-primary text-lg flex-shrink-0" />
              <span className="text-left">11.00 WIB - 13.00 WIB</span>
            </div>
            <div className="flex items-center gap-4 text-gray-600 font-body text-sm bg-white p-3 rounded-xl shadow-sm">
              <FaMapMarkerAlt className="text-primary text-lg flex-shrink-0" />
              <span className="text-left"><strong>Grand Ballroom Hotel</strong><br/><span className="text-[11px] text-gray-400">Jl. MH Thamrin No. 10, Jakarta</span></span>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <a href="https://maps.app.goo.gl/" target="_blank" rel="noreferrer" className="w-full bg-primary text-white py-3 rounded-xl font-body text-sm flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md">
              <FaMapMarkerAlt /> Buka Google Maps
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Event;