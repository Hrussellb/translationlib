//Reusable comopnent for the quizzes pages
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import {
  selectRandomVocabulary,
  selectNotRandomVocabulary,
} from "../functions/selectRandomVocabulary";
import Confetti from "react-confetti";

// White button is invisible and impossible to see

function handleWhite(color) {
  //Change white to grey so that it is visible for the user
  if (color === "white") {
    return "grey";
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
  // Algorithm from
  // https://coreui.io/answers/how-to-shuffle-an-array-in-javascript/#:~:text=The%20Fisher%2DYates%20algorithm%20works,better%20than%20naive%20sorting%20approaches.
  // ArrayCombined contains 4 elements, the correct answer and 3 wrong answers.
  // The algorithm shuffles the array so that the correct answer is not always in the same position.

  for (let i = ArrayCombined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ArrayCombined[i], ArrayCombined[j]] = [ArrayCombined[j], ArrayCombined[i]];
  }

  // shuffledArray is the arra that will be displayed to the user

  const shuffledArray = ArrayCombined;

  return (
    <div className="page-container">
      <div className="vocabulary" style={{ width: "800px" }}>
        {/*
          answered is a variable to count how many questions the user answered correctly
          Increments by one if correct and decrements by one if not
          If answered === vocabulary.length, then CONFETTI!
          Calls ProgressBar component to show progress. Green bar is chosen as color using completed variable
          */}
        {answered === vocabulary.length && <Confetti />}
        <div style={{ height: "50px", width: "800px", marginBottom: "20px" }}>
          <ProgressBar
            bgcolor="#79bc68"
            completed={(answered / vocabulary.length) * 100}
          />
        </div>
        {/*Button to skip the current question*/}
        <Button
          onClick={() => {
            selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary);
            setAnswered(answered + 1);
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
        {shuffledArray.map((vocab, i) => (
          <Button
            key={i}
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
