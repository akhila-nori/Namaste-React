const heading = React.createElement(
  "h1",
  { id: "akhila", xyz: "abcdhfdeog" }, //we can give this attributes to our tags (here h1 tag)
  "This is heading inside h1"
);
console.log(heading); //heading h1 is an object ... when you print it, it is an object .... not h1 tag
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //here the browser will convert the h1 element (javascript object) and put it up as an h1 tag inside the root
