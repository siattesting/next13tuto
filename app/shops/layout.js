'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { use } from 'react';
import { supabase } from '../../supabaseClient';

async function getShops() {
  try {
    const { data, error } = await supabase
      .from('Shop')
      .select('*')
      .order('title');

    if (error) console.log(error);

    return {
      data,
    };
  } catch (error) {
    console.log(error);
  }
}

export default function Layout({ children, href }) {
  const path = usePathname();

  const shops = use(getShops());

  if (!shops) return <p>No shops found</p>;
  return (
    <div className="flex">
      <div className="mr-6">
        {/* <h3 className="text-3xl">Shops</h3> */}

        <ul className="pr-10 flex-none">
          {shops &&
            shops.data.map((shop) => (
              <li key={shop.id}>
                <Link
                  href={`/shops/${shop.id}`}
                  className={
                    path === `/shops/${shop.id}`
                      ? ' underline text-blue-400'
                      : 'hover:text-blue-500'
                  }
                >
                  {shop.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="">{children}</div>
    </div>
  );
}
