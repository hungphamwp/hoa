import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-widest font-bold text-white">FLEUR</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Mang đến những thiết kế hoa độc đáo, tinh tế, truyền tải thông điệp yêu thương qua từng cánh hoa rực rỡ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Liên Kết Nhanh</h3>
            <ul className="space-y-4">
              {['Về chúng tôi', 'Cửa hàng', 'Câu hỏi thường gặp', 'Chính sách bảo mật', 'Điều khoản dịch vụ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Liên Hệ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-0.5 text-gray-500" />
                <span>123 Đường Nguyễn Văn Linh,<br />Quận 7, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0 text-gray-500" />
                <span>(028) 3812 3456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0 text-gray-500" />
                <span>contact@fleurboutique.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-medium uppercase tracking-wider mb-6 text-sm">Bản Tin</h3>
            <p className="text-sm text-gray-400 mb-4">
              Đăng ký để nhận ưu đãi đặc biệt và cập nhật bộ sưu tập mới nhất.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="w-full bg-transparent border-b border-gray-700 py-3 pr-10 text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Fleur Boutique. All rights reserved.</p>
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:text-white transition-colors">Visa</span>
            <span className="cursor-pointer hover:text-white transition-colors">Mastercard</span>
            <span className="cursor-pointer hover:text-white transition-colors">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
