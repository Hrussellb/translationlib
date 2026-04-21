// Progress bar


function ProgressBar({ bgcolor, completed }) {
  return (
    <div
      style={{
        height: 20,
        width: "50rem",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
      }}
    >
      <div
        style={{
          backgroundColor: bgcolor,
          width: `${completed}%`,
          height: "1.25rem",
          borderRadius: "0.625rem",
          transition: "width 1s ease-in-out",
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
