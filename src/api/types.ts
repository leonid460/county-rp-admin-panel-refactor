export type TRequestBody = {
  [key: string]: unknown;
};

export type TRequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface IResponseBody {
  [key: string]: string | boolean | number;
}
