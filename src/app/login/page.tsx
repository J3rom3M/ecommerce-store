"use client"; // ✅ Ajout obligatoire pour un composant client

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Remplace `next/router`
import Link from "next/link";

export default function Login() {
  const router = useRouter(); // ✅ Remplace `useNavigation`
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulation d'authentification
    if (email === "test@example.com" && password === "123456") {
      alert("Connexion réussie !");
      router.push("/"); // ✅ Redirection après connexion
    } else {
      alert("Compte non trouvé. Redirection vers l'inscription.");
      router.push("/register"); // ✅ Redirection vers inscription
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 border rounded" />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Se connecter</button>
      </form>
      <p className="mt-4">Pas encore inscrit ? <Link href="/register" className="text-blue-500 underline">Créer un compte</Link></p>
    </div>
  );
}