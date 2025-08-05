## Namaste React Course by Akshay Saini

# Episode 06 - Exploring the world

## Theory Assignment:


# What is a Microservice?

A **Microservice** is a software architectural style where an application is composed of small, **independent services**, each performing a specific business function. These services are **loosely coupled** and interact with each other through standardized protocols such as HTTP/REST or messaging queues. Every microservice is developed, deployed, and scaled independently, promoting modularity and flexibility in large-scale, complex applications.

---

## Key Characteristics of Microservices

- **Independently Deployable:** Each service can be developed, updated, deployed, and even scaled without impacting other services in the system.
- **Loosely Coupled:** Services focus on a specific business capability and interact with others using lightweight APIs.
- **Own Data and State:** Each microservice typically manages its own database or data store, avoiding dependencies on a central data layer.
- **Polyglot Technology:** Teams can use different programming languages or tech stacks for different services, according to their specific needs.
- **Resilience and Fault Isolation:** If one service fails, the rest of the application continues running, minimizing the impact of individual failures.

---

## Microservices Architecture: Components

| Component               | Description                                                                                                                                   |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| Microservices           | Individual, self-contained services focused on a single business function.                                                                   |
| API Gateway             | Entry point for clients; routes requests to the appropriate microservice, handles authentication and aggregation.                            |
| Service Registry        | Keeps track of all services and their network locations, aiding in service discovery and load balancing.                                     |
| Database per Service    | Each microservice has its own data store, avoiding data coupling across services.                                                            |
| Communication Layer     | Services communicate via REST APIs, message brokers, or event-driven systems.                                                                |
| Load Balancer           | Distributes incoming requests across microservice instances to improve scalability and reliability.                                          |
| Fault Tolerance         | Mechanisms like circuit breakers and retries to handle failures gracefully.                                                                  |



---

## Microservices vs. Monolithic Architecture

| Feature                  | Microservices                                                                             | Monolith                                                  |
|--------------------------|-------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| Deployment               | Independent per service                                                                   | Whole application redeployed                              |
| Scaling                  | Only the required service(s)                                                              | Entire application                                        |
| Technology Flexibility   | Each service can use its own stack                                                        | Uniform tech stack                                        |
| Fault Isolation          | High (failure in one does not crash all)                                                  | Low (some issues can affect entire app)                   |
| Complexity               | Higher in deployment, monitoring, and inter-service communication                         | Lower at small scale, higher as complexity grows          |



---

## Microservices and React

React is a **JavaScript library for building user interfaces**, mainly the frontend part of applications. While microservices mainly address backend concerns, there are significant benefits and patterns for integrating React with a microservice backend:

### How React Integrates with Microservices

- **API-Driven Communication:** React apps communicate with backend microservices via RESTful APIs or GraphQL. For example, a React component rendering a user's profile will call the User microservice to fetch data.
- **Micro Frontends:** The same microservices philosophy can be applied to the frontend. Large React applications can be broken into independent modules (or "micro-frontends"), each responsible for a section of the UI, built and deployed independently.
- **Separation of Concerns:** Frontend (React) and backend (microservices) are maintained as separate repositories/services, allowing teams to work in parallel.
- **Scalability:** Both the backend and frontend modules can be scaled according to their loads.
- **Independent Development:** Different teams can develop individual React features or services independently and integrate them via well-defined APIs

#### Example Directory Structure in a Microservices + React Project
Each "service" folder represents a microservice, and the frontend acts as a consumer of these services.

---

## Real-World Example

- **E-commerce Platform:** 
    - **User Service:** Manages user registration, login, and profiles.
    - **Product Service:** Handles product listings.
    - **Order Service:** Manages orders and payments.
    - **Frontend (React):** Consumes APIs from each service and displays the data to users.

If a new payment gateway needs to be added, only the order service is updated—other services and the React frontend remain unaffected.

---

## Advantages

- Improved scalability and maintainability
- Independent deployment and faster release cycles
- Greater developer autonomy
- Better fault isolation and resilience

---

## Challenges

- Increased complexity in deployment and monitoring
- Data consistency and distributed transactions become harder to manage
- Requires robust API design and inter-service communication

---




# What is Monolithic Architecture?

