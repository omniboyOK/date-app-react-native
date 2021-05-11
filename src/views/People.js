import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Layout } from "@ui-kitten/components";
import Thumbnail from "../component/Thumbnail";

const MockData = [
  {
    id: 0,
    name: "Ben",
  },
  {
    id: 1,
    name: "Susan",
  },
  {
    id: 2,
    name: "Robert",
  },
  {
    id: 3,
    name: "Mary",
  },
  {
    id: 4,
    name: "Pepe",
  },
  {
    id: 6,
    name: "Pepe",
  },
];

const People = () => {
  const [listColumns, setListColumns] = useState(4);

  return (
    <Layout style={styles.container}> 
      <FlatList
        data={MockData}
        numColumns={listColumns}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return <Thumbnail username={item.name} />;
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    flexDirection: "row",
    width: "100%",
    borderColor: "green",
  }
});

export default People;
