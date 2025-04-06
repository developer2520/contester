import React, { useState, useEffect, KeyboardEvent } from "react";

// Define types for channel objects and props
interface Channel {
  username: string;
  photo: string | null;
}

interface StepTwoProps {
  onChannelsUpdate?: (channels: Channel[]) => void; // Callback to update parent
  initialChannels?: Channel[]; // Initial list of channels (optional)
}

const StepTwo: React.FC<StepTwoProps> = ({
  onChannelsUpdate,
  initialChannels = [],
}) => {
  const [channelUsername, setChannelUsername] = useState<string>("");
  const [channelPhoto, setChannelPhoto] = useState<string | null>(null);
  const [channels, setChannels] = useState<Channel[]>(initialChannels);
  const [error, setError] = useState<string | null>(null);

  // Fetch channel photo when username changes
  useEffect(() => {
    if (!channelUsername) {
      setChannelPhoto(null);
      setError(null);
      return;
    }

    const fetchChannelPhoto = async () => {
      try {
        const username = channelUsername.startsWith("@")
          ? channelUsername.slice(1)
          : channelUsername;
        const profilePhotoUrl = `https://t.me/i/userpic/320/${username}.jpg`;

        const response = await fetch(profilePhotoUrl, { method: "HEAD" });
        if (response.ok) {
          setChannelPhoto(profilePhotoUrl);
          setError(null);
        } else {
          setChannelPhoto(null);
          setError("Channel not found or no profile photo available.");
        }
      } catch (error) {
        console.error("Error fetching channel photo:", error);
        setChannelPhoto(null);
        setError("Error verifying channel. Please check the username.");
      }
    };

    fetchChannelPhoto();
  }, [channelUsername]);

  // Add channel to the list
  const addChannel = () => {
    if (channelUsername.trim() === "") {
      setError("Please enter a channel username.");
      return;
    }

    const username = channelUsername.startsWith("@")
      ? channelUsername
      : `@${channelUsername}`;

    // Prevent duplicates
    if (channels.some((ch) => ch.username === username)) {
      setError("This channel is already added.");
      return;
    }

    const newChannel: Channel = { username, photo: channelPhoto };
    const updatedChannels = [...channels, newChannel];
    setChannels(updatedChannels);
    setChannelUsername("");
    setChannelPhoto(null);
    setError(null);

    // Notify parent component
    if (onChannelsUpdate) onChannelsUpdate(updatedChannels);
  };

  // Remove channel from the list
  const removeChannel = (index: number) => {
    const updatedChannels = channels.filter((_, i) => i !== index);
    setChannels(updatedChannels);
    if (onChannelsUpdate) onChannelsUpdate(updatedChannels);
  };

  // Handle Enter key press
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addChannel();
    }
  };

  return (
    <div className="p-4 bg-white w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Step 2: Participation Requirements
      </h2>

      <div className="space-y-6">
        {/* Channel Input */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">
            Add Telegram Channel:
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-grow border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. @yourchannel"
              value={channelUsername}
              onChange={(e) => setChannelUsername(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={addChannel}
              className="bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              type="button"
            >
              Add
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Channel Preview */}
        {channelUsername && (
          <div className="p-3 bg-gray-100 rounded-lg flex items-center space-x-3">
            {channelPhoto ? (
              <img
                src={channelPhoto}
                alt="Channel Preview"
                className="w-12 h-12 rounded-full border"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-300 rounded-full" />
            )}
            <span className="text-gray-700 font-medium">{channelUsername}</span>
          </div>
        )}

        {/* Added Channels List */}
        {channels.length > 0 && (
          <div>
            <label className="block text-lg font-medium mb-2 text-gray-700">
              Required Channels:
            </label>
            <ul className="space-y-3">
              {channels.map((channel, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {channel.photo ? (
                      <img
                        src={channel.photo}
                        alt={channel.username}
                        className="w-12 h-12 rounded-full border"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-300 rounded-full" />
                    )}
                    <a
                      href={`https://t.me/${channel.username.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 font-medium hover:underline"
                    >
                      {channel.username}
                    </a>
                  </div>
                  <button
                    onClick={() => removeChannel(index)}
                    className="text-red-500 hover:text-red-700 transition duration-300"
                    type="button"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
