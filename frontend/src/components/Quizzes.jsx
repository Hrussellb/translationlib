//Reusable comopnent for the quizzes pages
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { selectRandomVocabulary } from "../functions/selectRandomVocabulary";
import Confetti from "react-confetti";
import HomeButton from "./HomeButton";
import "./Quizzes.css";

// White button is invisible and impossible to see

function handleWhite(color) {
  //Change white to grey so that it is visible for the user
  if (color === "white") {
    return "black";
  }
  //If not white then return the color as is
  return color;
}

// Component for making the "quiz" pages with parameters.

function Quiz({
  vocabulary,
  index,
  wrongAnswers,
  setWrongAnswers,
  setIndex,
  answered,
  setAnswered,
  color = "black",
  forColorModule = false,
  question = "What is this?",
}) {
  //For correct answer
  const currentVocabulary = vocabulary[index];

  //Array with correct and wrong answers
  const ArrayCombined = [currentVocabulary, ...wrongAnswers];

  //Shuffle the answers so that they arent ordered
  // ArrayCombined contains 4 elements, the correct answer and 3 wrong answers.
  // shuffles the array so that the correct answer is not always in the same position.

  for (let i = ArrayCombined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ArrayCombined[i], ArrayCombined[j]] = [ArrayCombined[j], ArrayCombined[i]];
  }

  // shuffledArray is the array that will be displayed to the user
  const shuffledArray = ArrayCombined;

  return (
    <div className="page-container">
      <div className="vocabulary" style={{ width: "800px" }}>
        {answered === vocabulary.length && <Confetti />}
        <div style={{ height: "50px", width: "800px" }}>
          <ProgressBar
            bgcolor="#79bc68"
            completed={(answered / vocabulary.length) * 100}
          />
        </div>
        <HomeButton/>
        {/*Button to skip the current question*/}
        <Button
          onClick={() => {
            selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary);
            setAnswered(answered);
            if (answered === vocabulary.length) {
              alert(
                "Congratulations! You have completed the vocabulary module!",
              );
            }
            if (answered + 1 >= vocabulary.length) {
              setAnswered(0);
            }
          }}
          color={"black"}
          border={"3px solid black"}
        >
          Skip?
        </Button>
        {/*End of skip button*/}

        {/*Display the question and word to translate*/}
        <h1>
          {question} "{currentVocabulary.denaina}"
        </h1>
        {shuffledArray.map((vocab) => (
          <Button
            height="50px"
            width="400px"
            key={vocab.english}
            onClick={() => {
              if (vocab.english === currentVocabulary.english) {
                alert("Correct!");
                selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary);
                setAnswered(answered + 1);
              } else {
                alert("Wrong! Try again!");
                if (answered > 0) {
                  setAnswered(answered - 1);
                }
              }
            }}
            color={forColorModule ? handleWhite(vocab.english) : "black"}
            border={
              forColorModule ? `3px solid ${handleWhite(vocab.english)}` : color
            }
          >
            {vocab.english}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
