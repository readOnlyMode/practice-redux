import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
