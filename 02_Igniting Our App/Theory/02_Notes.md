# Episode 02 - Igniting our App

## 📘 Theory Assignment

### 1. What is `NPM`?
**NPM (Node Package Manager)** is the default package manager for Node.js. It allows developers to:
- Install packages (libraries, tools, frameworks)
- Manage dependencies for JavaScript projects
- Run scripts like `npm start` or `npm build`
- Share packages with the open-source community via the npm registry

---

### 2. What is `Parcel/Webpack`? Why do we need it?
**Parcel** and **Webpack** are **JavaScript bundlers** used in frontend development. They:
- Combine multiple files (JS, CSS, images) into optimized bundles
- Support **Hot Module Replacement**, **Tree Shaking**, **Minification**, and **Transpilation**
- Improve performance by optimizing assets

📦 **Why we need bundlers:**
- Browsers don’t support ES6 Modules natively in large-scale apps
- Bundlers help manage and transform modern JS/JSX/SCSS into browser-readable code
- Helps in deploying optimized and fast-loading websites

---

### 3. What is `.parcel-cache`?
`.parcel-cache` is a folder created by Parcel to **store intermediate build data** for faster builds.  
It avoids rebuilding unchanged files and improves performance during development.

---

### 4. What is `npx`?
`npx` is a command-line tool bundled with `npm`. It is used to:
- Run Node packages without installing them globally
- Run a package directly from the registry (`npx create-react-app myApp`)
- Avoid polluting the global environment

---

### 5. Difference between `dependencies` vs `devDependencies`?

| Feature            | `dependencies`                       | `devDependencies`                        |
|-------------------|--------------------------------------|------------------------------------------|
| Used In           | Production                           | Development only                         |
| Installed on prod | ✅ Yes                                | ❌ No                                     |
| Examples          | `react`, `axios`                     | `parcel`, `eslint`, `jest`               |
| Defined in        | `package.json` under `"dependencies"`| `"devDependencies"`                      |

---

### 6. What is `Tree Shaking`?
**Tree shaking** is the process of **removing unused code** from the final bundle.  
- It helps reduce bundle size
- Works best with ES6 modules
- Eliminates dead code automatically

---

### 7. What is `Hot Module Replacement (HMR)`?
**HMR** allows your app to **update modules in the browser without a full reload**.
- Saves developer time
- Keeps app state while editing code
- Parcel and Webpack support HMR by default

---

### 8. Favorite 5 Superpowers of Parcel (Pick any 3 to explain)

**🦸 Favorite Features:**
1. Zero configuration
2. Hot Module Replacement (HMR)
3. Fast bundling with caching
4. Built-in support for React, TypeScript, Sass
5. Tree shaking and code splitting

**📝 Description:**

- **Zero Configuration**: Parcel works out of the box. No need for a config file to start bundling.
- **Built-in React & Babel Support**: Parcel understands `.jsx` files and transpiles them using Babel.
- **Fast Builds with Cache**: Parcel uses `.parcel-cache` to store previously built files, speeding up future builds.

---

### 9. What is `.gitignore`? What should we add and not add into it?

`.gitignore` is a file that tells Git **which files/folders to ignore** in version control.

✅ **Add to `.gitignore`:**
- `node_modules/`
- `.parcel-cache/`
- `dist/`
- `.env` files
- IDE files like `.vscode/`

❌ **Don't add:**
- Source code files (`.js`, `.jsx`, `.html`, etc.)
- `package.json`, `package-lock.json`

---

### 10. Difference between `package.json` and `package-lock.json`

| Feature               | `package.json`                          | `package-lock.json`                     |
|----------------------|------------------------------------------|------------------------------------------|
| Purpose              | Lists dependencies, scripts, metadata    | Records exact versions of installed deps |
| Editable             | Yes (by devs)                            | No (auto-generated)                      |
| Used for             | Installing packages                      | Locking versions                         |
| Version control      | Yes                                      | Yes (do not delete)                      |

---

### 11. Why should I not modify `package-lock.json`?
- It is auto-generated and ensures **exact same versions** of dependencies across all environments
- Modifying it manually may cause version conflicts
- Always let `npm` update it automatically

---

