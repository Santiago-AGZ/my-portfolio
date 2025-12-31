import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Calendar, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { projects } from '../../data/portfolio';
import { GalleryModal } from './GalleryModal';
import './Projects.css';

interface Project {
    id: string;
    title: string;
    description: string;
    period: string;
    technologies: string[];
    features: string[];
    impact?: string;
    demoUrl: string | null;
    githubUrl: string;
    images: string[];
    color: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <>
            <motion.article
                className="project-card glass-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                style={{ '--project-color': project.color } as React.CSSProperties}
            >
                {/* Header */}
                <div className="project-header">
                    <div className="project-indicator" />
                    <div className="project-period">
                        <Calendar size={14} />
                        <span>{project.period}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Technologies */}
                    <div className="project-technologies">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Features Toggle */}
                    <motion.button
                        className="features-toggle"
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Ver funcionalidades</span>
                        <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronRight size={18} />
                        </motion.div>
                    </motion.button>

                    {/* Features List */}
                    <motion.div
                        className="project-features"
                        initial={false}
                        animate={{
                            height: isExpanded ? 'auto' : 0,
                            opacity: isExpanded ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul>
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        {project.impact && (
                            <p className="project-impact">
                                <strong>Impacto:</strong> {project.impact}
                            </p>
                        )}
                    </motion.div>
                </div>

                {/* Footer Actions */}
                <div className="project-actions">
                    {project.images && project.images.length > 0 && (
                        <motion.button
                            onClick={() => setIsGalleryOpen(true)}
                            className="btn btn-secondary project-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ImageIcon size={18} />
                            Ver Galería
                        </motion.button>
                    )}

                    {project.demoUrl && (
                        <motion.a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary project-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ExternalLink size={18} />
                            Ver Demo
                        </motion.a>
                    )}
                    <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary project-btn"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Github size={18} />
                        GitHub
                    </motion.a>
                </div>
            </motion.article>

            <GalleryModal
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                images={project.images}
                title={project.title}
            />
        </>
    );
}

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="proyectos" className="projects section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Mis <span className="gradient-text">Proyectos</span>
                    </h2>
                    <p>Proyectos destacados en los que he trabajado</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
