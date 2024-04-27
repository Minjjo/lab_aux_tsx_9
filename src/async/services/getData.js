export const randomProductId = () => {
  return Math.floor(Math.random() * 100) + 1;
};
(async () => {
  try {
    const id = randomProductId();
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    console.log('Datos obtenidos:', data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
})();
