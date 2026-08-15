import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { products, categories } from './data';
import { Product, CartItem } from './types';
import { motion } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = activeCategory === 'Tất cả'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 selection:bg-rose-200 selection:text-rose-900">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-grow">
        <Hero />

        {/* Featured Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-4"
            >
              Bộ Sưu Tập Mới Nhất
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 max-w-2xl mx-auto"
            >
              Từng đóa hoa được tuyển chọn kỹ lưỡng, kết hợp hài hòa để tạo nên những tác phẩm nghệ thuật đong đầy cảm xúc.
            </motion.p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-rose-900 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-900 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              Không tìm thấy sản phẩm nào trong danh mục này.
            </div>
          )}
        </section>

        {/* Features Banner */}
        <section className="bg-rose-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-rose-800/50">
            <div className="p-4">
              <h3 className="text-lg font-serif mb-2">Giao Hàng Hỏa Tốc</h3>
              <p className="text-rose-200 text-sm">Nhận hoa tươi trong vòng 2 giờ tại nội thành.</p>
            </div>
            <div className="p-4 pt-8 md:pt-4">
              <h3 className="text-lg font-serif mb-2">Cam Kết Tươi Mới</h3>
              <p className="text-rose-200 text-sm">Hoa được nhập mới mỗi ngày từ Đà Lạt & nhập khẩu.</p>
            </div>
            <div className="p-4 pt-8 md:pt-4">
              <h3 className="text-lg font-serif mb-2">Thiết Kế Độc Bản</h3>
              <p className="text-rose-200 text-sm">Mỗi bó hoa là một tác phẩm nghệ thuật riêng biệt.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
