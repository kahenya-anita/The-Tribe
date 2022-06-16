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
//2. Async Await
const fetchPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/1/");
  const data = await response.json();
  console.log(data);
  const results = data.results;

  results.map((person) => renderPerson(person));
  console.log(results);
};

fetchPeople();
