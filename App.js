// {
/* <div id="parent">
     <div id="child">
        <h1>Hey, I'm h1 tag sibling of h2 tag and child of div id child </h1>
        <h2>Hey, I'm h2 tag sibling of h1 tag and child of div id child </h2>
     </div>
   </div> */
// }

// code this up and create a REACT DOM for the above - sibling - convert into array of different children
//and wrap the siblings inside the square brackets 



//here the 3rd argument is the children that you have to pass in
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey, I'm h1 tag"),
    React.createElement("h2", {}, "Hey, I'm h2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
