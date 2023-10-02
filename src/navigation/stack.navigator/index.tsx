import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from '../../store/reducers/todo.reducer';
import {addProduct} from '../../store/reducers/product.reducer';
import styled from 'styled-components/native';
import SignInScreen from '../../screens/auth/signin';
import SignUpScreen from '../../screens/auth/signup';
const HeadingText = styled.Text`
  font-size: 22px;
`;
const Login = (props: any) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodo('Test'));
    dispatch(addProduct('P1'));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>Login1</Text>
      <HeadingText>Okay Bro</HeadingText>
      <Button
        title="Go to SignUp"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const Profile = (props: any) => {
  const {navigation} = props;
  const {products} = useSelector(({productState}) => productState);
  const {todos} = useSelector(({todoState}) => todoState);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

const Settings = (props: any) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUpScreen}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