A **Monolithic Architecture** is a traditional software development approach where an entire application—including all its features, components, and business logic—resides within a **single unified codebase**. All functionalities such as user interface, business logic, and data access are tightly **coupled together and deployed as one application**. 

---

## Key Characteristics of Monolithic Architecture

- **Single Codebase & Deployable Unit:** All application modules are built, tested, and deployed together as one package.
- **Tight Coupling:** Each component is highly dependent on others, making the codebase less modular compared to microservices.
- **Single Database:** Often utilizes one central database shared by all parts of the application.
- **Unified Tech Stack:** Typically, the entire app is built using a single framework or language throughout.
- **Straightforward Development:** Particularly suitable for small to medium-sized applications or MVPs, offering simplicity for quick development.

---

## Monolithic Architecture: Main Components

| Component         | Description                                                                                                           |
|-------------------|-----------------------------------------------------------------------------------------------------------------------|
| User Interface    | Handles all user interactions (buttons, forms, UI flows).                                                             |
| Business Logic    | Governs all functional rules and processing logic (how data is handled, validated, calculated, or transformed).        |
| Data Access Layer | Methods and logic for interacting with the database (query, insert, update, delete data)                               |
| Database          | Central repository storing all application data, used by the entire codebase                                          |
| External Services | Integrations like email, APIs, or authentication, handled within the same codebase                                    |
| Middleware        | Cross-cutting logic (logging, security, session management) often handled within the single app            |

---

## Monolith Architecture with React

While monolithic architecture is often discussed in the context of backend development (e.g., Node.js, Java, .NET), it is also common to use React as the **frontend layer of a monolithic application**:

### How React Fits into Monolithic Architecture

- **Unified Deployment:** The React frontend is bundled and served by the same backend (e.g., Express, Django), typically from the same repository and server.
- **Single Build Pipeline:** Both frontend (React) and backend get built and deployed as a single artifact. For example, a Node.js server renders the React app and also exposes REST API.
- **Tight Integration:** The backend might render the initial HTML (Server-Side Rendering), serve the React build assets, and handle API requests—all in one process.
- **Simplified Coordination:** Updates to either backend or frontend require redeploying the entire app, ensuring both layers are always compatible.

#### Example Monolithic Project Structure with React

- **Deployment:** Typically, the build step compiles the React app to static files (`build/`), which are then served by the server app. The server handles both API routes and serves the static frontend files.

---

## Advantages of Monolithic Architecture

- **Simplicity in Development:** Easier and faster to build and deploy for new teams or small apps—everything is in one place.
- **Straightforward Debugging & Testing:** Issues are easier to trace, as all components exist together and can be debugged in a single process.
- **Performance:** Internal function calls (no network overhead) are fast; especially suitable for low-latency scenarios.
- **Lower Infrastructure Overhead:** Fewer moving parts in terms of deployment and orchestration.
- **Initial Cost-Effectiveness:** Lower complexity in the beginning, ideal for MVPs, prototypes, and smaller teams/projects.

---

## Disadvantages of Monolithic Architecture

- **Scalability Issues:** To handle high load on one part, the entire application must be scaled—even if only a single feature requires it.
- **Limited Agility:** Updating or changing one section often requires testing and deploying the whole application, slowing releases.
- **Technology Lock-In:** Difficult to introduce new languages or frameworks, as the whole app shares the same stack.
- **High Code Coupling:** Tight dependencies make large apps hard to maintain, test, or refactor—often leading to "spaghetti code" in growing project.
- **Deployment Risks:** A small change anywhere mandates redeploying the full app, increasing downtime risks if something breaks.
- **Team Collaboration Barriers:** Harder to split ownership and responsibility among multiple feature teams.

---

## Real-World Example: Monolithic React Application

- **A social blog app:** Uses one repository containing the Node.js backend (serves API and static assets) and the React frontend. Teams develop both layers together and deploy them as a single unit.
- **Deployment:** Build React app (`npm run build`), copy the static files to the backend's `public/` folder, then deploy the combined resulting package.

---

## When to Use Monolithic Architecture

- **Small to medium-sized apps**
- **Proof-of-concept or MVP projects**
- **Teams with limited resources or lacking expertise in distributed systems**
- **Projects that don't require frequent, independent deployment of features**

