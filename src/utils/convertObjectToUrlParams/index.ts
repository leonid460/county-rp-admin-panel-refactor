export function convertObjectToUrlParams(data: { [key: string]: string }) {
  let params = '';

  for (const key in data) {
    if (data[key]) {
      params += `&${key}=${data[key]}`;
    }
  }

  return params;
}
