type TName = string;
type TCallback = (...args: unknown[]) => void;
type TListener<T> = (data: T) => void;

class Emitter {
  events: Record<TName, TCallback[]> = {};

  publish = (name: TName, ...args: unknown[]) => {
    if (!this.events[name]) {
      return;
    }

    this.events[name].forEach((callback) => callback(...args));
  };

  on = <T = unknown>(name: TName, callback: TListener<T>) => {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(callback as TCallback);
  };

  off = <T = unknown>(name: TName, callback: TListener<T>) => {
    if (!this.events[name]) {
      return;
    }

    this.events[name] = this.events[name].filter(
      (callbackInner) => (callback as TCallback) !== callbackInner,
    );
  };
}

const emitter = new Emitter();

export enum EEvents {
  LOGOUT = 'LOGOUT',
  SET_TOKEN = 'SET_TOKEN',
  MODAL_OPEN = 'MODAL_OPEN',
  MODAL_CLOSE = 'MODAL_CLOSE',
}

export default emitter;
