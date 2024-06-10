import { View, Text, ImageBackground, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TouchableOpacity } from 'react-native';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password'),
    name: Yup.string()
        .required('Name is required'),
});

export default function Signin() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    //   const handleVisibility = () => {
    //     setIsPasswordVisible(!isPasswordVisible);
    // }
    return (
        <View>
            <ImageBackground source={require('../assets/7657.jpg')} style={{ width: wp('100%'), height: hp('100%') }}>
                <View style={tw`items-center p-3 mt-2`} >
                    <Text style={tw`text-green-600 text-3xl font-bold`}>Create Account</Text>
                    <Text style={tw`text-white mt-3`} >Create an account to book your Turf</Text>
                    <Formik
                        initialValues={{ name: '', password: '', email: '', confirmPassword: '' }}
                        validationSchema={SignupSchema}
                        onSubmit={values => console.log(values)} >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={{ margin: hp('2%'), marginTop: hp(25) }} >
                                <TextInput
                                    style={tw`bg-white border focus:border-gray-500 text-black p-3 rounded-lg mx-2`}
                                    placeholder="Name"
                                    placeholderTextColor={"#808080"}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                    autoCapitalize='none'
                                />
                                {errors.name && touched.name ? (
                                    <Text style={tw`text-red-500 text-sm ml-2`}>{errors.name}</Text>
                                ) : null}
                                <TextInput
                                    style={tw`bg-white border focus:border-gray-500 text-black p-3 rounded-lg mx-2`}
                                    placeholder="Email"
                                    placeholderTextColor={"#808080"}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    autoCapitalize='none'
                                />
                                {errors.email && touched.email ? (
                                    <Text style={tw`text-red-500 text-sm ml-2`}>{errors.email}</Text>
                                ) : null}
                                <View style={tw`flex-row mx-2 mt-5 items-center bg-white rounded-lg justify-between border`} >
                                    <TextInput
                                        style={tw`bg-white text-black p-3 rounded-lg w-4/5`}
                                        placeholder="Password"
                                        placeholderTextColor={"#808080"}
                                        autoCapitalize='none'
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                    // secureTextEntry={!isPasswordVisible}
                                    />
                                    {/* <TouchableOpacity style={tw`mr-2`} onPress={handleVisibility}>
                                {
                                    isPasswordVisible ? <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />
                                }
                            </TouchableOpacity> */}
                                </View>
                                <Text style={tw`ml-3`} >
                                    {errors.password && touched.password ? (
                                        <Text style={tw`text-red-500 text-sm ml-2`}>{errors.password}</Text>
                                    ) : null}
                                </Text>
                                <View style={tw`flex-row mx-2 items-center bg-white rounded-lg justify-between border`}>
                                    <TextInput
                                        style={tw`bg-white text-black p-3 rounded-lg w-4/5`}
                                        placeholder="Confirm Password"
                                        placeholderTextColor={"#808080"}
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur('confirmPassword')}
                                        value={values.confirmPassword}
                                        autoCapitalize='none'
                                    />
                                </View>
                                <Text style={tw`ml-3`}>
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <Text style={tw`text-red-500 text-sm ml-2`}>{errors.confirmPassword}</Text>
                                    ) : null}
                                </Text>
                                <View style={tw`flex-row justify-around mt-5 items-center`} >
                                    <TouchableOpacity style={tw`bg-blue-600 w-20 rounded-full p-2 items-center`} 
                                    onPress={()=> handleSubmit } ><Text style={tw`text-white`} >Sign in</Text></TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </ImageBackground>
        </View>
    )
}