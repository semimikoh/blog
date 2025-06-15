"use client";

import { GitBranch, Info, Zap } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="h-6 bg-[#007ACC] text-white text-xs flex items-center justify-between px-4 font-mono">
      {/* 왼쪽 영역 */}
      <div className="flex items-center space-x-4">
        {/* Git 브랜치 */}
        <div className="flex items-center space-x-1 hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <GitBranch size={12} />
          <span>main</span>
        </div>

        {/* 에러/경고 */}
        <div className="flex items-center space-x-1 hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <Info size={12} />
          <span>0</span>
          <span className="text-yellow-300">⚠</span>
          <span>0</span>
        </div>
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex items-center space-x-4">
        {/* 줄/열 위치 */}
        <div className="hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <span>Ln 12, Col 25</span>
        </div>

        {/* 인코딩 */}
        <div className="hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <span>UTF-8</span>
        </div>

        {/* 줄바꿈 타입 */}
        <div className="hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <span>LF</span>
        </div>

        {/* 언어 */}
        <div className="hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <span>JSX</span>
        </div>

        {/* 피드백 */}
        <div className="flex items-center space-x-1 hover:bg-white/20 px-2 py-1 rounded cursor-pointer">
          <Zap size={12} />
        </div>
      </div>
    </div>
  );
}