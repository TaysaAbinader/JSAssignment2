function rollDice(sides){
  return Math.floor(Math.random()*sides+1);
}

const dice_sides = parseInt(prompt("Dice side quantity:"))
let ul = document.getElementById("target");
while (true) {
  let dice = rollDice(dice_sides)
  let li = document.createElement("li")
  li.innerHTML = dice
  ul.appendChild(li)
  if (dice === dice_sides){
    break
  }
}






