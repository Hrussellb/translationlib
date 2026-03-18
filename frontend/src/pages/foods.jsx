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
          <p>Welcome to the foods module!</p>
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
function Foods() {
  //Change variable names to appropriate ones for the module
  const [foods, setFoods] = useState([]);

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
        //Change the url to the appropriate one for the module
        const response = await fetch("http://127.0.0.1:8000/foods/");
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
        //Rename
        setFoods(renameColumns);
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
      //Change variable names
      vocabulary={foods}
      index={index}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      setIndex={setIndex}
      answered={answered}
      setAnswered={setAnswered}
      color={`${foods[index].english}`}
      forColorModule={false}
      question={"Ch'elqadi gini yada di?"}
    />
  );
}

export default Foods;
