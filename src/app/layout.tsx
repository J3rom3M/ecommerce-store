import "@/app/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100">
        <header className="p-4 bg-blue-500 text-white text-center">
          <h1>Ma Boutique en ligne</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="p-4 text-center bg-gray-800 text-white">
          © 2025 - JM - Tous droits réservés
        </footer>
      </body>
    </html>
  );
}