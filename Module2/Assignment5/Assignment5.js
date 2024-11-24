function arrangeList (array){
  for (let number of array){
    array.sort((a,b) => a-b)
  }
  console.log(array)
}

const number_list = []

while (true) {
  let number = parseInt(prompt("Enter an integer number:"))
  if (number_list.includes(number)) {
    break
  }
  else {
    number_list.push(number)
  }
}
alert("Number already given!")
arrangeList(number_list)









