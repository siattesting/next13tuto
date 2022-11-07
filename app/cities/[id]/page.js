import Link from 'next/link';
import { supabase } from '../../../supabaseClient';

export default async function CityDetail({ params }) {
  const { data: city, error } = await supabase
    .from('City')
    .select('*')
    .filter('id', 'eq', params.id)
    .single();

  if (error) console.log(error);

  if (!city) {
    return <p>No city found</p>;
  }

  const { data: country } = await supabase
    .from('Country')
    .select('*')
    .filter('id', 'eq', city.country)
    .single();

  return (
    <article>
      <h3 className="text-3xl">{city.title}</h3>
      <p className="mt-2">{city.content}</p>
      <p className="mt-2">{city.id}</p>
      <div>
        <h3>Visit:</h3>
        <Link href={`/countries/${city.country}`}>
          <h3 className="text-lg">{country.title}</h3>
          <p className="text-sm">{city.country}</p>
        </Link>
      </div>
    </article>
  );
}
