import { ActivityBarButtonProps } from '@/types';

export default function ActivityBarButton({ 
  icon, 
  isActive = false, 
  onClick 
}: ActivityBarButtonProps) {
  return (
    <div className="relative">
      {/* 활성 상태 표시줄 */}
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>
      )}
      
      {/* 버튼 */}
      <div 
        className={`h-12 w-12 flex items-center justify-center cursor-pointer transition-colors hover:bg-[#37373d] ${
          isActive 
            ? 'text-white bg-[#37373d]' 
            : 'text-white/60 hover:text-white'
        }`}
        onClick={onClick}
      >
        {icon}
      </div>
    </div>
  );
}