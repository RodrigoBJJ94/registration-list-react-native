import React, { useContext, useState } from 'react';
import { Text, TextInput, View, Stylesheet, Button, TouchableOpacity, } from 'react-native';
import UsersContext from '../../context/UsersContext';
import Styles from './Styles';

export default function UserForm({ route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={Styles.form}>
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Inform the name"
                value={user.name}
                style={Styles.input}
            />
            <Text>E-mail</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Inform the email"
                value={user.email}
                style={Styles.input}
            />
            <Text>Avatar URL</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Inform the avatar URL"
                value={user.avatarUrl}
                style={Styles.input}
            />
            <TouchableOpacity
                style={Styles.button}
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : "createUser",
                        payload: user,
                    });
                    navigation.goBack();
                }}>
                <Text style={Styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};
