fetch("http://www.omdbapi.com/?apikey=a3867c26&i=tt1375666")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
