import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";

const People = () => {
  const [text, setText] = useState("press me daddy");
  const [status, setStatus] = useState("primary");

  const revolution = () => {
    setText("I have been pressed uwu");
    setStatus("danger");
  };
  return (
    <Layout style={styles.layout} level="1">
      <Text category="h1">I'm the PEOPLE screen</Text>
      <Button onPress={() => revolution()} status={status}>
        {text}
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default People;
