//Braces mean its a variable
// Currently not being used but used for images later

// Named export
// Could do export instead
function Images({ image }) {
  function onFavoriteClick() {
    alert("Clicked");
  }

  return (
    <div className="image-card">
      <div className="image-poster">
        <img src={image.url} alt={image.title} />
        <div className="image-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="image-info">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

// This function is called a Component
// Component names must start with a capital letter
// Can be reused multiple times
// Call by using <Text />
//--------------------------------------------------
// Can add a prop which stands for property
// Add sets of {} into the component to pass in a prop
// Call by using <Text display = "Hello World!" />
{
  /*
function Text({ display }) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );
}*/
}

export default Images;
