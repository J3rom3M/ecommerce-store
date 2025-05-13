"use client"; // ✅ Ajout obligatoire pour que le composant fonctionne côté client

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Paiement sécurisé</h1>
        <CheckoutForm /> {/* ✅ Ajout du formulaire de paiement */}
      </div>
    </Elements>
  );
}