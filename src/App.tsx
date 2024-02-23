import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FoodListScreen from './screens/FoodListScreen';
import FoodDetailsScreen from './screens/FoodDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import ScanQrScreen from './screens/ScanQrScreen';
import MartScreen from './screens/MartScreen';
import PacksScreen from './screens/PacksScreen';
import FoodScreen from './screens/FoodScreen';

type RootStackParamList = {
  FoodList: undefined;
  FoodDetails: {foodIndex: number};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const HomeStack: React.FC<{foods: any[]; setFoods: Function}> = ({
  foods,
  setFoods,
}) => {
  return (
    <RootStack.Navigator initialRouteName="FoodList">
      <RootStack.Screen
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
      <RootStack.Screen name="FoodDetails" options={{title: 'Food Details'}}>
        {({route, navigation}) => (
          <FoodDetailsScreen
            food={foods[route.params?.foodIndex]}
            setFood={(updatedFood: any) => {
              const updatedFoods = [...foods];
              updatedFoods[route.params?.foodIndex] = updatedFood;
              setFoods(updatedFoods);
            }}
            navigation={navigation}
          />
        )}
      </RootStack.Screen>
    </RootStack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.labelStyle,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('./assets/icons/Home.png')
                : require('./assets/icons/Home.png');
            } else if (route.name === 'Food') {
              iconName = focused
                ? require('./assets/icons/Food.png')
                : require('./assets/icons/Food.png');
            } else if (route.name === 'Scan QR') {
              iconName = focused
                ? require('./assets/icons/ScanQR.png')
                : require('./assets/icons/ScanQR.png');
            } else if (route.name === 'Packs') {
              iconName = focused
                ? require('./assets/icons/Pack.png')
                : require('./assets/icons/Pack.png');
            } else if (route.name === 'Mart') {
              iconName = focused
                ? require('./assets/icons/Mart.png')
                : require('./assets/icons/Mart.png');
            }

            return <Image source={iconName as any} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Food" component={FoodScreen} />
        <Tab.Screen name="Scan QR" component={ScanQrScreen} />
        <Tab.Screen name="Mart" component={MartScreen} />
        <Tab.Screen name="Packs" component={PacksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '600',
    color: 'rgba(0, 43, 64, 1)',
  },
});

export default App;
