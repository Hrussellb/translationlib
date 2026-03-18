// Progress bar
//https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl

function ProgressBar(props) {
  const { bgcolor, completed } = props;
  return (
    <div
      style={{
        height: 20,
        width: "800px",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }}
    >
      <div
        style={{
          backgroundColor: bgcolor,
          width: `${completed}%`,
          height: "20px",
          borderRadius: "10px",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
