import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { selectNotRandomVocabulary } from "../functions/selectRandomVocabulary";
import Quiz from "../components/Quizzes";
import MakeFirstPage from "../components/MakeFirstPage";

// This page is for the modules, it will show the quiz and the words for each module dynamically

function Modules() {
  const { category } = useParams();

  const [vocabulary, setVocabulary] = useState([]);

  // State to keep track of the current index
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
        const response = await fetch(`http://127.0.0.1:8000/${category}/`);
        //const url =
        //  import.meta.env.VITE_API_URL ||
        //  "https://denainalearning-server.onrender.com";
        //const response = await fetch(`${url}/${category}/`);
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
        setVocabulary(renameColumns);
        setWrongAnswers(selectNotRandomVocabulary(0, renameColumns));
        setStatus(true);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [category]);

  if (!status) {
    return <p>Working</p>;
  }

  // First page function to list words
  if (!firstPage) {
    return (
      <MakeFirstPage
        firstPage={firstPage}
        setFirstPage={setFirstPage}
        moduleName={category}
        words={vocabulary}
      />
    );
  }

  return (
    <Quiz
      vocabulary={vocabulary}
      index={index}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      setIndex={setIndex}
      answered={answered}
      setAnswered={setAnswered}
      color={`${vocabulary[index].english}`}
      forColorModule={false}
      question={"What is this"}
    />
  );
}

export default Modules;
