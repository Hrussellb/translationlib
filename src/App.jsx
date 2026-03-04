// This file is used to create the different links for the website
// and to display the different pages
// Routes is used to create the different routes for the website
// Route is used to create a specific route for a page

import "./App.css";
import Home from "./pages/Home";
// For page routing
import { Routes, Route } from "react-router-dom";
import LearningModules from "./pages/Learning_modules";
import Colors from "./pages/colors";

//Whenever you need to add a new page when clicking a button please
//  import the page at the top and add a new route in the return statement
// of the App function

// Returning something needs a parent element

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} /> {/*Home page */}
        <Route path="/learning_modules" element={<LearningModules />} />
        {/*Learning modules page */}
        <Route path="/colors" element={<Colors />} />
      </Routes>
    </main>
  );
}

export default App;
