function rollDice(){
  return Math.floor(Math.random()*6+1);
}

let ul = document.getElementById("target");
while (true) {
  let dice = rollDice()
  let li = document.createElement("li")
  li.innerHTML = dice
  ul.appendChild(li)
  if (dice === 6){
    break
  }
}






