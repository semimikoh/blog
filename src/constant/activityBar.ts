import { ActivityBarButtonId, ButtonData } from '@/types';
import { Files, GitBranch, LucideIcon, Package, Search, Settings, User } from "lucide-react";
import React from 'react';

// ActivityBar 설정값들
export const ACTIVITY_BAR_CONFIG = {
  defaultActive: 'explorer' as ActivityBarButtonId,
  iconSize: 24,
  bottomPadding: 'pb-4',
} as const;

// 아이콘 팩토리 함수들
const createIcon = (IconComponent: LucideIcon, size: number) => 
  React.createElement(IconComponent, { size });

// 상단 버튼 데이터 (함수로 감싸서 onClick 주입)
export const getTopButtons = (
  setActiveButton: (id: ActivityBarButtonId) => void
): ButtonData[] => [
  { 
    id: 'explorer', 
    icon: createIcon(Files, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('explorer')
  },
  { 
    id: 'search', 
    icon: createIcon(Search, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('search')
  },
  { 
    id: 'git', 
    icon: createIcon(GitBranch, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('git')
  },
  { 
    id: 'extensions', 
    icon: createIcon(Package, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('extensions')
  },
];

// 하단 버튼 데이터
export const getBottomButtons = (
  setActiveButton: (id: ActivityBarButtonId) => void
): ButtonData[] => [
  { 
    id: 'profile', 
    icon: createIcon(User, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('profile')
  },
  { 
    id: 'settings', 
    icon: createIcon(Settings, ACTIVITY_BAR_CONFIG.iconSize),
    onClick: () => setActiveButton('settings')
  },
];