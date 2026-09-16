declare type TAnyObject = Record<string, unknown>;
declare type TAnyFunction = (...args: unknown[]) => unknown;
declare type TSvgComponent = React.ComponentType<React.ComponentProps<'svg'>>;

declare module 'notificit';

interface Window {
  ym?: (counterId: number, action: string, ...args: unknown[]) => void;
  notifications?: {
    addMessage: (data: {
      message: string;
      type?: string;
      delay?: number;
    }) => void;
    destroy: () => void;
    loadingOn: () => void;
    loadingOff: () => void;
  };
}
