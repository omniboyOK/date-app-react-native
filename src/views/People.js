import { FlatList, StyleSheet, View} from "react-native";
import React, { useState } from "react";
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
    image: require("../../assets/faces/ayo-ogunseinde-2.jpg")
  },
  {
    id: 3,
    name: "Mary",
    image: require("../../assets/faces/kaci-baum-2.jpg")
  },
  {
    id: 4,
    name: "Pepe",
    image: require("../../assets/faces/erik-lucatero-2.jpg")
  },
  {
    id: 6,
    name: "Rigoberta",
  },
];

const People = () => {
  const [listColumns, setListColumns] = useState(4);

  return (
    <View style={styles.container}>
      <FlatList
        data={MockData}
        numColumns={listColumns}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return <Thumbnail user={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    flexDirection: "row",
    width: "100%",
  },
});

export default People;
