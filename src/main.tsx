import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "./redux/store";
import App from './App'
import { QueryProvider } from "./lib/QueryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


// React Query Calls are implemented inside the folder lib
// All the main components of the project like create Contact, edit contact etc will be founded inside the component folder
root.render(
  <QueryProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </QueryProvider>
);