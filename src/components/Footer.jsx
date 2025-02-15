import React from "react";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Phone,
    Mail,
    MapPin,
    Globe,
    IndianRupee
} from "lucide-react";
import logo from "../assets/images/logo-bg-removed.png"

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* Company Info */}
                    <div>
                        <img src={logo} alt="royal-travel logo" className="w-24 h-auto mb-4" />
                        <p className="text-gray-600 mb-6">
                            Discover your next adventure with our curated selection of hotels
                            and flights worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {["Search Flights", "Book Hotels", "Vacation Packages", "Travel Insurance",].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
                        <ul className="space-y-3">
                            {["Help Center", "Cancel Booking", "Refund Policy"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>+91 8745633546</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <span>support@royaltravel.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>
                                    123 goregaon east,
                                    <br />
                                    Mumbai, Maharashtra
                                    <br />
                                    India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-300 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="flex flex-col md:flex-row justify-start items-center gap-3">
                            <p className="text-gray-600 text-sm mb-4 md:mb-0">
                                © {new Date().getFullYear()} Royal Travel
                            </p>
                            <div className="flex space-x-6">
                                {["Terms", "Privacy", "Cookies", "Sitemap"].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-gray-600 hover:text-primary text-sm transition-colors duration-300"
                                    >
                                        <div className="flex items-center justify-between gap-5">
                                            <div>•</div>
                                            <div>{item}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-5">

                            <div className="flex items-center justify-center gap-1">
                                <div><Globe className="w-4 h-4 text-gray-500" /></div>
                                <div className="text-gray-600 font-semibold text-sm underline">English(IN)</div>
                            </div>

                            <div className="flex items-center justify-center gap-1">
                                <div><IndianRupee className="w-4 h-4 text-gray-500" /></div>
                                <div className="text-gray-600 font-semibold text-sm underline">INR</div>
                            </div>

                            <div className="flex space-x-4">
                                <Facebook className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-300 cursor-pointer" />
                                <Twitter className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-300 cursor-pointer" />
                                <Instagram className="w-5 h-5 text-gray-500 hover:text-primary transition-colors duration-300 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* mention */}
                <div className="text-left text-sm border-gray-200 text-gray-400">
                    Developed by <a href="https://www.metamatrixtech.com/" className="hover:text-primary">Metamatrix Technologies</a> | <a href="https://shdpixel.com/" className="hover:text-primary">SHDPIXEL</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
