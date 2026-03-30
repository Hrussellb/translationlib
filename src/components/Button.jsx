// Function to reuse for the 12 modules
// Used in Learning_modules.jsx to create the buttons for each module

function Button({
  onClick,
  children,
  width,
  height,
  backgroundColor,
  color,
  border,
}) {
  return (
    <button
      className="Modules"
      onClick={onClick}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        color: color,
        border: border,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
