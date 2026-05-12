import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchd = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2006/api/products/getallproducts`
        );

        console.log("API Response:", res.data);

        setproducts(res.data.products || []);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch products ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchd();
  }, []);

  const currency = "$";

  const [cart, setCart] = useState([]);


  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      if (existing) {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      } else {
        return [...prev, { ...product, qty }];
      }
    });

    toast.success("Added to cart 🛒");
  };

  const value = {
    currency,
    products,
    cart,
    addToCart,
    loading,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;