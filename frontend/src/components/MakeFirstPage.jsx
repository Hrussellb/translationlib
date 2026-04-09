import Carousel from "./Carousel";
import Button from "./Button";
import HomeButton from "./HomeButton";

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
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ height: "400px", position: "relative" }}>
            <HomeButton />
            <p>Welcome to the {moduleName} module!</p>
            <div style={{ height: "400px", position: "relative" }}>
              <Carousel items={carouselItems} loop={true} />
            </div>
          </div>
          <Button
            onClick={() => setFirstPage(true)}
            color="black"
            border="3px solid black"
          >
            Start
          </Button>
        </div>
      </div>
    );
  }

  return null;
}

export default MakeFirstPage;
