# Copilot Instructions for AI Agents

## Project Overview
This is a React single-page application for restaurant discovery and menu viewing. The app uses mock data for restaurant lists and fetches live menu data from Swiggy's API for individual restaurants. Routing is managed via `react-router-dom`.

## Architecture & Data Flow
- **Entry Point:** `src/App.js` sets up routing and the main layout (`Header`, `Footer`, and routed content via `<Outlet />`).
- **Routing:** Uses `createBrowserRouter` from `react-router-dom` for nested routes:
  - `/` → `Body` (restaurant list, search/filter)
  - `/about` → `About`
  - `/contact` → `Contact`
  - `/restaurant/:resId` → `RestaurantMenu` (fetches live menu)
  - Errors route to `Error.js`
- **State Management:** Local state via React hooks (`useState`, `useEffect`). No global state or context API.
- **Mock Data:** Restaurant list is loaded from `src/utils/mockData.js`.
- **Live Data:** Menu details are fetched in `RestaurantMenu.js` using the restaurant ID from the route params.

## Developer Workflows
- **Start Dev Server:**
  - `npm start` (runs Parcel bundler, opens `index.html`)
- **Build for Production:**
  - `npm run build`
- **Testing:** No tests are defined; the `test` script is a placeholder.
- **Debugging:** Use browser dev tools and console logs. No custom debug tooling.

## Project-Specific Patterns & Conventions
- **Component Organization:**
  - All main UI components are in `src/components/`.
  - Utility files (constants, mock data) are in `src/utils/`.
- **Styling:**
  - Global styles in `styles.css`.
  - Component-specific styles (e.g., `RestaurantMenu.css`) are imported directly in components.
- **FontAwesome:**
  - Icons are loaded via `@fortawesome/fontawesome-free` and imported in components as needed.
- **Search & Filters:**
  - `Body.js` implements search and filter logic locally, using mock data.
- **Error Handling:**
  - Route errors are handled by the `Error` component.
- **External API:**
  - Only `RestaurantMenu.js` fetches live data; all other data is static.

## Integration Points
- **Parcel:** Used for bundling and dev server. No custom config; entry is `index.html`.
- **React Router:** All navigation is via `react-router-dom` v6.
- **FontAwesome:** For icons in navigation and UI.

## Examples
- **Adding a New Route:**
  - Update `appRouter` in `App.js` and create a new component in `src/components/`.
- **Adding a New Filter:**
  - Implement filter logic in `Body.js` using the mock data structure.
- **Fetching Data:**
  - Use `useEffect` and `fetch` as in `RestaurantMenu.js`.

## Key Files
- `src/App.js` (routing, layout)
- `src/components/Body.js` (restaurant list, search/filter)
- `src/components/RestaurantMenu.js` (menu fetch)
- `src/utils/mockData.js` (mock restaurant data)
- `styles.css` (global styles)

---
If any section is unclear or missing, please provide feedback to improve these instructions.
