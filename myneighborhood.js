let randomRestaurant = ["Papachinos", "Burger King", "Verdicchio"];

let randomBtn = document.querySelector(".res-btn");


const randomRestaurantGenerator = (event) => {
  event.preventDefault();
  const random = Math.floor(Math.random() * randomRestaurant.length);
  alert(`We Recommend ${randomRestaurant[random]}`);
};

randomBtn.addEventListener("click",randomRestaurantGenerator);