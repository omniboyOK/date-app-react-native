import React from "react";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import HomeScreen from "./src/views/Home";
import HomeMenu from "./src/menu/HomeMenu";

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
      <HomeMenu />
    </ApplicationProvider>
  </>
);
