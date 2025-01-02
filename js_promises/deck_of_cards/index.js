

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