import { useState, useEffect } from "react";
import Button from "../components/Button";
import {
  selectRandomVocabulary,
  selectNotRandomVocabulary,
} from "../functions/selectRandomVocabulary";

import Quiz from "../components/Quizzes";
import MakeFirstPage from "../components/FirstPage";

//Words for the colors module
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
//https://www.youtube.com/watch?v=37vxWr0WgQk

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
        setWrongAnswers(selectNotRandomVocabulary(0, renameColumns));
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
    return (
      <MakeFirstPage
        firstPage={firstPage}
        setFirstPage={setFirstPage}
        moduleName={"Colors"}
        words={colors}
      />
    );
  }

  return (
    <Quiz
      vocabulary={colors}
      index={index}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      setIndex={setIndex}
      answered={answered}
      setAnswered={setAnswered}
      color={`${colors[index].english}`}
      forColorModule={true}
      question={"Ch'adach' luchin?"}
    />
  );
}

export default Colors;
