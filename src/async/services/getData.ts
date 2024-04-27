const randomProduct = Math.floor(Math.random()*100)+1;
export const url = `https://dummyjson.com/products/${randomProduct}`;

( async () => {
  const id = randomProduct;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  
  const data = await response.json();

  console.log({id: data.id, title: data.title, description: data.description, price: data.price});

})();
