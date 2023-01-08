import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import MainProduct from "./components/MainProduct";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProductItem from "./components/productItem";
import Header from "./components/header";

const HomeScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.page}>
      <ScrollView onScroll={handleScroll}>
        <Header />
        <MainProduct
          name="camera"
          price="540 "
          discount="320"
          sp={scrollPosition}
        />
        <View>
          <ScrollView horizontal>
            <ProductItem name="cam1" price="400 " discount="200" />
            <ProductItem name="cam2" price="300 " discount="150" />
            <ProductItem name="cam3" price="200 " discount="100" />
          </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.TouchableOpacity}
        activeOpacity={{ scrollPosition } > 360 ? 0 : 0.2}
      >
        <View style={{ backgroundColor: "red" }}>
          <Text>ADD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  TouchableOpacity: {
    backgroundColor: "red",
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,

    margin: 10,
    borderRadius: 100 / 2,
  },
});

export default HomeScreen;
