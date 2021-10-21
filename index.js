console.log(document)
const findButton = document.querySelectorAll("button")
const findValue = document.querySelector(".value")
const findArea = document.querySelector(".area-display")
const findStatDiv = document.querySelector("div.stat")
const findHello = document.querySelector(".hello")
const heading = document.querySelectorAll("h3");
console.log(heading);
for(let i=0;i<heading.length;i++){
    console.log(heading[i])
}
console.log(findArea);
console.log(findButton);
console.log(findHello);
console.log(findStatDiv);
console.log(findValue);

const findRatingDivs = document.querySelectorAll(".rating-display .value")
console.log(findRatingDivs)
findRatingDivs.forEach(elem=>{
        elem = parseFloat(elem.innerText)
        console.log(elem)
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
    console.log(content);
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
main.removeChild(park);