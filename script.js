'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         const html = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.svg}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.official}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
//     </div>
//   </article>
//     `;
//         countriesContainer.insertAdjacentHTML('beforeend', html)
//         countriesContainer.style.opacity = 1;
//     });
// }
// getCountryData('canada');
// getCountryData('belarus')
// getCountryData('bulgaria')


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[Object.keys(data.languages)[0]]}</p>
      <p class="country__row"><span>💰</span>${data.currencies[Object.keys(data.currencies)[0]].name}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html)
        // countriesContainer.style.opacity = 1;
};
// ///////////////////////////////////////
// const getCountryAndNeighbour = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data);
//         //get neighbour country
//         const neighbours = data.borders;
//         if (!neighbours) return;
//         neighbours.forEach(neighbour => {
//             //country neighbours
//             const request2 = new XMLHttpRequest();
//             request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}
//         `);
//             request2.send();
//             request2.addEventListener('load', function() {

//                 const [data2] = JSON.parse(this.responseText)
//                 renderCountry(data2, 'neighbour')

//             })

//         })
//     });
// }

// getCountryAndNeighbour('bulgaria');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/japan');

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         // console.log(response);
//         return response.json() //another fullfield -promise from json
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0])
//     })
// }


// const getCountryData = function(country) { //another fullfield -promise from json
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//         .then((response) => response.json())
//         .then((data) => {
//             renderCountry(data[0]);
//             console.log(data[0]);
//             const neighbours = data[0].borders;
//             if (!neighbours) return;
//             neighbours.forEach(neighbour => {
//                 //country neighbours
//                 fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//                     .then((response2) => response2.json())
//                     .then((data2) => renderCountry(data2[0], 'neighbour'))
//             })
//         })
//         .catch((error) => {
//             console.log('Error:', error);
//         });

// }
// getCountryData('Hellenic Republic')


const errorRender = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}
const getJSON = function(url, errorMsg = 'Something went wrong') {
        return fetch(url).then(response => {
            if (!response.ok)
                throw new Error(`${errorMsg} 💥${response.status}💥`)

            return response.json()
        });
    }
    // const getCountryData = function(country) {
    //     fetch(`https://restcountries.com/v3.1/name/${country}`)
    //         .then(response => {
    //             console.log(response);

//             if (!response.ok)
//                 throw new Error(`Country not found 💥${response.status}💥`)

//             return response.json()
//         })
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];
//             if (!neighbour) return;

//             // country neighbours
//             return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

//         })
//         .then(response => {

//             if (!response.ok)
//                 throw new Error(`Country not found 💥${response.status}💥`)

//             return response.json()
//         })
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             errorRender(`Something went wrong 🔶 ${err.message}.Try again.`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// };
// btn.addEventListener('click', function() {

//     getCountryData('Latvia');
// })

// const getCountryData = function(country) {
//     //country 1
//     getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found ')

//     .then(data => {
//             renderCountry(data[0]);

//             const neighbour = data[0].borders;

//             if (!neighbour) throw new Error('No neighbour found!');

//             // country neighbours
//             return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found ');

//         })
//         .then(data => renderCountry(data[0], 'neighbour'))
//         .catch(err => {
//             errorRender(`Something went wrong 🔶 ${err.message} Try again.`);
//         })
//         .finally(() => {
//             countriesContainer.style.opacity = 1;
//         })
// };

// btn.addEventListener('click', function() {
//     getCountryData('China');
//     btn.style.opacity = 0

// })
const getCountryData = function(country) {
    // country 1
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found ')
        .then(data => {
            renderCountry(data[0]);

            const neighbours = data[0].borders;

            if (!neighbours) throw new Error('No neighbour found!');

            const neighbourPromises = neighbours.map(neighbour => {
                // country neighbours
                return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found ');
            });

            return Promise.all(neighbourPromises);
        })
        .then(data => {
            data.forEach(neighborData => {
                renderCountry(neighborData[0], 'neighbour');
            });
        })
        .catch(err => {
            errorRender(`Something went wrong 🔶 ${err.message} Try again.`);
        })
        .finally(() => {
            countriesContainer.style.opacity = 1;
        });
};

btn.addEventListener('click', function() {
    getCountryData('Greece');
    btn.style.opacity = 0;
});