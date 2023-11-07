// svelte.d.ts
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    "on:e-select"?: () => void;
  }
}
