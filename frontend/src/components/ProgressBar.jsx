// Progress bar

function ProgressBar({ bgcolor, completed }) {
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
