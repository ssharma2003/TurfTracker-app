import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import tw from "twrnc";
import Entypo from 'react-native-vector-icons/Entypo';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

const passwordSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .required('Password is required')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    phone: Yup.string()
        .min(10, 'Phone number is too short - should be 10 digits')
        .max(10, 'Phone number is too long - should be 10 digits')
        .required('Phone number is required'),
    confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export default function Login() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }
    const handleSubmitForm = () => {
        console.log("Form Submitted");
        navigation.navigate('Popup');
    }
    return (
            <View>
            <ImageBackground source={require('../assets/7657.jpg')} style={{ width: wp('100%'), height: hp('100%') }}>
                <View style={tw`ml-8 mt-8`}>
                    <Text style={tw`text-5xl font-bold text-cyan-500 `}>Welcome</Text>
                    <Text style={tw`text-5xl font-bold text-cyan-500`}>Back!</Text>
                </View>
                <Formik 
                    initialValues={{ password: '', email: '', phone: ''}}
                    validationSchema={passwordSchema}
                    onSubmit={values => console.log(values)} >
                    {({ handleChange, handleBlur, values, errors }) => (
                        <View style={{margin: hp('2%'),marginTop:hp(25)}} >
                        <TextInput
                            style={tw`bg-white border focus:border-gray-500 text-black p-3 rounded-lg mx-2`}
                            placeholder="Phone no./Email/Username"
                            placeholderTextColor={"#808080"}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            autoCapitalize='none'
                            />
                        {errors.email ? (
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
                                secureTextEntry={!isPasswordVisible}
                                />
                            <TouchableOpacity style={tw`mr-2`} onPress={handleVisibility} >
                                {
                                    isPasswordVisible ? <Entypo name="eye" size={24} color="black" /> : <Entypo name="eye-with-line" size={24} color="black" />
                                }
                            </TouchableOpacity>
                        </View>
                        <Text style={tw`ml-3`} >
                        {errors.password ? (
                            <Text style={tw`text-red-500 text-sm ml-2`}>{errors.password}</Text>
                        ) : null}
                        </Text>
                        <View style={tw`flex-row justify-around mt-5 items-center`} >
                            <TouchableOpacity style={tw`bg-blue-600 w-20 rounded-full p-2 items-center`} onPress={handleSubmitForm} ><Text style={tw`text-white`} >Sign in</Text></TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={tw`text-blue-200 underline`} >Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    )}
                    </Formik>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: wp('80%'),
        height: hp('80%'),
        margin: wp('10.5%'),
        marginTop: hp('10%'),
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 15,
        shadowOffset: {
            width: wp('3%'),
            height: hp('2%')
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 3
    },
    input: {
        backgroundColor: '#fff',
        height: hp('7%'),
        margin: wp('2%'),
        padding: wp('2%'),
        borderRadius: 10
    },
})