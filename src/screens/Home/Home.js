import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import { getData } from "../../store/api/userAccount/userAccount";
import { Actions } from "../../store/slices/userAccount/userAccount";
import { generateList } from "../../utils/profilesGenerator";

const GlobalProfilesScreen = () => {
  const [listColumns] = useState(4);
  const [userList, setUserList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getData();
    dispatch(Actions.successFetching(data));
  });

  useEffect(() => {
    const getData = () => {
      const list = generateList(51);

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
