import React from "react";
import { Image, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.root}>
      <Image source={require("./images/cam.jpg")} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={3}>
          {props.name}
        </Text>
        <Text style={styles.price}>${props.price}</Text>
        <Text style={styles.discount}>${props.discount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    flex: 1,

    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    margin: 10,
  },

  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,

    color: "red",
    textDecorationLine: "line-through",
    marginBottom: 5,
  },
  discount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default ProductItem;
