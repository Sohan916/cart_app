import React, { useState } from "react";
import { View, ScrollView, Text } from "react-native";

const Button = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView onScroll={handleScroll}>
        <Text>{scrollPosition}</Text>
      </ScrollView>
    </View>
  );
};

export default Button;
