import { useEffect, useState } from "react";

const Profile = () => {
  // Dummy Telegram WebApp data (replace with actual Telegram data later)
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

  return (
    <div className="max-w-3xl mx-auto h-full p-6 bg-white shadow-md rounded-lg text-center">
      {/* Profile Header */}
      <div className="flex flex-col items-center space-y-4">
        <img src={user.avatar} alt="Profile" className="w-24 h-24 rounded-full border-2 border-gray-300" />
        <div>
          <h1 className="text-xl font-semibold">{user.name}</h1>
          <p className="text-gray-500">{user.username}</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;
