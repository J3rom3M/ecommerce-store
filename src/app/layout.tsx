import "@/app/globals.css";
import Link from "next/link";
import { CartProvider } from "@/context/CartContext";
import CartButton from "@/components/CartButton";

export default function Layout({ children }: { children: React.ReactNode }) {
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

            <CartButton />
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