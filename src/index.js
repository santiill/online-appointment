import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { applyMiddleware, compose, createStore } from "redux";
import { appointment } from "./redux/reducers/appointment";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Appoints from "./components/otherPages/Appoints";
// import CustomizedTables from "./components/otherPages/Table";
import Appointments from "./components/otherPages/Appoints";
import Review from "./components/otherPages/Review";
import Chat from "./components/otherPages/chat/Chat";
import Chat2 from "./components/otherPages/chat/Chat";
import History from "./components/otherPages/History";

const store = createStore(appointment, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/history" element={<History />} />
          <Route path="/review" element={<Review />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
