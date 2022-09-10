let firstCard = 2;
let secondCard = 19;
let totalCard = firstCard + secondCard;

if (totalCard < 21) {
    console.log("Do you want to draw a new card? 🙂");
}else if(totalCard === 21){
    console.log("Wohoo! You've got BlackJack! 😌");
}else if (totalCard > 21){
    console.log("You are out of the game! 😭");
}