import React from "react";
import { View, Image, StyleSheet } from "react-native";
import {NavigationContainer, useNavigation} from "@react-navigation/native";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ListItem from "../components/ListItem";
import colors from "../config/colours";

function CustOrderScreen(navigation) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/package1.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Thursday 17th June 16:49</AppText>
        <AppText style={styles.price}>R100</AppText>
        <View style={styles.driverContainer}>
            <ListItem
            image={require("../assets/driver1.png")}
            title="Alice"
            subTitle="Toyota Avanza"
            />
        </View>
        <AppButton title = "Accept" width = "100%" onPress = {() => {navigation.navigate("TrackDelivery")}} />    
        <AppButton title = "Reject" width = "100%" onPress = {() => {navigation.navigate("QuoteList")}} />    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  driverContainer: {
    marginVertical: 40,
  },
});

export default CustOrderScreen;