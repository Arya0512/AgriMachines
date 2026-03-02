import Navbar from "../components/Navbar";
import { useRating } from "../context/RatingContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const {ratings}=useRating();
  const navigate=useNavigate();

  return (
    <div>
      <Navbar></Navbar>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-500">
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white max-w-[300px] border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4" >
              <img src={item.image} alt={item.name} className="max-h-[130px] object-contain transition duration-300 hover:scale-105 "></img>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₹ {item.price}</p>

              <p>Rating: {ratings[item.id] || 0} ⭐</p>

              <button onClick={()=> navigate(`/product/${item.id}`)} className="rounded border-green-500  text-white bg-green-600 px-4 py-1 mr-4">
              Details</button>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="mt-2 bg-green-100 text-green-800 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default WishList;
