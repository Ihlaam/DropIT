import React from "react";
import { View, StyleSheet, Image, TouchableHighlight, } from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colours";
import colours from "../config/colours";

function ListItem({ title, subTitle, subTitle2, image, IconComponent, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions} friction={2} >
      <TouchableHighlight underlayColor={colors.lightgrey} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            {subTitle2 && <AppText style={styles.subTitle2}>{subTitle2}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor : colours.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    fontSize: 18,
    color: colors.accent1,
  },
  subTitle2: {
    fontSize: 15,
    color: colors.accent2,
  },
  title: {
    fontWeight: "500",
    fontSize: 18,
  },
});

export default ListItem;
