import { FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Layout } from "@ui-kitten/components";
import Thumbnail from "../component/Thumbnail";

const MockData = [
  {
    id: 0,
    name: "Ben",
    description: `Jelly beans jelly-o cake biscuit cake tart marzipan. Muffin jelly powder sweet roll cheesecake candy canes dragée wafer. Candy canes sweet roll gingerbread jelly lemon drops lemon drops chocolate bar cookie. Macaroon bear claw wafer apple pie.

    Brownie sweet lemon drops chocolate. Macaroon marzipan chocolate bar cheesecake lollipop donut dragée. Sugar plum cake chupa chups tiramisu biscuit liquorice muffin.
    
    Biscuit pie tootsie roll. Wafer biscuit oat cake halvah topping bonbon bonbon oat cake. Cheesecake macaroon jujubes cheesecake tootsie roll.`,
  },
  {
    id: 1,
    name: "Susan",
    description: `Jelly beans jelly-o cake biscuit cake tart marzipan. Muffin jelly powder sweet roll cheesecake candy canes dragée wafer. Candy canes sweet roll gingerbread jelly lemon drops lemon drops chocolate bar cookie. Macaroon bear claw wafer apple pie.

    Brownie sweet lemon drops chocolate. Macaroon marzipan chocolate bar cheesecake lollipop donut dragée. Sugar plum cake chupa chups tiramisu biscuit liquorice muffin.
    
    Biscuit pie tootsie roll. Wafer biscuit oat cake halvah topping bonbon bonbon oat cake. Cheesecake macaroon jujubes cheesecake tootsie roll.`,
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
          return <Thumbnail user={item} />;
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
  },
});

export default People;
