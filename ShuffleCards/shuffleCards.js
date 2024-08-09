const cards = [`A`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, 'J', `Q`, `K`];
console.log(cards);
const shuffledCards = shuffleCards(cards);
console.log(shuffledCards);

function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i+1));
        [cards[i], cards[random]] = [cards[random], cards[i]]
    }

    return cards;
}