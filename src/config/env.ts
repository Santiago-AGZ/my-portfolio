/**
 * Environment Configuration
 * 
 * Centralized access to environment variables with validation.
 * Throws errors at startup if required variables are missing.
 */

interface EnvConfig {
    emailjs: {
        serviceId: string;
        templateId: string;
        publicKey: string;
    };
    app: {
        name: string;
        url: string;
    };
    isDevelopment: boolean;
    isProduction: boolean;
}

/**
 * Validates that a required environment variable exists
 */
function getEnvVar(key: string): string {
    const value = import.meta.env[key];

    if (!value) {
        throw new Error(
            `Missing required environment variable: ${key}\n` +
            `Please check your .env file and ensure ${key} is defined.\n` +
            `See .env.example for reference.`
        );
    }

    return value;
}

/**
 * Application environment configuration
 * All environment variables are validated at startup
 */
export const env: EnvConfig = {
    emailjs: {
        serviceId: getEnvVar('VITE_EMAILJS_SERVICE_ID'),
        templateId: getEnvVar('VITE_EMAILJS_TEMPLATE_ID'),
        publicKey: getEnvVar('VITE_EMAILJS_PUBLIC_KEY'),
    },
    app: {
        name: getEnvVar('VITE_APP_NAME'),
        url: getEnvVar('VITE_APP_URL'),
    },
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
} as const;

/**
 * Type-safe environment variable access
 * Use this instead of directly accessing import.meta.env
 */
export default env;
