// 🏷️ Create a single React element (an <h1> tag with inline styling)
// React.createElement(type, props, children)
const heading = React.createElement(
  "h1",
  {
    id: "headText", // Assigns an ID to the element
    style: {
      color: "red", // Text color
      fontSize: "50px", // Text size
      textAlign: "center", // Center align text
    },
  },
  "Hello World! From React" // Text content
);

// 🏗️ Create a nested React element structure:
// <div id="parent">
//   <div id="child1">
//     <h1>...</h1>
//     <h2>...</h2>
//   </div>
//   <div id="child2">
//     <h1>...</h1>
//     <h2>...</h2>
//   </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" }, // Parent container
  [
    // 🔹 First child div with nested headings
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "Hi, I am First child of child1"),
      React.createElement("h2", {}, "Hi, I am Second child of child1"),
    ]),

    // 🔹 Second child div with nested headings
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hi, I am First child of child2"),
      React.createElement("h2", {}, "Hi, I am Second child of child2"),
    ]),
  ]
);

// 🔗 Select the root DOM element and create a React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// 🧩 Render the complete React element tree into the DOM
// root.render(heading); // Use this to render only the single heading
root.render(parent); // Renders the nested parent-child structure
