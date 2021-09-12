import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, Button, ScrollView } from "react-native"
import { Video } from 'expo-av';
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)
import { styles } from "./InitWizardStyle";
import { TouchableRipple } from 'react-native-paper';


const CarouselCardItem = ({ item, index }) => {

  const listButtons = item.buttonTitle.map((title, index) =>
      <TouchableRipple key={index} onPress={() => console.log("ddd")} style={item.buttonStyle} rippleColor="rgba(0, 0, 0, .32)">
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableRipple>
  );
  console.log("description data", item.description)
  return (
    <ScrollView style={styles.container} key={index}>

      <Image source={require('./assets/images/brand-full.png')} style={styles.image} />
      <Image source={item.title} style={styles.titleImage} />
      <View style={styles.descriptionDiv}>
        {item.description !== "" && <Text style={styles.description}> {item.description}</Text>}
        <View style={item.buttonDivStyle}>
          {listButtons}
        </View>
      </View>
      
      <Video
        ref={item.ref}
        onReadyForDisplay={() => {
          item.ref.current.playAsync()
        }}
        source={item.video}
        style={styles.backgroundVideo}
        rate={1}
        isLooping={true}
        volume={0}
        muted={true}
        isLooping
        resizeMode="cover"
      />
    </ScrollView >
  );
}


export default CarouselCardItem