---




# Difference Between Monolithic and Microservices Architectures (with React Context)

Modern software systems—especially those with React frontends—can be built using either **Monolithic** or **Microservices** architectures. Here’s a detailed comparison, including how React fits into each approach.

---

## Key Differences Overview

| Aspect             | Monolithic Architecture                                                 | Microservices Architecture                                                      |
|--------------------|------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Structure**      | Single unified codebase. All features tightly coupled in one deployable unit. | Set of smaller, independent services. Each handles a specific business capability and can be deployed on its own. |
| **Tech Stack**     | Unified stack—same language/framework for all layers.                   | Polyglot—each service can use different stacks, based on requirements.           |
| **Scalability**    | Must scale the entire app, even if only one feature needs more resources. | Individual services are scaled as needed, optimizing resources.                  |
| **Development**    | Simpler to start; all-in-one development pipeline.                     | More planning required; teams work on independent services and APIs.             |
| **Deployment**     | One artifact, single-step deployment; updating anything deploys everything. | Each microservice can be independently built, tested, and deployed.              |
| **Resilience**     | Bug in one part risks crashing the whole app.                           | Failure isolated—one failed service doesn’t bring down the entire system.        |
| **Flexibility**    | Adding features often means modifying core app.                         | More flexible; new services can be introduced independently.                     |
| **Database**       | Often one central database for all features.                            | "Database per service"—each microservice usually handles its own data.           |
| **Maintainability**| Simple for small apps, but large monoliths get hard to manage.          | More maintainable for large teams and evolving systems.                          |
| **Communication**  | Internal function calls (fast, within single process).                  | Network communication (API calls, which may be slower and add complexity).       |

---

## React in Monolithic vs Microservices

### How React Works in a Monolithic Architecture

- **Unified Deployment:** React frontend is bundled with the backend (e.g., Node.js/Express), and both are served and deployed as a single unit.
- **Tight Integration:** Backend serves static React files and API endpoints from the same codebase.
- **Simple Build:** One build/release pipeline—build React, copy to backend/public, deploy entire stack together.
- **Example Structure:**
- **When ideal:** Useful for small projects, MVPs, or when a single team manages full stack.

### How React Works with Microservices

- **Decoupled Layers:** React app (frontend) is completely independent, communicating with backend services via APIs (REST/GraphQL).
- **Micro Frontends (optional):** Large React apps can be split into smaller "micro frontends," each tied to a different service or business domain, and developed/deployed independently.
- **Backend APIs:** Each backend microservice (e.g., user, order, inventory) exposes its own API. React fetches data from multiple services.
- **Example Structure:**
- **When ideal:** Best for large, complex, or scaling teams facing frequent updates to different parts of the app.

---

## Pros and Cons

| Architecture    | Pros                                                                                                  | Cons                                                               |
|-----------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| **Monolith**    | Simple development, easy initial deployment, straightforward debugging, good for small apps           | Hard to scale, inflexible, risky deployments, tech lock-in         |
| **Microservices**| Great for scalability, independent deployments, tech diversity, easier scaling for teams              | More initial complexity, complex DevOps, needs robust API management, distributed debugging |

---

## Visual Overview

*Architecture diagram: Monolith—all services and frontend tightly coupled in one box. Microservices—React frontend connects to discrete service APIs, each with its own logic and data storage.*

---

## When to Use Each

- **Monolith:** Simple prototypes, MVPs, small teams, or when most changes affect the whole product.
- **Microservices:** Large teams, frequently updated features, scaling demands, or when independent technological evolution is important.

---

## In Summary (React Context)

- **Monolith + React:** Entire stack—React frontend and backend API—deployed together. Simple, but grows clumsy at scale.
- **Microservices + React:** Frontend (React) acts as an API client, consuming data from many independently running backend services. Promotes agility, challenges DevOps.


# Why Do We Need the `useEffect` Hook in React?

The `useEffect` Hook is an essential part of building modern React applications. It empowers developers to handle **side effects**—operations that interact outside the component's render cycle, such as data fetching, subscriptions, synchronizing with external systems, or manually updating the DOM. Understanding why and how to use `useEffect` is crucial for writing robust, predictable, and efficient React code.

