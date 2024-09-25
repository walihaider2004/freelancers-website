import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FiHeart } from 'react-icons/fi'; // Heart icon
import { BsStarFill } from 'react-icons/bs'; // Star icon

const products = [
  {
    id: 1,
    category: "Human Resources",
    title: "I will create short facebook video ads or instagram ads",
    price: "$199",
    deliveryTime: "3 days",
    rating: 4.5,
    reviews: 1,
    user: {
      name: "Lucy Haley",
      avatar: "https://via.placeholder.com/50", // Add the correct avatar image link
    },
    featured: true,
    image: "https://via.placeholder.com/300", // Add the correct product image link
  },
  {
    id: 2,
    category: "Human Resources",
    title: "I will create short facebook video ads or instagram ads",
    price: "$199",
    deliveryTime: "3 days",
    rating: 4.5,
    reviews: 1,
    user: {
      name: "Lucy Haley",
      avatar: "https://via.placeholder.com/50", // Add the correct avatar image link
    },
    featured: true,
    image: "https://via.placeholder.com/300", // Add the correct product image link
  },
  {
    id: 3,
    category: "Human Resources",
    title: "I will create short facebook video ads or instagram ads",
    price: "$199",
    deliveryTime: "3 days",
    rating: 4.5,
    reviews: 1,
    user: {
      name: "Lucy Haley",
      avatar: "https://via.placeholder.com/50", // Add the correct avatar image link
    },
    featured: true,
    image: "https://via.placeholder.com/300", // Add the correct product image link
  },
  // Add more product items if needed
];

const ProductCard = ({ product }) => {
  return (
    <div
      className="border rounded-lg shadow-md mb-10 mt-10 w-full sm:w-72 lg:w-80 relative border-yellow-400 cursor-pointer"
      data-aos="fade-up" // AOS animation
      data-aos-delay="100"
    >
      {/* Featured Label */}
      {product.featured && (
        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-sm px-2 py-1 rounded">
          Featured
        </div>
      )}
      {/* Heart Icon */}
      <div className="absolute top-2 right-2">
        <FiHeart className="w-6 h-6 text-gray-400 cursor-pointer hover:text-red-500" />
      </div>
      {/* Product Image */}
      <img src={product.image} alt="Product" className="w-full h-40 object-cover rounded-lg" />
      {/* Product Info */}
      <div className="mt-3 p-4">
        <p className="text-sm text-black">{product.category}</p>
        <h2 className="font-semibold text-lg mt-1">{product.title}</h2>
        <p className="text-sm text-black mt-2">From {product.price}</p>
      </div>
      {/* User Info */}
      <div className="flex items-center mt-3 p-4">
        <img src={product.user.avatar} alt={product.user.name} className="w-8 h-8 rounded-full" />
        <p className="ml-2 text-blue-500 cursor-pointer">{product.user.name}</p>
      </div>
      <hr />
      {/* Rating and Delivery */}
      <div className="flex items-center justify-between mt-3 text-sm p-4">
        <div className="flex items-center">
          <BsStarFill className="w-5 h-5 text-yellow-500" />
          <span className="ml-1">{product.rating} ({product.reviews})</span>
        </div>
        <p>{product.deliveryTime} delivery</p>
      </div>
    </div>
  );
};

// Import AOS and the ProductList component

const ProductList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1-second animation duration
  }, []);

  return (
    <>

      <div className="mt-10 ml-4 md:ml-10 lg:ml-20">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
          Trending Services
        </h1>
        <h1 className="mt-2 text-lg sm:text-xl lg:text-2xl">
          Explore the best services that suit you
        </h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-20 px-10 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <button className="h-10 mb-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2] mt-10 mx-auto block">
        Explore All Services
      </button>
    </>
  );
};

export default ProductList;
