import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Users, Clock, BookOpen } from 'lucide-react';
import { aboutMe, personalInfo, education, complementaryEducation } from '../../data/portfolio';
import './About.css';

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    const highlightIcons = [GraduationCap, Briefcase, Users, MapPin];

    return (
        <section id="sobre-mi" className="about section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Sobre <span className="gradient-text">mí</span>
                    </h2>
                    <p>Conoce un poco más sobre mi trayectoria y lo que me apasiona</p>
                </motion.div>

                <motion.div
                    className="about-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Main Content */}
                    <motion.div className="about-content glass-card" variants={itemVariants}>
                        <div className="about-text">
                            {aboutMe.paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="about-location">
                            <MapPin size={18} />
                            <span>{personalInfo.location}</span>
                        </div>
                    </motion.div>

                    {/* Highlights & Education */}
                    <div className="about-sidebar">
                        {/* Highlights */}
                        <motion.div className="about-highlights glass-card" variants={itemVariants}>
                            <h3>Datos Clave</h3>
                            <div className="highlights-grid">
                                {aboutMe.highlights.map((highlight, index) => {
                                    const Icon = highlightIcons[index];
                                    return (
                                        <div key={highlight.label} className="highlight-item">
                                            <div className="highlight-icon">
                                                <Icon size={20} />
                                            </div>
                                            <div className="highlight-content">
                                                <span className="highlight-value">{highlight.value}</span>
                                                <span className="highlight-label">{highlight.label}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Education */}
                        <motion.div className="about-education glass-card" variants={itemVariants}>
                            <h3>
                                <GraduationCap size={20} />
                                Formación Académica
                            </h3>
                            <div className="education-list">
                                {education.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <div className="education-year">
                                            {edu.year}
                                            {edu.current && <span className="current-badge">En curso</span>}
                                        </div>
                                        <div className="education-content">
                                            <h4>{edu.title}</h4>
                                            <p>{edu.institution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Complementary Education - Full Width */}
                <motion.div
                    className="complementary-education glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>
                        <BookOpen size={20} />
                        Formación Complementaria
                    </h3>
                    <div className="complementary-grid">
                        {complementaryEducation.map((course, index) => (
                            <motion.div
                                key={index}
                                className="complementary-item"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                            >
                                <div className="complementary-header">
                                    <h4>{course.title}</h4>
                                    <span className="complementary-year">{course.year}</span>
                                </div>
                                <p className="complementary-institution">{course.institution}</p>
                                <div className="complementary-hours">
                                    <Clock size={14} />
                                    <span>{course.hours} horas</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
