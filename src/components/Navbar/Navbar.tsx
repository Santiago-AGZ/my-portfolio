import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { navigation } from '../../data/portfolio';
import './Navbar.css';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    }, [isOpen]);

    const handleNavClick = (href: string) => {
        setIsOpen(false);

        // Pequeño delay para permitir que el menú se cierre
        setTimeout(() => {
            // Remover el # del href
            const sectionId = href.replace('#', '');
            const element = document.getElementById(sectionId);
            
            if (element) {
                const navbarHeight = 80;
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            } else {
                console.warn(`Sección no encontrada: ${sectionId}`);
            }
        }, 100);
    };

    return (
        <motion.header
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <nav className="navbar-container container">
                <motion.button
                    className="navbar-logo"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick('#inicio')}
                    aria-label="Ir al inicio"
                >
                    <span className="logo-text">SA</span>
                </motion.button>

                {/* Desktop Navigation */}
                <ul className="navbar-links hide-mobile">
                    {navigation.map((item, index) => (
                        <motion.li
                            key={item.href}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                onClick={() => handleNavClick(item.href)}
                                className="nav-link"
                                type="button"
                            >
                                {item.label}
                            </button>
                        </motion.li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    <motion.button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        type="button"
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.div
                                key={theme}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>

                    <motion.button
                        className="menu-toggle hide-desktop"
                        onClick={() => setIsOpen(!isOpen)}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        type="button"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.ul
                            className="mobile-menu-links"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.07 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                            }}
                        >
                            {navigation.map((item) => (
                                <motion.li
                                    key={item.href}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: 20 },
                                    }}
                                >
                                    <button
                                        onClick={() => handleNavClick(item.href)}
                                        className="mobile-nav-link"
                                        type="button"
                                    >
                                        {item.label}
                                    </button>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}