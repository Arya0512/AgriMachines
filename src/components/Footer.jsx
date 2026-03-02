import { Link } from "react-router-dom";
import {Facebook,Instagram,Twitter,Phone,Mail} from "lucide-react";
const Footer=()=>{

    return(
        <footer className="bg-green-900 mt-16 text-white ">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div>
                    <h2 className="text-2xl font-bold">AgriMachines</h2>
                    <p className="mt-3 text-green-200 text-sm">
                        Providing high quality agricultural machines with detailed
                        specifications, comparison tools, and user ratings.
                    </p>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-green-200">
                        <li>
                        <Link to="/" className="hover:text-white transition">
                            Home
                        </Link>
                        </li>
                        <li>
                        <Link to="/wishlist" className="hover:text-white transition">
                            Wishlist
                        </Link>
                        </li>
                        <li>
                        <Link to="/compare" className="hover:text-white transition">
                            Compare
                        </Link>
                        </li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>

                    <div className="flex items-center gap-2 text-green-200 mb-2">
                        <Mail size={18} />
                        support@agrimachines.com
                    </div>

                    <div className="flex items-center gap-2 text-green-200 mb-4">
                        <Phone size={18} />
                        +91 98765 43210
                    </div>
                    <div className="flex gap-4">
                        <Facebook className="cursor-pointer hover:text-white transition" />
                        <Instagram className="cursor-pointer hover:text-white transition" />
                        <Twitter className="cursor-pointer hover:text-white transition" />
                    </div>

                </div>
                
            </div>
            <div className="border-t border-green-700 text-center py-4 text-green-300 text-sm">
                    © {new Date().getFullYear()} AgriMachines. All rights reserved.
            </div>

        </footer>
    );
}
export default Footer;