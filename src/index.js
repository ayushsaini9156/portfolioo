import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context";

// ✅ Create root with the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Render using .render()
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
