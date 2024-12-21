/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PORT: number;
  readonly VITE_END_POINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
