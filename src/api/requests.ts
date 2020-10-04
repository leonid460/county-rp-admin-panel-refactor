import { TRequestBody, TRequestMethod } from './types';

function requestFactory(method: TRequestMethod, headers?: HeadersInit) {
  if ((method === 'POST' || method === 'PUT') && headers === undefined) {
    throw new Error(`[${method}] No headers was passed in request factory`);
  }

  return async (requestUrl: string, body?: TRequestBody) => {
    if ((method === 'POST' || method === 'PUT') && !body) {
      throw new Error('No body was passed in request');
    }

    const response = await fetch(requestUrl, {
      method,
      headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(JSON.parse(errorText).message || errorText);
    }

    return await response.json();
  };
}

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export const post = requestFactory('POST', defaultHeaders);

export const get = requestFactory('GET');

export const del = requestFactory('DELETE');

export const put = requestFactory('PUT', defaultHeaders);
