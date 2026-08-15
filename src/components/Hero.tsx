import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-rose-50">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
        >
          Gửi trọn yêu thương
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
        >
          Ngôn Ngữ Của <br/> Những Đóa Hoa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light"
        >
          Khám phá những thiết kế hoa độc đáo, được tỉ mỉ tạo nên để đánh dấu những khoảnh khắc đáng nhớ nhất trong cuộc đời bạn.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-rose-50 transition-colors rounded-none font-medium tracking-wide uppercase text-sm">
            Mua sắm ngay
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white/10 transition-colors rounded-none font-medium tracking-wide uppercase text-sm">
            Xem bộ sưu tập
          </button>
        </motion.div>
      </div>
    </div>
  );
};
