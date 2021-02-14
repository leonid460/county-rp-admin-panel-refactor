import { TRequestBody, TRequestMethod } from './types';

function requestFactory(method: TRequestMethod, headers?: HeadersInit) {
  if ((method === 'POST' || method === 'PUT') && headers === undefined) {
    throw new Error(`[${method}] No headers was passed in request factory`);
  }

  return async (requestMethodUrl: string, body?: TRequestBody) => {
    if ((method === 'POST' || method === 'PUT') && !body) {
      throw new Error('No body was passed in request');
    }

    const apiRoot = process.env.REACT_APP_API_URL;

    const response = await fetch(apiRoot + requestMethodUrl, {
      method,
      headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const { status, statusText } = response;

      throw new Error(`${status}: ${statusText}`);
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
