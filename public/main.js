const main = async () => {

  const response = await fetch(
    "https://sdg-astro-api.herokuapp.com/api/Nasa/apod"
    );
    const data = await response.json();
    if (response.status === 200) {
    console.log(data); 
    console.log(data.hdUrl); //Need help here
}
}



const imageMainSetup = async () => { 
  //grabs hero image, sets to variable, qS img tag & set to the hdUrl variable
  // we want to call the API, using fetch
  // then console.lot the response

  
  
  const response = await fetch(
    "https://sdg-astro-api.herokuapp.com/api/Nasa/apod"
    );
    const data = await response.json();
    if (response.status === 200) {
    // console.log(data);
    // console.log(data.hdUrl);
    
    
    document.querySelector('.hero-image').value = data.hdUrl
    }

  // return response.json()
  // if (response.status === 200) {
  //   const resp = await response.json()
  //   console.log(joke)
  //   document.querySelector('.setup').textContent = joke.setup
  //   document.querySelector('.punchline').textContent = joke.punchline
};

// document.querySelector(".left-arrow-button").addEventListener("click", // -1 carousel function);

// document.querySelector(".right-arrow-button").addEventListener("click", // +1 carousel function);

// document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", main);
