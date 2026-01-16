/// &lt;reference types="vite/client" /&gt;

interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_PUBLIC_KEY: string;
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
