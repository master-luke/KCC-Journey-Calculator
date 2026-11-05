// Minimal types for the WordPress-provided React runtime used by this exercise.
declare namespace JSX {
  interface Element { readonly type: unknown }
  interface IntrinsicElements {
    div: Props; label: Props; select: Props; option: Props; input: Props; p: Props; strong: Props;
  }
  interface Props {
    className?: string; value?: string | number; key?: number; type?: string; checked?: boolean;
    'aria-live'?: 'polite'; 'aria-atomic'?: string;
    onChange?: (event: never) => void;
  }
}
interface Window {
  wp: {
    element: {
      createElement: (...args: unknown[]) => JSX.Element;
      createRoot: (node: HTMLElement) => { render: (element: JSX.Element) => void };
      useState: <T>(value: T) => [T, (next: T) => void];
    }
  };
}
