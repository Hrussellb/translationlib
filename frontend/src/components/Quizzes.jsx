//Reusable comopnent for the quizzes pages
import Button from "./Button";
import ProgressBar from "./ProgressBar";
import {
  selectRandomVocabulary,
  selectNotRandomVocabulary,
} from "../functions/selectRandomVocabulary";
import Confetti from "react-confetti";

function handleWhite(color) {
  if (color === "white") {
    return "grey";
  }
  return color;
}
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
  for (let i = ArrayCombined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ArrayCombined[i], ArrayCombined[j]] = [ArrayCombined[j], ArrayCombined[i]];
  }
  const shuffledArray = ArrayCombined;
  return (
    <div className="page-container">
      <div className="vocabulary" style={{ width: "800px" }}>
        {answered === vocabulary.length && <Confetti />}
        <div style={{ height: "50px", width: "800px", marginBottom: "20px" }}>
          <ProgressBar
            bgcolor="#79bc68"
            completed={(answered / vocabulary.length) * 100}
          />
        </div>
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
              }
            }}
            color={forColorModule ? handleWhite(vocab.english) : "black"}
            border={
              forColorModule
                ? `3px solid ${handleWhite(vocab.english)}`
                : "3px solid black"
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
