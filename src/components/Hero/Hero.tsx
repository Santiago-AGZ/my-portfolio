import { motion } from 'framer-motion';
import {FileText, FolderOpen } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import './Hero.css';

export function Hero() {
    const scrollToProjects = () => {
        const element = document.querySelector('#proyectos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
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

    return (
        <section id="inicio" className="hero">
            <div className="hero-bg-decoration" />

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Photo */}
                    <motion.div className="hero-photo-wrapper" variants={itemVariants}>
                        <div className="hero-photo-glow" />
                        <div className="hero-photo">
                            <div className="hero-photo-placeholder">
                                <img src="/foto-santiago.png" alt="Santiago Álvarez" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.p className="hero-greeting" variants={itemVariants}>
                        ¡Hola! 👋 Soy
                    </motion.p>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>

                    <motion.h2 className="hero-subtitle" variants={itemVariants}>
                        {personalInfo.role}
                    </motion.h2>

                    <motion.p className="hero-description" variants={itemVariants}>
                        {personalInfo.shortBio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div className="hero-cta" variants={itemVariants}>
                        <motion.button
                            className="btn btn-primary"
                            onClick={scrollToProjects}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FolderOpen size={20} />
                            Ver mis proyectos
                        </motion.button>
                        <motion.a
                            href="/HV Santiago Álvarez Gutiérrez.pdf"
                            className="btn btn-secondary"
                            download
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FileText size={20} />
                            Descargar CV
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
