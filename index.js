let firstCard = 10
let secondCard = 4
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let cardsEL=document.getElementById("cards-el")
let messageEl=document.getElementById("message-el")
let sumEL=document.getElementById("sum-el")

function startGame(){
    renderGame()
}
function renderGame(){
    if(sum <= 20){
        message="Do you want to draw a new card?"
        
    }
    else if (sum === 21){
       message="Wohoo! you have got Blackjack!"
        hasBlackJack = true
    } else {
        message="you are out of the game"
        isAlive = false
    }
   messageEl.textContent=message
   sumEL.textContent="Sum: " + sum
   cardsEL.textContent="Cards: "+ cards[0] +" "+ cards[1]
}

let newNumber = 3
function newCard() {
    sum = sum + newNumber
    renderGame()
}

