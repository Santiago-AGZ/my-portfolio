import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { navigation, personalInfo } from '../../data/portfolio';
import './Footer.css';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Logo & Description */}
                    <div className="footer-brand">
                        <a href="#inicio" className="footer-logo" onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}>
                            <span>{personalInfo.initials}</span>
                        </a>
                        <p className="footer-description">
                            {personalInfo.role} apasionado por crear soluciones digitales impactantes y experiencias de usuario excepcionales.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} {personalInfo.name}
                    </p>

                    <motion.button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Volver arriba"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
