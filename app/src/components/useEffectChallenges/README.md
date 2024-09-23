# React `useEffect` Hook - Questions Ranging from Beginner to Expert

## Beginner

**Question:**

Write a React component that uses the `useEffect` hook to log "Component mounted" to the console when the component mounts.

---

## Intermediate

**Question:**

Create a React component that fetches data from an API when it mounts and displays the result. Use the JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos/1) to fetch a todo item. Handle loading and error states appropriately.

---

## Advanced

**Question 1:**

Implement a custom hook called `useDebounce` that takes a value and a delay time as parameters. The hook should return a debounced version of the value, updating only after the specified delay has passed since the last change.

---

**Question 2:**

Create a React component that implements an infinite scroll feature. It should fetch a list of items from an API (you can use JSONPlaceholder's /posts endpoint), display them, and load more items when the user scrolls to the bottom of the page.

---

## Expert

**Question:**

Develop a custom hook called `useWebSocket` that manages a WebSocket connection. The hook should connect to a WebSocket server, allow sending messages, and provide a way to listen for incoming messages. Include proper connection management (connect, disconnect, reconnect on failure) and cleanup.
