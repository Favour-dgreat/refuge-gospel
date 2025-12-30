import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Heart, ChevronRight } from 'lucide-react';

const Ministries = () => {
    const [activeTab, setActiveTab] = useState<'ministries' | 'fellowships' | 'departments'>('ministries');

    const data = {
        ministries: [
            "Men Ministry", "Women Ministry", "Youth Ministry", "Teenagers Ministry", "Children Ministry"
        ],
        fellowships: [
            { name: "Able Men", desc: "Men's Fellowship" },
            { name: "Women Of Integrity", desc: "Women's Fellowship" },
            { name: "Chosen Generation", desc: "Singles" },
            { name: "Joshua Generation", desc: "Teenagers" },
            { name: "God's Heritage", desc: "Children" },
            { name: "Jesus Family", desc: "Couples" },
            { name: "Greener Pasture", desc: "Entrepreneurs" },
            { name: "Vessel Of Honour", desc: "Ministers" },
        ],
        departments: [
            "Economy & Commercial", "Counseling & Guidance", "Finance & Audit", "Planning & Budgeting",
            "Media & Publicity", "Land & Housing", "Transport & Maintenance", "Safety & Security",
            "Technical, Electrical & Electronics", "Special Duties", "Welfare & Hospitality Duties",
            "Married & Family Life", "Women Affairs", "Church Education & Growth", "Worship & Music",
            "Evangelism & Fellow - Up", "Intercessory Tower", "Outreach & Mission", "Usher & Ushering",
            "Sanctuary, Beautifiers & Decoration", "Protocol & Information", "Leadership & Management",
            "Research & Development", "Sports & Social Affairs", "Pastors Care & Welfare",
            "Alter & Clerical Affairs", "Office Administration & Ministerial"
        ]
    };

    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidd">
            {/* Header */}
            <section className="bg-accent text-white py-24 px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Ministries & Departments</h1>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">
                    Serving God through service to humanity. Find where you belong in the body of Christ.
                </p>
            </section>

            {/* Navigation Tabs */}
            <div className="container mx-auto px-4 -mt-8 relative z-10 mb-16">
                <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden p-2 max-w-3xl mx-auto">
                    <button
                        onClick={() => setActiveTab('ministries')}
                        className={`flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-widest transition-all ${activeTab === 'ministries' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        Ministries
                    </button>
                    <button
                        onClick={() => setActiveTab('fellowships')}
                        className={`flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-widest transition-all ${activeTab === 'fellowships' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        Fellowships
                    </button>
                    <button
                        onClick={() => setActiveTab('departments')}
                        className={`flex-1 py-4 px-6 rounded-xl font-bold uppercase tracking-widest transition-all ${activeTab === 'departments' ? 'bg-black text-white' : 'text-gray-500 hover:bg-gray-100'}`}
                    >
                        Departments
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="container mx-auto px-4 pb-24 max-w-6xl">
                <AnimatePresence mode='wait'>
                    {activeTab === 'ministries' && (
                        <motion.div
                            key="ministries"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {data.ministries.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{item}</h3>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'fellowships' && (
                        <motion.div
                            key="fellowships"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {data.fellowships.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        <Heart size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-500 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === 'departments' && (
                        <motion.div
                            key="departments"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                            {data.departments.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 group">
                                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                                        <ChevronRight className="text-gray-400 group-hover:text-accent" size={20} />
                                    </div>
                                    <h3 className="font-bold text-gray-700">{item}</h3>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Ministries;
