export async function deleteFaction(id: string) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}Faction/${id}`;

  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return 0;
}
