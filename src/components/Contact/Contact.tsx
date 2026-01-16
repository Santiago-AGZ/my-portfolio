import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolio';
import { useClipboard } from '../../hooks/useClipboard';
import './Contact.css';


export function Contact() {
    const ref = useRef(null);
    const formRef = useRef<HTMLFormElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const emailClipboard = useClipboard();
    const phoneClipboard = useClipboard();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Get current date and time in a readable format
        const now = new Date();
        const time = now.toLocaleString('es-CO', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });

        // Template parameters matching your EmailJS template
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            time: time,
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );



            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const maskedEmail = personalInfo.email.primary.replace(/(.{15}).*(@)/, '$1...$2');
    const maskedPhone = personalInfo.phone.replace(/(.{8}).*(.{3})$/, '$1****$2');

    return (
        <section id="contacto" className="contact section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        <span className="gradient-text">Contacto</span>
                    </h2>
                    <p>¿Quieres saber más o ponerte en contacto conmigo? ¡Hablemos!</p>
                </motion.div>

                <motion.div
                    className="contact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Contact Info */}
                    <motion.div className="contact-info" variants={itemVariants}>
                        {/* QR Code Section */}
                        <div className="qr-section glass-card">
                            <div className="qr-code">
                                <div className="qr-placeholder">
                                    <img
                                        src="/qr-code.png"
                                        alt="QR Code"
                                    />
                                </div>
                            </div>
                            <p className="qr-description">
                                Escanea el código QR para ver mis datos de contacto
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="contact-details glass-card">
                            <h3>Información de contacto</h3>

                            {/* Email */}
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="contact-content">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">{maskedEmail}</span>
                                </div>
                                <motion.button
                                    className="copy-btn"
                                    onClick={() => emailClipboard.copy(personalInfo.email.primary)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Copiar email"
                                >
                                    {emailClipboard.copied ? <Check size={18} /> : <Copy size={18} />}
                                </motion.button>
                            </div>

                            {/* Phone */}
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="contact-content">
                                    <span className="contact-label">Teléfono</span>
                                    <span className="contact-value">{maskedPhone}</span>
                                </div>
                                <motion.button
                                    className="copy-btn"
                                    onClick={() => phoneClipboard.copy(personalInfo.phone)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Copiar teléfono"
                                >
                                    {phoneClipboard.copied ? <Check size={18} /> : <Copy size={18} />}
                                </motion.button>
                            </div>

                            {/* Location */}
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <MapPin size={20} />
                                </div>
                                <div className="contact-content">
                                    <span className="contact-label">Ubicación</span>
                                    <span className="contact-value">{personalInfo.location}</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="social-links">
                                <motion.a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="GitHub"
                                >
                                    <Github size={22} />
                                </motion.a>
                                <motion.a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={22} />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div className="contact-form-wrapper glass-card" variants={itemVariants}>
                        <h3>Envíame un mensaje</h3>
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Asunto</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>Selecciona un motivo</option>
                                    <option value="Oferta de prácticas">Oferta de prácticas</option>
                                    <option value="Propuesta de colaboración">Propuesta de colaboración</option>
                                    <option value="Pregunta general">Pregunta general</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    placeholder="Cuéntame sobre tu proyecto..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="loading-spinner" />
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Enviar mensaje
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.p
                                    className="form-status success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ¡Mensaje enviado correctamente! Te responderé pronto.
                                </motion.p>
                            )}

                            {submitStatus === 'error' && (
                                <motion.p
                                    className="form-status error"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}