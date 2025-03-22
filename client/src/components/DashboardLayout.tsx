import React from "react";
import BottomNav from "./BottomNav";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">{children}</main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
