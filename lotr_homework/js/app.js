console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------");
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  $middleEarth = $('<section id="middle-earth"></section>');
  console.log($middleEarth);
  //$('body').append('<section id="middle-earth"></section>');

  // 2. append the section to the body of the DOM.
  //$('body').append($middleEarth);
  $('body').append($middleEarth);
  console.log($('body'));
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

  console.log("These are the lands of Middle Earth");
  console.log(lands.length)
  for(let i = 0; i < lands.length; i++)
  {
    $middleEarth.append(`<article id="${lands[i]}"><h1>${lands[i]}</h1></article>`);
    console.log($middleEarth);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.

  // 2. give each hobbit a class of "hobbit"

  console.log("These are the Hobbits")

  // $hobbitList = $('<ul/>')
  $theseHobbits = $('<ul></ul>');
  for(let i = 0; i < hobbits.length; i++)
  {
    $theseHobbits.append(`<li class="hobbit">${hobbits[i]}</li>`);
  }

  //$('#The-Shire').append(hobbitList);
  $theseHobbits2 = $('#The-Shire').append($theseHobbits);
  console.log($('The-Shire'));

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'

  $theOneRing = $('<div id="the-ring"></div>');

  $("li:contains('Frodo Baggins')").append($theOneRing);

  // 2. add the ring as a child of Frodo

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

const makeBaddies = () => {
  console.log("these are the villains of Mordor ");
  // 1. display an unordered list of baddies in Mordor
  $mordor = $('#Mordor');
  $mordorList = $mordor.append('<ul/>');

  for(let i = 0; i < baddies.length; i++)
  {
    $mordorList.append(`<li class="baddy">${baddies[i]}</li>`);
    console.log($mordorList);
  }

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  $theseBuddies = $('<aside/>');
  $buddiesList = $('<ul/>');

  for(let i = 0; i < buddies.length; i++)
  {
    $buddiesList.append(`<li class="buddy">${buddies[i]}</li>`);
    console.log($buddiesList);
  }

  $('#middle-earth').append($theseBuddies);
  $theseBuddies.append($buddiesList);
  // 2. display an unordered list of buddies in the aside

  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  const $theseHobbits = $('#The-Shire').find('ul');

  $('#Rivendell').append($theseHobbits);

  $('#The-Shire').remove($theseHobbits);

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

  $('li:contains("Strider")').text("Aragorn");



};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  $fellowship = $('<div id="the-fellowship">');

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $fellowship.append('<h1>The Fellowship</h1>')
  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  $fellowship.append($theseBuddies);
  $fellowship.append($theseHobbits);
  $('body').append($fellowship);
  console.log($fellowship.children());

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  $('li:contains("Gandalf")').text("Gandalf the White").addClass("the-white");
  console.log("Gandalf vs. the Balrog");
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('li:contains("Boromir")').remove();

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  // $orcs = $('#Mordor.').find('ul');
  // $orcs.empty();
  $('li.baddy:contains("The Uruk-hai")').remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $frodo = $('li:contains("Frodo Baggins")');
  const $sam = $(`li:contains("Samwise 'Sam' Gamgee")`);
  $frodo.remove();
  $sam.remove();
  // 2. add a div with an id of 'mount-doom' to Mordor

  $mountDoom = $('<div id="mount-doom"></div>');
  $mountDoom.append($frodo);
  $mountDoom.append($sam);
  $('#Mordor').append($mountDoom);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  let $gollum = $('<div id="gollum"></div>');
  $('#Mordor').append($gollum);

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom
  $('#mount-doom').append($gollum);

  $frodo = $("li:contains('Frodo Baggins')");
  $frodo.remove('#the-ring');
  $gollum.append('#the-ring');

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM



  // 3. Move all the hobbits back to the shire
  const $frodo = $('li:contains("Frodo Baggins")');
  const $sam = $(`li:contains("Samwise 'Sam' Gamgee")`);
  const $merry = $(`li:contains("Meriadoc 'Merry' Brandybuck")`);
  const $pippin = $(`li:contains("Peregrin 'Pippin' Took")`);
  $frodo.remove();
  $sam.remove();
  $pippin.remove();
  $merry.remove();

  let $hobbitReturn = $('<ul></ul>')

  $($hobbitReturn).append($frodo);
  $($hobbitReturn).append($sam);
  $($hobbitReturn).append($merry);
  $($hobbitReturn).append($pippin);
  $('#The-Shire').append($hobbitReturn);

  $('#Mordor').empty();
  $('#Mordor').append("<h1>Mordor</h1>");





};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  // $('button').click();
  const $buttons = $('button').toArray();
  let index = 0;

  const buttonClicks = setInterval(
    function() {
      // if(index > $buttons.length - 1) {
      //   return clearInterval(buttonClicks);
      // }
      // $buttons[index].click();
    }
  )
  for(let i = 0; i < $buttons.length; i++)
  {
    console.log("Clicking one button");
    //$buttons[i].click().delay(5000);
    //$buttons[i].click();
  }

});
