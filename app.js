const jokeSetup = document.querySelector("#joke-setup");
const jokepuchline = document.querySelector("#joke-punchline");
const jokebtn = document.querySelector("#joke-btn");

async function fetchjokes() {
  try {
    const responce = await fetch(
      " https://official-joke-api.appspot.com/random_joke"
    );
    const data = await responce.json();
    console.log(data);
    jokeSetup.textContent = data.setup;
    jokepuchline.textContent = data.punchline;
  } catch (error) {
    jokeSetup.textContent = "Error fatching joke";
    jokepuchline.textContent = "please try again...";
  }
}

jokebtn.addEventListener("click", fetchjokes);
// fetchjokes();
