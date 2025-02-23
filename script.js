document.getElementById('newJokeButton').addEventListener('click', fetchJoke);

function fetchJoke() {
  const jokeElement = document.getElementById('joke');
  
  // Fetching joke data from the JokeAPI
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(response => response.json())
    .then(data => {
      if (data.type === 'single') {
        jokeElement.textContent = data.joke;
      } else {
        jokeElement.textContent = `${data.setup} - ${data.delivery}`;
      }
    })
    .catch(error => {
      jokeElement.textContent = 'Oops! Something went wrong. Try again.';
      console.error('Error fetching joke:', error);
    });
}
