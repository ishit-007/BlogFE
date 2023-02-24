import * as React from "react";
import "./style.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import { HOME_ROUTE, ERROR_ROUTE } from "./constants/routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Error />} />
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
