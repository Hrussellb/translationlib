import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Learning_modules.css";

//Create page that shows all the categories of the learning modules based on the CSV file in the backend.

function LearningModules() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://127.0.0.1:8000/categories/");
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
            className="category-button"
            onClick={() => navigate(category.route)}
          >
            {category.text}
          </button>
        ))}
      </div>
      </div>
  );
}

export default LearningModules;
