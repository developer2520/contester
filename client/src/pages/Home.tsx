import React from 'react';
import NoGiveawaysPlaceholders from '././../components/NoGiveawaysPlaceholder'

export default function Home() {
  const user = window.Telegram.WebApp.initDataUnsafe?.user;

  const close = () => {
    const text = "Join our giveaway today and win some incredibly good prizes"
    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(text)}`
    );
  };

  return (
    <div className="bg-white h-full w-full m-0 p-0">
      {user ? (
        <>
         
       
        <NoGiveawaysPlaceholders />
        </>
      ) : (
        <NoGiveawaysPlaceholders />
      )}
      
    </div>
  );
}
