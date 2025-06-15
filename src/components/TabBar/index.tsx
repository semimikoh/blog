"use client";

import { getTabData, TAB_BAR_CONFIG } from '@/constant';
import { TabData } from '@/types';
import { useState } from "react";
import Tab from "./Tab";

export default function TabBar() {
  const [activeTabId, setActiveTabId] = useState<string>(TAB_BAR_CONFIG.defaultActive);
  
  const handleTabClick = (clickedId: string) => {
    setActiveTabId(clickedId);
  };
  
  // 탭 데이터는 순수 데이터만 가져오기
  const [tabs] = useState<TabData[]>(() => 
    getTabData(() => {}, () => {}) // 빈 함수들 전달 - 데이터만 사용
  );

  return (
    <div className="h-10 bg-[#2d2d30] border-b border-[#3e3e42] flex items-center">
      {/* Tab 컴포넌트 사용 */}
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          name={tab.name}
          extension={tab.extension}
          icon={tab.icon}
          color={tab.color}
          isActive={activeTabId === tab.id}
          onClick={handleTabClick}
        />
      ))}

      {/* 빈 공간 */}
      <div className="flex-1 bg-[#2d2d30]"></div>
    </div>
  );
}