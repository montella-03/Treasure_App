import { View, Text,Image } from 'react-native'
import React from 'react'
import { EthPrice } from './SubInfo'
import {COLORS,SIZES,FONTS} from '../constants'
const SavingsBid = ({bid}) => {
  return (
    <View style={{
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: SIZES.base * 2,
      marginVertical: SIZES.base
    }}>
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.font,
            color: COLORS.primary,
          }}
        >
          Bid placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small - 2,
            color: COLORS.secondary,
            marginTop:3
          }}
        >
          Placed on {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price}/>
    </View>
  );
}

export default SavingsBid