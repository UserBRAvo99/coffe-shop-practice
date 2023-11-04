import { render } from "preact";
import { ShopProvider } from "./context/ShopProvider.jsx";
import { App } from "./app.jsx";
import "./index.css";

render(
  <ShopProvider>
    <App />
  </ShopProvider>,
  document.getElementById("app")
);
