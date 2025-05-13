"use client"; // ✅ Ce composant doit être client pour utiliser useCart()

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartButton() {
  const { cart } = useCart(); // ✅ Récupérer les articles du panier

  return (
    <Link href="/cart">
      <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
        🛒 Panier ({cart.length}) {/* ✅ Affiche le nombre d'articles */}
      </button>
    </Link>
  );
}