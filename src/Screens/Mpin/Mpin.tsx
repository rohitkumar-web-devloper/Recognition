import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, StatusBar } from 'react-native';
import { colors } from '../../Styles/Color'; // Adjust path as necessary
import { useNavigation, CommonActions } from '@react-navigation/native';
import navigationString from '../../Constant/NavigationStrings';
import UserRecognize from '../UserRecognize/UserRecognize';
import Images from '../../Constant/ImagePath';
import { rotationHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';
import { useSelector } from 'react-redux';

const Mpin = () => {
    const Navigation = useNavigation()
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const MPin = useSelector((state) => state.Binding.Binding)
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    const handlePress = (num: string) => {
        if (passcode.length < 4) {
            setPasscode((prev) => prev + num);
            setError('');
        }
    };
    const handleDelete = () => {
        setPasscode((prev) => prev.slice(0, -1));
    };
    const handleSubmit = () => {
        if (passcode === MPin) {
            console.log('Passcode correct!');
            Navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: navigationString.HOME }],
                })
            );
        } else {
            setError('Incorrect passcode, please try again.');
            setPasscode(''); // Reset the passcode on error
        }
    };
    const renderButton = (num: any) => {
        const animation = new Animated.Value(1);

        const handlePressIn = () => {
            Animated.spring(animation, {
                toValue: 0.9,
                useNativeDriver: true,
            }).start();
        };

        const handlePressOut = () => {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        };

        return (
            <Animated.View style={{ transform: [{ scale: animation }] }}>
                <TouchableOpacity
                    style={styles.circleButton}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    onPress={() => handlePress(num.toString())}
                >
                    <Text style={styles.buttonText}>{num}</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor={colors.MAIN} />
            <View style={{ position: 'absolute', top: 5, right: 5 }}>
                <TouchableOpacity style={{ transform: [{ rotate: '90deg' }] }} onPress={toggleMenu}>
                    <Images.Dot />
                </TouchableOpacity>
            </View>
            {isMenuVisible && (
                <View style={styles.menu}>
                    <Text style={styles.menuItem} onPress={() => { Navigation.navigate(navigationString.RESETMPIN as never), setIsMenuVisible(false) }}>Reset Mpin</Text>
                </View>
            )}
            <Text style={styles.title}>Enter Passcode</Text>
            <View style={styles.passcodeContainer}>
                <Text style={styles.passcodeText}>{passcode.replace(/./g, '●')}</Text>
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.keyboard}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <View key={num} style={styles.buttonRow}>
                        {renderButton(num)}
                    </View>
                ))}
                {renderButton(0)}
                <TouchableOpacity style={styles.circleButton} onPress={handleDelete}>
                    <Text style={styles.buttonText}>DEL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circleButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity>
                <UserRecognize />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    passcodeContainer: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: colors.DGRAY,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    passcodeText: {
        fontSize: 24,
        letterSpacing: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
    keyboard: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: "wrap"
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    circleButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.LGRAY,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        elevation: 3,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    menu: {
        position: 'absolute',
        top: 15, // Position below the button
        right: 30,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 10,
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        // shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        zIndex: 10
    },
    menuItem: {
        padding: 8,
        fontSize: 16,
        color: '#333',
    },
});

export default Mpin;
