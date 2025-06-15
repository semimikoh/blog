// types/tabBar.ts

export interface TabBarProps {
    className?: string;
  }
  
  export interface TabProps {
    id: string;
    name: string;
    extension: string;
    icon: React.ReactNode;  // React.ReactNode로 수정
    color: string;
    isActive?: boolean;
    onClose?: (id: string) => void;
    onClick?: (id: string) => void;
  }
  
  export interface TabData {
    id: string;
    name: string;
    extension: string;
    icon: React.ReactNode;  // React.ReactNode로 수정
    color: string;
  }
  
  export type FileExtension = 'jsx' | 'html' | 'css' | 'js' | 'json' | 'ts' | 'tsx' | 'md';