import React, { useState } from "react";
import { StyleSheet, View, Modal, ScrollView } from "react-native";
import { Card, Text } from "@ui-kitten/components";

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
            header={() => <Text category="h1">{user.name}</Text>}
            style={styles.card}
          >
            <Text category="p1">{user.description}</Text>
          </Card>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
