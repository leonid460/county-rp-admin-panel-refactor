export async function deleteGroup(oldId: string) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}Group/${oldId}`;

  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  return 0;
}
