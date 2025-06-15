"use client";

import { Files, GitBranch, Package, Search, Settings, User } from "lucide-react";

interface ActivityBarProps {
  onToggleSidebar?: () => void;
}

export default function ActivityBar({ onToggleSidebar }: ActivityBarProps) {
  return (
    <div className="w-12 bg-[#333333] border-r border-[#3e3e42] flex flex-col h-full">
      {/* 상단 아이콘들 */}
      <div className="flex flex-col flex-shrink-0">
        {/* Explorer - 활성 상태 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
          <div className="h-12 w-12 flex items-center justify-center text-white bg-[#37373d] cursor-pointer transition-colors">
            <Files size={24} />
          </div>
        </div>
        
        {/* Search */}
        <div className="h-12 w-12 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors hover:bg-[#37373d]">
          <Search size={24} />
        </div>
        
        {/* Source Control (Git) */}
        <div className="h-12 w-12 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors hover:bg-[#37373d]">
          <GitBranch size={24} />
        </div>
        
        {/* Extensions */}
        <div className="h-12 w-12 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors hover:bg-[#37373d]">
          <Package size={24} />
        </div>
      </div>

      {/* 중간 여백 - 축소 가능 */}
      <div className="flex-1 min-h-4"></div>

      {/* 하단 아이콘들 - 무조건 보이도록 고정 */}
      <div className="flex flex-col flex-shrink-0 pb-4">
        {/* 프로필 */}
        <div className="h-12 w-12 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors hover:bg-[#37373d]">
          <User size={24} />
        </div>
        
        {/* 설정 */}
        <div className="h-12 w-12 flex items-center justify-center text-white/60 hover:text-white cursor-pointer transition-colors hover:bg-[#37373d]">
          <Settings size={24} />
        </div>
      </div>
    </div>
  );
}