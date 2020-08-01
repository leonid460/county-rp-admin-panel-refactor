import {Faction} from 'AdminPanel/types';


export async function createFaction(faction: Faction) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const url = `${apiUrl}api/Admin/Faction`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(faction),
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  return 0;
}
