//check out react cdn
<!-- <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -->
/*
===============================================
 Why are React and ReactDOM separate packages?
===============================================

👉 React is split into two main packages to separate concerns:
   - `react` handles the **component logic**
   - `react-dom` handles the **rendering to the DOM**

-----------------------------------------------
 1. react (Core Logic)
-----------------------------------------------
- Contains core functionalities like:
    - React.createElement()
    - Hooks like useState, useEffect, useContext
    - Virtual DOM logic
- Does NOT deal with the real browser DOM
- Used by both `react-dom` (for web) and `react-native` (for mobile)

Example:
const element = React.createElement('h1', {}, 'Hello World');

-----------------------------------------------
 2. react-dom (Rendering to Browser)
-----------------------------------------------
- Specifically designed for **web platforms**
- Handles:
    - DOM rendering
    - DOM manipulation
    - Event delegation

Example:
ReactDOM.render(element, document.getElementById('root'));

-----------------------------------------------
 Why Separate?
-----------------------------------------------
| Reason            | Explanation                                               |
|------------------|-----------------------------------------------------------|
| Modularity       | Use React in environments beyond the browser              |
| Smaller Bundles  | Import only what is needed                                |
| Platform Support | Same `react` logic can be rendered with different targets |
| Clean Structure  | Logic (react) vs Rendering (react-dom) separation         |

-----------------------------------------------
 Summary Table
-----------------------------------------------
| Package     | Purpose                 | Key Functions                     |
|-------------|--------------------------|-----------------------------------|
| react       | Build UI logic           | createElement, Hooks              |
| react-dom   | Render UI to DOM         | render(), createRoot().render()   |

 Note: For React Native, there's `react-native` instead of `react-dom`.

*/
