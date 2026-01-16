/**
 * Portfolio Type Definitions
 * 
 * Centralized type definitions for the entire portfolio application.
 * This ensures type safety and consistency across all components.
 */

// ============================================================================
// Personal Information Types
// ============================================================================

export interface EmailInfo {
    primary: string;
    secondary: string;
}

export interface PersonalInfo {
    name: string;
    shortName: string;
    initials: string;
    role: string;
    location: string;
    email: EmailInfo;
    phone: string;
    github: string;
    linkedin: string;
    description: string;
    shortBio: string;
}

// ============================================================================
// About Section Types
// ============================================================================

export interface Highlight {
    label: string;
    value: string;
}

export interface AboutMe {
    paragraphs: string[];
    highlights: Highlight[];
}

// ============================================================================
// Education Types
// ============================================================================

export interface Education {
    title: string;
    institution: string;
    location: string;
    year: string;
    current?: boolean;
}

export interface ComplementaryEducation {
    title: string;
    institution: string;
    hours: number;
    year: string;
}

// ============================================================================
// Skills Types
// ============================================================================

export type SkillIconName =
    | 'typescript'
    | 'javascript'
    | 'java'
    | 'python'
    | 'html'
    | 'css'
    | 'react'
    | 'vite'
    | 'tailwind'
    | 'spring'
    | 'nodejs'
    | 'postgres'
    | 'supabase'
    | 'firebase'
    | 'git'
    | 'github'
    | 'docker'
    | 'vercel'
    | 'vscode'
    | 'postman'
    | 'blender'
    | 'threejs'
    | 'figma';

export interface SkillCategory {
    title: string;
    icons: SkillIconName[];
}

export interface Skills {
    languages: SkillCategory;
    frontend: SkillCategory;
    backend: SkillCategory;
    tools: SkillCategory;
    other: SkillCategory;
}

// ============================================================================
// Project Types
// ============================================================================

export interface Project {
    id: string;
    title: string;
    description: string;
    period: string;
    technologies: string[];
    features: string[];
    impact?: string;
    demoUrl: string;
    githubUrl: string;
    images: string[];
    color: string;
}

// ============================================================================
// Navigation Types
// ============================================================================

export interface NavigationItem {
    label: string;
    href: string;
}

// ============================================================================
// Contact Form Types
// ============================================================================

export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type FormStatus = 'idle' | 'success' | 'error';

export interface EmailTemplateParams extends ContactFormData {
    time: string;
}

// ============================================================================
// Animation Types
// ============================================================================

export interface AnimationVariants {
    hidden: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
    };
    visible: {
        opacity: number;
        y?: number;
        x?: number;
        scale?: number;
        transition?: {
            duration?: number;
            delay?: number;
            staggerChildren?: number;
            delayChildren?: number;
        };
    };
}

// ============================================================================
// Theme Types
// ============================================================================

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Makes all properties of T optional recursively
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extracts the type of an array element
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

/**
 * Makes specific keys K of T required
 */
export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Makes specific keys K of T optional
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
