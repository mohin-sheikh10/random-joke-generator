const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

async function getJoke () {
    const response = await fetch(url);
    const data = await response.json();
    showJoke(data)
}

function showJoke (data) {
    joke.innerHTML = data.joke
}

jokeBtn.addEventListener('click', getJoke)
getJoke()
