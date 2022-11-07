'use client';

import { createContext } from 'react';

const DataContext = createContext();
export default function DataProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    // add 1 to previous quantity
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    // remove 1 to previous quantity
    //... but can not go below 1
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1; // W
      return prevQty - 1;
    });
  };

  const onAdd = (product, quantity) => {
    //Check if product is already in cart
    const checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice((prevTotalQuantities) => prevTotalQuantities + quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id)
          return {
            //if a similar product is already in cart, we spread the cartProduct but update the quantity

            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.title} added to cart`);
  };

  const onRemove = (product) => {
    let foundProduct = cartItems.find((item) => item.id === id);
    const newCartItems = cartItems.filter(
      (cartProduct) => cartProduct.id !== product.id
    );
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  return (
    <DataContext.Provider
      value={{
        qty,
        incQty,
        decQty,
        showCart,
        cartItems,
        onAdd,
        onRemove,
        totalPrice,
        totalQuantities,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
