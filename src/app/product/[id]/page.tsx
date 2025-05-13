import { FC } from "react";

interface Props {
    params: { id: string };
}

const ProductPage: FC<Props> = async ({ params }) => {
    const { id } = await params; // S'assurer que params est bien résolu

    // 🔄 ✅ Récupérer le produit depuis une API ou base de données
try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) throw new Error(`Erreur ${res.status}: Échec de la requête`);

    const product = await res.json();

    if (!product || Object.keys(product).length === 0) {
        throw new Error("Produit introuvable ou réponse vide");
    }

    if (!product) {
        return <h1>Produit introuvable</h1>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition cursor-pointer" />
            <p>Prix : {product.price}€</p>
        </div>
    );  

    console.log("Produit récupéré :", product);
    } catch (error) {
        console.error("Erreur de récupération du produit :", error.message);
    }

};

export default ProductPage;