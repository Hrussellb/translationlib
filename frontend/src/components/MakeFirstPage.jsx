import Carousel from "./Carousel";
import Button from "./Button";
import HomeButton from "./HomeButton";
import "../index.css";

function MakeFirstPage({ firstPage, setFirstPage, moduleName, words }) {
  const carouselItems = words.map((word, index) => ({
    id: index,
    title: word.english,
    description: word.denaina,
    icon: <span>{index + 1}</span>,
  }));
  if (!firstPage) {
    return (
      <div className="page-container">
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem"}}>
          <div style={{ height: "25rem", position: "relative" }}>
            <HomeButton />
            <p>Welcome to the {moduleName} module!</p>
            <div style={{ height: "25rem", position: "relative" }}>
              <Carousel items={carouselItems} loop={true} />
            </div>
          </div>
          <button
            className="pushable no-shadow"
            onClick={() => setFirstPage(true)}
            color="black"
            border="0.1875rem solid black"
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="noShadow"></span>
            <span className="front" style={{ padding: "1rem 10rem" }}>
              START?
            </span>
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default MakeFirstPage;
