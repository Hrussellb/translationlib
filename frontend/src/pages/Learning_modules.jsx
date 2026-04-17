import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Learning_modules.css";
import "../index.css";

//Create page that shows all the categories of the learning modules based on the CSV file in the backend.

function LearningModules() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/categories/");
        //const url =
        //import.meta.env.VITE_API_URL ||
        //"https://denainalearning-server.onrender.com";
        //const response = await fetch(`${url}/categories/`);
        if (!response.ok) {
          throw new Error("Could not fetch categories");
        }
        const data = await response.json();
        const renameCategories = data.map((category, index) => {
          return {
            image: "black",
            text: category["Categories"].replace(/_/g, " "),
            route: "/" + category["Categories"].toLowerCase(),
          };
        });
        setCategories(renameCategories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="page-container">
      <div className="learning-modules-grid">
        {categories.map((category, index) => (
          <button
            key={index}
            className="pushable no-shadow"
            onClick={() => navigate(category.route)}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="noShadow"></span>
            <span className="front">{category.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LearningModules;
