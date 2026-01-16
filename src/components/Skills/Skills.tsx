import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { skills } from '../../data/portfolio';
import './Skills.css';

// Map of skill icon to display name
const skillNames: Record<string, string> = {
    typescript: 'TypeScript',
    javascript: 'JavaScript',
    java: 'Java',
    python: 'Python',
    html: 'HTML5',
    css: 'CSS3',
    react: 'React',
    vite: 'Vite',
    tailwind: 'Tailwind CSS',
    spring: 'Spring Boot',
    nodejs: 'Node.js',
    postgres: 'PostgreSQL',
    supabase: 'Supabase',
    firebase: 'Firebase',
    git: 'Git',
    github: 'GitHub',
    docker: 'Docker',
    vercel: 'Vercel',
    vscode: 'VS Code',
    blender: 'Blender',
    threejs: 'Three.js',
    figma: 'Figma',
};

interface SkillCategoryProps {
    title: string;
    icons: string[];
    theme: 'dark' | 'light';
    delay: number;
}

function SkillCategory({ title, icons, theme, delay }: SkillCategoryProps) {
    return (
        <motion.div
            className="skill-category glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
        >
            <h3>{title}</h3>

            <div className="skill-icons-wrapper">
                <div className="skill-icons-grid">
                    {icons.map(icon => (
                        <div key={icon} className="skill-icon">
                            <img
                                src={`https://skillicons.dev/icons?i=${icon}&theme=${theme}`}
                                alt={skillNames[icon] || icon}
                                loading="lazy"
                            />
                            <span className="skill-tooltip">
                                {skillNames[icon] || icon}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}


export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { theme } = useTheme();

    const skillCategories = Object.entries(skills);

    return (
        <section id="habilidades" className="skills section" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Mis <span className="gradient-text">Habilidades</span>
                    </h2>
                    <p>Tecnologías y herramientas con las que trabajo</p>
                </motion.div>

                <div className="skills-grid">
                    {skillCategories.map(([key, category], index) => (
                        <SkillCategory
                            key={key}
                            title={category.title}
                            icons={category.icons}
                            theme={theme}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Soft Skills */}
                <motion.div
                    className="soft-skills glass-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3>Soft Skills</h3>
                    <div className="soft-skills-list">
                        {[
                            'Trabajo colaborativo en equipos de desarrollo',
                            'Aplicación de la metodología ágil Scrum',
                            'Análisis y resolución de problemas técnicos',
                            'Aprendizaje autónomo de nuevas tecnologías',

                        ].map((skill, index) => (
                            <motion.span
                                key={skill}
                                className="soft-skill-tag"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
