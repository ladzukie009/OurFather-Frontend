import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "swiper/css"; // Updated import for swiper base styles
import "swiper/css/pagination"; // Updated import for pagination styles
import "swiper/css/navigation"; // Updated import for navigation styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
