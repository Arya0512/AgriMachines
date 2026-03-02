import { useState } from "react";
import {products} from "../data/product";
import ProductCard from "../components/ProductCard"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [maxPrice, setMaxPrice] = useState(200000);
  
  


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  &&(category=="All" || product.category==category)
  &&  product.price <= maxPrice
  
  );
  if (sortOption=="low-high"){
    filteredProducts.sort((a,b)=>a.price-b.price)
  }
  if (sortOption=="high-low"){
    filteredProducts.sort((a,b)=>b.price-a.price)
  }

 return (
  <div className="bg-green-50 min-h-screen">

    <Navbar />

   
    <section className="bg-gradient-to-r py-20 text-center text-yellow-500">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
        Fresh Farm & Dairy Machinery
      </h1>

      <p className="max-w-2xl mx-auto text-lg text-yellow-800">
        Modern equipment designed for farmers and dairy industries
        to improve productivity and sustainability.
      </p>
    </section>

    <div className="max-w-7xl mx-auto px-6 py-12">

     
      <div className="bg-white p-6 rounded-2xl shadow-md mb-12 flex flex-wrap gap-6 items-center">

       
        <input
          type="text"
          placeholder="Search machines..."
          className="p-3 rounded-lg border border-green-200 flex-1 focus:ring-2 focus:ring-green-400 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

       
        <select
          className="p-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 outline-none"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Farm Equipment">Farm Equipment</option>
          <option value="Milking Equipment">Milking Equipment</option>
          <option value="Processing Equipment">Processing Equipment</option>
          <option value="Utility Equipment">Utility Equipment</option>
          <option value="Testing Equipment">Testing Equipment</option>
          <option value="Packaging Equipment">Packaging Equipment</option>
        </select>

        
        <select
          className="p-3 rounded-lg border border-green-200 focus:ring-2 focus:ring-green-400 outline-none"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

    
      <div className="mb-10">
        <label className="block mb-2 font-semibold text-green-800">
          Max Price: ₹ {maxPrice}
        </label>

        <input
          type="range"
          min="10000"
          max="200000"
          step="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-green-500"
        />
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-green-700">
            No machines found.
          </p>
        )}
      </div>

    </div>
    <Footer/>
  </div>
);
}
export default Home;