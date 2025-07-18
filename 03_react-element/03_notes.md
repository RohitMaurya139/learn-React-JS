# 🔵 1. React
✅ What is it?

The core React library. It provides the tools to:

- Create components (function or class)

- Use hooks like useState, useEffect

- Use JSX (which compiles to React.createElement)

Create virtual DOM elements (React.createElement)

✅ Syntax:
```
import React from 'react';
```
⚠️ Even though JSX looks like HTML, it's JavaScript, and the browser doesn’t understand it directly. Tools like Babel convert JSX to React.createElement().

✅ Example:
```
const element = <h1>Hello World</h1>;
// Compiles to:
const element = React.createElement('h1', null, 'Hello World');
```
# 🔵 2. react-dom
✅ What is it?

This library handles rendering React components to the DOM (HTML page).

There are 2 versions:
| Version            | Method                  | Description                  |
| ------------------ | ----------------------- | ---------------------------- |
| React 17 and below | `ReactDOM.render()`     | Render React app to browser  |
| React 18 and above | `ReactDOM.createRoot()` | Enables concurrent rendering |

✅ Import (React 18+):
```
import ReactDOM from 'react-dom/client';
```
# 🔵 3. React.createElement
✅ What is it?

A function that returns a React element object — a JavaScript representation of a DOM node.

It’s what JSX gets converted into.

✅ Syntax:
```
React.createElement(
  type,        // String or Component (e.g., 'div' or MyComponent)
  props,       // Object (e.g., { className: "header" })
  children     // Any children (string, element, or array)
)
```
✅ Example:
```
const element = React.createElement(
  "h1",
  { id: "title", style: { color: "red" } },
  "Hello from React!"
);
```
### 🔹 Internally, this returns:

```
{
  type: "h1",
  props: {
    id: "title",
    style: { color: "red" },
    children: "Hello from React!"
  }
}
```
# 🔵 4. ReactDOM.createRoot
✅ What is it?

Introduced in React 18, it initializes a root and allows rendering with concurrent features (better performance).

## ✅ Syntax:
```
const root = ReactDOM.createRoot(domNode);
root.render(reactElement);
```
## ✅ Example:

```
const heading = React.createElement("h1", null, "Welcome!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
📌 ReactDOM.createRoot() is now the standard way to start a React app (instead of ReactDOM.render() in React 17).

## ✅ Final Full Example (No JSX):

```
import React from "react";
import ReactDOM from "react-dom/client";

// Step 1: Create an element
const element = React.createElement(
  "h1",
  { id: "main-heading", style: { color: "green" } },
  "Hello React without JSX"
);

// Step 2: Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Step 3: Render the element
root.render(element);
```
## ✅ Final Full Example (With JSX):

```
import React from "react";
import ReactDOM from "react-dom/client";

const element = <h1 style={{ color: "blue" }}>Hello JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
```
📌 JSX is converted into React.createElement() during build time (using Babel).

## 🟩 Summary Table
| Feature               | Library            | Purpose                                     |
| --------------------- | ------------------ | ------------------------------------------- |
| `react`               | Core library       | Component logic, JSX, hooks                 |
| `react-dom`           | DOM renderer       | Render React in browser                     |
| `React.createElement` | `react`            | Creates virtual DOM objects                 |
| `ReactDOM.createRoot` | `react-dom/client` | Renders to real DOM using React 18 features |

                             JSX
                              ↓
         ┌────────────────────────────────────────────┐
         │ JSX is transpiled by Babel to              │
         │ React.createElement(type, props, children) │
         └────────────────────────────────────────────┘
                              ↓
           React.createElement("h1", {...}, "Hello")
                              ↓
                  Virtual DOM (JavaScript Object)
                              ↓
         ┌─────────────────────────────────────┐
         │ import ReactDOM from 'react-dom/client' │
         └─────────────────────────────────────┘
                              ↓
        ReactDOM.createRoot(document.getElementById('root'))
                              ↓
                   root.render(ReactElement)
                              ↓
                     Real DOM Rendered

## ✅ Example Usage (Code + Flow)
```
// JSX (gets transpiled)
const heading = <h1>Hello World</h1>;

// Compiled to:
const heading = React.createElement("h1", null, "Hello World");

// Rendering to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```
