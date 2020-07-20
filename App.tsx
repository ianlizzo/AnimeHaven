import React from "react";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  Avatar,
  Button,
  ListItem,
  List,
} from "@ui-kitten/components";
import AppContainer from "./src/Navigation";

export default () => (
  <ApplicationProvider {...eva} theme={eva.dark}>
    <AppContainer />
  </ApplicationProvider>
);
