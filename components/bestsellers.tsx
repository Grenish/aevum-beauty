"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useRef, useState } from "react";

export default function Bestsellers() {
  const products = [
    {
      name: "Aevum Beauty Lotion 200ml",
      image: "/body-lotion.jpg",
      price: "$20.0",
      slug: "body-lotion",
    },
    {
      name: "Aevum Beauty Lotion 100ml",
      image: "/body-lotion-100ml.jpg",
      price: "$25.0",
      slug: "aevum-beauty-lotion-100ml",
    },
    {
      name: "Aevum Beauty Liquid Blush",
      image: "/liquid-blush.jpg",
      price: "$15.0",
      slug: "aevum-beauty-liquid-blush",
    },
    {
      name: "Aevum Beauty Lip Gloss",
      image: "/lip-gloss.jpg",
      price: "$20.0",
      slug: "aevum-beauty-lip-gloss",
    },
    {
      name: "Aevum Beauty Lipstick",
      image: "/lipstick.jpg",
      price: "$20.0",
      slug: "aevum-beauty-lipstick-die-red",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [addedProducts, setAddedProducts] = useState<Record<string, boolean>>({});

  const handleAddToCart = (e: any, product: any) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Set this product as added
    setAddedProducts(prev => ({
      ...prev,
      [product.slug]: true
    }));
    
    // Reset after 2 seconds
    setTimeout(() => {
      setAddedProducts(prev => ({
        ...prev,
        [product.slug]: false
      }));
    }, 2000);
    
    // Here you would add logic to add the product to cart
    console.log(`Added ${product.name} to cart`);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="blackMango text-4xl md:text-5xl font-extrabold text-pink-900">
              Bestsellers
            </h2>
            <p className="text-lg text-pink-600 mt-3 max-w-xl">
              Our most loved products that customers can't get enough of
            </p>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 font-medium"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-pink-100 transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} className="text-pink-800" />
          </button>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto hide-scrollbar gap-6 py-4 px-1"
            style={{scrollBehavior: 'smooth', scrollSnapType: 'x mandatory'}}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 md:w-80 scroll-snap-align-start"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-pink-100">
                  <Link
                    href={`/products/${product.slug}`}
                    className="group relative block h-72 overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  
                  <div className="p-5 flex-grow">
                    <Link href={`/products/${product.slug}`} className="block group">
                      <h3 className="text-lg font-medium text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex justify-between items-center mt-3">
                      <p className="text-pink-600 font-semibold text-xl">
                        {product.price}
                      </p>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className={`${
                          addedProducts[product.slug] 
                            ? "bg-green-100 text-green-600" 
                            : "bg-pink-50 text-pink-600 hover:bg-pink-100"
                        } rounded-full p-2 transition-all duration-300`}
                        aria-label={addedProducts[product.slug] ? "Added to cart" : "Add to cart"}
                      >
                        {addedProducts[product.slug] ? <Check size={18} /> : <ShoppingBag size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className={`w-full py-3 ${
                      addedProducts[product.slug] 
                        ? "bg-green-600 hover:bg-green-700" 
                        : "bg-pink-600 hover:bg-pink-700"
                    } text-white font-medium flex items-center justify-center gap-2 transition-colors duration-300 mt-auto`}
                    disabled={addedProducts[product.slug]}
                  >
                    {addedProducts[product.slug] ? (
                      <>
                        <Check size={16} /> Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-pink-100 transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} className="text-pink-800" />
          </button>
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/products"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
          >
            View All Products
          </Link>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: Math.min(5, Math.ceil(products.length / 3)) }).map((_, i) => (
            <button 
              key={i}
              className="h-2 w-2 rounded-full bg-pink-200 hover:bg-pink-400 transition-colors"
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollLeft = i * scrollContainerRef.current.offsetWidth;
                }
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
