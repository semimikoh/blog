"use client";

export default function MenuBar() {
  return (
    <div className="h-7 bg-[#3C3C3C] border-b border-[#3e3e42] flex items-center px-3 text-white text-sm">
      {/* 메뉴 항목들 */}
      <div className="flex items-center space-x-4">
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          File
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          Edit
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          View
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          Go
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          Run
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          Terminal
        </div>
        <div className="hover:bg-white/10 px-2 py-1 rounded cursor-pointer">
          Help
        </div>
      </div>

      {/* 중앙 타이틀 */}
      <div className="flex-1 text-center text-white/80">
        고세미 Portfolio - Visual Studio Code
      </div>

      {/* 우측 윈도우 컨트롤 (macOS 스타일) */}
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer hover:bg-red-600"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer hover:bg-yellow-600"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600"></div>
      </div>
    </div>
  );
}