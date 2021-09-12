import React from 'react'
import { View, StyleSheet } from 'react-native'
import CarouselCards from './CarouselCards'
export default function App() {
  return (
    <View style={styles.container}>
      <CarouselCards />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex'
    // backgroundColor: '#264F4B',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginLeft: 0
    // padding: 10
  },
});