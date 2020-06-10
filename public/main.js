const main = async () => {
  // we want to call the API, using fetch
  // then console.lot the response
  
  const response1 = await fetch(
    "https://sdg-astro-api.herokuapp.com/api/Nasa/apod"
    );
    const data1 = await response1.json();
    if (response1.status === 200) {
    // console.log(data1); 
    // console.log(data1.hdUrl); 
    const imageSource = data1.hdUrl; 
    // headerimage data from api
    // document.querySelector('.hero-image').c = imageSource;    //****Not working..WHYYYYY!!! */
    const titleSource = data1.title; 
    // title data from api
    document.querySelector('.image-title').textContent = titleSource;
    
    const copyrightSource = data1.copyright 
    //copyright data from api
    document.querySelector('.copyright').textContent = copyrightSource;
  } else {
    console.log(console.error());
  }

  const response2 = await fetch(
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'
  );
  const data2 = await response2.json();
  if (response2.status === 200) {
    console.log(data2)
    
    //use forEach or assign the indexes of data2 to a for loop somehow. Maybe just have an array with 2 functions where each button click adds or subtracts one from i, to scroll the carousel. NOTE: carousel should change every 10seconds.

    const missionName = data2[0].mission_name;
    document.querySelector('.launch-name').textContent = missionName;
    const missionDescription = data2[0].details;
    document.querySelector('.launch-description').textContent = missionDescription;
    const launchCountdown = data2[0].launch_date_utc;
    const launchSite = data2[0].launch_site.site_name_long;
    document.querySelector('.launch-location').textContent = launchSite;

    console.log(launchCountdown)
  } else {
    console.log(console.error());
  }

};

const carouselNext = () => {

}
const carouselPrevious = () => {

}
//create a carousel 
  // const slider = document.querySelector('.slider');
  // const previous = document.querySelector('.left-arrow-button');
  // const next = document.querySelector('.right-arrow-button');


// document.querySelector(".left-arrow-button").addEventListener("click", // -1 carousel function);

// document.querySelector(".right-arrow-button").addEventListener("click", // +1 carousel function);

// document.addEventListener("DOMContentLoaded", main);
document.addEventListener("DOMContentLoaded", main);
