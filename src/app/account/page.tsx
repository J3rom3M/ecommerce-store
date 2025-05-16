"use client";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Historique de vos commandes</h2>
      
      {orders.length > 0 ? (
        <ul className="space-y-2">
          {orders.map(order => (
            <li key={order.id} className="border p-4 rounded bg-white shadow">
              <p><strong>Commande #{order.id}</strong></p>
              <p>Date : {order.date}</p>
              <p>Total : {order.total}€</p>
              <p>Statut : <span className={`status ${order.status}`}>{order.status}</span></p> {/* ✅ Affichage du statut */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune commande trouvée.</p>
      )}
    </div>
  );
}