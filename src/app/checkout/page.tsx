import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY!);

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Paiement sécurisé</h1>
        {/* Formulaire de paiement ici */}
      </div>
    </Elements>
  );
}