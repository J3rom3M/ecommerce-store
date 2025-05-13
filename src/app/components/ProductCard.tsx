"use client"; // ✅ Ce composant doit être côté client

import { Product } from "@/types/Product";
import { useCart } from "@/context/CartContext"; // ✅ Import du contexte panier

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart(); // ✅ Fonction pour ajouter au panier

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition" />
      <h2 className="text-xl font-semibold mt-3 text-gray-800">{product.title}</h2>
      <p className="text-gray-700 mt-1 font-medium">{product.price}€</p>
      
      <button
        onClick={() => addToCart(product)} // ✅ Ajout du produit au panier
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 active:scale-95 transition-all"
      >
        Ajouter au panier
      </button>
    </div>
  );
}