import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MainTitle from "../../components/MainTitle/MainTitle";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { generateList } from "../../utils/profilesGenerator";

const GlobalProfilesScreen = () => {
  const [listColumns] = useState(4);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const getData = () => {
      const list = generateList(100);

      setUserList(list);
    };

    getData();
  }, [setUserList]);

  return (
    <View style={styles.container}>
      <MainTitle text="Activity Near You" />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={userList}
        numColumns={listColumns}
        keyExtractor={(_, index) => "key-" + index}
        renderItem={({ item }) => {
          return <Thumbnail user={item} size={listColumns} />;
        }}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default GlobalProfilesScreen;
