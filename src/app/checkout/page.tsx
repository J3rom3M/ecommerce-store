"use client"; // ✅ Ajout nécessaire pour le rendre côté client

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function CheckoutPage() {
  const { cart } = useCart(); // ✅ Récupérer les produits du panier

  if (!cart.length) return <p>Votre panier est vide. Ajoutez des produits avant de payer.</p>;

  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Paiement sécurisé</h1>

        {/* ✅ Affichage du récapitulatif des produits avant paiement */}
        <div className="border p-4 rounded-md mb-4 bg-gray-50">
          <h2 className="font-semibold text-lg mb-2">Résumé du panier</h2>
          {cart.map((item) => (
            <div key={item.id} className="border-b py-2 flex justify-between">
              <span>{item.title}</span>
              <span>{item.price}€</span>
            </div>
          ))}
        </div>

        <CheckoutForm />
      </div>
    </Elements>
  );
}