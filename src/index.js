import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"

// Wait for DOM to be fully loaded before rendering
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("root")

  if (container) {
    const root = ReactDOM.createRoot(container)
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } else {
    console.error('Failed to find the root element. Make sure there is a div with id="root" in your HTML.')
  }
})

