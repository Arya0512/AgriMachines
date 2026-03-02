import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useCompare } from "../context/CompareContext";
import { useRating } from "../context/RatingContext";

const ProductCard = ({ product }) => {

  const {ratings,setProductRating}=useRating();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  }= useWishlist();

  const inWishlist=isInWishlist(product.id)
  const toggleWishlist=()=>{
    if(inWishlist){
      removeFromWishlist(product.id)
    }else{
      addToWishlist(product);
    }  
  }

  const {
  addToCompare,
  removeFromCompare,
  isInCompare,
} = useCompare();

const inCompare = isInCompare(product.id);

const toggleCompare = () => {
  if (inCompare) {
    removeFromCompare(product.id);
  } else {
    addToCompare(product);
  }
};

  return (
  <div className="relative w-full max-w-[300px] bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-green-100 overflow-hidden">

  
    <button
      onClick={toggleWishlist}
      className="absolute top-3 right-3 text-xl transition transform hover:scale-125 z-10"
    >
      {inWishlist ? (
        <FaHeart className="text-red-400" />
      ) : (
        <FaRegHeart className="text-green-400 hover:text-red-400" />
      )}
    </button>

    
    <div className="bg-white-50 flex items-center justify-center h-45 rounded-t-2xl">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-[170px] object-contain transition duration-300 hover:scale-105"
      />
    </div>

    
    <div className="p-5 flex flex-col justify-between h-[200px]">

      <div>
        <h2 className="text-lg font-bold text-green-900 line-clamp-2">
          {product.name}
        </h2>

        <p className="text-green-700 text-sm mt-1">
          {product.category}
        </p>

        <p className="text-yellow-600 font-semibold mt-2 text-lg">
          ₹ {product.price}
        </p>
      </div>
      <div className="flex gap-1 ">
        {[1,2,3,4,5].map((star)=>(
          <span key={star} onClick={()=>setProductRating(product.id,star)} className={`cursor-pointer text-xl ${
            star <=(ratings[product.id]||0) ? "text-yellow-400" :"text-gray-400"
          }`}>
              ★
          </span>

        ))}
      </div>

      
      <div className="flex gap-2 mt-2 mb-4">
        <button
          onClick={toggleCompare}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
            inCompare
              ? "bg-red-400 text-white hover:bg-red-500"
              : "bg-green-100 text-green-800 hover:bg-green-200"
          }`}
        >
          {inCompare ? "Remove" : "Compare"}
        </button>

        <Link
          to={`/product/${product.id}`}
          className="flex-1 text-center py-2 rounded-lg text-sm font-medium bg-green-500 text-white hover:bg-green-600 transition"
        >
          Details
        </Link>
      </div>

    </div>
  </div>
);
}
export default ProductCard;