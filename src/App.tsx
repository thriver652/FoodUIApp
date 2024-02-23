import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FoodListScreen from './screens/FoodListScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen';
import AllFoodsScreen from './screens/AllFoodsScreen';
import HomeScreen from './screens/HomeScreen';
import ScanQrScreen from './screens/ScanQrScreen';
import MartScreen from './screens/MartScreen';
import PacksScreen from './screens/PacksScreen';
import FoodScreen from './screens/FoodScreen';

export type RootStackParamList = {
  FoodList: undefined;
  FoodDetails: {foodIndex: number};
  AllFoods: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack = ({
  foods,
  setFoods,
}: {
  foods: Array<any>;
  setFoods: Function;
}) => {
  return (
    <Stack.Navigator initialRouteName="FoodList">
      <Stack.Screen
        name="FoodList"
        options={{title: 'Explore Food'}}
        component={({navigation}) => (
          <FoodListScreen
            foods={foods}
            setFoods={setFoods}
            navigation={navigation}
          />
        )}
      />
      <Stack.Screen name="FoodDetails" options={{title: 'Food Details'}}>
        {({route, navigation}) => (
          <FoodDetailsScreen
            food={foods[route.params.foodIndex]}
            setFood={updatedFood => {
              const updatedFoods = [...foods];
              updatedFoods[route.params.foodIndex] = updatedFood;
              setFoods(updatedFoods);
            }}
            navigation={navigation}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: [styles.tabBar, {marginBottom: 16}],
          labelStyle: styles.labelStyle,
        }}>
        <Tab.Screen name="Home" component={() => <HomeScreen />} />
        <Tab.Screen name="Food" component={() => <FoodScreen />} />
        <Tab.Screen name="Scan QR" component={() => <ScanQrScreen />} />
        <Tab.Screen name="Mart" component={() => <MartScreen />} />
        <Tab.Screen name="Packs" component={() => <PacksScreen />} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    width: 360,
    height: 60,
    top: 3549,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  labelStyle: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(0, 43, 64, 1)',
  },
});

export default App;
