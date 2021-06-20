//NOTE: List of all quotes for an order
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemRejectAction from "../components/ListItemRejectAction";
import ListItemSeparatorComponent from "../components/ListItemSeparatorComponent";

function CustQuoteListScreen({route,navgation}) {
  const [quotes, setQuotes] = useState(route.params.quotes);

  const handleReject= (quote) => {
    setQuotes(quotes.filter((r) => r._id !== quote._id));
  };

  return (
    <Screen>
      <FlatList
        data={quotes}
        keyExtractor={(quote) => quote._id}
        renderItem={({ item }) => (
          <ListItem
            title={item.driver.name}
            subTitle={"R" + item.price}
            image={item.driver.image}
            onPress= {() => console.log("Quote selected", item)}
            renderRightActions={() => (
                <ListItemRejectAction onPress={() => handleReject(item)} /> )} /* if swiped should show more details*/
          />
        )}
        ItemSeparatorComponent={ListItemSeparatorComponent}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default CustQuoteListScreen;