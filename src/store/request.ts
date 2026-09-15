type TOptions<T> = {
  data?: T;
  url?: string;
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';
  additionalHeaders?: Record<string, string>;
  additionalOptions?: RequestInit;
  dataToQuery?: boolean;
  baseUrl?: string;
  signal?: AbortSignal;
  catcher?: (...args: unknown[]) => void;
};

const request = <T = unknown, K = TAnyObject>(
  options: TOptions<K>,
): Promise<T> => {
  const {
    data,
    url = '',
    method = 'GET',
    additionalHeaders = {},
    additionalOptions = {},
    baseUrl = '',
    signal,
    catcher,
  } = options;

  const dataToQuery = options.dataToQuery || method === 'GET';
  const fetchUrl = new URL(`${baseUrl}${url}`);

  const fetchOptions: RequestInit = {
    method,
    signal,
    headers: additionalHeaders,
    ...additionalOptions,
  };

  if (data) {
    if (dataToQuery) {
      for (const [key, value] of Object.entries(data)) {
        fetchUrl.searchParams.set(key, String(value));
      }
    } else {
      fetchOptions.body = JSON.stringify(data);
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        ...additionalHeaders,
      };
    }
  }

  return fetch(fetchUrl.toString(), fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response.json() as Promise<T>;
    })
    .catch((error) => {
      if (catcher) {
        catcher(error);
      }

      throw error;
    });
};

export default request;
