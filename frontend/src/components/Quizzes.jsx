//Reusable comopnent for the quizzes pages
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import { selectRandomVocabulary } from "../functions/selectRandomVocabulary";
import Confetti from "react-confetti";
import HomeButton from "./HomeButton";
import "./Quizzes.css";
import "../index.css";
import toast, { Toaster } from "react-hot-toast";

const size = "45rem";

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
      {answered === vocabulary.length && <Confetti />}
      <Toaster position="top-center" />;
      <div className="rectangle-wrapper">
        <div className="vocabulary" style={{ width: "50rem" }}>
          <div style={{ height: "1.25rem", width: "50rem" }}>
            <ProgressBar
              bgcolor="#1a6408"
              completed={(answered / vocabulary.length) * 100}
            />
          </div>
          {/*Button to skip the current question*/}
          <button
            className="pushable"
            onClick={() => {
              selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary);
              setAnswered(answered);
              if (answered === vocabulary.length) {
                toast.success(
                  "Congratulations! You have completed the vocabulary module!",
                );
              }
              if (answered + 1 >= vocabulary.length) {
                setAnswered(0);
              }
            }}
            color={"black"}
            border={"0.1875rem solid black"}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front">Skip</span>
          </button>
          {/*End of skip button*/}

          {/*Display the question and word to translate*/}
          <div className="rectangle-wrapper-h1">
            <h1>
              {question} "{currentVocabulary.denaina}"
            </h1>
          </div>
          {shuffledArray.map((vocab) => (
            <button
              key={vocab.english}
              className="pushable no-shadow"
              onClick={() => {
                if (vocab.english === currentVocabulary.english) {
                  selectRandomVocabulary(setIndex, setWrongAnswers, vocabulary);
                  toast.success("Correct!");
                  setAnswered(answered + 1);
                } else {
                  toast.error("Wrong! Try again!");
                  if (answered > 0) {
                    setAnswered(answered - 1);
                  }
                }
              }}
              color={forColorModule ? handleWhite(vocab.english) : "black"}
              border={
                forColorModule
                  ? `0.1875rem solid ${handleWhite(vocab.english)}`
                  : color
              }
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="noShadow"></span>
              <span
                className="front"
                style={{
                  padding: "1rem 0rem",
                  width: "20rem",
                  textAlign: "center",
                }}
              >
                {vocab.english}
              </span>
            </button>
          ))}
          <HomeButton />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
