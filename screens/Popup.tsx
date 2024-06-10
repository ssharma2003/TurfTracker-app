import React, {useEffect, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const SplashScreen = ({navigation}: any) => {
  const navigationRef = useRef(navigation);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to another screen after 3 seconds
      navigationRef.current.replace('Home');
    }, 2000);
    return () => clearTimeout(timeout); // Clear the timeout if component unmounts
  }, []);

  return (
    <View style={tw`flex-1 bg-gray-100 justify-center items-center`}>
      <View style={tw`items-center`}>
        <View
          style={tw`bg-gray-300 w-25 h-12 justify-center items-center mb-5`}>
          <Text style={tw`text-lg font-bold`}>Logo</Text>
        </View>
        <View style={tw` items-center`}>
          <Text style={tw`text-5xl font-bold text-center text-black mb-5`}>
            All your
          </Text>
          <Text style={tw`text-black text-5xl mb-5 font-bold text-center`}> 
            favourite
          </Text>
          <Text style={tw`text-5xl font-bold text-center text-black mb-5`}>
            turfs in
          </Text>
          <Text style={tw`text-black text-5xl mb-4 font-bold text-center`}>
            one app
          </Text>

          <View style={tw`absolute -top-5 -right-10`}>
            <FontAwesome5 name="basketball-ball" size={40} color="black" />
          </View>
          <View style={tw`absolute top-18 -left-8`}>
            <FontAwesome5 name="futbol" size={40} color="black" />
          </View>
          <View style={tw`absolute top-40 -right-10`}>
            <FontAwesome5 name="football-ball" size={40} color="black" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={tw`flex-row items-center bg-orange-600 py-2 px-5 rounded-full mt-5`}>
        <Text style={tw`text-white text-lg mr-2`}>Find your pitch</Text>
        <FontAwesome5 name="arrow-right" size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SplashScreen;
