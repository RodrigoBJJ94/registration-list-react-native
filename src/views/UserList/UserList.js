import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import UsersContext from '../../context/UsersContext';
import './Styles';
import Styles from './Styles';

export default function UserList(props) {
    const { state, dispatch } = useContext(UsersContext);

    const confirmUserDeletion = (user) => {
        Alert.alert("Delete user", "Do you want to delete the user?", [
            {
                text: 'Yes',
                onPress() {
                    dispatch({
                        type: "deleteUser",
                        payload: user,
                    });
                },
            },
            {
                text: 'No'
            },
        ]);
    };

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem
                key={user.id}
                bottomDivider
                onPress={() => props.navigation.navigate("UserForm")}
            >
                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle
                        style={Styles.textEmail}>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <Button
                    onPress={() => props.navigation.navigate("UserForm", user)}
                    type="clear"
                    icon={<Icon name="edit" size={22} color="#fa0" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="delete" size={22} color="#f4511e" />}
                />
            </ListItem>
        );
    };

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.Users}
                renderItem={getUserItem}
            />
        </View>
    );
};
