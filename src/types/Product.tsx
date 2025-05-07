interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
  
  export default async function Page() {
    const products: Product[] = await getProducts();
  
    return (
      <div className="grid grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div key={product.id} className="border p-4">
            <h2>{product.title}</h2>
            <p>{product.price}€</p>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          </div>
        ))}
      </div>
    );
  }