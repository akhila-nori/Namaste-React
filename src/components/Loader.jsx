import { RotatingLines } from "react-loader-spinner";

const SpinnerButton = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px",
    height: "100vh", // Full viewport height
    width: "100vw",
    backgroundColor: "#f0f0f0",
  };
  const spinnerContainerStyle = {
    dipslay: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div id="spinner" style={spinnerContainerStyle}>
      <RotatingLines strokeWidth="5" strokeColor="gray" style={spinnerStyle} />
    </div>
  );
};

export default SpinnerButton;
