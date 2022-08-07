const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke");

const buttonText = [
  "Ugh.",
  "🤦🏻‍♂️",
  "omg dad.",
  "you are the worst",
  "seriously",
  "stop it.",
  "please stop",
  "that was the worst one",
];

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com",{
    headers: {Accept: "application/json", },
  } );
  
  return response.json();
}

async function handleClick() {
    const {joke} = await fetchJoke();
    jokeHolder.textContent = joke;
}

jokeButton.addEventListener("click", this.handleClick);