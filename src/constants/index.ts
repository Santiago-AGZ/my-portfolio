/**
 * Application Constants
 * 
 * Centralized constants to eliminate magic numbers and strings.
 */

// ============================================================================
// Breakpoints (in pixels)
// ============================================================================

export const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1280,
    ultraWide: 1536,
} as const;

// ============================================================================
// Z-Index Layers
// ============================================================================

export const Z_INDEX = {
    background: -1,
    base: 0,
    dropdown: 10,
    sticky: 20,
    navbar: 30,
    modal: 40,
    tooltip: 50,
    notification: 60,
} as const;

// ============================================================================
// Timing (in milliseconds)
// ============================================================================

export const TIMING = {
    debounce: 300,
    throttle: 100,
    tooltipDelay: 500,
    notificationDuration: 5000,
    clipboardResetDelay: 2000,
} as const;

// ============================================================================
// Form Validation
// ============================================================================

export const VALIDATION = {
    minNameLength: 2,
    maxNameLength: 100,
    minMessageLength: 10,
    maxMessageLength: 1000,
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// ============================================================================
// Image Sizes
// ============================================================================

export const IMAGE_SIZES = {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 300 },
    medium: { width: 600, height: 600 },
    large: { width: 1200, height: 1200 },
} as const;

// ============================================================================
// Scroll Configuration
// ============================================================================

export const SCROLL = {
    offset: -80, // Navbar height offset
    behavior: 'smooth' as ScrollBehavior,
    threshold: 100, // Scroll threshold for showing "back to top"
} as const;

// ============================================================================
// Contact Form
// ============================================================================

export const CONTACT_SUBJECTS = [
    'Oferta de prácticas',
    'Propuesta de colaboración',
    'Pregunta general',
    'Otro',
] as const;

export type ContactSubject = typeof CONTACT_SUBJECTS[number];

// ============================================================================
// External Links
// ============================================================================

export const EXTERNAL_LINKS = {
    emailjs: 'https://www.emailjs.com/',
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com',
    vercel: 'https://vercel.com',
} as const;

// ============================================================================
// SEO
// ============================================================================

export const SEO = {
    defaultTitle: 'Santiago Álvarez Gutiérrez - Desarrollador de Software',
    titleTemplate: '%s | Santiago Álvarez',
    defaultDescription:
        'Portafolio profesional de Santiago Álvarez Gutiérrez, desarrollador de software especializado en React, TypeScript y tecnologías web modernas.',
    defaultKeywords: [
        'desarrollador web',
        'react',
        'typescript',
        'frontend',
        'fullstack',
        'portafolio',
        'santiago alvarez',
    ],
    ogImage: '/og-image.png',
    twitterHandle: '@santiago_agz',
} as const;

// ============================================================================
// Accessibility
// ============================================================================

export const A11Y = {
    skipLinkId: 'main-content',
    reducedMotionQuery: '(prefers-reduced-motion: reduce)',
    highContrastQuery: '(prefers-contrast: high)',
} as const;

// ============================================================================
// Local Storage Keys
// ============================================================================

export const STORAGE_KEYS = {
    theme: 'portfolio-theme',
    language: 'portfolio-language',
    cookieConsent: 'portfolio-cookie-consent',
} as const;
