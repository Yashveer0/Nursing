'use client';

import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Search,
  Shield,
  LogOut
} from 'lucide-react';
import { AdminSessionUser } from '@/app/admin/admin-data';

const menuItems = [
  { id: 'leads', label: 'Lead Management', icon: Users },
  { id: 'cms', label: 'CMS Editor', icon: FileText },
  { id: 'blog', label: 'Blog Manager', icon: LayoutDashboard },
  { id: 'seo', label: 'SEO Meta Editor', icon: Search },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'access', label: 'User Access', icon: Shield },
];

type AdminSidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  currentUser: AdminSessionUser | null;
};

export function AdminSidebar({
  activeTab,
  setActiveTab,
  onLogout,
  currentUser,
}: AdminSidebarProps) {
  return (
    <div className="w-64 bg-white border-r min-h-screen flex flex-col shadow-sm z-10">
      <div className="p-6 border-b">
        <div className="text-xl font-bold text-primary flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Admin Panel
        </div>
        {currentUser && (
          <div className="mt-3 rounded-md bg-gray-50 px-3 py-2">
            <p className="text-xs font-medium text-gray-800">{currentUser.name}</p>
            <p className="text-xs text-gray-500">{currentUser.role}</p>
          </div>
        )}
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-primary text-white shadow-md' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
}
