const backendUrl = "http://localhost:3000";

const fetchSuperHeroes = async () => {
  const response = await fetch(`${backendUrl}/fetchHeroes`);
  const data = await response.json();
  return data;
};

export { fetchSuperHeroes };
