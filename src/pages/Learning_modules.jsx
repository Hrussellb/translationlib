//Learning module page that is empty
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function LearningModules() {
  const navigate = useNavigate();
  return (
    //Grid for formatting modules
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
        <div className="Foods+Verbs">
          <Button
            onClick={() => navigate("/foods_verbs")}
            width="200px"
            height="100px"
            backgroundColor="#ffffff"
            color="#000000"
          >
            Foods + Verbs
          </Button>
        </div>
        <div className="Household_Items">
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
        <div className="Drinks+Verbs">
          <Button
            onClick={() => navigate("/drinks_verbs")}
            width="200px"
            height="100px"
            backgroundColor="#ffffff"
            color="#000000"
          >
            Drinks + Verbs
          </Button>
        </div>
        <div className="Names_of_Buildings">
          <Button
            onClick={() => navigate("/names_of_buildings")}
            width="200px"
            height="100px"
            backgroundColor="#ffffff"
            color="#000000"
          >
            Names of Buildings
          </Button>
        </div>
      </>
    </div> //This is for the format of the modules
  );
}

export default LearningModules;
