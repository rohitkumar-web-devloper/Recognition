import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
} from 'react-native-reanimated';
import { colors } from '../../Styles/Color';

const Home = () => {
    // Animation values for different components
    const balancePosition = useSharedValue(100);
    const recentTransactionsPosition = useSharedValue(100);
    const actionButtonsPosition = useSharedValue(100);
    const opacity = useSharedValue(0);

    // Run animations on mount
    useEffect(() => {
        balancePosition.value = withTiming(0, { duration: 800 });
        opacity.value = withDelay(200, withTiming(1, { duration: 800 }));
        recentTransactionsPosition.value = withDelay(300, withTiming(0, { duration: 800 }));
        actionButtonsPosition.value = withDelay(400, withTiming(0, { duration: 800 }));
    }, []);

    // Animated styles
    const balanceCardStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: balancePosition.value }],
        opacity: opacity.value,
    }));
    const recentTransactionsStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: recentTransactionsPosition.value }],
        opacity: opacity.value,
    }));
    const actionButtonsStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: actionButtonsPosition.value }],
        opacity: opacity.value,
    }));

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>

            {/* Balance Card */}
            <Animated.View style={[styles.balanceCard, balanceCardStyle]}>
                <Text style={styles.balanceTitle}>Current Balance</Text>
                <Text style={styles.balanceAmount}>$12,345.67</Text>
            </Animated.View>

            {/* Action Buttons */}
            <Animated.View style={[styles.actionButtonsContainer, actionButtonsStyle]} >
                <Button title="Transfer Money" color={colors.MAIN}  onPress={() => { }}  />
                <Button title="Pay Bills" color={colors.MAIN} onPress={() => { }} />
                {/* <Button title="View Statements" color="#4A90E2" onPress={() => {}} /> */}
            </Animated.View>

            {/* Recent Transactions */}
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <Animated.View style={[styles.recentTransactionsContainer, recentTransactionsStyle]}>
                {["Amazon - $120", "Starbucks - $15", "Uber - $30"].map((item, index) => (
                    <View key={index} style={styles.transactionItem}>
                        <Text style={styles.transactionText}>{item}</Text>
                        <Text style={styles.transactionDate}>Today</Text>
                    </View>
                ))}
            </Animated.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#333',
    },
    balanceCard: {
        width: '90%',
        backgroundColor: '#4A90E2',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 20,
    },
    balanceTitle: {
        color: '#ffffff',
        fontSize: 18,
    },
    balanceAmount: {
        color: '#ffffff',
        fontSize: 36,
        fontWeight: 'bold',
        marginTop: 10,
    },
    actionButtonsContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    actionButton: {
        marginHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        color: '#333',
    },
    recentTransactionsContainer: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 15,
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    transactionText: {
        fontSize: 16,
        color: '#333',
    },
    transactionDate: {
        fontSize: 14,
        color: '#999',
    },
});

export default Home;
