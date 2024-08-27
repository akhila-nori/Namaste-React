import { RotatingLines } from "react-loader-spinner";

const SpinnerButton = () => {
  const spinnerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div id="spinner">
      <RotatingLines
        strokeWidth="5"
        strokeColor="gray"
        style={spinnerStyle}
      />
    </div>
  );
};

export default SpinnerButton;