---

## What Are "Side Effects" in React?

A *side effect* is any action that happens outside the scope of rendering the UI. For example:

- Fetching data from an API after a component mounts.
- Setting up event listeners and cleaning them up.
- Storing or retrieving data from local storage.
- Directly manipulating the DOM (rarely needed, but sometimes necessary).
- Integrating with external libraries that use timers, sockets, etc.

React's rendering should always be **pure** (i.e., given the same props and state, it renders the same UI). But side effects are inherently "impure"—and that's where `useEffect` comes into play.

---

## The Need for `useEffect`

### 1. **Handling Lifecycle Events in Functional Components**

Traditionally, class components used lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to handle side effects. Functional components lacked this capability—until React introduced Hooks.

- **`useEffect` lets functional components perform side effects**, making them just as capable as class components, but with *simpler and more reusable code*.

### 2. **Separation of Concerns**

Using `useEffect` helps **separate UI rendering from side effect logic**. This makes components more predictable and easier to test—since effects don't run during rendering.

### 3. **Controlling Effect Timing**

- By specifying a **dependency array**, you tell React *when* to run your effect: after initial mount, after every render, or only when specific values change.

### 4. **Cleanup Capability**

- Many effects require cleanup (e.g., removing event listeners or aborting network requests). `useEffect` enables you to *return a cleanup function*, ensuring resources are released when a component unmounts or re-runs the effect.

---

## How Does `useEffect` Work?

The basic syntax:
```
useEffect(() => {
// Your effect code (side effect)
return () => {
// Optional cleanup code
};
}, [dependencies]);
```
- The **effect function** runs *after the render*.
- The **dependency array** `[dependencies]` controls *when* the effect runs.

### Dependency Array Usage

- `[]`: Effect runs **once** after the initial render (like `componentDidMount`).
- `[foo, bar]`: Effect runs after render, **only if `foo` or `bar` change**.
- No dependency array: Effect runs **after every render** (be careful—may cause performance issues).

---

## `useEffect` in Action—Examples

### Fetching Data

```
import { useState, useEffect } from 'react';

function UsersList() {
const [users, setUsers] = useState([]);

useEffect(() => {
fetch('/api/users')
.then(res => res.json())
.then(data => setUsers(data));
}, []); // Runs once on mount

return (
<ul>
{users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
);
}
```
*Why needed?* The fetch should only happen after the component is rendered and only once at startup.

### Event Listeners
```
useEffect(() => {
function handleResize() {
// update state based on window size
}
window.addEventListener('resize', handleResize);

// Cleanup
return () => window.removeEventListener('resize', handleResize);
}, []); // Subscribe on mount, cleanup on unmount

```

---

## Common Use Cases for `useEffect`

- **Fetching remote data** (APIs)
- **Subscribing/unsubscribing to events**
- **Direct DOM manipulation** (rarely)
- **Timers or intervals**
- **Synchronizing components with external systems**
- **Updating document title or URL**

---

## Potential Pitfalls

- **Forgetting dependencies**: Not listing all dependencies can cause bugs as effects may not re-run when needed.
- **Infinite loops**: Including functions or objects that change on every render without memorization can cause effects to run endlessly.
- **Performance**: Careless use of `useEffect` without dependencies can slow down your app.

---

## Conclusion

The `useEffect` hook provides **powerful**, **declarative** control over side effects in functional components—bringing them to feature parity with class components, while enabling cleaner, more modular, and maintainable code. It is essential for data fetching, subscriptions, DOM interactions, and much more in the modern React development workflow.

# What is Optional Chaining in JavaScript (React Context)?

**Optional chaining** is a powerful JavaScript feature (introduced in ES2020) that allows you to safely access deeply nested object properties, methods, or array elements—even if an intermediate property doesn't exist—without causing runtime errors. It's particularly useful in React applications that often deal with complex data structures, especially responses from APIs.

---

## The Problem: Accessing Deep Properties Safely

In JavaScript and React, you often retrieve data from APIs or props with unpredictable or deeply nested structures. For example:
```
const user = {
address: {
street: "123 Main St",
city: "New York"
}
};
```

