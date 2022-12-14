import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import GroupChatLink from '../GroupChatLink/GroupChatLink';

const DATA = [
  {
    id: 'bd7acbea-c1b1321-46c2-aed5-3ad53abb28ba',
    name: 'Work',
  },
  {
    id: '3ac68afc-c605123-48d3-a4f8-fbd91aa97f63',
    name: 'School',
  },
  {
    id: '3ac68afc-c605124-48d3-a4f8-fbd91aa97f63',
    name: 'Family',
  },
];

export const GroupChatList = () => {   
    return (
      <View style={styles.container}>
      {DATA.map((item)=>{
        return(
          <GroupChatLink name={item.name} key={item.id} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 2,
  },
});