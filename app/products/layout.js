import Link from 'next/link';
import { supabase } from '../../supabaseClient';

async function fetchProducts() {
  try {
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .order('title');

    if (error) console.log(error);

    if (!products) {
      return <p>No products found</p>;
    }
    return products;
  } catch (error) {
    console.log(error);
  }
}

export default async function Layout({ children }) {
  const products = await fetchProducts();

  return (
    <div className="flex">
      <div className="mr-6 w-1/4">
        <ul className="pr-10 flex-none">
          {products &&
            products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="hover:text-blue-500"
                >
                  {product.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="w-3/4">{children}</div>
    </div>
  );
}
