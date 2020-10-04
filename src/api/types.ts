export type TRequestBody = {
  [key: string]: string | number | boolean;
};

export type TRequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface IResponseBody {
  [key: string]: string | boolean | number;
}
