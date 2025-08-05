console.log("Start");

async function fetchData() {
  let data = await fetch("https://fakestoreapi.com/products/");
  console.log(await data.json());
}
fetchData();

console.log("End");
