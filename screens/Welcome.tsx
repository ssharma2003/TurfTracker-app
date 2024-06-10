import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get("window");

export default function Welcome({ navigation}:any) {
  return (
    <SafeAreaView style={tw`flex-1 items-center `}>
      <View style={tw`m-2 p-2`} >
        <Text style={tw`text-3xl font-bold text-black mt-10`}>Let's Get Started!</Text>
      </View>
      <View style={tw`flex-1`}>
        <Image source={require('../assets/wel.png')} style={{width:width*0.9,height:width}} />
      </View>
      <View style={tw`flex-1 items-center mt-40`}>
        <TouchableOpacity style={tw`w-80 items-center bg-yellow-500 p-2 rounded-lg `} onPress={() => navigation.navigate('Signin')}>
          <Text style={tw`text-white text-xl text-gray-700 font-bold`}>Sign Up</Text>
        </TouchableOpacity>
        <View style={tw`flex-row justify-center`} >
          <Text style={tw`text-lg text-black font-semibold mt-2`}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={tw`text-lg text-yellow-500 font-semibold mx-2 mt-2`}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