Suppose you want to access `user.address.city`. If `user` or `user.address` is `undefined` or `null`, attempting `user.address.city` would throw an error:

```
const city = user.address.city; // ❌ Throws error if address is undefined
```
const city = user.address.city; // ❌ Throws error if address is undefined

text

---

## The Solution: Optional Chaining

Optional chaining prevents such errors. It uses the `?.` operator to *short-circuit* property access if any reference in the chain is `null` or `undefined`, returning `undefined` instead of throwing an error:

const city = user?.address?.city; // ✅ Returns "New York" or undefined, NO error



If `user` or `user.address` is missing, `city` will simply be `undefined`—the app continues running safely.

---

## Syntax and Usage

Optional chaining works with:

- **Objects:** `obj?.prop`
- **Arrays:** `arr?.[index]`
- **Methods:** `obj.method?.()`
- **Dynamic properties:** `obj?.[expr]`

### Examples

#### 1. Deeply Nested Objects
```
const value = obj?.a?.b?.c;
```


#### 2. Arrays
```
const secondItem = items?.;
```

#### 3. Function Calls
```
user.printInfo?.(); // Safely call if printInfo exists
```


---

## Optional Chaining in React Apps

### Why It's Useful in React

- **API data is often incomplete or nested:** Optional chaining lets you render safely.
- **Props might not be present:** Components can access deeply nested props/data without verbose checks.
- **Cleaner conditional rendering:** Avoids blocks of `&&` or ternary statements for each property check.

#### Example: Rendering User Info
```
function UserProfile({ user }) {
return (
<div>
<h1>{user?.name || "No name"}</h1>
<p>Address: {user?.address?.city || "No city available"}</p>
</div>
);
}
```

If `user`, `user.address`, or `user.address.city` is undefined, React won’t crash—missing values render as `"No city available"`.

---

## Benefits

- **Improves code readability:** Shorter, clearer expressions.
- **Reduces error risk:** Prevents runtime crashes when accessing missing properties.
- **Less boilerplate:** No need to manually check every step in deep chains.

## Common Patterns and Alternatives

**Without optional chaining:**
const city = user && user.address && user.address.city;



**With optional chaining:**
const city = user?.address?.city;


---

## When Not To Use

- When it’s critical to know if some property is missing—optional chaining fails silently, returning `undefined`.
- Not a replacement for validation.

---

## Conclusion

Optional chaining (`?.`) is essential for safe, concise, and readable property access in modern JavaScript and React. It makes your code robust against unpredictable or optional data, which is especially common in real-world React applications interacting with APIs.

- What is `Shimmer UI`?
- What is the `difference` between `JS expression and JS statement`?
# What is the Difference Between JS Expression and JS Statement? (React Context)

Understanding the distinction between **JavaScript expressions** and **statements** is fundamental for writing effective code—especially in React, where this difference impacts how you compose JSX and manage your logic.

---

## 1. What is a JavaScript Expression?

An **expression** is any valid unit of code that *produces a value*. It can be as simple as a literal value or as complex as a function call, arithmetic operation, or conditional (ternary) operator.

### Examples of Expressions

```
5 + 7 // 12
user.name // value of 'name' property
"Hello" // "Hello"
x = 42 // assignment returns 42
myFunction() // result of function call
isActive ? "on" : "off" // ternary operator returns "on" or "off"
```
- Expressions can be *used anywhere a value is expected*.
- Expressions are often part of statements.

---

## 2. What is a JavaScript Statement?

A **statement** is a piece of code that *performs an action or instructs the program to do something*. Statements usually end in a semicolon (`;`) and can include variable declarations, control flow (if, for, while), function definitions, and more.

### Examples of Statements

```
let x = 5; // variable declaration (statement)
if (x > 3) { ... } // if statement
for (let i = 0; i < 5; i++) { ... } // for loop statement
console.log("Hi"); // function call statement
function greet() { ... } // function declaration statement
```
- Statements do NOT necessarily produce a value.
- Statements can *contain* expressions (for example, in a variable assignment or condition).

---

## 3. Statements and Expressions: Key Differences

