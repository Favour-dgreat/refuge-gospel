import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Send, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.indexOf("application/json") !== -1) {
                data = await response.json();
            } else {
                const text = await response.text();
                console.error("Non-JSON response:", text);
                throw new Error("Server returned an invalid response. If you are developing locally, ensure you are using 'vercel dev' to support API functions.");
            }

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Name</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                        disabled={status === 'loading'}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your email"
                        disabled={status === 'loading'}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Subject</label>
                <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                    placeholder="Message subject"
                    disabled={status === 'loading'}
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Message</label>
                <textarea
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Write your message here..."
                    disabled={status === 'loading'}
                />
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                    <p>{errorMessage}</p>
                </div>
            )}

            {status === 'success' && (
                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5" />
                    <p>Message sent successfully! We will get back to you soon.</p>
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 group"
            >
                {status === 'loading' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    );
};

const Contact = () => {
    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-accent text-white py-24 px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-6 font-serif"
                >
                    Let's Talk
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light"
                >
                    God bless you. Reach out to us. We are available 24/7.
                </motion.p>
            </section>

            <section className="py-24 px-4 container mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        {/* Address */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-6 group"
                        >
                            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent/20 transition-colors">
                                <MapPin className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Umuashibuogu/Umunwogu,<br />
                                    Umulu Edegelem Igboh Etche<br />
                                    Rivers State, Nigeria
                                </p>
                            </div>
                        </motion.div>

                        {/* Service Times */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start gap-6 group"
                        >
                            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent/20 transition-colors">
                                <Clock className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Service Times</h3>
                                <div className="space-y-2 text-gray-400 text-lg">
                                    <p><span className="text-white font-medium">Mondays:</span> 6:00pm (GMT +1)</p>
                                    <p><span className="text-white font-medium">Wednesdays:</span> 6:00pm (GMT +1)</p>
                                    <p><span className="text-white font-medium">Sundays:</span> 8:00am (GMT +1)</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-start gap-6 group"
                        >
                            <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent/20 transition-colors">
                                <Mail className="w-8 h-8 text-accent" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
                                <div className="space-y-2 text-gray-400 text-lg">
                                    <p>contact@refugegospelinternationalchurch.org</p>
                                    <p>+234 810 299 2350</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-6 md:p-12 rounded-[30px] md:rounded-[40px] border border-white/10"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
                        <ContactForm />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
