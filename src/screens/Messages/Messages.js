import React, { useEffect } from "react";
import { View, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MainTitle from "../../components/MainTitle/MainTitle";
import theme from "../../constants/theme";
import { getData } from "../../store/api/messages/messages";
import { Actions } from "../../store/slices/messages/messages";
import EmptyMessageList from "./components/EmptyState/EmptyState";
import MessageItem from "./components/MessageItem/MessageItem";
import makeStyles from "./Messages.styles";

const MessagesScreen = ({ navigation }) => {
  const styles = makeStyles(theme);
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

export default MessagesScreen;
