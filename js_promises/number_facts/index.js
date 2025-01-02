
// Single number 
const favoriteNumber = 7;
const url = `http://numbersapi.com/${favoriteNumber}?json`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.text);
    document.body.innerHTML += `<p>${data.text}</p>`;
  })
  .catch(err => console.error('Error fetching number fact:', err));

// multiple number in one
const numbers = [3, 7, 9, 42];
const multiUrl = `http://numbersapi.com/${numbers.join(',')}?json`;

fetch(multiUrl)
  .then(response => response.json())
  .then(data => {
    for (const number in data) {
      document.body.innerHTML += `<p>${data[number]}</p>`;
    }
  })
  .catch(err => console.error('Error fetching multiple number facts:', err));

// four facts about a signle number
const favNum = 7;
const promises = Array(4)
  .fill(null)
  .map(() => fetch(`http://numbersapi.com/${favNum}?json`).then(res => res.json()));

Promise.all(promises)
  .then(facts => {
    facts.forEach(fact => {
      document.body.innerHTML += `<p>${fact.text}</p>`;
    });
  })
  .catch(err => console.error('Error fetching multiple facts:', err));