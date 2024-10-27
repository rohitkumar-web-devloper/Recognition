import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Web_Client_Id } from "../../Constant/Variable";
import { colors } from "../../Styles/Color";
import Images from "../../Constant/ImagePath";
import Statusbar from "../../Component/StatusBar/Statusbar";
import MainStyle from "../../Styles/MainStyle";
import { useNavigation } from "@react-navigation/native";
import navigationString from "../../Constant/NavigationStrings";
import { useDispatch } from "react-redux";
import { setToken } from "../../Redux/Slices/Token";
import LoginStyle from "./LoginStyle";
import { Formik } from "formik";
import LoginSchema from "../../Schemas/LoginSchema";
const Login = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const handleSubmit = (values: { email: string, password: string }) => {
        dispatch(setToken(values));
        navigation.navigate(navigationString.RESETMPIN as never);
    };
    return (
        <>
            <Statusbar theme={true} content={true} />
            <View style={{ flex: 1, backgroundColor: colors.WHITE, padding: 15 }}>
                <View style={MainStyle.flexRight}>
                    <TouchableOpacity>
                        <Images.Dot />
                    </TouchableOpacity>
                </View>
                <Text style={LoginStyle.heading}>You need to sign in</Text>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <>
                            <View style={{ marginBottom: 30 }}>
                                <Text style={LoginStyle.label}>Email</Text>
                                <TextInput
                                    keyboardType="email-address"
                                    placeholder="Please enter a valid and real email"
                                    placeholderTextColor={colors.DGRAY}
                                    style={LoginStyle.textInput}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                            </View>
                            <View>
                                <Text style={LoginStyle.label}>Password</Text>
                                <TextInput
                                    keyboardType="default"
                                    placeholder="Please enter your password"
                                    placeholderTextColor={colors.DGRAY}
                                    secureTextEntry
                                    style={LoginStyle.textInput}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                            </View>
                            <View style={MainStyle.flexRight}>
                                <TouchableOpacity style={{ paddingVertical: 10, paddingLeft: 10 }}>
                                    <Text style={LoginStyle.forgotButton}>Forgot password?</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[MainStyle.flexRow, { justifyContent: "space-between", marginTop: 30 }]}>
                                <View style={{ height: 0.5, backgroundColor: colors.DGRAY, width: "38%" }}></View>
                                <Text style={{ fontSize: 14, fontWeight: "500", color: colors.DGRAY }}>Sign in with</Text>
                                <View style={{ height: 0.5, backgroundColor: colors.DGRAY, width: "38%" }}></View>
                            </View>
                            <TouchableOpacity
                                style={[
                                    MainStyle.flexRow,
                                    {
                                        borderWidth: 0.6,
                                        borderColor: colors.DGRAY,
                                        borderRadius: 5,
                                        marginTop: 20,
                                    },
                                ]}
                                activeOpacity={0.5}
                            >
                                <Images.GLogo />
                                <Images.GTitle />
                            </TouchableOpacity>
                            <View style={{ position: "absolute", width: "100%", bottom: 20, left: 16 }}>
                                <TouchableOpacity style={LoginStyle.signInButton} onPress={() => { handleSubmit() }}>
                                    <Text style={LoginStyle.signInText}>Sign in</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </>
    );
};

export default Login;
