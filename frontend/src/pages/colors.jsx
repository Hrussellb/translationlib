import { useState, useEffect } from "react";
import Button from "../components/Button";
// Confetti
import Confetti from "react-confetti";

// Words for the colors module
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://www.youtube.com/watch?v=37vxWr0WgQk
// If you want to verify fetches go to the page and left click to inspect and go to console

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
function selectRandomColor(setIndex, setWrongAnswers, colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  // setIndex(number) is equivalent to index = number
  setIndex(randomIndex);

  //Call the function to get the wrong answers
  const wrongAnswers = selectNotRandomColor(randomIndex, colors);
  setWrongAnswers(wrongAnswers);
  return colors[randomIndex];
}

// Choosing wrong color function
function selectNotRandomColor(index, colors) {
  const wrongAnswers = new Set();

  while (wrongAnswers.size < 3) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    if (randomIndex !== index && !wrongAnswers.has(randomIndex)) {
      wrongAnswers.add(randomIndex);
    }
  }

  // Convert the set of wrong answer indices to an array of color objects
  const notRandomIndex = Array.from(wrongAnswers);

  // Map the indices to the color objects
  return notRandomIndex.map((i) => colors[i]);
}

//Function to make the first page of the module with the words and a start button
function MakeFirstPage({ firstPage, setFirstPage }) {
  // Setting up the first page
  if (!firstPage) {
    return (
      <div className="learning-modules-grid">
        <div className="page-container">
          <p>Welcome to the colors module!</p>
          <Button
            onClick={() => setFirstPage(true)}
            color="black"
            border="3px solid black"
          >
            Start
          </Button>
        </div>
      </div>
    );
  }
}

function Quiz({
  colors,
  index,
  wrongAnswers,
  setWrongAnswers,
  setIndex,
  answered,
  setAnswered,
}) {
  //For correct answer
  const currentColor = colors[index];

  //Array with correct and wrong answers
  const ArrayCombined = [currentColor, ...wrongAnswers];
  //Shuffle the answers so that they arent ordered
  const shuffledArray = ArrayCombined.sort(() => Math.random() - 0.5);
  return (
    <div className="page-container">
      <div className="colors">
        {answered === colors.length && <Confetti />}
        <ProgressBar
          bgcolor="#79bc68"
          completed={(answered / colors.length) * 100}
        />
        <Button
          onClick={() => {
            selectRandomColor(setIndex, setWrongAnswers, colors);
            setAnswered(answered + 1);
            if (answered === colors.length) {
              alert("Congratulations! You have completed the colors module!");
            }
            if (answered + 1 >= colors.length) {
              setAnswered(0);
            }
          }}
          color="black"
          border="3px solid black"
        >
          Skip?
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
    </div>
  );
}

function Colors() {
  const [colors, setColors] = useState([]);

  // State to keep track of the current color index
  const [index, setIndex] = useState(0);

  //For wrong answers
  const [wrongAnswers, setWrongAnswers] = useState([]);

  //For progress bar
  const [answered, setAnswered] = useState(0);

  // loading
  const [status, setStatus] = useState(false);

  //Showing words first

  const [firstPage, setFirstPage] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/colors/");
        if (!response.ok) {
          throw new Error("Could not fetch colors data");
        }
        const data = await response.json();
        const renameColumns = data.map((item) => {
          return {
            english: item["English"],
            denaina: item["Dena'inaq'"],
          };
        });
        setColors(renameColumns);
        setWrongAnswers(selectNotRandomColor(0, renameColumns));
        setStatus(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!status) {
    return <p>Working</p>;
  }

  // First page function to list words
  if (!firstPage) {
    return <MakeFirstPage firstPage={firstPage} setFirstPage={setFirstPage} />;
  }

  return (
    <Quiz
      colors={colors}
      index={index}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      setIndex={setIndex}
      answered={answered}
      setAnswered={setAnswered}
    />
  );
}

export default Colors;
