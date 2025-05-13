"use client"; // ✅ Ajout obligatoire pour rendre le composant côté client

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment("YOUR_CLIENT_SECRET", {
      payment_method: {
        card: cardElement!,
      },
    });

    if (error) {
      setMessage(`Erreur: ${error.message}`);
    } else {
      setMessage(`Paiement réussi ! ID: ${paymentIntent?.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <CardElement className="border p-2 rounded-md" />
      <button type="submit" disabled={!stripe} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Payer
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </form>
  );
}