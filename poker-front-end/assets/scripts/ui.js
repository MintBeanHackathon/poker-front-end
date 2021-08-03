export const displayCard = (card, displayStatus) => {
$('.value').text()
} 

export function handlePlayAgainButton () {
    $('.modal').removeClass('is-visible')
    $('.container').css({"display":"flex"});
    $('.text').text('Click Anywhere to Play').css({"display":"block"});
  }

  export function modalPopup(text) {
    $('.modal').toggleClass('is-visible');
    $('.modal-heading').text(text);
    $('.container').css({"display":"none"});
    $('.text').css({"display":"none"});
    $('#exist-btn').show();
  }

  export function handleExitGameButton() {
    $('.modal-heading').text("Bye");
    $('#exist-btn').hide();
  }

  export function handleStartGameButton (e) {
    e.stopPropagation();
    $('.section').css({"display":"none"});
    $('.section_game').css({"display":"block"});
    
}