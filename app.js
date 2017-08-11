

let cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];


const checkForMatch = ()=>{
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};



const flipCard = (event)=>{
 let element = event.currentTarget;
    let cardID = element.getAttribute('data-id');

// this.setAttribute('src', cards[cardID].cardImage);


	cardsInPlay.push(cards[cardID].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

console.log(cardsInPlay);


const createBoard = ()=>{
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');

		cardElement.setAttribute('src', "images/back.png");

		cardElement.setAttribute('data-id', i);

		document.addEventListener('click', flipCard);

		console.log(cardElement);

		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();


