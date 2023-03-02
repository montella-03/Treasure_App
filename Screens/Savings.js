import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from "react-native"
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import { CircleButton, SubInfo,RectangleButon, FocusedStatusBar, SavingsDes, SavingsBid } from '../components'



const SavingsHeader = ({ data, navigation }) => (
  <View
    style={{
      width: "100%",
      height: 373,
    }}
  >
    <Image
      source={data.image}
      resizeMode="cover"
      style={{
        width: "100%",
        height: "100%",
      }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Savings = ({ route, navigation }) => {
  const { data } = route.params;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rrgba(255,255,255,0.5)",
            zIndex: 1,
          }}
        >
          <RectangleButon
            minWidth={170}
            fontSize={SIZES.large}
            {...SHADOWS.dark}
          />
        </View>
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <SavingsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <>
              <SavingsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{
                padding:SIZES.font
              }}>
                <SavingsDes data={data} />
                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color:COLORS.primary
                  }}>
                    current bids

                  </Text>
                )}
              </View>
            </>
          )}
        />
      </SafeAreaView>
    );
}

export default Savings;