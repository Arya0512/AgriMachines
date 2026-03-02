import { Vault } from "lucide-react";
import Navbar from "../components/Navbar";
import { useCompare } from "../context/CompareContext";
import { useRating } from "../context/RatingContext";

const Compare = () => {
  const { compareItems, removeFromCompare } = useCompare();
  const {ratings}=useRating();

  if (compareItems.length === 0) {
    return <h2 className="p-6">No products selected for comparison.</h2>;
  }

  return (
    <div>
      <div>
      <Navbar></Navbar>
        <h1 className="text-2xl font-bold text-green-600 mt-4 ml-5">Machine Comparision</h1>
        <div className="flex gap-10 overflow-x-auto pb-5 mt-8 ml-20 ">
          {compareItems.map((product)=>(
            <div key={product.id} className="relative flex flex-col bg-white border border-green-100 rounded-xl min-w-[280px] shadow-md p-5">
              <button onClick={() => removeFromCompare(product.id)} className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-red-400 text-white hover:bg-red-600 transition">
                  ✕ </button>
              <img src={product.image} alt={product.name} className="h-40 object-contain mx-auto"></img>
              
              <h2 className="text-lg font-bold text-green-800 text-center">
              {product.name}</h2>

           
              <p className="text-yellow-600 font-semibold text-center mt-2">
              ₹ {product.price} </p>
              
              <div className="flex gap-1 justify-center">
                {[1,2,3,4,5].map((star)=>(
                  <span key={star} className={`text-lg ${star<=(ratings[product.id]||0) ? "text-yellow-400":"text-gray-400"}`}> ★</span>
                ))}
              </div>
                <div className="mt-6">
                  <h2 className="font-semibold text-lg">Specifications :-</h2>
                  <ul className="mt-3 space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key}  >
                        <strong>{key}:</strong> {value}
                      </li>
                      ))}
                    </ul>
                </div>
                
              </div>
              
            ))}

        </div>
        </div>
      </div>
  );
};

export default Compare;

