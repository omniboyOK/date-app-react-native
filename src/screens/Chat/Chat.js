import React, { useEffect } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/api/chat/chat";
import { Actions } from "../../store/slices/chat/chat";
import BlobMessage from "./components/Blob/Blob";

const Chat = ({ navigation }) => {
  const chat = useSelector((state) => state.chat.messages);
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getData(navigation.getParam("id", null));
    dispatch(Actions.successFetching(data));
  });

  return (
    <View>
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
    </View>
  );
};

export default Chat;
