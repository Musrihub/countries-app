const apiKey = "bBIdVnPcH2Ahj0s0Ba68NZZg9PNA6hPGAPnWXRGU";
const countryUrl = "https://restcountries.com/v3.1/all";
const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropdown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");

async function getCountries() {
  const response = await fetch(countryUrl);
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    showCountry(element);
  });
}
getCountries();
function showCountry(data) {
  const country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
    <img src="${data.flags.svg}">
    
</div>
<div class="country-info">
    <h5>${data.name.common}</h5>
    <p><strong>Population</strong>: ${data.population}</p>
    <p class="regionName"><strong>Region</strong>: ${data.region}</p>
    <p><strong>Capital</strong>: ${data.capital}</p>
</div>`;
  countriesElem.appendChild(country);
 
}

 dropDown.addEventListener("click", ()=>{
     dropElem.classList.toggle("showDropDown")
   console.log("hello")
   
})
const regionName = document.querySelector(".regionName")
 region.forEach(element =>{
    element.addEventListener("click", ()=>{
       console.log(element);
        Array.from(regionName).forEach(elem => {
                       if(elem.innerText.includes(element.innerText) || element.innerText =="All"){
             elem.parentElement.parentElement.style.display ="grid";

           }           else{
               elem.parentElement.parentElement.style.display= "none";
           }      
          })
    })
})


