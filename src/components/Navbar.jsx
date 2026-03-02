import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCompare } from "../context/CompareContext";
import { FaHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { useState } from "react";
const Navbar = () => {
  const { wishlist } = useWishlist();
  const { compareItems } = useCompare();
  const [isOpen ,setIsOpen]=useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-yellow/70 border-b border-white-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

       
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-style: italic font-extrabold bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent tracking-wide">
            🌾AgriMachines
          </span>
          
        </Link>

      
      <div className="hidden md:flex items-center gap-7 text-green-500">
        <Link  className="relative flex items-center gap-2 hover:text-yellow-400 transition" to="/">🏠Home</Link>

        <Link to="/wishlist"
          className="relative flex items-center gap-2 hover:text-yellow-400 transition">
            <FaHeart className="text-lg" />
              <span>Wishlist</span>

            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md">
              {wishlist.length}
              </span> )}
            </Link>

        <Link to="/compare" className="relative flex items-center gap-2 hover:text-yellow-400 transition">
            <MdCompareArrows className="text-xl" />
            <span>Compare</span>

          {compareItems.length > 0 && (
          <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full shadow-md">
          {compareItems.length} </span>)}
       </Link>
      </div>


      <button className="md:hidden text-2xl text-green-600"
      onClick={() => setIsOpen(!isOpen)}>☰</button>

      </div>
       
    {isOpen && (
      <div className="md:hidden bg-green-100 px-8 py-4 fixed  right-0 flex flex-col space-y-4 text-green-800 shadow-lg">
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link>
        <Link to="/compare" onClick={() => setIsOpen(false)}>Compare</Link>
      </div>)}
    </nav>
  );
};

export default Navbar;