| Aspect             | Expression                                         | Statement                                    |
|--------------------|---------------------------------------------------|----------------------------------------------|
| **Purpose**        | Computes and returns a value                      | Performs some action                         |
| **Return value**   | Always produces a value                           | May not produce a value                      |
| **Usage**          | Can be used inside statements and JSX             | Cannot be used inside JSX                    |
| **Examples**       | `2 * 10`, `arr[0]`, `a > b ? a : b`               | `let x = 10;`, `if (x) { ... }`, `for (...)`|
| **Syntax**         | Can be a fragment                                 | Must be a complete instruction               |

---

## 4. Why Is This Important in React?

**React's JSX syntax allows only expressions, not statements.**
- This is why if/else blocks, for loops, and variable declarations can't be written directly inside JSX.
- Instead, you use expressions like ternaries and function calls inside your component's return statement.

### JSX Example: Allowed
```
{/* Expressions in JSX */}

<div> {user ? <p>Hello, {user.name}!</p> : <p>Please log in.</p>} // Ternary expression {2 + 2} // Arithmetic expression </div> 
```
JSX Example: Not Allowed
```
// Invalid in JSX!
<div>
  if (user) { <p>Hello, {user.name}!</p>; } else { <p>Please log in.</p>; } // ❌ Will cause syntax error
</div>
```
 Correct Approach: Move Statements before JSX
 ```
 function App({ user }) {
  let content;
  if (user) {
    content = <p>Hello, {user.name}!</p>;
  } else {
    content = <p>Please log in.</p>;
  }
  return <div>{content}</div>;
}

```
### All-in-One Example: Statements and Expressions in a React Component
```
function Example({ user, messages }) {
  // Statement: variable declaration and if/else block
  let greetingMessage;
  if (user) {
    greetingMessage = "Welcome back, " + user.name + "!";
  } else {
    greetingMessage = "Please log in.";
  }

  // Expression: used inside JSX
  return (
    <div>
      {/* Expression – value in curly braces */}
      <h1>{greetingMessage}</h1>

      {/* Expression – ternary operator */}
      <p>{messages.length > 0 ? `You have ${messages.length} new messages.` : "No new messages."}</p>

      {/* Expression – logical AND */}
      {user && <button>Log out</button>}
    </div>
  );
}

```

- What is `Conditional Rendering`? explain with a code example.

### Conditional Rendering refers to the technique in frontend development (commonly in React, Angular, Vue, etc.) where UI components or elements are rendered (displayed) based on certain conditions. This means parts of the UI will only appear if a state, prop, or value meets specific criteria, allowing dynamic control over what users see.
- What is `CORS`?
- What is `async and await`?
# What are `async` and `await` in JavaScript? (React Context)

**`async` and `await`** are modern JavaScript keywords that make it easier to work with asynchronous code—such as fetching data from APIs—by allowing you to write code that "looks synchronous" but actually handles promises under the hood.

---

## 1. Why Async Code Is Needed

JavaScript in browsers is single-threaded. Long-running tasks (like network requests) can freeze the UI unless they're handled **asynchronously**. Traditionally, JavaScript handled async code with callbacks and then with promises. `async` and `await` are a more readable and powerful way to work with promises.

---

## 2. What Does `async` Do?

- The `async` keyword turns a regular function into an **asynchronous function**.
- An async function always returns a **promise**.
- Any value you return from an `async` function is automatically wrapped in a resolved promise.
  
**Example:**
```
async function greet() {
return "Hello!";
}
greet().then(msg => console.log(msg)); // Outputs: Hello!
```

---

## 3. What Does `await` Do?

- The `await` keyword can **only be used inside async functions**.
- It makes JavaScript "wait" until a promise settles before running the next line—without blocking the whole program.
- The returned value of `await` is the resolved value of the promise.

**Example:**
```
async function fetchData() {
const response = await fetch("https://api.example.com/user");
const data = await response.json();
console.log(data); // Will log only after fetch and parsing is done
}
```

---

## 4. Error Handling with `async` / `await`

You use `try...catch` blocks for clean error handling—just like with synchronous code:

```

---

## 4. Error Handling with `async` / `await`

You use `try...catch` blocks for clean error handling—just like with synchronous code:


```
```
async function fetchUser() {
try {
const res = await fetch("/api/user");
const user = await res.json();
return user;
} catch (error) {
console.error("Failed to fetch user", error);
}
}
```

