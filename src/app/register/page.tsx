export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      <form action="/api/auth/register" method="POST" className="space-y-4">
        <input type="email" placeholder="Email" name="email" required className="w-full p-2 border rounded" />
        <input type="password" placeholder="Mot de passe" name="password" required className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">S'inscrire</button>
      </form>
    </div>
  );
}