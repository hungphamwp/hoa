import React from 'react';
import { ShoppingBag, Menu, Search, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-gray-800 lg:text-white'}`}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <a
                href="#"
                className={`text-2xl font-serif tracking-widest font-bold ${
                  isScrolled ? 'text-rose-600' : 'text-gray-900'
                }`}
              >
                FLEUR
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Trang chủ', 'Sản phẩm', 'Chủ đề', 'Giới thiệu', 'Liên hệ'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-rose-500 ${
                    isScrolled ? 'text-gray-600' : 'text-gray-800'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button className={`p-2 hidden md:block transition-colors hover:text-rose-500 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                <Search size={20} />
              </button>
              <button className={`p-2 hidden md:block transition-colors hover:text-rose-500 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                <Heart size={20} />
              </button>
              <button
                onClick={onCartClick}
                className={`relative p-2 transition-colors hover:text-rose-500 ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-rose-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-64 bg-white z-50 md:hidden shadow-xl"
            >
              <div className="p-4 flex justify-between items-center border-b">
                <span className="text-xl font-serif font-bold text-rose-600">FLEUR</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-gray-500 hover:text-gray-800">
                  <X size={20} />
                </button>
              </div>
              <div className="py-4 flex flex-col space-y-2">
                {['Trang chủ', 'Sản phẩm', 'Chủ đề', 'Giới thiệu', 'Liên hệ'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
