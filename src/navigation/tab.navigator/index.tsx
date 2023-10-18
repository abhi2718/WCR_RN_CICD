import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from '../../screens/tab.screens/home';

const Tab = createBottomTabNavigator();

export const TabNavigator =()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={HomeTab} />
    </Tab.Navigator>
  );
}