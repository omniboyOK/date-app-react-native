import React, { useState } from "react";
import { StyleSheet, View, Modal, ScrollView } from "react-native";
import { Button, Card, Layout, Text } from "@ui-kitten/components";

const ModalHeader = ({ user }) => {
  return (
    <View>
      <Button appearance="ghost" status="warning" style={styles.close}>X</Button>
      <Text category="h1" style={{ color: "black" }}>
        {user.name}
      </Text>
    </View>
  );
};

export const ProfileModal = ({ user, visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent
      animationType="slide"
    >
      <ScrollView>
        <View style={styles.container}>
          <Card
            disabled={true}
            status="primary"
            header={() => <ModalHeader user={user} />}
            style={styles.card}
          >
            <Text category="p1" style={{ color: "black" }}>
              {user.description}
            </Text>
          </Card>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: 20,
  },
  cardHeader: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
  },
  close: {
    alignSelf: "flex-end",
  },
});
