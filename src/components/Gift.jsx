import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCopy, FaCheck } from 'react-icons/fa';

const Gift = () => {
  const [copied, setCopied] = useState(false);
  const rekNumber = "1234567890";

  const handleCopy = () => {
    navigator.clipboard.writeText(rekNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-6 bg-[#FAF8F5] text-center">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl text-dark mb-6">Wedding Gift</h2>
        <p className="font-body text-sm text-gray-600 mb-10">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
        </p>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-sm mx-auto">
          <h3 className="font-heading font-semibold text-xl mb-2">BCA</h3>
          <p className="font-body text-gray-700 mb-1 tracking-widest">{rekNumber}</p>
          <p className="font-body text-sm text-gray-500 mb-6">a.n Ben Arthur</p>
          
          <button 
            onClick={handleCopy}
            className="w-full bg-primary text-white py-2 rounded-lg font-body text-sm flex justify-center items-center gap-2 hover:bg-opacity-90 transition-all"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Tersalin!' : 'Salin No. Rekening'}
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-sm mx-auto mt-5">
          <h3 className="font-heading font-semibold text-xl mb-2">Mandiri</h3>
          <p className="font-body text-gray-700 mb-1 tracking-widest">{rekNumber}</p>
          <p className="font-body text-sm text-gray-500 mb-6">a.n Jessica Jane</p>
          
          <button 
            onClick={handleCopy}
            className="w-full bg-primary text-white py-2 rounded-lg font-body text-sm flex justify-center items-center gap-2 hover:bg-opacity-90 transition-all"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? 'Tersalin!' : 'Salin No. Rekening'}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Gift;