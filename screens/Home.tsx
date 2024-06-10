import { View, Text, TextInput, TouchableOpacity, ScrollView,PermissionsAndroid, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TurfList from '../components/turflist';

export default function Home() {

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Turf app needs access to your location ' +
            'so you can book nearby turfs.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [location, setLocation] = useState(null);
  const [selectedSport, setSelectedSport] = useState('');

  return (
    <View style={tw`bg-white p-3`}>
      <Text style={tw`text-xl text-gray-700 font-bold mt-3`}>Hello Shreya,</Text>
      <Text style={tw`text-xl text-gray-700 font-bold`}>Select your pitch</Text>
      <View style={tw`flex-row mt-5 items-center`} >
        <TextInput style={tw`border p-2 w-73 rounded-xl text-black`} placeholder="Location" placeholderTextColor={"gray"} />
        <TouchableOpacity style={tw`rounded-xl ml-2`} >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={tw`mt-3`} >
        <View style={tw`flex-row mb-3`} >
          <TouchableOpacity style={tw`w-20 h-9 border bg-green-200 justify-center items-center p-2 rounded-3xl mx-1`} onPress={()=>setSelectedSport('Football')} >
            <Text style={tw`text-black`} >Football</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-20 h-9 border bg-green-200 justify-center items-center p-2 rounded-3xl mx-1`} onPress={()=>setSelectedSport('Cricket')} >
            <Text style={tw`text-black`} >Cricket</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-20 h-9 border bg-green-200 justify-center items-center p-2 rounded-3xl mx-1`} onPress={()=>setSelectedSport('Tennis')}>
            <Text style={tw`text-black`} >Tennis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`w-22 h-9 border bg-green-200 justify-center items-center p-2 rounded-3xl mx-1`} onPress={()=>setSelectedSport('Basketball')}>
            <Text style={tw`text-black`} >Basketball</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TurfList selectedSport={selectedSport}/>
    </View>
  )
}