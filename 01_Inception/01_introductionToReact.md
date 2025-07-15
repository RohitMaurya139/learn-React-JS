# React.js – Introduction, History, and Usage

## 📌 What is React?

**React** is an open-source JavaScript library used for building **user interfaces**, especially for **single-page applications (SPAs)**. It allows developers to build web apps that can update and render efficiently in response to data changes.

React focuses on the **view layer** of the application (in MVC architecture) and encourages the creation of reusable UI components.

---

## 🕰️ History of React

| Event | Description |
|-------|-------------|
| **2011** | React was created by **Jordan Walke**, a software engineer at **Facebook**. |
| **2013** | Facebook **open-sourced** React at JSConf US. |
| **2015** | React Native was released for building mobile apps. |
| **2016+** | Gained popularity and became a key framework in the modern JavaScript ecosystem. |
| **Today** | Maintained by **Meta (Facebook)** and a community of developers. Used by companies like Instagram, Airbnb, Netflix, and more. |

---

## 🧠 Core Concepts of React

- **Components**: Independent, reusable pieces of UI.
- **JSX**: JavaScript XML – a syntax extension that looks like HTML but works in JavaScript.
- **Props**: Short for "properties"; used to pass data between components.
- **State**: A way to manage local data in a component.
- **Virtual DOM**: A lightweight copy of the real DOM that improves performance.

---

## ⚙️ How to Use React

### 🔸 1. Using CDN (for learning/demo)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>React CDN Example</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function App() {
        return <h1>Hello, React!</h1>;
      }

      const rootElement = document.getElementById("root");
      ReactDOM.createRoot(rootElement).render(<App />);
    </script>
  </body>
</html>
-The crossorigin attribute is used to handle CORS requests for CDN scripts.
-type="text/babel" tells the browser to use Babel to compile JSX.
```


# ⚛️ What is CDN in React and Why Do We Use It?

## ✅ What is a CDN?

A **CDN (Content Delivery Network)** is a network of servers distributed across different locations to deliver **static resources** like:
- JavaScript libraries
- CSS files
- Images
- Fonts

The files are loaded from the **nearest server** to the user, improving speed and reducing latency.

---

## 📦 Why Use CDN in React?

In **React applications**, CDNs are often used for:

### 1. **Loading External Libraries**
You can load popular libraries like Bootstrap, jQuery, or FontAwesome via CDN in `public/index.html`:

```html
<!-- Bootstrap CSS via CDN -->
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>

<!-- FontAwesome Icons -->
<script
  src="https://kit.fontawesome.com/your-kit-id.js"
  crossorigin="anonymous"
></script>
```

### 2. Improving Performance
- Instead of bundling everything in your build, CDN resources are:
- Cached in users' browsers
- Delivered faster from nearby servers

### 3. Smaller Bundle Size
Your React bundle will be smaller if you load heavy libraries (like jQuery, Bootstrap) from a CDN.

### 🔐 What is crossorigin in React?
The crossorigin attribute in React (or HTML) defines how the browser should handle cross-origin requests when loading resources like:
- Scripts
- Fonts
- Stylesheets
- APIs

### 🌐 Cross-Origin Means:
Loading a resource from a different domain, protocol, or port.

### 🔸 crossorigin Values:

| Value             | Meaning                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| `anonymous`       | Sends **no credentials** (no cookies or auth headers). Most common.    |
| `use-credentials` | Sends **cookies/auth headers**, server must allow it via CORS headers. |

### ✅ When Do You Need crossorigin?
- When loading fonts/scripts from a CDN
- When you expect the browser to cache and reuse resources correctly
- When using integrity attribute for security (SRI)

### 📌 Summary

| Concept           | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| **CDN in React**  | Load external libraries quickly and reduce bundle size       |
| **`crossorigin`** | Define whether to send credentials for cross-origin requests |

### 📌 New Concepts
# ⚛️ React Core Methods Explained

This guide explains how `React.createElement`, `ReactDOM.createRoot`, and `.render()` work together to render UI in React without using JSX.

---

## 🧱 1. React.createElement()

### ✅ What it does:
Creates a **virtual DOM element** in memory. This is how JSX is compiled internally by React.

### 🧪 Syntax:
```js
React.createElement(type, props, children);
```
### 🔹 Parameters:
- type: The HTML tag or React component name (e.g., 'div', 'h1', MyComponent)

- props: An object with HTML attributes or event handlers (e.g., { id: 'title' })

- children: The inner content (text or nested elements)

### 🧾 Example:
```
const heading = React.createElement(
  "h1",
  { id: "mainTitle", style: { color: "blue" } },
  "Hello from React"
);
```
### 🌱 2. ReactDOM.createRoot()
## ✅ What it does:
Creates a React root to manage the rendering of components into the actual DOM.

## 🧪 Syntax:
```
const root = ReactDOM.createRoot(document.getElementById("root"));
```
## 📌 Purpose:
- Required in React 18+ for concurrent rendering

- Replaces the old ReactDOM.render() method

### 🎯 3. root.render()
## ✅ What it does:
Renders your React element or component into the real DOM.

## 🧪 Syntax:
```
root.render(ReactElementOrComponent);
```
## 🧾 Example:
```
root.render(heading); // Renders the heading element created earlier
```
### 📌Summary
| Method                  | Purpose                                 |
| ----------------------- | --------------------------------------- |
| `React.createElement()` | Creates a virtual DOM element           |
| `ReactDOM.createRoot()` | Prepares React to render in a container |
| `root.render()`         | Renders the virtual DOM into real DOM   |
