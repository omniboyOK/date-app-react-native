import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import theme from "../../constants/theme";
import { getData } from "../../store/api/messages/messages";
import { Actions } from "../../store/slices/messages/messages";
import EmptyMessageList from "./components/EmptyState/EmptyState";
import MessageItem from "./components/MessageItem/MessageItem";

const MessagesScreen = ({ navigation }) => {
  const messageList = useSelector((state) => state.messages.list);
  const dispatch = useDispatch();

  const navigateToChat = (messageId) => {
    navigation.navigate("Message", { id: messageId });
  };

  useEffect(() => {
    const data = getData();
    dispatch(Actions.successFetching(data));
  });

  if (messageList.length === 0)
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
              name={item.name}
              date={item.last_update}
              message={item.last_message}
              image={item.image}
              onPress={() => navigateToChat(item.id)}
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
