import { TabData } from '@/types';
import { FileCode2, FileImage, FileJson, FileText, LucideIcon, Palette } from 'lucide-react';
import React from 'react';

// TabBar 설정값들
export const TAB_BAR_CONFIG = {
  defaultActive: 'home',
  maxTabs: 10,
  iconSize: 14,
} as const;

// 아이콘 팩토리 함수
const createIcon = (IconComponent: LucideIcon, size: number, className: string) => 
  React.createElement(IconComponent, { size, className });

// 파일 확장자별 아이콘 매핑
const getIconForExtension = (extension: string) => {
  const iconMap = {
    jsx: { component: FileCode2, className: 'text-[#61dafb]' },
    tsx: { component: FileCode2, className: 'text-[#3178c6]' },
    js: { component: FileCode2, className: 'text-[#f7df1e]' },
    ts: { component: FileCode2, className: 'text-[#3178c6]' },
    html: { component: FileImage, className: 'text-[#e34c26]' },
    css: { component: Palette, className: 'text-[#1572b6]' },
    json: { component: FileJson, className: 'text-[#cbcb41]' },
    md: { component: FileText, className: 'text-white' },
  } as const;

  const config = iconMap[extension as keyof typeof iconMap] || iconMap.md;
  return createIcon(config.component, TAB_BAR_CONFIG.iconSize, config.className);
};

// 탭 데이터 (함수로 감싸서 onClick 주입)
export const getTabData = (
  setActiveTab: (id: string) => void,
  onClose: (id: string) => void
): TabData[] => [
  {
    id: 'home',
    name: 'home',
    extension: 'jsx',
    icon: getIconForExtension('jsx'),
    color: '#61dafb'
  },
  {
    id: 'about',
    name: 'about',
    extension: 'html',
    icon: getIconForExtension('html'),
    color: '#e34c26'
  },
  {
    id: 'contact',
    name: 'contact',
    extension: 'css',
    icon: getIconForExtension('css'),
    color: '#1572b6'
  },
  {
    id: 'projects',
    name: 'projects',
    extension: 'js',
    icon: getIconForExtension('js'),
    color: '#f7df1e'
  },
  {
    id: 'blog',
    name: 'blog',
    extension: 'json',
    icon: getIconForExtension('json'),
    color: '#cbcb41'
  }
];

// 새 탭 생성용 헬퍼 함수 (타입 수정)
export const createNewTab = (
  name: string, 
  extension: string, 
  id?: string
): TabData => {  // Omit 제거하고 TabData 직접 사용
  const colors = {
    jsx: '#61dafb',
    tsx: '#3178c6', 
    js: '#f7df1e',
    ts: '#3178c6',
    html: '#e34c26',
    css: '#1572b6',
    json: '#cbcb41',
    md: '#ffffff',
  } as const;

  return {
    id: id || `${name}-${Date.now()}`,
    name,
    extension,
    icon: getIconForExtension(extension),
    color: colors[extension as keyof typeof colors] || '#ffffff'
  };
};