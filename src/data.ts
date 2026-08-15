import { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bó Hoa Hồng Đỏ Khổng Lồ',
    price: 1500000,
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Tình Yêu',
    description: 'Bó hoa hồng đỏ rực rỡ, biểu tượng của tình yêu mãnh liệt và vĩnh cửu.'
  },
  {
    id: '2',
    name: 'Bó Hoa Hướng Dương',
    price: 650000,
    image: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Chúc Mừng',
    description: 'Sắc vàng rực rỡ mang ý nghĩa về niềm tin và hy vọng, thích hợp tặng lễ tốt nghiệp, khai trương.'
  },
  {
    id: '3',
    name: 'Hoa Tulip Hà Lan',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Sinh Nhật',
    description: 'Hoa Tulip nhập khẩu tinh tế, mang vẻ đẹp sang trọng và thanh tao.'
  },
  {
    id: '4',
    name: 'Hộp Hoa Cẩm Chướng',
    price: 750000,
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Tặng Mẹ',
    description: 'Hộp hoa cẩm chướng hồng nhẹ nhàng, thể hiện lòng biết ơn sâu sắc đến đấng sinh thành.'
  },
  {
    id: '5',
    name: 'Lẵng Hoa Lan Hồ Điệp',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1554522971-ce4f20ec689a?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Sang Trọng',
    description: 'Lan hồ điệp trắng muốt, biểu tượng của sự sang trọng, phú quý và may mắn.'
  },
  {
    id: '6',
    name: 'Bó Hoa Cúc Họa Mi',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=1000&auto=format&fit=crop',
    category: 'Hoa Ngày Thường',
    description: 'Vẻ đẹp mộc mạc, giản dị nhưng không kém phần cuốn hút của mùa thu Hà Nội.'
  }
];

export const categories = [
  'Tất cả',
  'Hoa Tình Yêu',
  'Hoa Chúc Mừng',
  'Hoa Sinh Nhật',
  'Hoa Tặng Mẹ',
  'Hoa Sang Trọng',
  'Hoa Ngày Thường'
];
