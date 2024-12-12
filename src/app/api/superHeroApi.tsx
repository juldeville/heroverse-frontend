const backendUrl = "http://localhost:3000";

const fetchSuperHeroes = async (query: number) => {
  const response = await fetch(`${backendUrl}/fetchHeroes?batch=${query}`);
  const data = await response.json();
  return data;
};

export { fetchSuperHeroes };
