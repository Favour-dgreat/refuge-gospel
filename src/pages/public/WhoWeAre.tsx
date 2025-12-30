import { motion } from 'framer-motion';
import bg from "../../assets/images/4.jpg"
const WhoWeAre = () => {
    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${bg})` }}
                />
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter"
                    >
                        Who We Are
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-white/80 font-serif leading-relaxed"
                    >
                        A church for all races, colors, and classes.
                    </motion.p>
                </div>
            </section>

            {/* Profile Section */}
            <section className="bg-white py-24 px-4 container mx-auto">
                <div className="max-w-4xl mx-auto space-y-8 text-center">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Profile</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Refuge Gospel International Church Inc.</h2>
                    <div className="prose prose-lg mx-auto text-lg md:text-xl lg:text-2xl text-gray-600 text-left md:text-center leading-relaxed">
                        <p>
                            Refuge Gospel Family is a church of all race, Colour and Class.
                            The Church is revolves in global discipleship, Missions Work and Charitable Sources aimed at humanity, peace for Kingdom growth: this is our Divine Commission and Mandate.
                        </p>
                        <p>
                            We preach Refuge Gospel Household to the oppressed, bondsmen, the afflicted and the destitute man in his/her State Of predicament to be saved, delivered, empowered, established to have Christ whole solace of the spirit, Soul and body (Matthew 11:28-30, Isaiah 42:5-12).
                        </p>
                        <p>
                            We are out to establish, maintain and operate subsidiary and charitable social service such as institutions, Schools, Hospitals, liberals, employment centres, departmental stores, and social welfare centers / schemes to aid the Fulfillment of our Commission and Mandate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Pillars Grid */}
            <section className="py-24 bg-gray-50 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Vision */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Vision</h3>
                            <p className="text-xl text-gray-600 font-medium">Giving Christ Solace to our World</p>
                        </div>

                        {/* Mission */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Mission</h3>
                            <p className="text-xl text-gray-600 font-medium">Enhancing A Better World to Live.</p>
                        </div>

                        {/* Aim & Objectives */}
                        <div className="bg-white p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Aim & Objectives</h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>To promote the kingdom of God here on earth</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>To uplift the quality of Life</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>To enhance a better world to Live</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>A rescue mission</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>To recruit a reliance service to Nations</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2"></span>
                                    <span>To give a whole solace to our World.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Mandate Details */}
            <section className="py-24 px-4 bg-accent text-white">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center font-serif">The Mandate</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Core Purpose</h4>
                                <p className="text-3xl font-bold">To Give Christ Solace to the destituted</p>
                                <p className="text-white/60 font-mono mt-1">Acts 5: 16, John 5: 2-3</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Liberation</h4>
                                <p className="text-3xl font-bold">Freedom for the Oppressed</p>
                                <p className="text-white/60 font-mono mt-1">Luke 8: 26-35</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Abundance</h4>
                                <p className="text-3xl font-bold">Prosperity for the Bonded</p>
                                <p className="text-white/60 font-mono mt-1">1 Chronicles 4: 9-10, Luke 5:1-7</p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Healing</h4>
                                <p className="text-3xl font-bold">Restoration to the afflicted</p>
                                <p className="text-white/60 font-mono mt-1">John 5:5-9, Luke 4: 38-41</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Victory</h4>
                                <p className="text-3xl font-bold">Victorious Life against the state of unpredicament</p>
                                <p className="text-white/60 font-mono mt-1">Luke 8:35, Acts 18:24-28</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2 text-white/90 uppercase tracking-widest">Leadership</h4>
                                <p className="text-3xl font-bold">Leadership hubs for a center stage of greatness, a Citadel of development and fulfilment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Schemes */}
            <section className="py-24 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Subsidiary Schemes</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We operate through various schemes to fulfill our mandate of global discipleship and charitable service.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Refuge Empowerment Subsidiary", "Economic Empowerment", "Health Supplements",
                            "Education for all", "Moral Revitalization", "Recreation centers",
                            "Library", "Rehabilitation Statuettes", "Transportation subsidiary",
                            "Housing subsidiary", "Hope for tomorrow initiative"
                        ].map((scheme, i) => (
                            <span key={i} className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium hover:bg-accent hover:text-white transition-colors cursor-default border border-gray-200">
                                {scheme}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;
