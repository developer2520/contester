import React from "react";
import {
  FiHome,
  FiPlusCircle,
  FiUser
} from "react-icons/fi";
import {
  IoHomeSharp,
  IoAddCircleSharp,
  IoPersonSharp
} from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    icon: FiHome,
    filledIcon: GoHomeFill,
    link: "/home"
  },
  {
    name: "Add",
    icon: FiPlusCircle,
    filledIcon: IoAddCircleSharp,
    link: "/create"
  },
  {
    name: "Profile",
    icon: FiUser,
    filledIcon: IoPersonSharp,
    link: "/profile"
  },
];

export default function BottomNav() {
  const location = useLocation();
  
  const vibrate = () => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("heavy");
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.3
      }}
      className="fixed bottom-0 w-full bg-white border-t border-gray-300 flex justify-around py-1 shadow-md"
    >
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.link;
        const IconComponent = isActive ? item.filledIcon : item.icon;
        
        return (
          <Link
            key={index}
            onClick={vibrate}
            to={item.link}
            className="relative flex flex-col items-center transition-colors"
          >
            {/* Animated Background (Gray) - Now with centered content */}
            {isActive && (
              <motion.div
                className="absolute w-16 h-8 bg-gray-300 rounded-2xl flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            )}

            {/* Icon with Active/Inactive State */}
            <motion.span
              initial={{ scale: 1, color: "#6b7280" }}
              animate={isActive ? { scale: 1, color: "#000" } : { scale: 1, color: "#6b7280" }}
              transition={{ duration: 0.3 }}
              className="relative z-20"
            >
              <IconComponent size={24} />
            </motion.span>

            {/* Text with Bold Effect */}
            <motion.span
              initial={{ opacity: 0.6, fontWeight: 400, color: "#6b7280" }}
              animate={isActive ? { opacity: 1, fontWeight: 700, color: "#000" } : { opacity: 0.6, fontWeight: 400, color: "#6b7280" }}
              transition={{ duration: 0.3 }}
              className="text-sm mt-1 relative z-20"
            >
              {item.name}
            </motion.span>
          </Link>
        );
      })}
    </motion.nav>
  );
}