// Home file to display the welcome message
// and a button to navigate to the learning modules page

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1>Welcome to the Dena'ina Learning Website</h1>
      <button onClick={() => navigate("/learning_modules")}>READY</button>
    </div>
  );
}
export default Home;
