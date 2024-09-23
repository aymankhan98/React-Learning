### useState

The `useState` hook allows you to add state to functional components in React. Here's a brief overview:

- **Purpose:** `useState` is used to declare state variables in functional components.
- **Syntax:** `const [state, setState] = useState(initialValue);`
  - `state`: The current state value.
  - `setState`: A function to update the state value.
  - `initialValue`: The initial value of the state (can be a number, string, array, object, etc.).
- **Updating State:** 
  - To update the state, call `setState` with the new value.
  - Updating state triggers a re-render of the component.
- **Example:**
  
  ```javascript
  const [count, setCount] = useState(0);
  
  function increment() {
    setCount(count + 1);
  }
