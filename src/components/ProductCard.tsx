import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col bg-white"
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-gray-100 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black/90 hover:bg-black text-white py-3 px-4 flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-colors"
          >
            <ShoppingBag size={18} />
            THÊM VÀO GIỎ
          </button>
        </div>
      </div>

      <div className="flex flex-col text-center px-2">
        <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</span>
        <h3 className="text-base font-serif text-gray-900 mb-2 truncate" title={product.name}>
          {product.name}
        </h3>
        <span className="text-sm font-medium text-rose-600">{formatPrice(product.price)}</span>
      </div>
    </motion.div>
  );
};
