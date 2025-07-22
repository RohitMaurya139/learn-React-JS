import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
    return (
        // <div>
        //     <h1>Welcome to My React App</h1>
        //     <p>This is a simple React application.</p>
        // </div>
        React.createElement("div",{key:1},[React.createElement("h1", {key:3}, "Welcome to My React App"),
        React.createElement("p", {key:2}, "This is a simple React application.")])
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);