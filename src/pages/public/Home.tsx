
import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import img2 from '../../assets/images/2.jpg';
import img4 from '../../assets/images/4.jpg';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
import img7 from '../../assets/images/7.jpg';
import img9 from '../../assets/images/tithe.jpg';
import img10 from '../../assets/images/worship.jpg';
import img16 from '../../assets/images/16.jpg';
import img14 from '../../assets/images/14.jpg';
import img15 from '../../assets/images/15.jpg';
import img18 from '../../assets/images/messages.jpeg';
const Home = () => {
    // State for events
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "events"));
                const eventsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            {/* HERO SECTION */}
            <section className="relative bg-black min-h-screen pt-20 overflow-hidden">
                {/* Background Grid - Scattered Layout */}
                <div className="grid bg-black border-2 rounded-[40px] mt-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 p-5 opacity-40">
                    {/* Row 1 */}
                    <div className="col-span-1 row-span-2 overflow-hidden ">
                        <img src={img6} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden ">
                        <img src={img16} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-3 row-span-2 overflow-hidden hidden md:block">
                        <img src={img15} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden ">
                        <img src={img5} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-2 overflow-hidden ">
                        <img src={img2} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Row 2 (fills gaps) */}
                    <div className="col-span-1 row-span-1 overflow-hidden ">
                        <img src={img4} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden hidden lg:block">
                        <img src={img7} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-4 row-span-3 overflow-hidden hidden lg:block">
                        <img src={img14} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>

                    {/* Row 3 */}
                    {/* <div className="col-span-2 row-span-1 overflow-hidden ">
                        <img src={img10} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-2 overflow-hidden ">
                        <img src={img1} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden ">
                        <img src={img8} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-2 row-span-2 overflow-hidden ">
                        <img src={img9} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 center" />
                    </div> */}

                    {/* Row 4 */}
                    {/* <div className="col-span-1 row-span-1 overflow-hidden ">
                        <img src={img11} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
                        <img src={img15} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 " />
                    </div>
                    <div className="col-span-1 row-span-1 overflow-hidden hidden md:block">
                        <img src={img17} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 " />
                    </div> */}
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-medium text-white mb-2 drop-shadow-lg">Welcome to</h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                        Refuge Gospel <br /> International Church
                    </h1>
                    <p className="text-xl md:text-3xl text-white/90 mb-10 font-light drop-shadow-md">(Theatre of Solace)</p>

                    <div className="flex flex-col md:flex-row gap-6">
                        <a href="https://web.facebook.com/THEATEROFSOLACE/live_videos" className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:opacity-90 transition-opacity shadow-lg">
                            Livestream
                        </a>
                        <a href="#give" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent hover:border-accent transition-colors shadow-lg">
                            Give Online
                        </a>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            {/* ABOUT SECTION - THE MANDATE */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Quote Banner */}
                    <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
                        <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed font-serif">
                            "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light."
                        </p>
                        <p className="text-gray-500 uppercase tracking-widest font-bold">Matthew 11:28-30 NKJV</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left Image */}
                        <div className="relative rounded-[30px] overflow-hidden aspect-[4/5] shadow-2xl">
                            <img src={img18} alt="The Mandate" className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-700" />
                        </div>

                        {/* Right Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-accent text-sm font-bold uppercase tracking-[0.2em]">The Mandate</h3>
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                    Giving Solace  <br />
                                    to Spirit, Soul <br />
                                    & Body.
                                </h2>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                From 1997 to date, God has authored every chapter of our story,
                                increasingly bringing the Gospel to the unsaved, transforming the lives of people,
                                and raising disciples for Christ—globally.
                            </p>

                            <button className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:opacity-90 transition-opacity shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAITH WALK SECTION */}
            <section className="py-24 bg-accent relative overflow-hidden">
                {/* Watermark/Background Text */}
                <div className="absolute top-10 left-0 w-full text-center pointer-events-none opacity-10">
                    <span className="text-8xl font-bold uppercase text-white whitespace-nowrap">next steps in your journey</span>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Your Faith Walk</h2>
                        <p className="text-white/80 font-medium">No matter where you are in your faith journey, there is always a next step.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="group relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden cursor-pointer shadow-xl">
                            <img src={img4} alt="Learn" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute top-6 left-6">
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1">Learn</span>
                            </div>
                            <div className="absolute bottom-10 left-6">
                                <h3 className="text-2xl font-bold text-white leading-tight">About The<br />Church</h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden cursor-pointer shadow-xl">
                            <img src={img10} alt="Worship" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute top-6 left-6">
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1">Worship</span>
                            </div>
                            <div className="absolute bottom-10 left-6">
                                <h3 className="text-2xl font-bold text-white leading-tight">View<br />Service Times</h3>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden cursor-pointer shadow-xl">
                            <img src={img6} alt="Get Involved" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-purple-900/40 " />
                            <div className="absolute top-6 left-6">
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1">Get Involved</span>
                            </div>
                            <div className="absolute bottom-10 left-6">
                                <h3 className="text-2xl font-bold text-white leading-tight">Upcoming<br />Programs</h3>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative h-[300px] md:h-[400px] rounded-[30px] overflow-hidden cursor-pointer shadow-xl">
                            <img src={img9} alt="Give" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                            <div className="absolute top-6 left-6">
                                <span className="text-white/80 text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1">Give</span>
                            </div>
                            <div className="absolute bottom-10 left-6">
                                <h3 className="text-2xl font-bold text-white leading-tight">Give<br />Offerings</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EVENTS SECTION */}
            <section id="events" className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* WATCHWORD SECTION */}
                    <div className="mb-20">
                        <div className="bg-gray-50 rounded-[30px] md:rounded-[40px] p-8 md:p-16 text-center border border-gray-100 shadow-sm max-w-5xl mx-auto">
                            <span className="text-accent font-bold uppercase tracking-[0.2em] mb-4 block text-sm md:text-base">2026 Watchword</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">Our Year of Being On Eagle's Wings</h2>

                            <div className="relative max-w-3xl mx-auto">
                                <span className="text-9xl text-accent/10 absolute -top-10 -left-10 font-serif leading-none">"</span>
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic relative z-10">
                                    I Decree and Declare I am riding on Jehovah Eagle's Wings, my humble and small estate shall be greatly increased, and I shall be transformed into a mighty and powerful nation, hallelujah!
                                </p>
                                <span className="text-9xl text-accent/10 absolute -bottom-20 -right-10 font-serif leading-none">"</span>
                            </div>

                            <div className="mt-8 flex items-center sm:text-block justify-center gap-4 text-gray-500 font-medium uppercase tracking-widest text-sm">
                                <span>Exodus 19:4-5</span>
                                <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                                <span>Isaiah 60:22</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Upcoming Events</h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {events.map(event => (
                            <div key={event.id} className="bg-gray-50 rounded-[30px] p-8 md:p-10 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                                <div className="flex flex-col h-full">
                                    <div className="mb-6">
                                        <div className="w-12 h-1 bg-accent mb-6"></div>
                                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-3">{event.title}</h3>
                                        <p className="text-accent font-medium tracking-wide uppercase text-sm">Theme: {event.theme}</p>
                                    </div>

                                    <div className="mt-auto space-y-4 pt-6 border-t border-gray-200">
                                        <div className="flex items-center gap-4 text-gray-600 group-hover:text-gray-900 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-accent">
                                                <Calendar size={18} />
                                            </div>
                                            <span className="font-medium">{event.date}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-600 group-hover:text-gray-900 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-accent">
                                                <Clock size={18} />
                                            </div>
                                            <span className="font-medium">{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-gray-600 group-hover:text-gray-900 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-accent">
                                                <MapPin size={18} />
                                            </div>
                                            <span className="font-medium">{event.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PASTOR SECTION */}
            <section className="py-4">
                <div className="w-full">
                    <div className="bg-accent rounded-[30px] md:rounded-[50px] p-8 md:p-24 text-white">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-bold mb-2">Bishop Favour Adekunle Adeshina (Snr)</h2>
                                    <p className="text-xl md:text-2xl text-white/80 font-medium">Presiding Bishop</p>
                                </div>

                                <p className="text-xl text-white/90 leading-relaxed font-light">
                                    Bishop Favour Adekunle Adeshina (Snr.) serves at Refuge Gospel International Church as the Presiding Bishop.
                                    A prolific author and love-motivated philanthropist, his passion for soul-winning is only surpassed by his deep love for God.
                                    He is married, and together, they have a thriving, glorious family.
                                </p>

                                <h3 className="text-3xl md:text-5xl font-bold font-serif italic mt-8">You will love it here!</h3>
                            </div>

                            {/* Right Image/Video */}
                            <div className="relative aspect-square rounded-[20px] overflow-hidden bg-gray-900 shadow-2xl group cursor-pointer">
                                <img src={img5} alt="Bishop Favour Adekunle Adeshina (Snr)" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONNECT SECTION */}
            <section id="give" className="give py-24 bg-white px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Testimony */}
                        <div className="space-y-6">
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Testimonies</span>
                            <h3 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Share Your Testimony</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Testimonies are proofs of God's intervention in the affairs of men. They inspire hope and build trust in God.
                                We would love to hear what God has done for you.
                            </p>
                            <a href="https://forms.office.com/e/cPKSgqaM67" target="_blank" rel="noreferrer" className="inline-block px-8 py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-opacity-90 transition-opacity rounded-full shadow-lg">
                                Share Your Testimony
                            </a>
                        </div>

                        {/* Giving */}
                        <div className="space-y-6">
                            <span className="text-accent font-bold uppercase tracking-widest text-sm">Giving</span>
                            <h3 className="text-3xl md:text-4xl font-bold font-serif text-gray-900">Give Your Offering & Tithes</h3>
                            <div className="bg-gray-50 p-8 rounded-[30px] border border-gray-100">
                                <p className="text-gray-600 italic mb-6 text-lg">
                                    "Let each one give as he has made up his own mind... for God loves a cheerful giver." <br />
                                    <span className="font-bold not-italic text-sm mt-2 block">- 2 Corinthians 9:7</span>
                                </p>
                                <div className="space-y-2 text-gray-800">
                                    <p><strong className="text-accent">Bank:</strong> FirstBank</p>
                                    <p><strong className="text-accent">Account Number:</strong> 2017815769</p>
                                    <p><strong className="text-accent">Name:</strong> Refuge Gospel International Church Inc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEE YOU IN CHURCH SECTION */}
            <section>
                <div className="w-full px-4 md:px-8 pb-12">
                    <div className="relative rounded-[60px] overflow-hidden min-h-[700px] flex flex-col items-center justify-between text-center border-[14px] border-[#FFB86C] shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img src={img4} alt="Church Crowd" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
                        </div>

                        {/* Top Spacer */}
                        <div className="flex-1"></div>

                        {/* Main Content */}
                        <div className="relative z-10 max-w-5xl mx-auto space-y-8 px-4">
                            <div className="space-y-4">
                                <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                                    See You In<br />Service
                                </h2>
                                <p className="text-xl md:text-3xl text-white/90 font-medium max-w-2xl mx-auto">
                                    There's no place like home. Join us for a life-transforming experience.
                                </p>
                            </div>

                            <a
                                href="https://maps.app.goo.gl/9TrndmFSbQmGLJZm9?g_st=i&utm_campaign=ac-im"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-12 py-5 bg-white text-black text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#FFB86C] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
                            >
                                Get Directions
                            </a>

                            <div className="mt-20 w-full max-w-6xl mx-auto">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tighter">Satellite Churches</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                    {[
                                        "Nihi Etche",
                                        "Odufor Etche",
                                        "Afara Etche",
                                        "Ulakwo Etche",
                                        "Akwa Etche",
                                        "Odagwa Etche"
                                    ].map((location, index) => (
                                        <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 group cursor-default">
                                            <div className="p-3 rounded-full bg-white/10 group-hover:bg-[#FFB86C] transition-colors">
                                                <MapPin className="text-[#FFB86C] group-hover:text-white w-6 h-6 transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-white font-bold text-xl leading-tight">{location}</p>
                                                <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Rivers State</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>



                        </div>

                        {/* Service Times Footer */}
                        <div className="relative z-10 w-full mt-auto pt-20 pb-12 px-8">
                            <div className="grid md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto border-t border-white/20 pt-12">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-center gap-3 text-[#FFB86C]">
                                        <div className="p-2 bg-white/10 rounded-full">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold uppercase tracking-wider">Sunday Service</h4>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-light text-white">8:00am <span className="text-white/40 mx-2">-</span> 11:00am</p>
                                    <p className="text-sm text-white/60 font-mono uppercase tracking-widest">GMT +1</p>
                                </div>
                                 <div className="space-y-3">
                                    <div className="flex items-center justify-center gap-3 text-[#FFB86C]">
                                        <div className="p-2 bg-white/10 rounded-full">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold uppercase tracking-wider">Monday Bible Study Service</h4>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-light text-white">6:00pm <span className="text-white/40 mx-2">-</span> 11:00am</p>
                                    <p className="text-sm text-white/60 font-mono uppercase tracking-widest">GMT +1</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-center gap-3 text-[#FFB86C]">
                                        <div className="p-2 bg-white/10 rounded-full">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold uppercase tracking-wider">Wednesday Prayer Service</h4>
                                    </div>
                                    <p className="text-2xl md:text-3xl font-light text-white">6:00pm</p>
                                    <p className="text-sm text-white/60 font-mono uppercase tracking-widest">GMT +1</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Arrow */}
                        {/* Decorative Arrow - Click to Scroll Top */}
                        <div
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="absolute bottom-8 right-8 z-20 hidden md:flex items-center justify-center w-16 h-16 bg-[#FFB86C] rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer group"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
