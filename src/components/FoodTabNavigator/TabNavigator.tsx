import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface TabNavigationProps {
  tabs: string[];
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  tabs,
  setActiveTab,
  activeTab,
}) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tab, activeTab === tab ? styles.activeTab : null]}
          onPress={() => setActiveTab(tab)}>
          <Text
            style={{
              color:
                activeTab === tab
                  ? 'rgba(0, 72, 107, 1)'
                  : 'rgba(126, 134, 140, 1)',
              fontSize: 12,
              fontWeight: 600,
            }}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 0,
    marginTop: 40,
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 72, 107, 1)',
  },
});

export default TabNavigation;
