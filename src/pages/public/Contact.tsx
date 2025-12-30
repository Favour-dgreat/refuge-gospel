import { motion } from 'framer-motion';
import { MapPin, Clock, Send, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-black min-h-screen pt-24 overflow-hidden">
            {/* Header */}
            <section className="bg-accent text-white py-24 px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6 font-serif"
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
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

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
                                    <p>info@refugegospel.org</p>
                                    <p>+234 123 456 7890</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Subject</label>
                                <input
                                    type="text"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                                    placeholder="Message subject"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 uppercase tracking-widest font-bold">Message</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>
                            <button className="w-full bg-accent text-white font-bold py-4 rounded-xl hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 group">
                                <span>Send Message</span>
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
