import { useState } from "react";
import Button from "../components/Button";
// Confetti
import Confetti from "react-confetti";

// Words for the colors module

const Colorwords = [
  { denaina: "Didetl'ich'i", english: "Blue" },
  { denaina: "K'chan q'elchini", english: "Green" },
  { denaina: "Łach qilt'ani", english: "Brown" },
  { denaina: "Didechigi", english: "Orange" },
  { denaina: "Dghelt'ich'i", english: "Black" },
  { denaina: "Dasdeli itq'uli", english: "Pink" },
  { denaina: "Dghelggeyi", english: "White" },
  { denaina: "Deldeli", english: "Red" },
  { denaina: "Itseghi", english: "Yellow" },
  { denaina: "Chatl'ech qilt'ani", english: "Purple" },
];

// Progress bar
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div
      style={{
        height: 20,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }}
    >
      <div
        style={{
          backgroundColor: bgcolor,
          width: `${completed}%`,
          height: "20px",
          borderRadius: "10px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
};

// Select one of the correct colors and three wrong colors to display on the page
function selectRandomColor(setIndex, setWrongAnswers) {
  const randomIndex = Math.floor(Math.random() * Colorwords.length);
  // setIndex(number) is equivalent to index = number
  setIndex(randomIndex);

  //Call the function to get the wrong answers
  const wrongAnswers = selectNotRandomColor(randomIndex);
  setWrongAnswers(wrongAnswers);
  return Colorwords[randomIndex];
}

// Choosing wrong color function
function selectNotRandomColor(index) {
  const wrongAnswers = new Set();

  while (wrongAnswers.size < 3) {
    const randomIndex = Math.floor(Math.random() * Colorwords.length);
    if (randomIndex !== index && !wrongAnswers.has(randomIndex)) {
      wrongAnswers.add(randomIndex);
    }
  }

  // Convert the set of wrong answer indices to an array of color objects
  const notRandomIndex = Array.from(wrongAnswers);

  // Map the indices to the color objects
  return notRandomIndex.map((i) => Colorwords[i]);
}

function Colors() {
  // State to keep track of the current color index
  const [index, setIndex] = useState(0);

  //For correct answer
  const currentColor = Colorwords[index];

  //For wrong answers
  const [wrongAnswers, setWrongAnswers] = useState(selectNotRandomColor(index));

  //For progress bar
  const [answered, setAnswered] = useState(0);

  //Array with correct and wrong answers
  const ArrayCombined = [currentColor, ...wrongAnswers];
  //Shuffle the answers so that they arent ordered
  const shuffledArray = ArrayCombined.sort(() => Math.random() - 0.5);

  return (
    <div className="colors">
      {answered === Colorwords.length && <Confetti />}
      <ProgressBar
        bgcolor="#79bc68"
        completed={(answered / Colorwords.length) * 100}
      />
      <Button
        onClick={() => {
          selectRandomColor(setIndex, setWrongAnswers);
          setAnswered(answered + 1);
          if (answered === Colorwords.length) {
            alert("Congratulations! You have completed the colors module!");
          }
        }}
        color="black"
        border="3px solid black"
      >
        Next Color
      </Button>
      <h1>Ch'adach' luchin "{currentColor.denaina}"</h1>
      {shuffledArray.map((color, i) => (
        <Button
          key={i}
          onClick={() => {
            if (color.english === currentColor.english) {
              alert("Correct!");
              setAnswered(answered + 1);
            } else {
              alert("Wrong! Try again!");
            }
          }}
          color={color.english}
          border={`3px solid ${color.english}`}
        >
          {color.english}
        </Button>
      ))}
      <h1>English: {currentColor.english}</h1>
    </div>
  );
}

export default Colors;
