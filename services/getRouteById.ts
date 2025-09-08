export const getRouteById = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/route/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch route data");
  }
  return response.json();
};
