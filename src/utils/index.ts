/**
 * Utility Functions
 * 
 * Common utility functions used across the application.
 */

// ============================================================================
// String Utilities
// ============================================================================

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Truncates a string to a maximum length and adds ellipsis
 */
export function truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength - 3) + '...';
}

/**
 * Masks an email address for privacy
 * Example: santiago.alvarez@example.com -> santiago.al...@example.com
 */
export function maskEmail(email: string, visibleChars: number = 15): string {
    return email.replace(
        new RegExp(`(.{${visibleChars}}).*(@)`),
        '$1...$2'
    );
}

/**
 * Masks a phone number for privacy
 * Example: +57 321 8669135 -> +57 321 ****135
 */
export function maskPhone(phone: string, visibleEnd: number = 3): string {
    const visibleStart = Math.max(0, phone.length - visibleEnd - 4);
    return phone.replace(
        new RegExp(`(.{${visibleStart}}).*(.{${visibleEnd}})$`),
        '$1****$2'
    );
}

// ============================================================================
// Array Utilities
// ============================================================================

/**
 * Chunks an array into smaller arrays of specified size
 */
export function chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Shuffles an array randomly
 */
export function shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Removes duplicates from an array
 */
export function unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

// ============================================================================
// Object Utilities
// ============================================================================

/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Checks if an object is empty
 */
export function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

// ============================================================================
// Date Utilities
// ============================================================================

/**
 * Formats a date to a localized string
 */
export function formatDate(
    date: Date,
    locale: string = 'es-CO',
    options?: Intl.DateTimeFormatOptions
): string {
    const defaultOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };

    return date.toLocaleString(locale, options || defaultOptions);
}

/**
 * Gets the current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
    return new Date().toISOString();
}

// ============================================================================
// Validation Utilities
// ============================================================================

/**
 * Validates an email address
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validates a URL
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Validates a phone number (basic validation)
 */
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// ============================================================================
// Number Utilities
// ============================================================================

/**
 * Clamps a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Generates a random number between min and max
 */
export function randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

/**
 * Formats a number with thousand separators
 */
export function formatNumber(num: number, locale: string = 'es-CO'): string {
    return new Intl.NumberFormat(locale).format(num);
}

// ============================================================================
// DOM Utilities
// ============================================================================

/**
 * Smoothly scrolls to an element
 */
export function scrollToElement(
    elementId: string,
    offset: number = 0
): void {
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
}

/**
 * Copies text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error('Failed to copy to clipboard:', error);
        return false;
    }
}

/**
 * Checks if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if user prefers dark mode
 */
export function prefersDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// ============================================================================
// Debounce & Throttle
// ============================================================================

/**
 * Debounces a function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: number | null = null;

    return function executedFunction(...args: Parameters<T>) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(later, wait) as unknown as number;
    };
}

/**
 * Throttles a function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;

    return function executedFunction(...args: Parameters<T>) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// ============================================================================
// Class Name Utilities
// ============================================================================

/**
 * Conditionally joins class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

/**
 * Creates a BEM class name
 */
export function bem(
    block: string,
    element?: string,
    modifier?: string
): string {
    let className = block;
    if (element) className += `__${element}`;
    if (modifier) className += `--${modifier}`;
    return className;
}
