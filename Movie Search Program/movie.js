document.addEventListener('DOMContentLoaded', function () {
  let userInput = document.querySelector(".userInput");
  let searchBtn = document.querySelector(".searchBtn");
  let moviePoster = document.querySelector(".moviePoster");
  let movieTitle = document.querySelector(".movieTitle");

  searchBtn.addEventListener('click', function () {
    console.log("hello");
    movieTitle.style.display = 'block';
    let query = userInput.value.trim();
    if (query !== "") {
      fetch(`http://www.omdbapi.com/?apikey=a3867c26&t=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            moviePoster.style.display = 'block';
            moviePoster.src = data.Poster;
            movieTitle.textContent = data.Title;
          } else {
            moviePoster.src = "";
            movieTitle.textContent = "Movie or Show not found!";
          }
        })
        .catch(error => {
          console.error('Error:', error);
          movieTitle.textContent = "An error occurred!";
        });
    } else {
      movieTitle.textContent = "Please enter a movie or show title!";
    }
  });
});
