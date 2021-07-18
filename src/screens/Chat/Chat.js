import React, { useEffect, useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../constants/theme";
import { getData } from "../../store/api/chat/chat";
import { Actions } from "../../store/slices/chat/chat";
import BlobMessage from "./components/Blob/Blob";
import makeStyles from "./Chat.styles";

const Chat = ({ navigation }) => {
  const styles = makeStyles(theme);
  const chat = useSelector((state) => state.chat.messages);
  const [inputText, setInputText] = useState("");
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () => {
      const data = getData(navigation.getParam("id", null));
      dispatch(Actions.successFetching(data));
    };

    unsubscribe();
  }, [dispatch, navigation]);

  const sendMessage = (event) => {
    if (!event.nativeEvent.text) return;
    let message = {
      text: event.nativeEvent.text,
      date: "2020-06-19 18:30",
      user: "uid1",
    };
    dispatch(Actions.postMessage(message));
    setInputText("");
  };

  const handleUpdate = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={chat}
        numColumns={1}
        keyExtractor={(_, index) => "key-" + index}
        renderItem={({ item }) => {
          return (
            <BlobMessage message={item.text} leftSided={item.user !== id} />
          );
        }}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
      <TextInput
        style={styles.input}
        value={inputText}
        onSubmitEditing={sendMessage}
        placeholder=" Write on me UwU..."
        returnKeyType="send"
        onChangeText={handleUpdate}
      />
    </View>
  );
};

export default Chat;
