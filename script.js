'use strict';

const SCORE = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = SCORE;
const numberElem = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const numberInput = document.querySelector('.guess');
const bodyElem = document.querySelector('body');
const againElem = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreElem = document.querySelector('.score');


checkBtn.addEventListener('click', function(){
	const guess = Number(numberInput.value);
	
	if(!guess) 	message.textContent = '🚫  No number!';
	else if(guess === secretNumber) {
		message.textContent = '✅ You guess';
		bodyElem.style.backgroundColor  = '#60b347';
		numberElem.style.width  = '30rem';
		numberElem.textContent = secretNumber;
	}
	else if(guess > secretNumber) message.textContent = '📈 Too High';
	else if(guess < secretNumber) message.textContent = '📉 Too Low';
	
	if((guess > secretNumber || guess < secretNumber) && guess) {
		--score;
		if(score >= 1) {
			scoreElem.textContent = score;
		} else {
			message.textContent = "🤯 You loose the game";
			scoreElem.textContent = 0;
			this.setAttribute('disabled', 'disabled')
		}
	}
		
	
});

againElem.addEventListener('click', () => {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	scoreElem.textContent = SCORE;
	numberElem.textContent = '?';
	message.textContent = 'Start guessing...';
	numberInput.value = '';
	checkBtn.removeAttribute('disabled');
	bodyElem.style.backgroundColor  = '#222';
	numberElem.style.width  = '15rem';
})


// numberInput.addEventListener('blur', (e) => {
// 	guess = Number(e.target.value);
// 	checkBtn.removeAttribute('disabled');
	
// })
