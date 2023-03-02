import {useState} from 'react'
import { View, SafeAreaView, FlatList, Text } from "react-native"

import { COLORS, NFTData } from '../constants';
import { HomeHeader,LoginCard,FocusedStatusBar } from '../components';

const Home = () => {
  const [nftdata, setNftdata] = useState(NFTData);
  const handleSearch = (value) => {
    if (!value.length) return setNftdata(NFTData);
    const filterData = NFTData.filter((item) => item.name.toLowerCase()
      .includes(value.toLowerCase()));
    if (filterData.length) {
      setNftdata(filterData);
    } else {
      setNftdata(NFTData);
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftdata}
            renderItem={({ item }) => <LoginCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, background: COLORS.primary }} />
          <View style={{ flex: 1, background: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home