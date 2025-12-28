import { useState } from 'react';
import { LayoutDashboard, Calendar, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import AdminEvents from './AdminEvents';

const Dashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('events');

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate('/admin/login');
        } catch (error) {
            console.error("Error signing out", error);
            navigate('/admin/login'); // Force navigate anyway
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-black text-white hidden md:flex flex-col">
                <div className="p-6 border-b border-gray-800">
                    <span className="text-xl font-bold tracking-wider">RGIC ADMIN</span>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`flex items-center gap-3 w-full px-4 py-2 rounded text-left ${activeTab === 'dashboard' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`flex items-center gap-3 w-full px-4 py-2 rounded text-left ${activeTab === 'events' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
                    >
                        <Calendar size={20} />
                        <span>Events</span>
                    </button>
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 capitalize">{activeTab} Manager</h1>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                    {activeTab === 'dashboard' && (
                        <div className="text-center text-gray-500 py-12">
                            <p>Welcome to the Admin Dashboard.</p>
                            <p>Select "Events" from the sidebar to manage church events.</p>
                        </div>
                    )}

                    {activeTab === 'events' && (
                        <AdminEvents />
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
