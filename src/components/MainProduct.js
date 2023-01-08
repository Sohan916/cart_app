import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import lp from "./loremipsum";

const ProductItem = (props) => {
  const item = props.item;
  return (
    <View style={styles.main}>
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
      <Text style={styles.prod}>{lp}</Text>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        activeOpacity={props.sp <= 360 ? 0 : 1}
      >
        <Text>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TouchableOpacity: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    bottom: 30,
    backgroundColor: "red",
    margin: 10,
    borderRadius: 100 / 2,
  },
  main: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
  },
  prod: {
    fontSize: 25,
    marginBottom: 70,
  },

  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 5,
  },

  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain",
    marginLeft: 10,
  },
  container: {
    padding: 10,

    flex: 3,
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
