import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Learning_modules.css";
import CircularGallery from "../components/CircularGallery";

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
      <div className="gallery-container">
        <CircularGallery
          items={categories}
          onItemClick={(category) => navigate(category.route)}
          bend={0}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
}

export default LearningModules;
