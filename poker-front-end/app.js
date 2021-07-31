
  $("#deal").on('click', function() {
    $("#cardInHandOne").attr("src", cardInHand()[0]);
    $("#cardInHandTwo").attr("src", cardInHand()[1]);
  })
 $('#root').html("Hello World!");

// function randomCardIndex() { 
//     const randomIndex = Math.floor(Math.random() * 52) + 1;
//     return randomIndex;
// }

let randomRange = 52;
function cardInHand() {
    
    const randomIndex1 = Math.floor(Math.random() * randomRange + 1);
    let randomIndex2 = Math.floor(Math.random() * randomRange + 1);

    while(randomIndex1 === randomIndex2) {
        randomIndex2 = Math.floor(Math.random() * randomRange + 1);   
    }

    const card1 = cards[randomIndex1];
    const card2 = cards[randomIndex2];
    cards[randomIndex1] = null;
    cards[randomIndex2] = null;
    const newCards = cards.filter(card => card !== null);
    cards = [...newCards];
    if(randomRange<0) return;
    randomRange -= 2;
    return [card1,card2];
}

