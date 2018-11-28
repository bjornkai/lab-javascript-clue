const suspects = [];

const mrGreen = {
firstName: "Jacob",
lastName: "Green",
occupation: "entrepreneur",
color: "green",
description: "He has a lot of connections and is always willing to help people out -- for a price."
};

const drOrchid = {
firstName: "Sonia",
lastName: "Orchid",
occupation: "doctor",
color: "white",
description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
};

const victorPlum = {
firstName: "Victor",
lastName: "Plum",
occupation: "video game designer",
color: "purple",
description: "He is a billionaire video game designer who is embracing his new popularity."
};
const kasandraScarlet = {
firstName: "Kasandra",
lastName: "Scarlet",
occupation: "A-list movie star",
color: "red",
description: ""
};
const eleonorePeacock = {
firstName: "Eleonore",
lastName: "Peackok",
occupation: "unemployed",
color: "blue",
description: "She is from a wealthy family and uses her status and money to earn popularity."
};
const jackMustard = {
firstName: "Jack",
lastName: "Mustard",
occupation: "football player",
color: "yellow",
description: "He is a former football player who tries to get by on his former glory."
};


suspects.push(mrGreen, drOrchid, victorPlum, kasandraScarlet, eleonorePeacock,jackMustard);


const weapons = [];

const rope = {
name: "rope",
weight: "3 pounds",
color: "black",
painlevel: "hurts"
};
const knife ={
name: "knife",
weight: "0.2 pound",
color: "dark brown",
painlevel: "hurts bad"
};
const candlestick = {
name: "candlestick",
weight: "4 pounds",
color: "gold",
painlevel: "so-so"
};
const dumbbell ={
name: "dumbbell",
weight: "50 pounds",
color: "black",
painlevel: "hurts super bad"
};
const poison = {
name:"poison",
weight: "0.001 pound",
color: "blue",
painlevel: "no pain"
};
const axe = {
name: "axe",
weight: "20 pounds",
color: "grey",
painlevel: "really hurts"
};
const bat = {
name: "bat",
weight: "10 pounds",
color: "black",
painlevel: "so-so"
};
const trophy = {
name: "trophy",
weight: "15 pounds",
color: "silver",
painlevel: "so-so"
};
const pistol = {
name: "pistol",
weight: "1 pound",
color: "black",
painlevel: "hurts"
};

weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

const rooms = [
  "dining room", "conservatory", "kitchen", "study","library",
  "billiard room", "lounge", "ballroom","hall", "spa", "living room",
  "observatory", "theater", "guest house", "patio"
];

function randomSelector (someArray){
  return Math.floor(Math.random() * someArray.length);
}

// randomSelector(weapons);

const mysteryEnvelope = [];
function pickMystery(){
  const randomSuspect = suspects[randomSelector(suspects)];
  const randomWeapon = weapons[randomSelector(weapons)];
  const randomRoom = rooms[randomSelector(rooms)];

  mysteryEnvelope.push(randomSuspect, randomWeapon, randomRoom );

  // mysteryEnvelope.push(suspects[randomSelector(suspects)],weapons[randomSelector(weapons)], rooms[randomSelector(rooms)] )
  
  return mysteryEnvelope;
}

pickMystery();

// <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the  <PLACE>

function revealMystery(someMystery){
  return `${someMystery[0].firstName} ${someMystery[0].lastName} killed Mr.Body using the ${someMystery[1].name} in the ${someMystery[2]}`
}
revealMystery(mysteryEnvelope);