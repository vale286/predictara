const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPrediction(commodity, market) {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ commodity, market }),
  });
  return response.json();
}

export async function getTrends() {
  const response = await fetch(`${BASE_URL}/trends`);
  return response.json();
}
