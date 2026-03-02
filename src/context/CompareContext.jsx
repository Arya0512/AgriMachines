import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState(()=>{
  const saved=localStorage.getItem("compareItems")
  const parsed=saved ? JSON.parse(saved):[]
  return Array.isArray(parsed) ? parsed :[]
})

  useEffect(()=>{
    localStorage.setItem("compareItems",JSON.stringify(compareItems))
  },[compareItems])

  const addToCompare = (product) => {
    if (compareItems.length >= 3) {
      alert("You can compare only 3 products");
      return;
    }

    if (!compareItems.find((item) => item.id === product.id)) {
      setCompareItems([...compareItems, product]);
    }
  };

  const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter((item) => item.id !== id));
  };

  const isInCompare = (id) => {
    return compareItems.some((item) => item.id === id);
  };

  return (
    <CompareContext.Provider
      value={{ compareItems, addToCompare, removeFromCompare, isInCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);

