(function($, window, fightClub) {

  /**
  * An object representing a single fighter.
  */

  fightClub.Fighter = function (id, name, lastname, desc, avatar, experience){
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.description = desc;
    this.avatar = avatar;
    this.experience = experience || 0 ;
    this.isSelected = false;
  }

  /**
  * A list of fighter objects, three default fighters.
  */
  fightClub.fighters = {
    3263: {
      id: 3263,
      name: 'John',
      lastname: 'the Cat',
      description: 'Loves the sun and a good bowl of milk',
      avatar: 'http://lorempixel.com/100/100/cats/1',
      experience: 5
    },
    3467:
    {
      id:3467,
      name: 'Fur',
      lastname: 'Ball',
      description: 'Binge catmint consumer',
      avatar: 'http://lorempixel.com/100/100/cats/2',
      experience: 3
    },
    3466:
    {
      id:3466,
      name: 'Grupmpy',
      lastname: 'Cat',
      description: 'Doesn\'t like anyone or anything',
      avatar: 'http://lorempixel.com/100/100/cats/3',
      experience: 1
    }
  };

  /**
  * Displaying fighters
  */

  fightClub.displayFighters = function(){
    var resultsHtml = '';
    var results = $('.fighterList');
    for(id in fightClub.fighters){
      resultsHtml += '<div class="fighter-row " data-fighter-id="' + fightClub.fighters[id].id + '">\
      <img src=' + fightClub.fighters[id].avatar + ' />\
      <div class="fighter-info">\
      <div class="fighter-name">' + fightClub.fighters[id].name + ' ' + fightClub.fighters[id].lastname + '</div>\
      <div class="fighter-exp">' + '<p>exp: ' + fightClub.fighters[id].experience + '</p>' + '</div>\
      <div class="fighter-desc"><p>' + fightClub.fighters[id].description + '</p></div></div>\
      <button type="button" class="btn btn-circle removeButton" data-fighter-id="' + fightClub.fighters[id].id + '">\
      <i class="glyphicon glyphicon-remove"></i></button></div>';
    }
    results.html(resultsHtml);
    fightClub.findBest();
  }

  /**
  * Adding a fighter to fightClub.fighters, with values from the html form.
  * Name, lastname and an avatar link are mandatory, but description and
  * experience are optional. In case the user doesn't put the experience value,
  * the default is 0.
  */

  fightClub.addNewFighter = function(event){
    event.preventDefault();
    var newname = $('.input-name').val();
    var newlastname = $('.input-lastname').val();
    var newdescription = $('.input-desc').val();
    var newavatarLink = $('.input-avatar').val();
    var newexperience = parseInt($('.input-exp').val());
    var id = generateID();
    fightClub.fighters[id] = new fightClub.Fighter(id, newname, newlastname, newdescription, newavatarLink, newexperience);

    fightClub.displayFighters();
  }

  /**
  * Removing a fighter from fightClub.fighters
  @param {Number} id
  */

  fightClub.removeFighter = function(e, id){
    e.stopPropagation();
    var id = $(this).attr('data-fighter-id');
    delete fightClub.fighters[id];
    fightClub.displayFighters();
  }

  /**
  * Finding the best fighter (the one with biggest number of experience points).
  */

  fightClub.findBest = function(){
    var bestFighter;
    var currentBest = 0;
    var bestHtml = $('.bestFighter');
    for(id in fightClub.fighters){
      if(fightClub.fighters[id].experience > currentBest){
        currentBest = fightClub.fighters[id].experience;
        bestFighter = '<p>Best fighter:</p>' +  fightClub.fighters[id].name + ' ' + fightClub.fighters[id].lastname;
      }
    }
    bestHtml.html(bestFighter);
  }

  /**
  * Generating a unique id for every new fighter based on date and time.
  * Returns a string representing an id.
  */

  var generateID = function(){
    var date = new Date();
    var components = [
      date.getYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
    var id = components.join("");
    return id;
  }

}(jQuery, window, (fightClub)));
