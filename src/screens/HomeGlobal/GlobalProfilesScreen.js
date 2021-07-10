import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Thumbnail from "../../components/Thumbnail";
import { FetchGlobalUsers } from "../../constants/api";
import axios from "axios";
import { generateList } from "../../utils/profilesGenerator";

const GlobalProfilesScreen = () => {
  const [listColumns, setListColumns] = useState(4);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getData = () => {
      const list = generateList(100);

      setUserList(list);
    };

    getData();
  }, [setUserList, FetchGlobalUsers]);

  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        numColumns={listColumns}
        keyExtractor={(_, index) => "key-" + index}
        renderItem={({ item }) => {
          return <Thumbnail user={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GlobalProfilesScreen;
