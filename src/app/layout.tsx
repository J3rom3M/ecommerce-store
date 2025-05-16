"use client"; // ✅ Ajout de cette directive en haut du fichier

import "@/app/globals.css";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";
import CartButton from "@/components/CartButton";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    // 🔄 Vérifier la session utilisateur (exemple avec localStorage)
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user); // Convertir en booléen
  }, []);

  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <CartProvider>
          <header className="p-4 bg-blue-500 text-white flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* ✅ Logo cliquable */}
              <Link href="/">
                <img src="/logo.webp" alt="Logo Boutique" className="h-10 cursor-pointer hover:opacity-80 transition" />
              </Link>

              <Link href="/">
                {/* ✅ Titre à droite du logo */}
                <h1 className="text-xl font-bold">Bienvenue sur JM Store</h1>
              </Link>
            </div>

          <div className="flex items-center gap-4">
            {isLoggedIn && (
              <Link href="/account">
                <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition">
                  Mon compte
                </button>
              </Link>
            )}

              {isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(false)} className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700 transition">
                  Déconnexion
                </button>
              ) : (
                <Link href="/login">
                  <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition">
                    Connexion
                  </button>
                </Link>
              )}

              <CartButton />
            </div>
          </header>

          <main className="p-6">{children}</main>

          <footer className="p-4 text-center bg-gray-800 text-white">
            © 2025 - JM - Tous droits réservés
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}