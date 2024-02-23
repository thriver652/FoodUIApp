import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import OfferItem from '../components/OfferItem';
import SectionHeader from '../components/SectionHeader';
import OrderAgain from '../components/OrderAgain';
import FoodScreen from './FoodScreen';

const HomeScreen = () => {
  const offers = [
    {id: 1, text: 'Flat ₹80 Off | Above ₹400', code: 'USE CODE: MISSEDYOU80'},
    {id: 2, text: 'Flat ₹80 Off | Above ₹400', code: 'USE CODE: MISSEDYOU80'},
  ];
  const orderAgain = [
    {id: 1, text: 'Taj Mahal souther...', code: '₹245'},
    {id: 2, text: 'Taj Mahal souther...', code: '₹245'},
    {id: 3, text: 'Taj Mahal south tea', code: '₹245'},
  ];
  const imagesData = [
    {
      id: 1,
      name: 'Beverages',
      source: require('../assets/icons/beverages.png'),
    },
    {id: 2, name: 'Salad', source: require('../assets/icons/Salad.png')},
    {id: 3, name: 'Sweets', source: require('../assets/icons/Sweatmeats.png')},
    {id: 4, name: 'Mixers', source: require('../assets/icons/Mixers.png')},
    {id: 5, name: 'Noshes', source: require('../assets/icons/Noshes.png')},
    {id: 6, name: 'Brunches', source: require('../assets/icons/Brunches.png')},
    {
      id: 7,
      name: 'Beverages',
      source: require('../assets/icons/beverages.png'),
    },
    {id: 8, name: 'Salad', source: require('../assets/icons/Salad.png')},
    {id: 1, name: 'Sweets', source: require('../assets/icons/Sweatmeats.png')},
    {id: 4, name: 'Mixers', source: require('../assets/icons/Mixers.png')},
    {id: 5, name: 'Noshes', source: require('../assets/icons/Noshes.png')},
    {id: 6, name: 'Brunches', source: require('../assets/icons/Brunches.png')},
    {
      id: 1,
      name: 'Beverages',
      source: require('../assets/icons/beverages.png'),
    },
    {id: 2, name: 'Salad', source: require('../assets/icons/Salad.png')},
    {id: 3, name: 'Sweets', source: require('../assets/icons/Sweatmeats.png')},
    {id: 4, name: 'Mixers', source: require('../assets/icons/Mixers.png')},
    {id: 5, name: 'Noshes', source: require('../assets/icons/Noshes.png')},
    {id: 6, name: 'Brunches', source: require('../assets/icons/Brunches.png')},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const numColumns = 3;
  const itemsPerPage = numColumns * 2;
  const totalPages = Math.ceil(imagesData.length / itemsPerPage);

  const renderItem = ({item, index}) => (
    <View key={item.id} style={styles.imageContainer}>
      <Image source={item.source} style={styles.image} />
      <Text style={styles.imageName}>{item.name}</Text>
    </View>
  );

  const renderPage = (data, index) => (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      horizontal={false}
      numColumns={numColumns}
      contentContainerStyle={styles.flatListContent}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );

  const onViewableItemsChanged = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  };

  return (
    <ScrollView style={styles.HomeCont}>
      <SectionHeader title="Offers for you" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {offers.map(offer => (
          <OfferItem key={offer.id} text={offer.text} code={offer.code} />
        ))}
      </ScrollView>
      <View style={{marginTop: 20, marginRight: 15}}>
        <SectionHeader title="Order Again ?" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {orderAgain.map(offer => (
            <OrderAgain
              key={offer.id}
              text={offer.text}
              code={offer.code}
              onPress={undefined}
            />
          ))}
        </ScrollView>
      </View>
      <View style={{marginTop: 20, marginRight: 15}}>
        <SectionHeader title="What’s on your mind?" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={imagesData}
          renderItem={({index}) =>
            renderPage(
              imagesData.slice(
                index * itemsPerPage,
                (index + 1) * itemsPerPage,
              ),
              index,
            )
          }
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{itemVisiblePercentThreshold: 50}}
        />
        <View style={styles.paginationDots}>
          {Array.from({length: totalPages}).map((_, pageIndex) => (
            <Text
              key={pageIndex}
              style={[
                styles.dot,
                pageIndex === activeIndex
                  ? styles.activeDot
                  : styles.inactiveDot,
              ]}>
              ⬤
            </Text>
          ))}
        </View>
      </View>
      <FoodScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  HomeCont: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageName: {
    marginTop: 5,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: '600',
    color: 'rgba(0, 72, 107, 1)',
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  activeDot: {
    color: 'rgba(52, 167, 223, 1)',
  },
  inactiveDot: {
    color: 'rgba(215, 219, 223, 1)',
  },
  flatListContent: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
