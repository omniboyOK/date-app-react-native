import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MainTitle from "../../components/MainTitle/MainTitle";
import theme from "../../constants/theme";
import EmptyMessageList from "./components/EmptyState/EmptyState";
import MessageItem from "./components/MessageItem/MessageItem";

const MessagesScreen = ({ navigation }) => {
  const [messageList, setMessageList] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigateToChat = () => {
    navigation.navigate("Message");
  };

  useEffect(() => {
    const getData = () => {
      axios
        .get("https://run.mocky.io/v3/4834872a-c365-450a-a746-ba35888933f8")
        .then((response) => {
          setMessageList(response.data.chats);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    getData();
  });

  if (messageList.length === 0 || loading)
    return <EmptyMessageList styles={styles.emptyScreen} />;

  return (
    <View style={styles.screen}>
      <MainTitle text="Messages" />
      <FlatList
        data={messageList}
        numColumns={1}
        showsVerticalScrollIndicator
        keyExtractor={(_, index) => "key-" + index}
        renderItem={({ item }) => {
          return (
            <MessageItem
              date={item.last_update}
              message={item.last_message}
              image={item.image}
              onPress={() => navigateToChat()}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.snowWhite,
  },
  screen: {
    flex: 1,
    backgroundColor: theme.colors.snowWhite,
    margin: 10,
  },
});

export default MessagesScreen;
