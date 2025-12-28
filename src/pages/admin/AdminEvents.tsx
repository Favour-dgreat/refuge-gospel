import { useState, useEffect } from 'react';
import { db, auth } from '../../lib/firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore'; // Import needed Firestore functions
import { Plus, Edit2, Trash2, X, Loader2 } from 'lucide-react';

interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    theme: string;
}

const AdminEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [editingEvent, setEditingEvent] = useState<Event | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        time: '',
        location: '',
        theme: ''
    });

    // Fetch Events
    const fetchEvents = async () => {
        setLoading(true);
        try {
            const querySnapshot = await getDocs(collection(db, "events"));
            const eventsData = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
                id: doc.id,
                ...doc.data()
            })) as Event[];
            setEvents(eventsData);
        } catch (error) {
            console.error("Error fetching events:", error);
            setError("Failed to fetch events. Check console/network.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!auth.currentUser) {
            setError("You are not logged in. Please logout and login again.");
            return;
        }

        setActionLoading(true);
        setError('');
        try {
            if (editingEvent) {
                // Update existing
                const eventRef = doc(db, "events", editingEvent.id);
                await updateDoc(eventRef, formData);
            } else {
                // Create new
                await addDoc(collection(db, "events"), formData);
            }
            await fetchEvents(); // Refresh list
            closeModal();
        } catch (error: any) {
            console.error("Error saving event:", error);
            setError("Failed to save event: " + (error.message || "Unknown error"));
        } finally {
            setActionLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this event?")) return;
        try {
            await deleteDoc(doc(db, "events", id));
            setEvents(prev => prev.filter(event => event.id !== id));
        } catch (error) {
            console.error("Error deleting event:", error);
        }
    };

    const openModal = (event?: Event) => {
        if (event) {
            setEditingEvent(event);
            setFormData({
                title: event.title,
                date: event.date,
                time: event.time,
                location: event.location,
                theme: event.theme
            });
        } else {
            setEditingEvent(null);
            setFormData({ title: '', date: '', time: '', location: '', theme: '' });
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingEvent(null);
    };

    if (loading && events.length === 0) {
        return <div className="flex justify-center items-center h-64"><Loader2 className="animate-spin" /></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Manage Events</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800"
                >
                    <Plus size={18} />
                    <span>Add New Event</span>
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-gray-600">Title</th>
                            <th className="p-4 font-semibold text-gray-600">Date & Time</th>
                            <th className="p-4 font-semibold text-gray-600">Location</th>
                            <th className="p-4 font-semibold text-gray-600">Theme</th>
                            <th className="p-4 font-semibold text-gray-600 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {events.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-gray-500">No events found. Create one to get started.</td>
                            </tr>
                        ) : (
                            events.map(event => (
                                <tr key={event.id} className="hover:bg-gray-50">
                                    <td className="p-4 font-medium">{event.title}</td>
                                    <td className="p-4 text-gray-600">{event.date} at {event.time}</td>
                                    <td className="p-4 text-gray-600">{event.location}</td>
                                    <td className="p-4 text-gray-600 italic">{event.theme}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <button
                                            onClick={() => openModal(event)}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                                        >
                                            <Edit2 size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(event.id)}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-xl font-bold mb-6">{editingEvent ? 'Edit Event' : 'Add New Event'}</h3>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input
                                        type="text"
                                        name="date"
                                        placeholder="e.g. Jan 10, 2026"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                    <input
                                        type="text"
                                        name="time"
                                        placeholder="e.g. 5:00 PM"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Theme (Optional)</label>
                                <input
                                    type="text"
                                    name="theme"
                                    value={formData.theme}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={actionLoading}
                                className="w-full bg-accent text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-opacity mt-2"
                            >
                                {actionLoading ? 'Saving...' : (editingEvent ? 'Update Event' : 'Create Event')}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminEvents;
