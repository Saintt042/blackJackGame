let messageEl = document.getElementById("message-El");
let sumEl = document.getElementById("sum-El");
let cardsEl = document.querySelector("#cards-El");
let playerEl = document.getElementById("player-El");

let firstCard = 0
let secondCard = 0;
let cards = []
let totalCard = 0;
//bolean starts
let hasBlackJack = false;
let isAlive = false;
let message = " ";

let player = {
    name: "Alinwachukwu",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    console.log("Overcomer")
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let cards = [firstCard, secondCard]
    let totalCard = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }else if(randomNumber === 1){
        return 11
    }else{
    return randomNumber
}
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for (let $ = 0; $ < cards.length; $++){
        cardsEl.textContent += cards[$] + " - ";
    };


    sumEl.textContent = "Sum:" + " " + totalCard;

    if (totalCard <= 20) {
        message = "Do you want to draw a new card?";
    }else if(totalCard === 21){
        message = "You've got BlackJack!";
        hasBlackJack = true;
    }else{
        message = "You are out of the game!";
        isAlive = false;
    }

        messageEl.textContent = message;
}



function newCard(){
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the Deck!");
        let newCards = getRandomCard();
        totalCard += newCards;
        cards.push(newCards);
        console.log(cards)
        renderGame()
    }   

}



   
























/* to keep track of userScore we have to introduce the bolean, true or false statements, so we say if the user has a blackjack then
user should be paid

// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    
    console.log(count)

}


for (let $ = 0; $ < 101; $ += 10) {
    console.log($)
}

// Create a for loop that counts from 10 to 100 in steps of 10
// Use console.log to log out the numbers



let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}
////////////////////////////
/////////////////////


// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
}
rollDice()
///////////////////////////
/////////////////////

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )

/////////////////////////
 

///////////////////////////////
math.floor removes decimals and leaves the whole numbers. while math.random generates numbers from 0.0 to 0.9

let randomNumber = Math.floor( Math.random() * 6 )

console.log(randomNumber)

/* 

Write down all the possible values randomNumber can hold now!

 0,1,2,3,4,5


 //////////////////////////////
let hasCompletedCourse = true
let givesCertificate = true
///if you just want any condition met if npt use &&
if (hasCompletedCourse === true || givesCertificate === true) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


 /////////////////////////////
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnb = {
    isAvalaible: true,
    note: "Private room in Galway"
    title: "Live like a King in my Castle",
    price: 56
}

console.log(airbnb.isAvalaible)
console.log(airbnb.price)

 ////////////////////////


*/





















// let age = 2;
// if (age < 22){
//     console.log("You cannot enter the club!")
// }else{
//     console.log("Welcome!")
// }

/* Check if the person is elegible for a birthday card from the King! (100)

let age = 990

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age <= 99){
    console.log("You are not eligible!")
}else if(age === 100){
    console.log("Here is your birthday card from the King!")
}else{
    console.log("Not elegible, you have already gotten one")
}


//////////////////

let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d to edit multiple same
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out



function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)


*/
