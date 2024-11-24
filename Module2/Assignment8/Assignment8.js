function concat (array){
  let concatenated = ""
  for (let name of array) {
    concatenated += name
  }
  return concatenated
  }

const name_array = ["Johny", "DeeDee", "Joey", "Marky"]

let p = document.getElementById("target")
p.innerHTML = concat(name_array)
