/**
 * Animation Constants
 * 
 * Centralized animation configurations for Framer Motion.
 * Ensures consistency across all animated components.
 */

import type { AnimationVariants } from '../types/portfolio';

// ============================================================================
// Animation Durations (in seconds)
// ============================================================================

export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
} as const;

// ============================================================================
// Animation Delays (in seconds)
// ============================================================================

export const ANIMATION_DELAY = {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
} as const;

// ============================================================================
// Stagger Configurations
// ============================================================================

export const STAGGER = {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
} as const;

// ============================================================================
// Common Animation Variants
// ============================================================================

/**
 * Fade in from bottom
 */
export const fadeInUp: AnimationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Fade in from top
 */
export const fadeInDown: AnimationVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Fade in from left
 */
export const fadeInLeft: AnimationVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Fade in from right
 */
export const fadeInRight: AnimationVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Simple fade in
 */
export const fadeIn: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Scale up animation
 */
export const scaleUp: AnimationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: ANIMATION_DURATION.normal },
    },
};

/**
 * Container with staggered children
 */
export const staggerContainer: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER.normal,
            delayChildren: ANIMATION_DELAY.short,
        },
    },
};

/**
 * Fast stagger container
 */
export const staggerContainerFast: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER.fast,
        },
    },
};

/**
 * Slow stagger container
 */
export const staggerContainerSlow: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: STAGGER.slow,
            delayChildren: ANIMATION_DELAY.medium,
        },
    },
};

// ============================================================================
// Hover Animations
// ============================================================================

export const hoverScale = {
    scale: 1.05,
    transition: { duration: ANIMATION_DURATION.fast },
};

export const hoverScaleSmall = {
    scale: 1.02,
    transition: { duration: ANIMATION_DURATION.fast },
};

export const hoverLift = {
    y: -5,
    transition: { duration: ANIMATION_DURATION.fast },
};

// ============================================================================
// Tap Animations
// ============================================================================

export const tapScale = {
    scale: 0.95,
};

export const tapScaleSmall = {
    scale: 0.98,
};

// ============================================================================
// Viewport Configuration
// ============================================================================

export const VIEWPORT_CONFIG = {
    once: true,
    margin: '-100px',
} as const;

export const VIEWPORT_CONFIG_IMMEDIATE = {
    once: true,
    margin: '0px',
} as const;

// ============================================================================
// Spring Configurations
// ============================================================================

export const SPRING_CONFIG = {
    type: 'spring',
    stiffness: 100,
    damping: 15,
} as const;

export const SPRING_CONFIG_BOUNCY = {
    type: 'spring',
    stiffness: 200,
    damping: 10,
} as const;

export const SPRING_CONFIG_SMOOTH = {
    type: 'spring',
    stiffness: 50,
    damping: 20,
} as const;
