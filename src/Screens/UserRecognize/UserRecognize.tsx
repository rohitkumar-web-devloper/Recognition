import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { checkBioMetric, loginBioMetrics } from '../../Utils/BiometricUtil';
import Images from '../../Constant/ImagePath';
import { colors } from '../../Styles/Color';
import { CommonActions, useNavigation } from '@react-navigation/native';
import navigationString from '../../Constant/NavigationStrings';
const UserRecognize = () => {
    const Navigation = useNavigation()
    const [biometricType, setBioMetricType] = useState<string | null>();
    useEffect(() => {
        checkBioMetric().then((bt) => {
            setBioMetricType(bt)
        })
    }, [])
    const check = async () => {
        const result = await loginBioMetrics('123123')
        if (result) {
            Navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: navigationString.HOME }],
                })
            );
        }
    }
    return (
        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: "flex-start", alignItems: "center", gap: 45, width: "100%", paddingLeft: 15, marginTop: 5 }}>
            {/* <Text style={{ textAlign: 'center' }}>User Recognition</Text> */}
            <TouchableOpacity style={styles.button} onPress={() => check()}>
                <Images.Face />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => check()}>
                <Images.FingerPrint />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        backgroundColor: colors.LGRAY,
        marginTop: 10,
        borderRadius: 50,
        padding: 10,
        elevation: 5,
        // width: "80%"
    },
    buttonText: {
        fontSize: 16,
        color: colors.MAIN,
        fontWeight: "500"
    }
})

export default UserRecognize