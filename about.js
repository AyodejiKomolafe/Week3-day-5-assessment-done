console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submitted successfully");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let image = document.querySelector(".home-img");

image.addEventListener(
  "mouseover",
  (pagePicture = () => {
    alert("You are Amazing");
  })
);


