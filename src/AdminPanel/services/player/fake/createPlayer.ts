export async function createPlayer(
  login: string,
  password: string,
  groupId: string
): Promise<number> {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}Player`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({login, password, groupId}),
  });

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  return 0;
}
