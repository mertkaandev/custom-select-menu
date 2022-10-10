let countries = [
     "JavaScript","C","C++","Java","React.js","React Redux","Redux Toolkit","Vue.js","Operating Systems","Linux","Windows",
     "Garbage Collection","RAM","Computer","IDE","API","Rest API","Server","Client","CDN", "Database","MongoDB","MySQL",
     "PostgreSQL","PHP","HTML5","CSS3","Web","Mobile", "ErLang", "GoLang", "UNIX", "Signal", "Framework", "Library", "Laravel",
     "OOP", "Class", "Function", "Property", "Constructor", "Object", "Number", "String", "Express.js", "TypeScript", "Type Definetion"
];
   
const wrapper = document.querySelector(".wrapper");
const selectButton = document.querySelector(".select-button");
const searchInput = document.querySelector("input");
const options = document.querySelector(".options");

function addCountry(){
     countries.forEach(country => {
          let li = `<li onclick="updateName(this)">${country}</li>`;
          options.insertAdjacentHTML("beforeend", li)
     })
};

addCountry();

function updateName(selectedLi) {
     wrapper.classList.remove("active");
     selectButton.firstElementChild.innerText = selectedLi.innerText;
}

searchInput.addEventListener("keyup", ()=> {
     let arr = [];
     let searchedValue = searchInput.value.toLowerCase();
     arr = countries.filter(data => {
          return data.toLowerCase().startsWith(searchedValue);
     })
     .map(data=> `<li onclick="updateName(this)">${data}</li>`).join("") 
     options.innerHTML = arr ? arr : `<p> <b>${searchedValue}</b> not found. </p>`;
})

selectButton.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
