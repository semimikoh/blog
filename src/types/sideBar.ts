// Sidebar 관련 타입들

export interface SidebarProps {
    isOpen?: boolean;
  }
  
  export interface FileItem {
    id: string;
    name: string;
    type: 'file' | 'folder';
    extension?: string;
    children?: FileItem[];
    isExpanded?: boolean;
  }
  
  export interface FolderTreeProps {
    items: FileItem[];
    onItemClick?: (item: FileItem) => void;
  }