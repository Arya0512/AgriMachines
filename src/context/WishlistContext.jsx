import { Children, createContext,useContext,useEffect,useState } from "react";

const WishListContext=createContext()

export const WishListProvider=({children})=>{

    const [wishlist, setWishlist] = useState(() => {
  const saved = localStorage.getItem("wishlist");
  const parsed = saved ? JSON.parse(saved) : [];
  return Array.isArray(parsed) ? parsed : [];
});


    useEffect(()=>{
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    },[wishlist]);

    const addToWishlist=(product)=>{
        if(!wishlist.find((item)=>item.id===product.id)){
            setWishlist([...wishlist,product])
        }
    }

    const removeFromWishlist=(id)=>{
        setWishlist(wishlist.filter((item)=>item.id!==id)) 
    }

    const isInWishlist=(id)=>{
        return wishlist.some((item)=>item.id===id);
    }

    return(
        <WishListContext.Provider
        value={{wishlist,addToWishlist,removeFromWishlist,isInWishlist}}>
            {children}
        </WishListContext.Provider>
    )
}

export const useWishlist=()=>useContext(WishListContext)