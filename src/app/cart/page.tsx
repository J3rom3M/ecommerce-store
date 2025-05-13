"use client"; // ✅ Ajout nécessaire pour rendre ce composant côté client

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  if (!cart.length) return <p>Votre panier est vide.</p>;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Votre Panier</h1>
      {cart.map((item) => (
        <div key={item.id} className="border p-4 flex justify-between items-center">
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>{item.price}€</p>
          </div>
          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
          >
            Supprimer
          </button>
        </div>
      ))}

      <button onClick={clearCart} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">
        Vider le panier
      </button>

      <Link href="/checkout">
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md">
          Commander
        </button>
      </Link>
    </div>
  );
}