import React, { useContext, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';

export default function UserForm({ route, navigation }) {
    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UsersContext);

    return (
        <View style={styles.form}>
            <Text>Name</Text>
            <TextInput
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Inform the name"
                value={user.name}
                style={styles.input}
            />
            <Text>E-mail</Text>
            <TextInput
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Inform the email"
                value={user.email}
                style={styles.input}
            />
            <Text>Avatar URL</Text>
            <TextInput
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Inform the avatar URL"
                value={user.avatarUrl}
                style={styles.input}
            />
            <Button
                title="Save"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : "createUser",
                        payload: user,
                    });
                    navigation.goBack();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: '#555',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
        paddingLeft: 8,
        borderRadius: 4
    }
});