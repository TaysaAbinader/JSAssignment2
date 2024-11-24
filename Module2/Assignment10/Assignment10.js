function votingProgram() {
  const candidatesQt = parseInt(prompt("Enter the number of candidates:"))

  const candidates = []
  for (let i = 0; i < candidatesQt; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({name, votes: 0});
  }

  console.log(candidates)

  const votersQt = parseInt(prompt("Enter the number of voters:"));
  for (let i = 0; i < votersQt; i++) {
    const vote_name = prompt(`Voter ${i + 1}, who do you vote for?`);
    if (vote_name === ""){
      console.log("Empty vote.")
      continue;
    }
    for (let candidate of candidates) {
      if (vote_name === candidate.name) {
        candidate.votes++;
        break;
      }
    }
  }

  candidates.sort((a, b) => b.votes - a.votes);
  const firstMost = candidates[0]
  const secondMost = candidates[1]

  if (firstMost.votes === secondMost.votes) {
    console.log("It's a tie.")
  }

  console.log(`The winner is ${firstMost.name} with ${firstMost.votes} votes.`);
  console.log("results:");
  candidates.forEach(candidate => {
    console.log(`${candidate.name}: ${candidate.votes} votes`)
  })
}

votingProgram()