---

## 5. Using `async` / `await` in React

In React (especially in function components), you will almost always use `async` and `await` within hooks like `useEffect` for tasks like fetching data:

```
import { useEffect, useState } from "react";

function UsersList() {
const [users, setUsers] = useState([]);

useEffect(() => {
async function loadUsers() {
try {
const response = await fetch("/api/users");
const data = await response.json();
setUsers(data);
} catch (error) {
console.error("Error fetching users:", error);
}
}
loadUsers();
}, []);

return (
<ul>
{users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
);
}
```

**Key Points for React:**
- You can't use `await` directly in the main body of a component or in JSX—`await` must be inside an `async` function.
- To use `async/await` in `useEffect`, define an inner async function and call it.

---

## 6. Advantages of `async` / `await`

- **Readability**: Code looks and behaves more like “regular” sequential code instead of chained callbacks or `.then()` methods.
- **Maintainability**: Cleaner logic and easier error handling with `try...catch`.
- **Cleaner asynchronous flow**: Especially important in React, where you often deal with data fetching and side effects.

---

## 7. Summary Table

| Keyword    | Purpose                                 | Example Use                    |
|------------|-----------------------------------------|-------------------------------|
| `async`    | Marks a function as asynchronous; always returns a promise | `async function foo() {}`     |
| `await`    | Pauses code inside async function until a promise resolves; returns the result | `const data = await promise;` |

---

## 8. Conclusion

`async` and `await` are essential for writing neat, efficient, and manageable asynchronous code in modern JavaScript and React apps. They help you write code that is easier to read, reason about, and debug—making handling APIs, network requests, and background computations much simpler.



# What is the use of `const json = await data.json();` in `getRestaurants()`? (React Context)

When you see this line inside a function like `getRestaurants()` in React:



— it means you’re fetching restaurant data from an API and then converting the *raw* HTTP response into a usable JavaScript object.

---

## 1. What Happens Step by Step?

1. **Fetch the data:**  
   `await fetch("/api/restaurants")`  
   This sends a network request and waits for the server to respond. You get a *Response* object back.

2. **Convert response to JSON:**  
   `const json = await response.json();`  
   The response from `fetch` is *not* instantly usable as a JS object. It's a stream of data (often in JSON format).  
   The `.json()` method reads and parses this stream and returns a Promise that resolves to an actual JavaScript object (or array) that you can use in your code.

---

## 2. Why `.json()` and not something else?

- The network response may be in various formats (text, blob, arrayBuffer).  
- `.json()` specifically converts JSON (JavaScript Object Notation) text into a live JS object or array, which is the data format most web APIs use.

---

## 3. Why Use `await` with `.json()`?

- `.json()` is asynchronous: It takes time to parse the JSON text.
- Using `await` ensures your code *waits* for parsing to finish and the data to be ready before moving on.  
- Without `await`, you'd get a Promise, not the actual data.

**Incorrect:**
```
const data = fetch(url);
const json = data.json(); // This does not work; 'data' is a Promise!
```

**Correct:**
```
const response = await fetch(url);
const json = await response.json();
```
## 4. In Practice (React Example)
```
async function getRestaurants() {
const response = await fetch("/api/restaurants");
const json = await response.json();
return json;
}
```
- You call `getRestaurants()` in a React component (often inside `useEffect`).
- The `json` variable is now a usable JS object or array (e.g., a list of restaurants) you can use to update state, render components, etc.

---

## 5. Summary Table

| Step                   | Description                                                             |
|------------------------|-------------------------------------------------------------------------|
| `await fetch(url)`     | Fetch resource from API asynchronously, returns a Response object        |
| `await response.json()`| Parse the response body to a usable JS object (usually an array/object)  |

---

## 6. Why Is This Important in React?

- When working with APIs in React, you fetch data and need to convert it to objects/arrays for components to use/rerender.
- Not using `await` would give you a Promise, which can't be rendered or interacted with directly in the UI.

---

**In Short:**  
`const json = await data.json();` converts the streamed, raw API response into a plain JavaScript object (parsed from JSON), making the returned restaurant data usable in your React app.
