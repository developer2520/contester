import { useState } from "react";
import { Calendar, Users } from "lucide-react";

export default function StepTwo({
  onConfigUpdate,
}: {
  onConfigUpdate?: (config: GiveawayConfig) => void;
}) {
  const [winners, setWinners] = useState(1);
  const [endDate, setEndDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    d.setHours(23, 59);
    return d;
  });
  const [selectedDuration, setSelectedDuration] = useState(1); // Track selected duration

  const updateConfig = (w: number, d: Date) => {
    onConfigUpdate?.({ winnersCount: w, endDate: d });
  };

  const setQuickDuration = (days: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    d.setHours(23, 59);
    setEndDate(d);
    updateConfig(winners, d);
    setSelectedDuration(days); // Update selected duration
  };

  return (
    <div className="m-0 p-0 w-full">
      <div className="w-full px-0 bg-white rounded-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Giveaway Setup
        </h2>

        {/* Number of Winners */}
        <div className="border border-gray-200 p-5 mb-6 rounded-lg">
          <label className="flex items-center gap-2 font-medium mb-3 text-gray-800">
            <Users className="w-5 h-5 text-[#51a6ea]" />
            Number of Winners
          </label>
          <input
            type="number"
            min={1}
            value={winners}
            onChange={(e) => {
              const val = Math.max(1, Number(e.target.value));
              setWinners(val);
              updateConfig(val, endDate);
            }}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#51a6ea] focus:border-[#51a6ea]"
          />
          <div className="flex gap-2 mt-3">
            {[1, 3, 5, 10].map((val) => (
              <button
                key={val}
                onClick={() => {
                  setWinners(val);
                  updateConfig(val, endDate);
                }}
                className={`px-3 py-1 border text-sm rounded-md ${
                  winners === val
                    ? "bg-[#51a6ea] text-white border-[#51a6ea]"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* End Date */}
        <div className="border border-gray-200 p-5 rounded-lg">
          <label className="flex items-center gap-2 font-medium mb-3 text-gray-800">
            <Calendar className="w-5 h-5 text-[#51a6ea]" />
            End Date & Time
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <input
              type="date"
              value={endDate.toISOString().split("T")[0]}
              onChange={(e) => {
                const [y, m, d] = e.target.value.split("-").map(Number);
                const updated = new Date(endDate);
                updated.setFullYear(y);
                updated.setMonth(m - 1);
                updated.setDate(d);
                setEndDate(updated);
                updateConfig(winners, updated);
                setSelectedDuration(0); // Reset selected duration when manually changing date
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#51a6ea] focus:border-[#51a6ea]"
            />
            <input
              type="time"
              value={`${endDate.getHours().toString().padStart(2, "0")}:${endDate
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
              onChange={(e) => {
                const [h, m] = e.target.value.split(":").map(Number);
                const updated = new Date(endDate);
                updated.setHours(h, m);
                setEndDate(updated);
                updateConfig(winners, updated);
                setSelectedDuration(0); // Reset selected duration when manually changing time
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#51a6ea] focus:border-[#51a6ea]"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {[1, 3, 7, 14].map((days) => (
              <button
                key={days}
                onClick={() => setQuickDuration(days)}
                className={`px-3 py-1 border text-sm rounded-md ${
                  selectedDuration === days
                    ? "border-[#51a6ea] border-2 text-[#51a6ea] font-medium"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {days}d
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface GiveawayConfig {
  winnersCount: number;
  endDate: Date;
}
