export type TRequestBody =
  | string
  | FormData
  | Blob
  | ArrayBufferView
  | ArrayBuffer
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | null
  | undefined;

export type TRequestMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';
