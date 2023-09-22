import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Login = (props: any) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const SignUp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SignUp</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
    </View>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
