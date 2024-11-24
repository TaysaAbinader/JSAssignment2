function listDogs (){
  const dogs_list = []
  for (let i = 0; i < 6; i++){
    let dog = prompt("Dog name:")
    dogs_list.push(dog)
  }
  dogs_list.sort()
  dogs_list.reverse()
  let ul = document.getElementById("target")
  for (let dog of dogs_list) {
    let li = document.createElement('li')
    li.innerHTML = dog
    ul.appendChild(li)
  }
}

listDogs()