//https://www.youtube.com/watch?v=LqOJzi2SK3Y
function PopUp() {
  const [show, setShow] = useState(false);

  return (
    <div className="mainContainer">
      <h1>Simple Popup</h1>
      <button onClick={() => setShow(true)}>show popup </button>
      <div className="bg">
        <div className="popup">
          <span>x</span>
          <span className="title">Popup</span>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
