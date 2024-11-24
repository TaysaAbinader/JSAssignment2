function reverseArray (array){
  const reverse_array = []
  for (let i = array.length - 1; i >= 0; i--){
    reverse_array.push(array[i])
  }
  console.log(reverse_array)
}

const number_array = []

for (let j = 0; j < 5;j++){
  let number = parseInt(prompt("Enter an integer number: "))
  number_array.push(number)
}

reverseArray(number_array)

