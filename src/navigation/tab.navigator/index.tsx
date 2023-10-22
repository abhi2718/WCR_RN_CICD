import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CommunityChat from '../../screens/tab.screens/chat/community';
import HomeTab from '../../screens/tab.screens/home';

const Tab = createBottomTabNavigator();

export const TabNavigator =()=>{
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Chat" component={CommunityChat} />
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeTab} />
    </Tab.Navigator>
  );
}