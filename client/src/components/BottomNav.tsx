import React from "react";
import { Home, PlusCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", icon: Home, link: "/home" },
  { name: "Add", icon: PlusCircle, link: "/create" },
  { name: "Profile", icon: User, link: "/profile" },
];

export default function BottomNav() {
  const location = useLocation(); // Use useLocation hook to get the current location
  const vibrate = () => {
    Telegram.WebApp.HapticFeedback.impactOccurred("heavy");
  }

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-300 flex justify-around py-3 shadow-md">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.link;

        return (
          <Link
            key={index}
            onClick={vibrate}
            to={item.link}
            className={`flex flex-col items-center transition-colors ${
              isActive ? "text-blue-500 font-bold" : "text-gray-500"
            } hover:text-black`}
          >
            {/* Animated Icon */}
            <motion.span
              initial={{ scale: 1 }}
              animate={isActive ? { scale: 1.2 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <item.icon size={24} />
            </motion.span>

            <span className="text-sm mt-1">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
