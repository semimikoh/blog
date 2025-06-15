"use client";

import {
    ChevronDown,
    ChevronRight,
    File,
    Folder,
    FolderOpen,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="h-full bg-[#252526] border-r border-[#3e3e42] flex flex-col">
      {/* 탐색기 헤더 */}
      <div className="px-4 py-2 text-white/80 text-sm font-medium border-b border-[#3e3e42]">
        EXPLORER
      </div>

      {/* 파일 트리 */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2">
          {/* 포트폴리오 루트 폴더 */}
          <div className="mb-2">
            <div className="flex items-center text-white/90 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
              <ChevronDown size={16} className="mr-1" />
              <FolderOpen size={16} className="mr-2 text-blue-400" />
              <span className="font-medium">PORTFOLIO</span>
            </div>

            {/* 하위 파일들 */}
            <div className="ml-6 mt-1 space-y-1">
              {/* about 폴더 */}
              <div className="flex items-center text-white/80 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                <ChevronRight size={16} className="mr-1" />
                <Folder size={16} className="mr-2 text-blue-400" />
                <span>about</span>
              </div>

              {/* projects 폴더 */}
              <div className="flex items-center text-white/80 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                <ChevronRight size={16} className="mr-1" />
                <Folder size={16} className="mr-2 text-blue-400" />
                <span>projects</span>
              </div>

              {/* skills 폴더 */}
              <div className="flex items-center text-white/80 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                <ChevronRight size={16} className="mr-1" />
                <Folder size={16} className="mr-2 text-blue-400" />
                <span>skills</span>
              </div>

              {/* README.md 파일 */}
              <div className="flex items-center text-white/80 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                <span className="w-4 mr-1"></span>
                <File size={16} className="mr-2 text-blue-300" />
                <span>README.md</span>
              </div>

              {/* package.json 파일 */}
              <div className="flex items-center text-white/80 text-sm hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
                <span className="w-4 mr-1"></span>
                <File size={16} className="mr-2 text-green-400" />
                <span>package.json</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}