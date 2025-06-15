// ActivityBar 관련 타입들

export interface ActivityBarProps {
    onToggleSidebar?: () => void;
  }
  
  export interface ActivityBarButtonProps {
    icon: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
  }
  
  export interface ButtonData {
    id: string;
    icon: React.ReactNode;
    onClick?: () => void;
  }
  
  export type ActivityBarButtonId = 'explorer' | 'search' | 'git' | 'extensions' | 'profile' | 'settings';