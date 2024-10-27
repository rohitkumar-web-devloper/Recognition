import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setBinding } from '../../Redux/Slices/BindingKey';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../Constant/NavigationStrings';

const ResetMpin = () => {
    const Dispatch = useDispatch()
    const Navigation = useNavigation()
    const [newMpin, setNewMpin] = useState('');
    const [confirmMpin, setConfirmMpin] = useState('');

    // Handle Reset MPIN functionality
    const handleResetMpin = () => {
        if (!newMpin || !confirmMpin) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        if (newMpin !== confirmMpin) {
            Alert.alert('Wrong', 'New MPIN and confirm MPIN do not match.');
            return;
        }
        Dispatch(setBinding(newMpin))
        Alert.alert('Success', 'Your MPIN has been reset successfully!');
        Navigation.navigate(navigationString.MPIN as never)
        // Here you would typically handle the actual reset action, such as an API call
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>New MPIN</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter New MPIN"
                value={newMpin}
                onChangeText={setNewMpin}
                keyboardType="numeric"
                secureTextEntry
                maxLength={4}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New MPIN"
                value={confirmMpin}
                onChangeText={setConfirmMpin}
                keyboardType="numeric"
                secureTextEntry
                maxFontSizeMultiplier={4}
            />

            <TouchableOpacity style={styles.button} onPress={handleResetMpin}>
                <Text style={styles.buttonText}>Reset MPIN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#4A90E2',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default ResetMpin;
