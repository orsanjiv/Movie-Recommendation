const randomRank = Math.floor(Math.random()*100)+1;

fetch('DB.json') // Replace 'data.json' with the path to your JSON file
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Work with the JSON data here
    // Fetching the image
    const image1 = data.moviesData[randomRank].images[2]
    const image = image1[1];

    // fetching every writers    
    const writers = data.moviesData[randomRank].Writers;
    const actorElement = document.querySelector(".writers");
    actorElement.querySelector('h2').style.display = 'inline';
    actorElement.innerHTML = `<b>Writer:</b> ${writers.join(', ')}`;
    
    // fetching all stars name
    const stars = data.moviesData[randomRank].Stars;
    const starselement = document.querySelector(".stars");
    starselement.querySelector('h2').style.display = 'inline';
    starselement.innerHTML = `<b>Stars:</b> ${stars.join(', ')}`;

    // fetching other details 
    const title = data.moviesData[randomRank].title;
    const genre = data.moviesData[randomRank].genre[0];
    const description = data.moviesData[randomRank].description;
    const rank = data.moviesData[randomRank].rank;
    const rating = data.moviesData[randomRank].rating;
    const year = data.moviesData[randomRank].year;

    document.querySelector('.image').innerHTML=`<img src=${image} height=400px width=400px>`;
    document.querySelector('.title').innerHTML = `<b>Title:</b> ${title}`;
    document.querySelector('.genre').innerHTML = `<b>Genre:</b> ${genre}`;
    document.querySelector('.description').innerHTML = `<b>Description:</b> ${description}`;
    document.querySelector('.rank').innerHTML = `<b>Rank:</b> ${rank}`;
    document.querySelector('.rating').innerHTML = `<b>Rating:</b> ${rating}`;
    document.querySelector('.year').innerHTML = `<b>Year:</b> ${year}`;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


