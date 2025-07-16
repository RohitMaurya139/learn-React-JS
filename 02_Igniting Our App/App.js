import React from "react";
import ReactDOM from "react-dom/client";

// 🏷️ Create a single React element (an <h1> tag with inline styling)
const heading = React.createElement(
  "h1",
  {
    id: "headText",
    style: {
      color: "red",
      fontSize: "50px",
      textAlign: "center",
    },
  },
  "Hello World! From React"
);

// 🏗️ Create a nested React element structure with keys
const parent = React.createElement(
  "div",
  { id: "parent" }, // Parent container
  [
    // 🔹 First child div with nested headings
    React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement(
        "h1",
        { key: "child1-h1" },
        "Hi, I am First child ofayuio child1 Santosh pagal"
      ),
      React.createElement(
        "h2",
        { key: "child1-h2" },
        "Hi, I am Second child of child1 kajal i love you"
      ),
    ]),

    // 🔹 Second child div with nested headings
    React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement(
        "h1",
        { key: "child2-h1" },
        "Hi, I am First child of child2"
      ),
      React.createElement(
        "h2",
        { key: "child2-h2" },
        "Hi, I am Second child of child2"
      ),
    ]),
  ]
);

// 🔗 Select the root DOM element and create a React root
const root = ReactDOM.createRoot(document.getElementById("root"));

// 🧩 Render the complete React element tree into the DOM
// root.render(heading);
root.render(parent);
