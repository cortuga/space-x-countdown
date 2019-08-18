const imageMainSetup = async () => {
  // we want to call the API, using fetch
  // then console.lot the response

  // document.querySelector('punchline').classList.add('hide')
  // document.querySelector('.setup').textContent = '...'

  const response = await fetch(
    "https://sdg-astro-api.herokuapp.com/api/Nasa/apod"
  );
  console.log(response);
  // if (response.status === 200) {
  //   const resp = await response.json()
  //   console.log(joke)
  //   document.querySelector('.setup').textContent = joke.setup
  //   document.querySelector('.punchline').textContent = joke.punchline
};

//spacex url request https://sdg-astro-api.herokuapp.com/api/Nasa/apod

// document //what is this doing?
//   .querySelector(".reveal-punchline")
//   .addEventListener("click", () => {
//     document //what is this doing?
//       .querySelector("punchline")
//       .classList.remove("hide");
//   });

// document.querySelector(".get-another").addEventListener("click", main);

// document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", imageMainSetup);
