import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] text-gray-400 py-16 text-center md:text-left" id="contact">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

                    {/* Logo & Tagline */}
                    <div>
                        <div className="mb-4">
                            {/* Placeholder for logo */}
                            <span className="text-2xl font-bold text-white tracking-widest">RGIC</span>
                        </div>
                        <p className="leading-relaxed text-sm">
                            Refuge Gospel International Church.<br />
                            Giving Solace to your Spirit, Soul and Body.
                        </p>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-white text-base font-bold uppercase tracking-widest mb-4">Our Location</h4>
                        <p className="leading-relaxed text-sm">
                            Umuashibuogu/Umunwogu,<br />
                            Umulu Edegelem Igboh Etche<br />
                            Rivers State, Nigeria
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-base font-bold uppercase tracking-widest mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/#about" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link to="/#events" className="hover:text-white transition-colors">Events</Link></li>
                            <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <div className="mb-4 md:mb-0">
                        <span>&copy; Copyright {currentYear} All Rights Reserved.</span>
                    </div>
                    <div>
                        <Link to="/" className="hover:text-white">Refuge Gospel International Church</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
