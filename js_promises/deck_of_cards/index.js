//Comment out part one or two to see the solutions work. 

// PART ONE PROMISES ----------------------------------------------------------------
// Single card
fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
  .then(response => response.json())
  .then(data => {
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
  })
  .catch(err => console.error('Error fetching card:', err));

// Two Cards
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(response => response.json())
  .then(data => {
    const deckId = data.deck_id;
    return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  })
  .then(response => response.json())
  .then(data => {
    const firstCard = data.cards[0];
    console.log(`${firstCard.value} of ${firstCard.suit}`);
    return fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`);
  })
  .then(response => response.json())
  .then(data => {
    const secondCard = data.cards[0];
    console.log(`${secondCard.value} of ${secondCard.suit}`);
  })
  .catch(err => console.error('Error fetching cards:', err));

  // PART TWO ASYNC/await -------------------------------------------------------------

  // Single Card
  async function drawSingleCard() {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
      const data = await response.json();
      const card = data.cards[0];
      console.log(`${card.value} of ${card.suit}`);
    } catch (err) {
      console.error(err);
    }
  }
  
  drawSingleCard();

  // Two Cards
  async function drawTwoCards() {
    try {
      const deckResponse = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/');
      const deckData = await deckResponse.json();
      const deckId = deckData.deck_id;
  
      const firstCardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      const firstCardData = await firstCardResponse.json();
      const firstCard = firstCardData.cards[0];
      console.log(`${firstCard.value} of ${firstCard.suit}`);
  
      const secondCardResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      const secondCardData = await secondCardResponse.json();
      const secondCard = secondCardData.cards[0];
      console.log(`${secondCard.value} of ${secondCard.suit}`);
    } catch (err) {
      console.error(err);
    }
  }
  
  drawTwoCards();
