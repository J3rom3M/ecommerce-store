"use client";

import { Product } from "@/types/Product";
import Link from "next/link";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      {/* ✅ Ajout d'un lien autour de l'image */}
      <Link href={`/product/${product.id}`} as={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition cursor-pointer" />
      </Link>

      <h2 className="text-xl font-semibold mt-3 text-gray-800">{product.title}</h2>  

      <p className="text-gray-700 mt-1 font-medium">{product.price}€</p>
      
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 transition-all">
        Ajouter au panier
      </button>
    </div>
  );
}
