//NOTE: List of all quotes for an order
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemRejectAction from "../components/ListItemRejectAction";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";

const initialQuotes = [
  {
    id: 1,
    name: "Alice",
    price: "100",
    image: require("../assets/driver1.png"),
  },
  {
    id: 2,
    name: "Bob",
    price: "200",
    image: require("../assets/driver1.png"),
  },
  
];

function CustQuoteListScreen(props) {
  const [quotes, setQuotes] = useState(initialQuotes);
  const [refreshing, setRefreshing] = useState(false);

  const handleReject= (quote) => {
    setQuotes(quotes.filter((r) => r.id !== quote.id));
  };

  return (
    <Screen>
      <FlatList
        data={quotes}
        keyExtractor={(quote) => quote.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subTitle={"R" + item.price}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
                <ListItemRejectAction onPress={() => handleReject(item)} /> )} /* if swiped should show more details*/
          />
        )}
        ItemSeparatorComponent={ListItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => {
          setQuotes([
            {
                id: 2,
                name: "Bob",
                price: "R200",
                image: require("../assets/driver1.png"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CustQuoteListScreen;