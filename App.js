// {
/* <div id="parent">
  <div>
    <h1>Hey, I'm h1 tag</h1>
  </div>
</div> */
// }

// code this up and create a REACT DOM for the above



//here the 3rd argument is the children that you have to pass in
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hey, I'm h1 tag")
  )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
