

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
    $('.section').css({"display":"block"});
    $('.container').css({"display":"flex"});
    $('.section_game').css({"display":"none"});
  }

  export function handleStartGameButton (e) {
    e.stopPropagation();
    $('.modal').removeClass('is-visible');
    $('.section').css({"display":"none"});
    $('.section_game').css({"display":"block"});
    
}