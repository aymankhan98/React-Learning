### useEffect

The `useEffect` hook lets you perform side effects in functional components. Here’s a brief overview:

- **Purpose:** `useEffect` is used to handle side effects, such as data fetching, subscriptions, or manually updating the DOM.
- **Syntax:** `useEffect(callback, [dependencies]);`
  - `callback`: A function that contains the side effect logic. It can return a cleanup function to clean up the effect.
  - `dependencies`: An array of dependencies that determines when the effect should be re-run. If empty, the effect runs only once after the initial render.
- **When it Runs:**
  - On every render if no dependencies are provided.
  - Only when the specified dependencies change if the array is provided.
  - Once on mount and cleanup on unmount if an empty array is provided.
- **Cleanup:** 
  - The effect's cleanup function runs before the component is unmounted or before the effect is re-executed if dependencies have changed.
- **Example:**

  ```javascript
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    
    return () => {
      // Cleanup logic if needed
    };
  }, [count]);
