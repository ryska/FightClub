(function($, fightClub){
  fightClub.displayFighters();

  /**
  * Removes a fighter when the button is clicked.
  */
  $('.fighterList').on('click', '.removeButton', fightClub.removeFighter);

  var form = $('.addNew-form');

  /**
  * Adds new fighter on form submit.
  */
  form.on('submit', fightClub.addNewFighter);

  /**
  * Selecting a fighter that is clicked.
  */
  $('.fighterList').on('click', '.fighter-row', fightClub.select);

  fightBtn = $('.fight');

  /**
  * Starts a battle when the button is clicked.
  */
  fightBtn.on('click', fightClub.startBattle);
}(jQuery, fightClub));
