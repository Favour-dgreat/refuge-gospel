import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

const ChurchPlantingAndMissions = () => {
    const nigeriaMissions = [
        { state: "Rivers State", location: "Ahoada & Annex", church: "Macedonia Church" },
        { state: "Akwa Ibom State", location: "Eket, Oron, & Uyo", church: "Sent Church" },
        { state: "Cross Rivers State", location: "Calabar & Annex", church: "Full Life Church" },
        { state: "Bayelsa State", location: "Yenagoa & Annex", church: "Base Church" },
        { state: "Delta State", location: "Asaba & Annex (Warri)", church: "God's Liaison Church" },
        { state: "Edo State", location: "Benin City & Annex", church: "Charismatic Church" },
        { state: "Ondo State", location: "Akure & Annex", church: "Glorious Church" },
        { state: "Ekiti State", location: "Ado-Ekiti & Annex (Efon Alaaye)", church: "God Sent Church" },
        { state: "Osun State", location: "Osogbo & Annex (Ilesa, Ile-Ife & Ede)", church: "Living Water Church" },
        { state: "Oyo State", location: "Ibadan & Annex", church: "Commissioned Church" },
        { state: "Ogun State", location: "Abeokuta & Annex (Ijebu Ode, Shagamu)", church: "His Presence Church" },
        { state: "Lagos State", location: "Ikeja & Annex", church: "Networks Church" },
        { state: "Kwara State", location: "Ilorin & Annex", church: "Mission Field Church" },
        { state: "Kogi State", location: "Lokoja & Annex", church: "Invitational Church" },
        { state: "Abuja FCT", location: "Abuja", church: "Liaison Church" },
        { state: "Kaduna State", location: "Kaduna & Annex", church: "Helps Church" },
        { state: "Plateau State", location: "Jos & Annex", church: "Lead Church" },
        { state: "Eastern States", location: "Umuahia, Owerri, Awka, Enugu, Abakaliki", church: "Field Base Church" }
    ];

    const africaMissions = [
        { country: "Ghana", location: "Kumasi, Accra & West Africa Nations", church: "Mission Field Churches" },
        { country: "East Africa", location: "Kenya, Ethiopia, Tanzania, Uganda, Rwanda & Congo DRC", church: "Global Gospel Churches" },
        { country: "Senegal", location: "Dakar & Annex", church: "Great Grace Church" },
        { country: "Gambia", location: "Banjul & Annex", church: "Hallelujah Church" },
        { country: "South Africa", location: "Durban, Johannesburg & Annex", church: "Assigned Church" },
        { country: "Central Africa", location: "Central Africa Nations & Annex", church: "Macedonia Churches" },
        { country: "North Africa", location: "North Africa Nations & Annex", church: "Rescue Mission Churches" }
    ];

    const globalMissions = [
        { country: "European Nations", location: "Europe & Annex", church: "Revival Aflame Churches" },
        { country: "USA", location: "California, New York City & Annex", church: "Refuge Headquarters" },
        { country: "South America", location: "Brazil, Argentina, Columbia, Venezuela, Bolivia, Ecuador, Peru, Uruguay, Suriname, Paraguay, Guyana", church: "Holy Spirit Churches" },
        { country: "Australia", location: "Canberra", church: "Mission Church" },
        { country: "Russia", location: "Moscow & Annex", church: "Revival Aflame Churches" },
        { country: "UAE", location: "Abu-Dhabi & Annex", church: "Light Churches" },
        { country: "China", location: "Beijing & Annex", church: "Gospel Churches" },
        { country: "Saudi Arabia", location: "Riyadh & Annex", church: "He's Alive Churches" },
        { country: "Israel", location: "Jerusalem & Annex", church: "Rehoboth Churches" }
    ];

    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-accent text-white py-24 px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif max-w-4xl mx-auto leading-tight"
                >
                    2026 Global Missions & Church Planting
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-white/80 max-w-2xl mx-auto"
                >
                    Expanding the Kingdom across Nigeria, Africa, and the Globe.
                </motion.p>
            </section>

            {/* Nigeria Missions */}
            <section className="py-24 px-4 bg-white text-gray-900">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <MapPin className="text-accent w-8 h-8 md:w-10 md:h-10" />
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-center">Nigeria Missions</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nigeriaMissions.map((mission, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-gray-50 p-6 md:p-8 rounded-[30px] border border-gray-100 hover:shadow-xl hover:border-accent/20 transition-all group"
                            >
                                <div className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{mission.state}</div>
                                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{mission.church}</h3>
                                <p className="text-gray-600 font-medium">{mission.location}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Missions */}
            <section className="py-24 px-4 bg-[#111] text-white">
                <div className="container mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <Globe className="text-accent w-8 h-8 md:w-10 md:h-10" />
                        <h2 className="text-3xl md:text-5xl font-bold font-serif text-center">Africa & Global Missions</h2>
                    </div>

                    <div className="space-y-16">
                        {/* Africa */}
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-8 border-l-4 border-accent pl-4">Africa Missions</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {africaMissions.map((mission, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white/5 p-6 md:p-8 rounded-[30px] border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-2">{mission.country}</div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{mission.church}</h3>
                                        <p className="text-white/80 font-medium">{mission.location}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Rest of World */}
                        <div>
                            <h3 className="text-2xl font-bold text-accent mb-8 border-l-4 border-accent pl-4">International Missions</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {globalMissions.map((mission, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white/5 p-6 md:p-8 rounded-[30px] border border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="text-sm font-bold text-white/60 uppercase tracking-widest mb-2">{mission.country}</div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{mission.church}</h3>
                                        <p className="text-white/80 font-medium">{mission.location}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChurchPlantingAndMissions;
