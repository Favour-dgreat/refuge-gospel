import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
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
                            <img src={logo} alt="RGIC Logo" className="h-20 w-auto inline-block mr-3" />
                        </div>
                        <p className="leading-relaxed text-sm">
                            Refuge Gospel International Church.<br />
                            Giving Solace to your Spirit, Soul and Body.
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-6">
                            <a href="https://web.facebook.com/THEATEROFSOLACE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="https://www.instagram.com/refugegospel/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                            </a>
                            <a href="https://x.com/RefugeGospel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                        </div>
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
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
