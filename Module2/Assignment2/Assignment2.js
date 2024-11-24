function listParticipants (number){
  const names_list = []
  for (let i = 0; i < number; i++){
    let participants = prompt("Participant name:");
    names_list.push(participants);
    names_list.sort()
  }
  let ol = document.getElementById("target")
  for (name of names_list) {
    let li = document.createElement('li')
    li.innerHTML = name
    ol.appendChild(li)
  }
}

participants_number = parseInt(prompt("How many participants?"))
listParticipants(participants_number)