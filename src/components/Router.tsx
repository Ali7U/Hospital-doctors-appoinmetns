import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";


function Router() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default Router;
