
const Governance = () => {
    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidden">
            <section className="bg-white text-gray-900 py-24 px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Governance & Leadership</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    The structure and leadership bodies that guide Refuge Gospel International Church.
                </p>
            </section>

            <div className=" container mx-auto px-4 py-20 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Administrative Offices */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-white flex-1"></div>
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-accent whitespace-nowrap">Administrative Offices</h2>
                            <div className="h-px bg-white flex-1"></div>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Office of The Bishop",
                                "Office of The National Pastor",
                                "Office of The Administrator",
                                "Office of The Intercontinental Pastor",
                                "Office of The Country Pastor",
                                "Office of The Regional Pastor",
                                "Office of The State Pastor",
                                "Office of The Provincial Pastor",
                                "Office of The Zonal Pastor",
                                "Office of The Area Pastor",
                                "Office of The District Pastor",
                                "Office of The Resident Pastor"
                            ].map((office, i) => (
                                <div key={i} className="flex items-center gap-6 p-4 border-b border-gray-100/10 ">
                                    <span className="text-gray-300 font-bold text-2xl font-serif">{(i + 1).toString().padStart(2, '0')}</span>
                                    <h3 className="text-lg font-bold text-white hover:text-accent transition-colors">{office}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operational Leadership & Councils */}
                    <div className="space-y-16">
                        {/* Operational */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-2xl font-bold uppercase tracking-widest text-accent whitespace-nowrap">Operational Leadership</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                            <div className="bg-gray-50 rounded-3xl p-8 space-y-3">
                                {[
                                    "Church Administrator", "Church Secretary", "Director of programme",
                                    "Director of Finance", "Director of Special Duty"
                                ].map((role, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                                        <span className="font-bold text-gray-700">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Councils */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-2xl font-bold uppercase tracking-widest text-accent whitespace-nowrap">Councils</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {["Deacons", "Ministers", "Workforce", "General"].map((council, i) => (
                                    <div key={i} className="bg-gray-900 text-white p-6 rounded-2xl text-center hover:bg-accent transition-colors">
                                        <span className="font-bold uppercase tracking-wider">{council} Council</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Membership */}
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <h2 className="text-2xl font-bold uppercase tracking-widest text-accent whitespace-nowrap">Membership</h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["Workforces", "Executives", "Registered Members", "Members"].map((member, i) => (
                                    <span key={i} className="px-4 py-2 rounded-lg border border-gray-200 text-white text-sm font-bold uppercase">
                                        {member}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Governance;
