import React from "react";
import { Gift, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const slides = [
  {
    icon: <Gift size={44} className="text-white" />,
    title: "Create Giveaways",
    description: "Launch powerful campaigns with a single tap.",
    button: "Get Started",
    link: "/create",
    bgColor: "bg-gradient-to-br from-blue-600 to-blue-800",
    iconBg: "bg-blue-500/30",
  },
  {
    icon: <Users size={44} className="text-white" />,
    title: "Grow Community",
    description: "Build connections that transform your network.",
    button: "Explore",
    link: "/features",
    bgColor: "bg-gradient-to-br from-emerald-600 to-emerald-800",
    iconBg: "bg-emerald-500/30",
  },
  {
    icon: <Trophy size={44} className="text-white" />,
    title: "Win Rewards",
    description: "Unlock exclusive prizes and experiences.",
    button: "Browse Giveaways",
    link: "/giveaways",
    bgColor: "bg-gradient-to-br from-indigo-600 to-indigo-800",
    iconBg: "bg-indigo-500/30",
  },
];

const GiveawayTutorial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 10
      }}
      className=" px-0  "
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop
        className="w-full m-3"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className={`
                ${slide.bgColor}
                rounded-3xl
                w-19/20
mx-auto
                p-7
                text-center
                shadow-2xl
                transition-all
                duration-300
                min-h-[400px]
                flex
                flex-col
                justify-center
                items-center
                relative
                overflow-hidden
              `}
            >
              {/* Subtle Overlay Effect */}
              <div 
                className="absolute inset-0 bg-black/10 backdrop-brightness-90" 
                style={{ zIndex: 1 }}
              />

              {/* Content Container */}
              <div className="relative z-10 text-white w-full max-w-md">
                {/* Icon Container */}
                <motion.div 
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3,
                    type: "spring",
                    stiffness: 150
                  }}
                  className={`
                    w-24 h-24 
                    mb-5 
                    mx-auto
                    ${slide.iconBg}
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    backdrop-blur-sm
                    shadow-lg
                  `}
                >
                  {slide.icon}
                </motion.div>

                {/* Title */}
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                    type: "spring"
                  }}
                  className="text-3xl font-bold mb-4 drop-shadow-md"
                >
                  {slide.title}
                </motion.h2>

                {/* Description */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5,
                    type: "spring"
                  }}
                  className="text-white/90 text-base mb-6 max-w-[90%] mx-auto opacity-90"
                >
                  {slide.description}
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.6,
                    type: "spring"
                  }}
                >
                  <Link
                    to={slide.link}
                    className="
                      inline-block
                      bg-white
                      text-black
                      font-semibold
                      py-3
                      px-7
                      rounded-xl
                      shadow-xl
                      hover:scale-[1.05]
                      active:scale-95
                      transition-all
                      duration-300
                    "
                  >
                    {slide.button}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default GiveawayTutorial;