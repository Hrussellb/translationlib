import { useNavigate } from "react-router-dom";
import "../index.css";

const topPosition = "1rem";
const leftPosition = "1.25rem";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <div style={{ position: "fixed", top: topPosition, left: leftPosition }}>
      <button
        className="pushable no-shadow"
        onClick={() => navigate("/learning_modules")}
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="noShadow"></span>
        <span className="front">Home</span>
      </button>
    </div>
  );
}

export default HomeButton;
