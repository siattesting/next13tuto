import { use } from "react";
import { supabase } from "../../supabaseClient";

async function getShops() {
  try {
    const { data, error } = await supabase
      .from("Shop")
      .select("*")
      .order("title");

    if (error) console.log(error);

    return {
      data,
    };
  } catch (error) {
    console.log("Error from /shops/pahe.js: ", error);
  }
}

export default function Shops() {
  const shops = use(getShops());

  if (!shops) return <p>No shops found</p>;
  return (
    <div>
      <h1>Shops page</h1>
      {shops &&
        shops.data.map((shop) => (
          <div key={shop.id}>
            <h3>{shop.title}</h3>
            <p>{shop.content}</p>
          </div>
        ))}
    </div>
  );
}
