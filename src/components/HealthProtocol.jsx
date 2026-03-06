import { motion } from 'framer-motion';
import { FaHandsWash, FaMask, FaPeopleArrows } from 'react-icons/fa';

const HealthProtocol = () => {
  const protocols = [
    { icon: <FaMask size={40} className="text-primary mb-4 mx-auto" />, title: "Gunakan Masker" },
    { icon: <FaHandsWash size={40} className="text-primary mb-4 mx-auto" />, title: "Cuci Tangan" },
    { icon: <FaPeopleArrows size={40} className="text-primary mb-4 mx-auto" />, title: "Jaga Jarak" },
  ];

  return (
    <section className="py-16 px-6 bg-dark text-secondary text-center">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h2 className="font-heading text-3xl mb-10">Protokol Kesehatan</h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-3xl mx-auto">
          {protocols.map((item, index) => (
            <div key={index} className="w-32">
              {item.icon}
              <p className="font-body text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HealthProtocol;