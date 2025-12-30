const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async() => {
  // jokeContainer.classList.remove("fade");
  const respons = await fetch(url);
  const data = await respons.json();
  console.log(data);
  jokeContainer.textContent = `${data.joke}`;

  // fetch(url)
  //   .then((data) => data.json())
  //   .then((item) => {
  //     jokeContainer.textContent = `${item.joke}`;
  //     jokeContainer.classList.add("fade");
  //   });
};

btn.addEventListener("click", getJoke);