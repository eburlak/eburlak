export const getApiRoot = () => {
  const backend = process.env.BACKEND;

  return backend;
};

export const catchDefault = (error: unknown) => {
  console.error(error);
};

export const isValidURL = (value: string) => {
  const reg = /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})$/;

  return reg.test(value);
};

export const isValidEmail = (value: string) => {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/;

  return reg.test(value);
};

export const cleanObject = (
  obj: TAnyObject,
  settings: {
    null?: boolean;
    undefined?: boolean;
    string?: boolean;
  } = {
    null: true,
    undefined: true,
    string: true,
  },
) => {
  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      obj[key] = cleanObject(obj[key] as TAnyObject, settings);

      if (Object.keys(obj[key] as TAnyObject).length === 0) {
        delete obj[key];
      }
    } else if (
      (settings.null && obj[key] === null) ||
      (settings.undefined && obj[key] === undefined) ||
      (settings.string && obj[key] === '')
    ) {
      delete obj[key];
    }
  }

  return obj;
};

export const replacePlaceholders = (
  result: string,
  params: Record<string, string>,
) => {
  for (const [key, value] of Object.entries(params)) {
    // Regular expressions use special characters (*, ?, +, etc.), so they need to be escaped.
    const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regex = new RegExp(escapedKey, 'gi');

    result = result.replace(regex, value);
  }

  return result;
};

export const setCookie = (
  name: string,
  value: string | number,
  expire: number = 365,
) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const date = new Date();
  date.setTime(date.getTime() + expire * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();

  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (name: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
};

export const removeCookie = (name: string, domain?: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const attributes = ['path=/', 'expires=Thu, 01 Jan 1970 00:00:00 UTC'];

  if (domain) {
    attributes.push(`domain=${domain}`);
  }

  document.cookie = `${name}=; ${attributes.join('; ')};`;
};

/** Every domain a cookie on this host could have been written for, widest last. */
const getCookieDomains = () => {
  const parts = window.location.hostname.split('.');
  const domains: (string | undefined)[] = [undefined];

  for (let index = 0; index < parts.length - 1; index += 1) {
    const domain = parts.slice(index).join('.');

    domains.push(domain, `.${domain}`);
  }

  return domains;
};

export const removeCookiesByPrefix = (prefix: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const names = document.cookie
    .split(';')
    .map((cookie) => cookie.split('=')[0].trim())
    .filter((name) => name.startsWith(prefix));

  const domains = getCookieDomains();

  names.forEach((name) => {
    domains.forEach((domain) => removeCookie(name, domain));
  });
};

export const wait = (delay = 600) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(undefined);
    }, delay);
  });

export const setPaths = (data: TAnyObject[] = [], path = '') => {
  data.forEach((item, index) => {
    item.path = !path ? `${index}` : `${path}.${index}`;

    if (item.children) {
      item.children = setPaths(
        item.children as TAnyObject[],
        item.path as string,
      );
    }
  });

  return data;
};

export const flatData = (data: TAnyObject[] = []) => {
  let nextData: TAnyObject[] = [];

  data.forEach((item) => {
    nextData.push(item);

    if (item.children) {
      nextData = [...nextData, ...flatData(item.children as TAnyObject[])];
    }
  });

  return nextData;
};
