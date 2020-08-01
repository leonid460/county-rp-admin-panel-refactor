export async function deleteAdminLevel(id: string) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}api/Admin/AdminLevel/${id}`;

  const response = await fetch(url, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  return 0;
}
