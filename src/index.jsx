import React from "react";
import ReactDOM from "react-dom/client";

import store from "./store"; // importing the store we created
import { Provider } from "react-redux";
import "./index.css";
import "./translations";
import App from "./routes/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
