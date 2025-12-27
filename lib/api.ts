export async function fetchAPI(endpoint: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API}${endpoint}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${endpoint}`);
  }

  return res.json();
}
