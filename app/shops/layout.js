import Link from 'next/link';

import { supabase } from '../../supabaseClient';

export default async function Layout({ children }) {
  const { data: shops, error } = await supabase
    .from('Shop')
    .select('*')
    .order('title');

  if (error) console.log(error);

  if (!shops) {
    return <p>No shops found</p>;
  }

  return (
    <div className="flex">
      <div className="mr-6 w-1/4">
        <ul className="pr-10 flex-none">
          {shops &&
            shops.map((shop) => (
              <li key={shop.id}>
                <Link
                  href={`/shops/${shop.id}`}
                  className="hover:text-blue-500"
                >
                  {shop.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="w-3/4">{children}</div>
    </div>
  );
}
