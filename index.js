//console.log(document)
const findButton = document.querySelectorAll("button")
const findValue = document.querySelector(".value")
const findArea = document.querySelector(".area-display")
const findStatDiv = document.querySelector("div.stat")
const findHello = document.querySelector(".hello")
const heading = document.querySelectorAll("h3");
//console.log(heading);
for(let i=0;i<heading.length;i++){
    //console.log(heading[i])
}
// console.log(findArea);
// console.log(findButton);
// console.log(findHello);
// console.log(findStatDiv);
// console.log(findValue);

const findRatingDivs = document.querySelectorAll(".rating-display .value")
//console.log(findRatingDivs)
findRatingDivs.forEach(elem=>{
        elem = parseFloat(elem.innerText)
        //console.log(elem)
    })
findRatingDivs.forEach(elem=>{
        rate = parseFloat(elem.innerText)
        if(rate>4.7){
            elem.classList.add("high-rating");
            elem.classList.remove("value")
        }
    })
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if(content.length>150){
        content = content.slice(0,150)
        content = content + '<a href = "https://www.google.com">...</a>'
    }
    desc.innerHTML = content
    //console.log(content);
  }

  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
  header.appendChild(newElement);

  // Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
//main.removeChild(park);

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });


  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

nameSorter.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("You clicked the name sorter");
});

//link to remove
nameSorter.addEventListener("click", (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main element
    main.innerHTML = "";
  });