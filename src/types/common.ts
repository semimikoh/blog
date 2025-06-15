// 공통 타입들

export interface BaseComponent {
    className?: string;
    children?: React.ReactNode;
  }
  
  export interface ClickableComponent {
    onClick?: () => void;
    disabled?: boolean;
  }
  
  export interface IconComponent {
    icon: React.ReactNode;
    size?: number;
  }
  
  export interface TabItem {
    id: string;
    name: string;
    extension: string;
    icon: string;
    color: string;
    isActive: boolean;
  }