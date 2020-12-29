// author: Yannik Mahlau

// a group has the following atttributes:
  // name
  // list of members
  // max number of members (e.g when searching one member: 4 current members with max of 5)
  // description


class Group {
  name;
  members;
  description;
  max;
  
  constructor(name, members, max, description){
    this.name = name;
    this.members = members;
    this.description = description;
    this.max = max;
  }
  
}

function compareGroups( a, b ) {
  if ( a.name < b.name ){
    return -1;
  }
  if ( a.name > b.name ){
    return 1;
  }
  return 0;
}


var example_names = [
  "Technisches Englisch",
  "Spanisch A1",
  "IT-Sicherheit",
  "Spanisch A2",
  "Mathe fuer Psychologen",
  "Human-Computer-Interaction Lerngruppe",
  "StudyBuddies",
  "Lazy Students",
  "Gruppe: Programmieren",
  "IT-Sec Hausaufgabe",
];
  
var first_name_examples = ['Aaren','Aarika','Abagael','Abagail','Abbe','Abbey','Abbi','Abbie','Abby','Abbye','Abigael','Abigail','Abigale','Abra','Ada','Adah','Adaline','Adan','Adara','Adda','Addi','Addia','Addie','Addy','Adel','Adela','Adelaida','Adelaide','Adele','Adelheid','Adelice','Adelina','Adelind','Adeline','Adella','Adelle','Adena','Adey','Adi','Adiana','Adina','Adora','Adore','Adoree','Adorne','Adrea','Adria','Adriaens','Adrian','Adriana','Adriane','Adrianna','Adrianne','Adriena','Adrienne','Aeriel','Aeriela','Aeriell','Afton','Ag','Agace','Agata','Agatha','Agathe','Aggi','Aggie','Aggy','Agna','Agnella','Agnes','Agnese','Agnesse','Agneta','Agnola','Agretha','Aida','Aidan','Aigneis','Aila','Aile','Ailee','Aileen','Ailene','Ailey','Aili','Ailina','Ailis','Ailsun','Ailyn','Aime','Aimee','Aimil','Aindrea','Ainslee','Ainsley','Ainslie','Ajay','Alaine','Alameda','Alana'];
var last_name_examples = ['Aaberg','Aalst','Aara','Aaren','Aarika','Aaron','Aaronson','Ab','Aba','Abad','Abagael','Abagail','Abana','Abate','Abba','Abbate','Abbe','Abbey','Abbi','Abbie','Abbot','Abbotsen','Abbotson','Abbotsun','Abbott','Abbottson','Abby','Abbye','Abdel','Abdella','Abdu','Abdul','Abdulla','Abe','Abebi','Abel','Abelard','Abell','Abercromby','Abernathy','Abernon','Abert','Abeu','Abey','Abie','Abigael','Abigail','Abigale','Abijah','Abisha','Abisia','Abixah','Abner','Aborn','Abott','Abra','Abraham','Abrahams','Abrahamsen','Abrahan','Abram','Abramo','Abrams','Abramson','Abran','Abroms','Absa','Absalom','Abshier','Acacia','Acalia','Accalia','Ace','Acey','Acherman','Achilles','Achorn','Acie','Acima','Acker','Ackerley','Ackerman','Ackler','Ackley','Acquah','Acus','Ad','Ada','Adabel','Adabelle','Adachi','Adah','Adaha','Adai','Adaiha','Adair','Adal','Adala','Adalai','Adalard'];

var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

//generate 10 random groups
function generateRandomGroups(){
  var result = []
  
  for(var i = 0; i < 10 ; i++){
    
    var max = Math.floor(Math.random() * 10);
    var numMembers = Math.floor(Math.random() * max);
    var members = [];
    
    for (var j = 0; j < numMembers; j++){
      var rnd_1 = Math.floor(Math.random() * 100);
      var rnd_2 = Math.floor(Math.random() * 100);
      var name = first_name_examples[rnd_1] + " " + last_name_examples[rnd_2];
      members.push(name);
    }
    
    var group = new Group(
      example_names[i],
      members,
      description,
      max
    );
    
    result.push(group);
  }
  
  return result;
}

var global_groups = generateRandomGroups();


