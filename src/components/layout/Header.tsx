import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import logo from '../../assets/images/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Livestream', path: '/#livestream' },
        { name: 'Give', path: '/#give' },
        { name: 'The Church', path: '/#church' },
        { name: 'Store', path: '/#store' },
        { name: 'Ministries', path: '/#ministries' },
        { name: 'Resources', path: '/#resources' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-2' : 'bg-transparent py-1'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold text-white uppercase tracking-wider">
                        <img src={logo} alt="RGIC Logo" className="h-24" />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="text-white/80 hover:text-white uppercase text-xs font-semibold tracking-[2px] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Social Icons */}
                    <div className="flex items-center space-x-4 border-l border-white/20 pl-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <Facebook size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <Instagram size={18} />
                        </a>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-black/95 p-6 md:hidden">
                        <ul className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="block text-white/80 hover:text-white uppercase text-sm font-semibold tracking-widest"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
