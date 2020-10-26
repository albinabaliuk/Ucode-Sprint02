let BlackWidow = {
  team: 'Avengers',
  universe: "Marvel",
  race: "human",
  eyeColor: "green",
  hairColor: "lightBrown/green",
}

var SpipermanRobin = {
  team: "Justice League Of America",
  universe: "DC Comics",
  race: "human",
  eyeColor: "blue",
  hairColor: "black",
}

function showMeTheWidow(hero) {
  if (
    hero.team === 'Avengers' &&
    hero.universe === 'Marvel' &&
    hero.race === 'human' &&
    hero.eyeColor === 'green' &&
    hero.hairColor === 'lightBrown/green'
  ) {
    alert("This is a Widow")
  } else {
    alert("Didn't recognize")
  }
}

showMeTheWidow(BlackWidow);


function showMeTheSuper(heroes) {
  if (
    heroes.team === "Justice League Of America" &&
    heroes.universe === "DC Comics" &&
    heroes.race === "human" &&
    heroes.eyeColor === "blue" &&
    heroes.hairColor === "black"
  ) {
    alert("This is a Superman or Robin!")
  } else {
    alert("Didn't recognize")
  }
}

showMeTheSuper(SpipermanRobin)