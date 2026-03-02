import { useParams } from "react-router-dom";
import { products } from "../data/product";
import Navbar from "../components/Navbar";
import { useState } from "react";
import {ChevronUp,ChevronDown} from "lucide-react";
import { useRating } from "../context/RatingContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [isOpen,setIsopen]=useState(false);
  const [open,setOpen]=useState(false);
  const {ratings}=useRating();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <div className="p-6">Product Not Found</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
    <div className="p-7 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover rounded border border-black-300 mt-15"
      />

      <div>
        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-500 mt-2 border-b pb-2">
          {product.category}
        </p>


        <p className="text-2xl text-black-900 font-semibold mt-4">
          ₹ {product.price}
        </p>
        <p>Rating: {ratings[product.id] || 0} ⭐</p>

        <div className="mt-6">
          <h2 className="font-semibold text-lg">
            Specifications :-
          </h2>

          <ul className="mt-3 space-y-2">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key} className="border-b pb-2">
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
        <div
        onClick={() => setIsopen(!isOpen)}
        className="flex justify-between items-center cursor-pointer mt-4"
      >
        <p className="font-medium">Overview</p>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {isOpen && (
        <p className="mt-3 text-gray-700">
          {product.overview}
        </p>
      )}

        <div onClick={()=>setOpen(!open)} className="flex justify-between items-center cursor-pointer mt-4">
          <p className="font-medium">Description </p>
          {open ? <ChevronUp size={20}/>:<ChevronDown size={20}/>}
        </div>
        {open &&(<p className=" mt-3 text-grey-700">{product.description}</p>)}
        
        <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded">
          Enquire Now
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
