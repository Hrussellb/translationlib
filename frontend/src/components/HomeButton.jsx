import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  return (
    <div style={{ position: "fixed", top: "20px", left: "20px" }}>
      <button onClick={() => navigate("/learning_modules")}>Home</button>
    </div>
  );
}

export default HomeButton;
