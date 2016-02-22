(function($, fightClub){
  fightClub.displayFighters();
  $('.fighterList').on('click', '.removeButton', fightClub.removeFighter);
  var form = $('.addNew-form');

  form.on('submit', fightClub.addNewFighter);
  $('.fighterList').on('click', '.fighter-row', fightClub.select);
  fightBtn = $('.fight');
  fightBtn.on('click', fightClub.startBattle);
}(jQuery, fightClub));
