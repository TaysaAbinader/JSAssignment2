function arrangeList (array){
  for (let number of array){
    array.sort((a,b) => b-a)
  }
  console.log(array)
}

const number_list = []

let number = -1
while (number !== 0) {
  number = parseInt(prompt("Enter an integer number:"))
  number_list.push(number);
}

arrangeList(number_list)





