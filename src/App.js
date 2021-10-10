import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import UserList from './views/UserList/UserList';
import UserForm from './views/UserForm/UserForm';
import { UsersProvider } from './context/UsersContext';

const Stack = createStackNavigator();

export default function App() {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "User List",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("UserForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={25} color="#fff" />}
                                    />)
                            }
                        }} />
                    <Stack.Screen
                        name="UserForm"
                        component={UserForm}
                        options={{ title: "User form" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
};

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
};
