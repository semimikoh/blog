"use client";

import { X } from "lucide-react";
import { useState } from "react";

// 탭 데이터 타입 정의
interface Tab {
  id: string;
  name: string;
  extension: string;
  icon: string;
  color: string;
  isActive: boolean;
}

export default function TabBar() {
  const [tabs, setTabs] = useState<Tab[]>([
    {
      id: "home",
      name: "home",
      extension: "jsx",
      icon: "⚛",
      color: "text-blue-300",
      isActive: true,
    },
    {
      id: "about",
      name: "about",
      extension: "html",
      icon: "🌐",
      color: "text-orange-400",
      isActive: false,
    },
    {
      id: "contact",
      name: "contact",
      extension: "css",
      icon: "🎨",
      color: "text-blue-400",
      isActive: false,
    },
    {
      id: "projects",
      name: "projects",
      extension: "js",
      icon: "⚡",
      color: "text-yellow-400",
      isActive: false,
    },
    {
      id: "blog",
      name: "blog",
      extension: "json",
      icon: "📝",
      color: "text-green-400",
      isActive: false,
    },
  ]);

  const handleTabClick = (clickedId: string) => {
    setTabs(tabs.map(tab => 
      tab.id === clickedId 
        ? { ...tab, isActive: true }
        : { ...tab, isActive: false }
    ));
  };

  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTabs(tabs.filter(tab => tab.id !== tabId));
  };

  return (
    <div className="h-8 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center">
      {/* 탭들 */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`h-full border-r border-[#3e3e42] flex items-center px-4 min-w-0 group cursor-pointer transition-colors ${
            tab.isActive 
              ? "bg-[#1e1e1e]" 
              : "bg-[#2d2d30] hover:bg-[#37373d]"
          }`}
        >
          <span className={`mr-2 text-sm ${tab.color}`}>
            {tab.icon}
          </span>
          <span className={`text-sm truncate ${
            tab.isActive ? "text-white/90" : "text-white/70"
          }`}>
            {tab.name}.{tab.extension}
          </span>
          <button
            onClick={(e) => closeTab(tab.id, e)}
            className="ml-2 p-1 hover:bg-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={12} className="text-white/60" />
          </button>
        </div>
      ))}

      {/* 빈 공간 */}
      <div className="flex-1 bg-[#2d2d30]"></div>
    </div>
  );
}