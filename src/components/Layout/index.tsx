"use client";

import { useState } from "react";
import ActivityBar from "../ActivityBar";
import Editor from "../Editor";
import MenuBar from "../MenuBar";
import Sidebar from "../Sidebar";
import StatusBar from "../StatusBar";
import TabBar from "../TabBar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
      {/* Menu Bar - 맨 위에 */}
      <MenuBar />
      
      <div className="flex flex-1 min-h-0">  {/* min-h-0 추가! */}
        {/* Activity Bar */}
        <ActivityBar onToggleSidebar={toggleSidebar} />
        
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-0"
          } overflow-hidden`}
        >
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          <TabBar />
          
          <div className="flex-1 overflow-auto">
            <Editor />
          </div>
          
          <StatusBar />
        </div>
      </div>
    </div>
  );
}