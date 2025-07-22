// Import the React library (for JSX and component logic)
import React from "react";

// Import ReactDOM to render React components into the DOM
import ReactDOM from "react-dom/client";

// Import the external CSS styles for styling the components
import "./style.css";

/*
  ✅ Functional Component: Card
  A simple function that returns JSX to display a product card.

  Instead of using props, we're passing each value as a separate parameter.
  Defaults are provided so that the card can render even if no data is passed.
*/
function Card(
  title = "mobile",
  brand = "apple",
  price = 999,
  thumbnail = "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/2.webp",
  description = "This is a great phone",
  availabilityStatus = "In Stock",
  rating = 4.5
) {
  return (
    <div className="card">
      {/* Image tag to show the product image */}
      <img src={thumbnail} alt={title} />

      {/* Product Title */}
      <h3>{title}</h3>

      {/* Product Brand */}
      <p>Brand: {brand}</p>

      {/* Product Price */}
      <p>
        <b>Price:</b> ${price}
      </p>

      {/* Product Description */}
      <p>{description}</p>

      {/* Availability Status (e.g., In Stock) */}
      <p>{availabilityStatus}</p>

      {/* Product Rating with star emoji */}
      <p>Rating: {rating} ⭐</p>
    </div>
  );
}

/*
  ✅ Create a root to render your React app.
  This is the new React 18+ way using createRoot from 'react-dom/client'.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/*
  ✅ Fetch product data from DummyJSON API for smartphones category.
  This returns a promise that resolves with JSON data.
*/
fetch("https://dummyjson.com/products/category/smartphones")
  .then((res) => res.json()) // Convert the response to JSON
  .then((data) => {
    // Log the data to see the response structure in console
    console.log(data);

    /*
      ✅ Map over the products array and generate a list of Card components.
      We're using <React.Fragment key={...}> to assign a unique key to each card.
      It's important to assign a `key` when rendering lists in React to help with performance and DOM diffing.
    */
    const container2 = data.products.map((product) => (
      <React.Fragment key={product.id}>
        {Card(
          product.title,
          product.brand,
          product.price,
          product.thumbnail,
          product.description,
          product.availabilityStatus, // May be undefined; the API doesn't send this field by default
          product.rating
        )}
      </React.Fragment>
    ));

    /*
      ✅ Render the list of cards inside a container div with className "container".
      This will be styled via CSS to display flex layout, etc.
    */
    root.render(<div className="container">{container2}</div>);
  });

  /*
| Part                                          | Description                                                                                           |
| ---------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `import React from "react"`                   | Required to write JSX (even if unused directly).                                                      |
| `import ReactDOM from "react-dom/client"`     | For rendering React components to the DOM using the new `createRoot()` API (React 18+).               |
| `createRoot(document.getElementById("root"))` | Targets the `<div id="root"></div>` in your `index.html` file.                                        |
| `Card()`                                      | A function that returns JSX for rendering a product card.                                             |
| `img src={thumbnail} alt={title}`             | Shows product image, with `alt` text for accessibility.                                               |
| `{title}`, `{brand}`, etc.                    | Curly braces let you inject JavaScript values into JSX.                                               |
| `fetch()`                                     | Built-in JavaScript method to make API calls (GET by default).                                        |
| `.then((res) => res.json())`                  | Converts the HTTP response into JSON format.                                                          |
| `.map()`                                      | Creates a new array of JSX elements (cards) from the data.                                            |
| `<React.Fragment key={...}>`                  | A React component that lets you return multiple elements without extra DOM nodes, with `key` support. |
| `root.render(...)`                            | Triggers React rendering to inject the final JSX into the DOM.                                        |
*/
// Note: The above code is a complete React application that fetches product data from an API and renders it as a list of cards.
// It uses modern React features like functional components, hooks, and the new rendering API.