//NOTE: List of all customers orders
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppCard from "../components/AppCard";
import colours from "../config/colours";
import ordersApi from "../api/orders";
import { useEffect } from "react/cjs/react.production.min";

// const orders = [
//   {
//     id: 1,
//     date: "21 June 2021",
//     pickup: "36 Boundary Road, Houghston Estate, Johannesburg, South Africa",
//     dropoff: "8 Hillside Road, Parktown, Johannesburg, South Africa",
//     image: require("../assets/package1.jpg"),
//   },
//   {
//     id: 2,
//     date: "22 June 2021",
//     pickup: "120 End Street, Doornfontein, Johannesburg, South Africa",
//     dropoff: "129 Rivonia Road, Sandown, Sandton, South Africa",
//     image: require("../assets/package2.jpg"),
//   },
  
// ];

function CustOrderListScreen(navigation) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  },[]);

  const loadOrders = async () => {
    const response = await ordersApi.getOrders();
    setOrders(response.data);
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={orders}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            subtitle={item.date}
            title1={item.pickup}
            title2={item.dropoff}
            imageUrl={item.image}
            onPress= {() => console.log("Order selected", item)}
          />
        )}

      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colours.lightgrey,
  }
});

export default CustOrderListScreen;