export function getEntityIdFromUrl(url: string) {
  const parts = url.split('/');

  return parts[parts.length - 1];
}
