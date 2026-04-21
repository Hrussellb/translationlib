// Home file to display the welcome message
// and a button to navigate to the learning modules page

import { useNavigate } from "react-router-dom";
import Aurora from "../components/Aurora";
import "../index.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* With custom prop values */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Aurora
          colorStops={["#e662b3", "#4cf2ed", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <div
        className="home"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "12.5rem",
          zIndex: 1,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAligh: "center",
        }}
      >
        <h1>Welcome to the Dena'ina Learning Website</h1>
        <button
          className="pushable no-shadow"
          onClick={() => navigate("/learning_modules")}
        >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="noShadow"></span>
          <span className="front" style={{ padding: "1rem 10rem" }}>
            READY?
          </span>
        </button>
      </div>
    </>
  );
}
export default Home;
