import React, { useState } from "react";
import HomeScreen from "./views/People";
import HomeMenu from "./menu/HomeMenu";

const MainView = () => {
  return (
    <>
      <HomeScreen />
      <HomeMenu />
    </>
  );
};

export default MainView;
