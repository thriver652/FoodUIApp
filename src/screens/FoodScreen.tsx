import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import BeveragesComponent from '../components/FoodItem/BeveragesComponent';
import SaladComponent from '../components/FoodItem/SaladComponent';
import SweetsComponent from '../components/FoodItem/SweetsComponent';
import MixersComponent from '../components/FoodItem/MixersComponent';
import NoshesComponent from '../components/FoodItem/NoshesComponent';
import SectionHeader from '../components/SectionHeader';
import TabNavigation from '../components/FoodTabNavigator/TabNavigator';
interface FoodItem {
  id: number;
  name: string;
  type: string;
  image: any;
}

const YourScreenWithTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Beverages');

  const tabs = ['Beverages', 'Salad', 'Sweets', 'Mixers', 'Noshes'];

  const allFoodItems: FoodItem[] = [
    {
      id: 1,
      name: 'Vegetable Curry',
      type: 'Veg',
      image: require('../assets/icons/VegCurry.png'),
    },
    {
      id: 2,
      name: 'Chicken Biryani',
      type: 'Non-Veg',
      image: require('../assets/icons/Chicken.png'),
    },
  ];
  const handlePress = () => {
    console.log('Touchable component pressed!');
  };

  return (
    <View>
      <TabNavigation
        tabs={tabs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />

      {activeTab === 'Beverages' && <BeveragesComponent />}
      {activeTab === 'Salad' && <SaladComponent />}
      {activeTab === 'Sweets' && <SweetsComponent />}
      {activeTab === 'Mixers' && <MixersComponent />}
      {activeTab === 'Noshes' && <NoshesComponent />}

      <View style={styles.bottomContainer}>
        <SectionHeader title={'Heading Here'} isDash={true} />
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.foodContainer}>
        {allFoodItems.map(item => (
          <View key={item.id} style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomContainer1}>
        <SectionHeader title={'Heading Here'} isDash={false} />
        <TouchableOpacity onPress={handlePress}>
          <View style={styles.touchableView}>
            <Text style={styles.actionItemText}>Action Item</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.foodContainer}>
        {allFoodItems.map(item => (
          <View key={item.id} style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  seeMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  seeMoreText: {
    color: 'rgba(0, 72, 107, 1)',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomContainer1: {
    //  flexDirection: 'row',
    // justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 20,
    // alignItems: 'center',
  },
  touchableView: {
    width: '100%',
    height: 60,
    borderRadius: 7,
    backgroundColor: 'rgba(242, 250, 249, 1)',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  actionItemText: {
    fontSize: 14,
    color: 'rgba(0, 72, 107, 1)',
    marginLeft: 26,
    //  marginTop: 16,
  },
  foodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  foodItem: {
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
  },
});

export default YourScreenWithTabs;
