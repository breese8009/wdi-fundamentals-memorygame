
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
		let element=document.getElementById('overlay');
		element.innerHTML="Congratulations!<br>You have a great memory!<br>Would you like to play again?<br>";
		element.classList.add('overlayCSS');
		let button = document.createElement("button");
		button.innerHTML="play again";
		button.setAttribute("id","btn");
		element.appendChild(button);
		btn.addEventListener('click',btnClick);
		console.log(button);
	} else {
		let element=document.getElementById('overlay');
		element.innerHTML="Sorry!<br>Your memory sucks!<br>Would you like to play again?<br>";
		element.classList.add('overlayCSS');
		let button = document.createElement("button");
		button.innerHTML="play again";
		button.setAttribute("id","btn");
		element.appendChild(button);
		btn.addEventListener('click',btnClick);
		console.log(button);
	}
};




const btnClick = ()=>{
window.location.reload(true);
}




const flipCard = (event)=>{

 let element = event.target;

    let cardID = element.getAttribute('data-id');

	cardsInPlay.push(cards[cardID].rank);

element.setAttribute('src', cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
		setTimeout(checkForMatch, 700);
	}


}


const createBoard = window.onload=()=>{

	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('img');

		cardElement.setAttribute('src', "images/back.png");

		cardElement.setAttribute('data-id', i);

		document.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement);

	}
}





