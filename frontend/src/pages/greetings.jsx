import { useState, useEffect } from "react";
import Button from "../components/Button";
import {
  selectRandomVocabulary,
  selectNotRandomVocabulary,
} from "../functions/selectRandomVocabulary";

import Quiz from "../components/Quizzes";
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
function Greetings() {
  //Change variable names to appropriate ones for the module
  const [greetings, setGreetings] = useState([]);

  // State to keep track of the current  index
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
        const response = await fetch("http://127.0.0.1:8000/greetings/");
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const renameColumns = data.map((item) => {
          return {
            english: item["English"],
            denaina: item["Dena'inaq'"],
          };
        });
        setGreetings(renameColumns);
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
  // INFORMATION
  if (!firstPage) {
    return <MakeFirstPage firstPage={firstPage} setFirstPage={setFirstPage} />;
  }

  return (
    <Quiz
      vocabulary={greetings}
      index={index}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      setIndex={setIndex}
      answered={answered}
      setAnswered={setAnswered}
      color={`${greetings[index].english}`}
      forColorModule={false}
      question={"What is this?"}
    />
  );
}

export default Greetings;
