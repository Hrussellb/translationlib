//Learning module page that is empty
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "./Learning_modules.css";

function LearningModules() {
  const navigate = useNavigate();
  return (
    //Grid for formatting modules
    <div className="page-container">
      <div className="learning-modules-grid">
        <>
          <div className="Sound_Systems">
            <Button
              onClick={() => navigate("/sound_systems")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Sound Systems
            </Button>
          </div>
          <div className="Emotions">
            <Button
              onClick={() => navigate("/emotions")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Emotions
            </Button>
          </div>
          <div className="Greetings">
            <Button
              onClick={() => navigate("/greetings")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Greetings
            </Button>
          </div>
          <div className="Introductions">
            <Button
              onClick={() => navigate("/introductions")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Introductions
            </Button>
          </div>
          <div className="Weather">
            <Button
              onClick={() => navigate("/weather")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Weather
            </Button>
          </div>
          <div className="Numbers">
            <Button
              onClick={() => navigate("/numbers")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Numbers
            </Button>
          </div>
          <div className="Colors">
            <Button
              onClick={() => navigate("/colors")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Colors
            </Button>
          </div>
          <div className="Animals">
            <Button
              onClick={() => navigate("/animals")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Animals
            </Button>
          </div>
          <div className="Foods">
            <Button
              onClick={() => navigate("/foods")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Foods
            </Button>
          </div>
          <div className="Household Items">
            <Button
              onClick={() => navigate("/household_items")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Household Items
            </Button>
          </div>
          <div className="Drinks">
            <Button
              onClick={() => navigate("/drinks")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Drinks
            </Button>
          </div>
          <div className="Buildings">
            <Button
              onClick={() => navigate("/buildings")}
              width="200px"
              height="100px"
              backgroundColor="#ffffff"
              color="#000000"
            >
              Buildings
            </Button>
          </div>
        </>
      </div>
    </div>
  );
}

export default LearningModules;
