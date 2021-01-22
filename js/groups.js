// author: Yannik Mahlau

// a group has the following atttributes:
  // name
  // list of members
  // max number of members (e.g when searching one member: 4 current members with max of 5)
  // description

var first_name_examples = ['Aaren','Aarika','Abagael','Abagail','Abbe','Abbey','Abbi','Abbie','Abby','Abbye','Abigael','Abigail','Abigale','Abra','Ada','Adah','Adaline','Adan','Adara','Adda','Addi','Addia','Addie','Addy','Adel','Adela','Adelaida','Adelaide','Adele','Adelheid','Adelice','Adelina','Adelind','Adeline','Adella','Adelle','Adena','Adey','Adi','Adiana','Adina','Adora','Adore','Adoree','Adorne','Adrea','Adria','Adriaens','Adrian','Adriana','Adriane','Adrianna','Adrianne','Adriena','Adrienne','Aeriel','Aeriela','Aeriell','Afton','Ag','Agace','Agata','Agatha','Agathe','Aggi','Aggie','Aggy','Agna','Agnella','Agnes','Agnese','Agnesse','Agneta','Agnola','Agretha','Aida','Aidan','Aigneis','Aila','Aile','Ailee','Aileen','Ailene','Ailey','Aili','Ailina','Ailis','Ailsun','Ailyn','Aime','Aimee','Aimil','Aindrea','Ainslee','Ainsley','Ainslie','Ajay','Alaine','Alameda','Alana'];
var last_name_examples = ['Aaberg','Aalst','Aara','Aaren','Aarika','Aaron','Aaronson','Ab','Aba','Abad','Abagael','Abagail','Abana','Abate','Abba','Abbate','Abbe','Abbey','Abbi','Abbie','Abbot','Abbotsen','Abbotson','Abbotsun','Abbott','Abbottson','Abby','Abbye','Abdel','Abdella','Abdu','Abdul','Abdulla','Abe','Abebi','Abel','Abelard','Abell','Abercromby','Abernathy','Abernon','Abert','Abeu','Abey','Abie','Abigael','Abigail','Abigale','Abijah','Abisha','Abisia','Abixah','Abner','Aborn','Abott','Abra','Abraham','Abrahams','Abrahamsen','Abrahan','Abram','Abramo','Abrams','Abramson','Abran','Abroms','Absa','Absalom','Abshier','Acacia','Acalia','Accalia','Ace','Acey','Acherman','Achilles','Achorn','Acie','Acima','Acker','Ackerley','Ackerman','Ackler','Ackley','Acquah','Acus','Ad','Ada','Adabel','Adabelle','Adachi','Adah','Adaha','Adai','Adaiha','Adair','Adal','Adala','Adalai','Adalard'];

var example_studiengang = [
  "Mathematik",
  "Informatik",
  "Wirtschaftswissenschaften",
  "Elektrotechnik",
  "Physik",
  "Kunst",
  "Philosophie",
  "Lehramt"
]

var example_interessen = [
  "Sport, Tennis",
  "Tennis, Laufen",
  "Klavier, Musik, Pop",
  "PC-Spiele, Shooter",
  "Joggen, Schwimmen, Rad",
  "Bergsteigen, Klettern",
  "Spazieren, Netflix, Entspannen",
  "Party, Alkohol, Tanzen",
  "Festivals, Zelten, Bier"
]

var example_group_names = [
  "Technisches Englisch",
  "Spanisch A1",
  "IT-Sicherheit",
  "Spanisch B2",
  "Statistik fuer Psychologen",
  "Human-Computer-Interaction Lerngruppe",
  "StudyBuddies",
  "Lazy Students",
  "Gruppe: Programmieren",
  "IT-Sec Hausaufgabe",
];

var example_descriptions = [
  "Lerngruppe fuer die Veranstaltung Technisches Englisch. Wir suchen noch Mitglieder!",
  "Gruppe fuer Spanisch. Wir sind alle Anfänger (A1) und ueben zusammen Spanisch sprechen",
  "Lerngruppe fuer die IT-Sicherheit Vorlesung",
  "Wir suchen Fortgeschrittene Spanisch-Studenten (am besten B2)",
  "Wie funktioniert Mathe? Hiiilfeeee!",
  "Gruppenarbeit fuer das HCI-Projekt. Suchen Mitglieder mit Programmiererfahrung in HTML/CSS/JS",
  "Gruppe aus internationalen Studierenden.",
  "Wir machen nichts!",
  "Dies ist eine Arbeitsgruppe fuer die Vorlesung 'Programmieren 1'.",
  "Gruppe fuer die woechentlichen Abgaben in IT-Security"
];

class Group {
  name;
  members;
  description;
  max;
  
  constructor(name, members, max, description){
    this.name = name;
    this.members = members;
    this.max = max;
    this.description = description;
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

class Person {
  first_name;
  last_name;
  studiengang;
  semester;
  interessen;
    
  constructor(first_name, last_name, studiengang, semester, interessen){
    this.first_name = first_name;
    this.last_name = last_name;
    this.studiengang = studiengang;
    this.semester = semester;
    this.interessen = interessen;
  }
    
}

function comparePersons( a, b ) {
  if ((a.first_name + a.last_name) < (b.first_name + b.last_name)){
    return -1;
  }
  if ((a.first_name + a.last_name) < (b.first_name + b.last_name)){
    return 1;
  }
  return 0;
}

var NUM_PERSONS = 20;
var NUM_GROUPS = 10;
var global_persons = generateRandomPersons();
var global_groups = generateRandomGroups();


//generate random persons
function generateRandomPersons(){
  var result = [];
  for (var i = 0; i < NUM_PERSONS; i++){
    var first_name = first_name_examples[Math.floor(Math.random() * first_name_examples.length)];
    var last_name = last_name_examples[Math.floor(Math.random() * last_name_examples.length)];
    var studiengang = example_studiengang[Math.floor(Math.random() * example_studiengang.length)];
    var semester = Math.floor(Math.random() * 8 + 1); //8 is max semester
    var interessen = example_interessen[Math.floor(Math.random() * example_interessen.length)];
    var person = new Person(first_name, last_name, studiengang, semester, interessen);
    
    result.push(person);
  }
  return result;
}

//generate 10 random groups
function generateRandomGroups(){
  var result = []
  
  for(var i = 0; i < NUM_GROUPS ; i++){
    
    var max = Math.floor((Math.random() * 8) + 2);
    var numMembers = Math.floor((Math.random() * (max - 2)) + 1);
    var members = [];
    
    for (var j = 0; j < numMembers; j++){
      while(true){
        var person = global_persons[Math.floor(Math.random() * global_persons.length)];
        var str = person.first_name + " " + person.last_name;
        if(!members.includes(str)){
          members.push(str);
          break;
        }
      }
    }
    
    var group = new Group(
      example_group_names[i],
      members,
      max,
      example_descriptions[i]
    );
    
    result.push(group);
  }
  
  return result;
}




function findGroupByName(name){
  var res = global_groups.find(e => e.name == name);
  // console.log(res);
  if(res == null || res == []) {
    return null;
  } else if (res.length > 0){
    return res[0];
  }
  return res;
}

function findPersonByName(name){
  var res = global_persons.find(e => (e.first_name + " " + e.last_name) == name);
  if(res == null || res == []) {
    return null;
  } else if (res.length > 0){
    return res[0];
  }
  return res;
}


