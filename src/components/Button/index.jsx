import React from "react";

import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Button({ big, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        big ? { width: 140, height: 60 } : { width: 100, height: 30 },
      ]}
      value="COMPRAR"
    >
      <Text
        style={[styles.textButton, big ? { fontSize: 20 } : { fontSize: 16 }]}
      >
        Comprar
      </Text>
    </TouchableOpacity>
  );
}
