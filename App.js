const heading = React.createElement(
  "h1",
  { id: "akhila", xyz: "abcdhfdeog" }, //we can give this attributes to our tags (here h1 tag)
  "This is heading inside h1"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
