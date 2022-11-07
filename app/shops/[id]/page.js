import Link from 'next/link';
import { supabase } from '../../../supabaseClient';

export default async function ShopDetail({ params }) {
  const { data: shop, error } = await supabase
    .from('Shop')
    .select('*')
    .filter('id', 'eq', params.id)
    .single();

  if (error) console.log(error);

  if (!shop) {
    return <p>No shop found</p>;
  }

  return (
    <article>
      <h3 className="text-3xl">{shop.title}</h3>
      <p className="mt-2">{shop.content}</p>
      <p className="mt-2">{shop.id}</p>
      <div>
        <h3>Sold by:</h3>
        <Link href={`/shops/${shop.shop}`}>
          <h3 className="text-lg">{shop.title}</h3>
          <p className="text-sm">{shop.shop}</p>
        </Link>
      </div>
    </article>
  );
}
