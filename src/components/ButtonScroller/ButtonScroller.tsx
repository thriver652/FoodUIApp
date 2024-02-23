import React, {useState} from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import SectionHeader from '../SectionHeader';

interface FoodItem {
  id: number;
  name: string;
  type: 'Veg' | 'Non-Veg';
  image: number;
  rate: string;
}

const FoodScroller: React.FC = () => {
  const allFoodItems: FoodItem[] = [
    {
      id: 1,
      name: 'Vegetable Curry',
      type: 'Veg',
      image: require('../../assets/icons/VegCurry.png'),
      rate: '₹100',
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      type: 'Non-Veg',
      image: require('../../assets/icons/Chicken.png'),
      rate: '₹100',
    },
    {
      id: 3,
      name: 'Paneer Tikka',
      type: 'Veg',
      image: require('../../assets/icons/Paneer.png'),
      rate: '₹100',
    },
    {
      id: 4,
      name: 'Fish Fry',
      type: 'Non-Veg',
      image: require('../../assets/icons/Fish.png'),
      rate: '₹100',
    },
  ];

  const [foodItems, setFoodItems] = useState<FoodItem[]>(allFoodItems);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters: string[] = [
    'All',
    'Veg',
    'Non-Veg',
    'Button1',
    'Button2',
    'Button3',
  ];

  const handleFilter = (filter: string): void => {
    setActiveFilter(filter);
    let filteredItems: FoodItem[] = [];
    if (filter === 'All') {
      filteredItems = allFoodItems;
    } else {
      filteredItems = allFoodItems.filter(item => item.type === filter);
    }
    setFoodItems(filteredItems);
  };

  const handleToggle = (filter: string): void => {
    handleFilter(filter);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.filterButton,
              {
                width: 103,
                height: 36,
                paddingHorizontal: 13,
                paddingVertical: 0,
                borderRadius: 999,
                borderWidth: 1,
                borderColor:
                  activeFilter === filter
                    ? 'rgba(0, 72, 107, 1)'
                    : 'rgba(236, 238, 240, 1)',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                gap: 6,
              },
            ]}
            onPress={() => handleToggle(filter)}>
            <Text
              style={{
                color:
                  activeFilter === filter ? 'rgba(0, 72, 107, 1)' : 'black',
              }}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <SectionHeader title={'Items List'} isDash={undefined} />
      <View style={styles.foodContainer}>
        {foodItems.map(item => (
          <View key={item.id} style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  foodItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  foodImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: 'gray',
  },
  foodName: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: 'rgba(0, 72, 107, 1)',
  },
  rate: {
    marginTop: 5,
    fontSize: 16,
  //  fontWeight: 700,
    color: 'rgba(0, 72, 107, 1)',
  },
});

export default FoodScroller;
