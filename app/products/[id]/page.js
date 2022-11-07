import Link from 'next/link';
import { supabase } from '../../../supabaseClient';

export default async function ShopDetail({ params }) {
  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .filter('id', 'eq', params.id)
    .single();

  if (error) console.log(error);

  if (!product) {
    return <p>No product found</p>;
  }

  const { data: shop } = await supabase
    .from('Shop')
    .select('*')
    .filter('id', 'eq', product.shop)
    .single();

  return (
    <article>
      <h3 className="text-3xl">{product.title}</h3>
      <p className="mt-2 text-xs">{product.id}</p>
      <p className="mt-2">{product.content}</p>
      <p className="mt-2 text-2xl"> XOF {product.price}</p>

      <div className="mb-3 ">
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Buy
        </button>
      </div>
      <div className="mt-2 border-t ">
        <h3>Sold by:</h3>
        <Link href={`/shops/${product.shop}`}>
          <h3 className="text-lg">{shop.title}</h3>
          <p className="text-xs">{product.shop}</p>
        </Link>
      </div>
    </article>
  );
}
