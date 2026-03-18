

function selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary) {
  const randomIndex = Math.floor(Math.random() * vocabulary.length);
  // setIndex(number) is equivalent to index = number
  setIndex(randomIndex);

  //Call the function to get the wrong answers
  const wrongAnswers = selectNotRandomVocabulary(randomIndex, vocabulary);
  setWrongAnswers(wrongAnswers);
  return vocabulary[randomIndex];
}


// Choosing wrong vocabulary function
function selectNotRandomVocabulary(index, vocabulary) {
  const wrongAnswers = new Set();

  while (wrongAnswers.size < 3) {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    if (randomIndex !== index && !wrongAnswers.has(randomIndex)) {
      wrongAnswers.add(randomIndex);
    }
  }

  // Convert the set of wrong answer indices to an array of color objects
  const notRandomIndex = Array.from(wrongAnswers);

  // Map the indices to the color objects
  return notRandomIndex.map((i) => vocabulary[i]);
}

export { selectRandomVocabulary, selectNotRandomVocabulary };