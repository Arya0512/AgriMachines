import { createContext, useContext, useEffect, useState } from "react";

const RatingContext=createContext();

export const RatingProvider=({children})=>{

  const [ratings, setRatings] = useState({})
  
  useEffect(()=>{
    const saved=localStorage.getItem("ratings")
    if(saved)
      setRatings(JSON.parse(saved))
   
},[]);
  useEffect(()=>{
    localStorage.setItem("ratings",JSON.stringify(ratings))
  },[ratings])

  const setProductRating=(productID,value)=>{
    setRatings(prev=>({
      ...prev,[productID]:value
  }))
  };

  return(
    <RatingContext.Provider value={{ratings,setProductRating}}>{children}</RatingContext.Provider>
  )
}

export const useRating=()=>useContext(RatingContext);