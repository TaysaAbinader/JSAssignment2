function even (array){
  const even_list = []
  for (let number of array){
    if (number % 2 === 0){
      even_list.push(number)
    }
  }
  return even_list
}

const number_array = [2, 7, 4]
const list = even(number_array)
console.log(number_array)
console.log(list)
