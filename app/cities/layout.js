import Link from 'next/link';
import { supabase } from '../../supabaseClient';

export default async function Layout({ children }) {
  const { data: cities, error } = await supabase
    .from('City')
    .select('*')
    .order('title');

  if (error) console.log(error);

  if (!cities) {
    return <p>No cities found</p>;
  }

  return (
    <div className="flex">
      <div className="mr-6 w-1/4">
        {/* <h3 className="text-3xl">Shops</h3> */}

        <ul className="pr-10 flex-none">
          {cities &&
            cities.map((city) => (
              <li key={city.id}>
                <Link
                  href={`/cities/${city.id}`}
                  className="hover:text-blue-500"
                >
                  {city.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className=" w-3/4">{children}</div>
    </div>
  );
}
