"use client";

import { ACTIVITY_BAR_CONFIG, getBottomButtons, getTopButtons } from '@/constant';
import { ActivityBarButtonId, ActivityBarProps } from '@/types';
import { useState } from "react";
import ActivityBarButton from "./ActivityBarButton";

export default function ActivityBar({ onToggleSidebar }: ActivityBarProps) {
  const [activeButton, setActiveButton] = useState<ActivityBarButtonId>(
    ACTIVITY_BAR_CONFIG.defaultActive
  );

  // 버튼 데이터 가져오기
  const topButtons = getTopButtons(setActiveButton);
  const bottomButtons = getBottomButtons(setActiveButton);

  return (
    <div className="w-12 bg-[#333333] border-r border-[#3e3e42] flex flex-col h-full">
      {/* 상단 버튼들 */}
      <div className="flex flex-col flex-shrink-0">
        {topButtons.map((button) => (
          <ActivityBarButton
            key={button.id}
            icon={button.icon}
            isActive={activeButton === button.id}
            onClick={button.onClick}
          />
        ))}
      </div>

      {/* 중간 여백 */}
      <div className="flex-1 min-h-4"></div>

      {/* 하단 버튼들 */}
      <div className={`flex flex-col flex-shrink-0 ${ACTIVITY_BAR_CONFIG.bottomPadding}`}>
        {bottomButtons.map((button) => (
          <ActivityBarButton
            key={button.id}
            icon={button.icon}
            isActive={activeButton === button.id}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
}