import React, { useState, useRef } from 'react'
import { View } from "react-native"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from './data'
import styles from './InitWizardStyle'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const [index, setIndex] = useState(0);
  const videoRef_1 = React.useRef(null);
  const videoRef_2 = React.useRef(null);
  const videoRef_3 = React.useRef(null);
  const videoRef_4 = React.useRef(null);

  const refArray = [
    videoRef_1,
    videoRef_2,
    videoRef_3,
    videoRef_4
  ]

  const renderData = data.map((item, index) => {
    return { ...item, ref: refArray[index] }
  })

  return (
    <View style={styles.container}>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={renderData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', height: 50, width: 200, padding: 0, margin: 0}}
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          padding: 0,
          width: 12,
          height: 12,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#E99022'
        }}
        inactiveDotStyle={{
          width: 15,
          height: 15,
          borderRadius: 5,
          marginHorizontal: 0,
          borderColor: 'white',
        }
        }
        tappableDots={true}
      />
    </View>
  )
}


export default CarouselCards