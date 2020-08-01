export async function createGroup(id: string, name: string, color: string) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}Group`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id, name, color}),
  });

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  return 0;
}
