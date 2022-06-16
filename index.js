"use strict";
//1. Axios
// const axios = require('axios').default;
// const fetchPeople2 = async() => {
//     const response = await axios.get("https://swapi.dev/api/people/1/");
//     const data = response.data.results
//     // const results = data.results;
//     console.log(data)
// }
// fetchPeople2()

//3. Inbuilt Fetch
// const fetchPeople3 =  () => {
//     fetch("https://swapi.dev/api/people/1/")
//         .then((response) => response.json());
//         .then((data) => {
//             const results = data.results
//             results.map((person) => renderPerson(person));
//         })
//         .catch((error) => console.log(error));
// };
const renderPerson = (person) => {
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
  <h2>Name: ${person.name}</h2>
    <div class="content hidden">
        <p>Mass: ${person.mass}Kgs</p>
        <p>Hair Color: ${person.hair_color}</p>
        <p>Skin Color: ${person.skin_color}</p>
    </div>
    <button class="btn">More Info</button>`;
  document.getElementById("container").appendChild(card);
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".content").forEach((item) => {
        item.classList.toggle("hidden");
        console.log("clicked");
      });
    });
  });
};

//2. Async Await
const fetchPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  console.log(data);
  const results = data.results;

  results.map((person) => renderPerson(person));
  console.log(results);
};

fetchPeople();
