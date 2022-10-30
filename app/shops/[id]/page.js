import { supabase } from '../../../supabaseClient';
import { use } from 'react';

async function fetchShop(id) {
  try {
    const { data, error } = await supabase
      .from('Shop')
      .select()
      .filter('id', 'eq', id)
      .single();

    if (error) console.log(error);

    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
}
export default function ShopDetail({ params }) {
  let res = use(fetchShop(params.id));
  const shop = res.data;
  return (
    <div>
      <h3 className="text-3xl">{shop.title}</h3>
      <p className="mt-2">{shop.content}</p>
      <p className="mt-2">{shop.id}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from('Shop').select('*');

  return data.map((shop) => ({ id: shop.id }));
}
