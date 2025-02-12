const backendUrl = "https://heroverse-backend.vercel.app";

const fetchSuperHeroes = async (query: number) => {
  const response = await fetch(`${backendUrl}/fetchHeroes?batch=${query}`);
  const data = await response.json();
  return data;
};

const fetchSuperHeroById = async (query: number) => {
  const response = await fetch(`${backendUrl}/fetchHeroById?id=${query}`);
  const data = await response.json();
  return data;
};

const fetchRandomSuperHeroes = async () => {
  const response = await fetch(`${backendUrl}/getRandomHeroes`);
  const data = await response.json();
  return data;
};

export { fetchSuperHeroes, fetchSuperHeroById, fetchRandomSuperHeroes };