### 12. What is `node_modules`? Is it a good idea to push that on Git?

**`node_modules`** is a folder where `npm` installs all dependencies.

❌ **Do NOT push it to Git**:
- It contains thousands of files
- Very large in size
- Can be recreated using `package.json` by running `npm install`

---

### 13. What is the `dist` folder?
The `dist` (distribution) folder contains the **final, bundled, production-ready** code.
- Auto-generated by Parcel/Webpack
- Should be added to `.gitignore`
- Used for deployment

---

### 14. What is `browserslist`?
`browserslist` is a config used by tools like Babel and Parcel to define **which browsers you want to support**.

📌 Example:
```json
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
]
```
# 🔧 Understanding Bundlers, Versioning Symbols, and Script Types in HTML

---

## 📦 Different Bundlers: `Vite`, `Webpack`, and `Parcel`

Bundlers are tools that prepare your code (JavaScript, CSS, images, etc.) for the browser by transforming, bundling, and optimizing it.

### 1. Vite

**Vite** is a modern frontend build tool that offers a fast development experience.

#### 🔹 Features:
- Uses **native ES modules** in development (no bundling required at start)
- Super fast startup and hot module replacement (HMR)
- Uses **Rollup** under the hood for production build
- Great support for React, Vue, TypeScript, etc.

#### 🔹 Pros:
- Lightning-fast dev server
- On-demand file serving
- Zero-config for most use cases

---

### 2. Webpack

**Webpack** is the most widely used and flexible bundler in JavaScript ecosystem.

#### 🔹 Features:
- Supports **code splitting**, **lazy loading**, **tree shaking**
- Highly customizable with **loaders** and **plugins**
- Handles static assets (images, fonts, etc.)

#### 🔹 Pros:
- Huge community
- Mature and battle-tested
- Powerful plugin ecosystem

#### 🔹 Cons:
- Complex configuration
- Slower build compared to newer tools

---

### 3. Parcel

**Parcel** is a zero-configuration bundler designed for simplicity and performance.

#### 🔹 Features:
- **Zero-config** setup
- Supports HMR, caching, and tree shaking
- Built-in support for JSX, TypeScript, SCSS, etc.
- Auto installs plugins needed for the project

#### 🔹 Pros:
- Very beginner-friendly
- Fast builds with caching
- Excellent for small-to-medium projects

---

| Feature               | Vite           | Webpack        | Parcel         |
|-----------------------|----------------|----------------|----------------|
| Config required       | Minimal        | Extensive      | Zero-config    |
| Dev server speed      | 🔥 Fastest      | 🐢 Slow         | ⚡ Fast         |
| Production bundler    | Rollup         | Webpack itself | Parcel         |
| HMR support           | Yes            | Yes            | Yes            |
| Tree shaking          | Yes            | Yes            | Yes            |
| Ease of use           | High           | Medium         | Very High      |

---


# 📦 Version Symbols & 📜 Script Types in HTML

---

## 🔢 Caret `^` and Tilde `~` in `package.json`

### 1. `^` (Caret)
- Allows **minor and patch** updates
- Format: `^1.2.3` installs versions `>=1.2.3` and `<2.0.0`

✔️ **Can update to**: `18.3.0`, `18.2.5`  
❌ **Cannot update to**: `19.0.0`

---

### 2. `~` (Tilde)
- Allows **only patch** updates
- Format: `~1.2.3` installs versions `>=1.2.3` and `<1.3.0`

---

## 📜 Script Types in HTML (MDN Docs)

The `<script>` tag in HTML is used to **embed or reference JavaScript files**.

---

### 1. Default Script

```html
<script src="app.js"></script>
```
---
## 📊 Script Tag Attribute Comparison Table

| Attribute     | Parallel Download | Execution Timing           | Maintains Order | Scope  |
| ------------- | ----------------- | -------------------------- | --------------- | ------ |
| None          | ❌                 | Immediately after download | ✅               | Global |
| `defer`       | ✅                 | After HTML parsed          | ✅               | Global |
| `async`       | ✅                 | After download finishes    | ❌               | Global |
| `type=module` | ✅                 | After HTML parsed          | ✅               | Scoped |

---



