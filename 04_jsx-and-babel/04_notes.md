# ✅ JSX (JavaScript XML)
## 📌 What is JSX?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript used with React to describe what the UI should look like.

JSX looks like HTML, but it is not HTML. Under the hood, JSX gets transformed into regular JavaScript using tools like Babel.

## ✳ Why JSX?
- Makes your code more readable and declarative.

- Allows you to write HTML-like code directly inside JavaScript.

- Helps define UI structure in a clean way.

✅ Example:
```
const element = <h1>Hello, Rohit!</h1>;
```
Behind the scenes, JSX gets converted to:
```
const element = React.createElement("h1", null, "Hello, Rohit!");
```
🧠 JSX Rules:
Only one parent element is allowed to return:
```
// ❌ Invalid
return (
  <h1>Hello</h1>
  <p>World</p>
);

// ✅ Valid using Fragment
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```
class → className:
```
jsx
Copy
Edit
// ❌ Incorrect
<div class="container"></div>

// ✅ Correct
<div className="container"></div>
```
JS inside JSX: Use {} for embedding JavaScript expressions:

```
const name = "Rohit";

return <h1>Hello, {name}!</h1>; // Outputs: Hello, Rohit!
```
Self-closing tags must have /:
```
// ✅ Correct
<input type="text" />
```
## 🧠 How JSX Works?
- JSX is not valid JavaScript by itself — browsers cannot understand it directly.

So we need a compiler that will convert JSX into normal JavaScript.

That’s where Babel comes in.

# 🔧 Babel
## 📌 What is Babel?
Babel is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into browser-compatible JavaScript.

It's widely used in React projects to compile JSX into React.createElement(...) calls.

## 🧱 Key Uses of Babel:
- Convert JSX → JavaScript

- Convert ES6+ → ES5 (for older browsers)

- Enable experimental features (e.g., optional chaining, async/await)

✅ JSX to JavaScript using Babel:
Original JSX:
```
const element = <h1>Hello, JSX!</h1>;
```
Babel Output:
```
const element = React.createElement("h1", null, "Hello, JSX!");
```
## ⚙ How Babel is used in React:
You usually don’t run Babel manually. Instead, tools like Parcel, Webpack, or Vite are used to automatically apply Babel behind the scenes.

💻 Babel with Parcel (Example Flow):
```
npm install -D parcel
```
index.jsx:


```
const name = "Rohit";
const element = <h1>Hello, {name}!</h1>;
```
Parcel will internally run Babel and convert this to pure JavaScript before sending to the browser.

## 🧩 Summary:
- Tool	Role
- JSX	HTML-like syntax used in React
- Babel	Compiler that transforms JSX into browser-compatible JavaScript

## ✅ Visual Summary:

## JSX to HTML Rendering Flowchart

            JSX Code
              ↓
       [Babel Compiler]
              ↓
     React.createElement() Code
             ↓
         [React DOM]
              ↓
      Browser Renders HTML   

