//Comment out part one or two to see the solutions work. 

// PART ONE PROMISES ----------------------------------------------------------------
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

// PART TWO ASYNC/await -------------------------------------------------------------

// single Number: 
const favoriteNumber = 7;
const apiUrl = `http://numbersapi.com/${favoriteNumber}?json`;

async function getFavoriteNumberFact() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.text); // Log the fact
    document.body.innerHTML += `<p>${data.text}</p>`;
  } catch (err) {
    console.error(err);
  }
}

getFavoriteNumberFact();

// multiple Numbers:
const numbers = [3, 7, 42];
const apiUrlMulti = `http://numbersapi.com/${numbers.join(',')}?json`;

async function getMultipleNumberFacts() {
  try {
    const response = await fetch(apiUrlMulti);
    const data = await response.json();
    Object.values(data).forEach(fact => {
      document.body.innerHTML += `<p>${fact}</p>`;
    });
  } catch (err) {
    console.error(err);
  }
}

getMultipleNumberFacts();

// four facts about your fav number:
async function getFourFacts() {
  try {
    const promises = Array(4)
      .fill(apiUrl)
      .map(url => fetch(url).then(res => res.json()));
    const facts = await Promise.all(promises);
    facts.forEach(fact => {
      document.body.innerHTML += `<p>${fact.text}</p>`;
    });
  } catch (err) {
    console.error(err);
  }
}

getFourFacts();
