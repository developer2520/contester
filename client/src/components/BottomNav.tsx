import React from "react";
import { Home, PlusCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", icon: <Home size={24} />, link: "/home" },
  { name: "Add", icon: <PlusCircle size={24} />, link: "/add" },
  { name: "Profile", icon: <User size={24} />, link: "/profile" },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-3 shadow-md">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.link}
          className={`flex flex-col items-center text-gray-500 hover:text-black ${
            location.pathname === item.link ? "text-black font-bold" : ""
          }`}
        >
          {item.icon}
          <span className="text-sm">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}
