import React, { useState } from "react";
import HomeScreen from "./views/People";
import HomeMenu from "./menu/HomeMenu";
import { Header } from "./component/Header";

const MainView = () => {
  return (
    <>
      <Header />
      <HomeScreen />
      <HomeMenu />
    </>
  );
};

export default MainView;
