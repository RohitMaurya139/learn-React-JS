// 📦 Importing core React libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 🧾 Creating a React element using React.createElement (manual way)
const heading = React.createElement(
  "h1", // Element type
  {
    id: "heading", // HTML attribute: id
    style: { color: "red", fontSize: "40px" }, // Inline styling
  },
  "Namaste to React By Rohit Maurya 🚀" // Content of the element
);

console.log(heading); // Logs the React element (object)

// ⚠️ JSX is not HTML inside JavaScript — it's an HTML-like syntax.
// ✅ JSX is transpiled (converted) to `React.createElement()` by Babel (via Parcel).
// 🔁 JSX => React.createElement() => ReactElement (JS object) => HTML DOM (rendered on screen)

// 🧩 JSX version of the heading
const jsxHeading = (
  <h1 className="Head">Namaste to React By Rohit Maurya 🚀 using JSX</h1>
); // ✅ Always wrap multi-line JSX in parentheses

console.log(jsxHeading); // Logs the JSX React element

// 🧱 React Components:
// 📌 Two types:
//   1. Class-based components (❌ OLD) — use JavaScript classes
//   2. Function-based components (✅ NEW) — use JavaScript functions

// 🧩 Functional Component: Title
const Title = () => <h1>Namaste React, I am coming from Title function</h1>;

// 🧩 Functional Component: Section (defined using regular function syntax)
const Section = function () {
  return <h1>Namaste React, I am coming from Section function</h1>;
};

// 🔗 Component Composition: Using multiple components inside another
const HeadingComponent = () => (
  <div>
    {/* Using Title component */}
    <Title />

    {/* JavaScript expression inside JSX */}
    <h2>{10000 + 30000}</h2>

    {/* Regular JSX content */}
    <h1>Namaste React Functional Component</h1>

    {/* Using Section component */}
    <Section />
  </div>
);

// 🚀 Rendering the root component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
