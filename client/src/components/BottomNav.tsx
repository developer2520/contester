import React from "react";
import { FiHome, FiPlusCircle, FiUser } from "react-icons/fi";
import { IoAddCircleSharp, IoPersonSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Home",
    icon: FiHome,
    filledIcon: GoHomeFill,
    link: "/home",
  },
  {
    name: "Add",
    icon: FiPlusCircle,
    filledIcon: IoAddCircleSharp,
    link: "/create",
  },
  {
    name: "Profile",
    icon: FiUser,
    filledIcon: IoPersonSharp,
    link: "/profile",
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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="fixed bottom-0 w-full bg-white border-t border-gray-300 flex justify-around py-2 shadow-md"
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
            {/* Animated Background (Soft Hover Effect) */}
            <motion.div
              className="absolute w-16 h-8 bg-gray-200 rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1.1 } : { opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />

            {/* Animated Icon */}
            <motion.span
              initial={{ scale: 1, color: "#6b7280" }}
              animate={
                isActive
                  ? { scale: 1.1, color: "#000" }
                  : { scale: 1, color: "#6b7280" }
              }
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-20"
            >
              <IconComponent size={26} />
            </motion.span>

            {/* Animated Text */}
            <motion.span
              initial={{ opacity: 0.6, fontWeight: 400, color: "#6b7280" }}
              animate={
                isActive
                  ? { opacity: 1, fontWeight: 700, color: "#000" }
                  : { opacity: 0.6, fontWeight: 400, color: "#6b7280" }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
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
