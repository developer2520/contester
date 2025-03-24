import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Telegram User",
    username: "@telegram_user",
    avatar: "https://via.placeholder.com/100",
  });

  useEffect(() => {
    if (window.Telegram?.WebApp?.initDataUnsafe?.user) {
      const tgUser = window.Telegram.WebApp.initDataUnsafe.user;
      setUser({
        name: tgUser.first_name + (tgUser.last_name ? ` ${tgUser.last_name}` : ""),
        username: `@${tgUser.username || "unknown"}`,
        avatar: tgUser.photo_url || "https://via.placeholder.com/100",
      });
    }
  }, []);

  const handlePayment = () => {
    if (!window.Telegram?.WebApp?.requestStarPayment) {
      alert("Telegram Stars payment is not supported in this environment.");
      return;
    }
  
    window.Telegram.WebApp.requestStarPayment({
           
      callback: (result) => {
        console.log("Payment Result:", result);
        if (result.status === "accepted") {
          alert("You've successfully paid with Stars!");
        } else {
          alert("Payment canceled or failed.");
        }
      },
    });
  };
  
  

  return (
    <div className="max-w-3xl mx-auto h-full p-6 bg-white shadow-md rounded-lg text-center">
      <div className="flex flex-col items-center space-y-4">
        <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />
        <div>
          <h1 className="text-xl font-semibold">{user.name}</h1>
          <p className="text-gray-500">{user.username}</p>
        </div>
      </div>

      <button onClick={handlePayment} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Buy Entry with Telegram Stars
      </button>
    </div>
  );
};

export default Profile;
