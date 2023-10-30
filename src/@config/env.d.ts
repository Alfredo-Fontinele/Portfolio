/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_API_KEY: string
  readonly VITE_TEMPLATE_ID: string
  readonly VITE_SERVICE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
