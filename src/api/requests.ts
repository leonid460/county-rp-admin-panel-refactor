import { TRequestBody, TRequestMethod } from './types';

function requestFactory(method: TRequestMethod, headers?: HeadersInit) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive'
  };

  return async (requestMethodUrl: string, body?: TRequestBody) => {
    if ((method === 'POST' || method === 'PUT') && !body) {
      throw new Error('No body was passed in request');
    }

    const apiRoot = process.env.REACT_APP_API_URL;
    const token = localStorage.getItem('county-rp-admin-token');
    const mixedHeaders = {
      ...defaultHeaders,
      ...headers,
      Authorization: `Bearer ${token}`
    };

    const response = await fetch(apiRoot + requestMethodUrl, {
      method,
      headers: mixedHeaders,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const { status, statusText } = response;

      throw new Error(`${status}: ${statusText}`);
    }

    return await response.json();
  };
}

export const post = requestFactory('POST');

export const get = requestFactory('GET');

export const del = requestFactory('DELETE');

export const put = requestFactory('PUT');
