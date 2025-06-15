// components/TabBar/Tab.tsx
import { TabProps } from '@/types';

export default function Tab({ 
  id,
  name, 
  extension, 
  icon, 
  color, 
  isActive = false,
  onClick 
}: TabProps) {
  const handleClick = () => {
    onClick?.(id);
  };

  return (
    <div 
      className={`flex items-center px-16 py-4 text-sm border-r border-[#3e3e42] cursor-pointer transition-colors ${
        isActive 
          ? 'bg-[#1e1e1e] text-white' 
          : 'bg-[#2d2d30] text-white/70 hover:text-white hover:bg-[#2a2d2e]'
      }`}
      onClick={handleClick}
    >
      {/* 파일 아이콘 (Lucide 아이콘) */}
      <div className="mr-6">
        {icon}
      </div>
      
      {/* 파일명 */}
      <span className="select-none">
        {name}.{extension}
      </span>
    </div>
  );
}