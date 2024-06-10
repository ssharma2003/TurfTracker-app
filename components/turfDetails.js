// import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Button, Pressable, Image } from 'react-native'
// import React from 'react'
// import tw from 'twrnc'
// import { useNavigation } from '@react-navigation/native';
// import {Date_and_time} from './Date_and_time'

// export default function TurfDetails ({ route }) {
//     const { turf } = route.params;
//     const navigation = useNavigation();

//     const handlesubmit = () => {
//       navigation.navigate('Date_and_time', {turf: turf});
//     }
  
//     return (
//       <View >
//         <ImageBackground source={turf.image} style={{width: '100%', height: 285}}>
//             <View style={tw`border border-black h-150 mt-70 rounded-2xl bg-white `}>
//                 <Text style={tw`text-black font-bold text-3xl text-center mt-5`}>{turf.turf_name}</Text>
//                 <Text style={tw`text-black text-center mt-1`}>{turf.location}</Text>
//                 <View style={tw`flex-row justify-evenly mt-4 `}>
//                 {turf.facilities && turf.facilities.map((facility, index) => (
//                   <TouchableOpacity key={index} style={tw`mr-2 p-3 h-11 rounded-3xl bg-[#209920] `}>
//                     <Text style={tw`text-white font-bold `}>{facility}</Text>
//                   </TouchableOpacity>
//                 ))}
//                 </View>
                
//                 <View style={tw`flex-row justify-evenly mt-7 mb-5 `}>
//                   <TouchableOpacity style={tw`mr-2 p-3 rounded-3xl bg-gray-200 h-30 w-28% justify-center shadow-xl `}>
//                     <Text style={tw`text-black text-lg text-center`}>{turf.yourloc}</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={tw`mr-2 p-3 rounded-3xl bg-gray-200 h-30 w-28% justify-center shadow-xl`}>
//                     <Text style={tw`text-black text-2xl text-center`}>${turf.rate_per_hour} </Text>
//                     <Text style={tw`text-black text-lg text-center`}>per hour</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={tw`mr-2 p-3  rounded-3xl bg-gray-200 h-30 w-28% justify-center shadow-xl `}>
//                     <Text style={tw`text-black text-lg text-center `}>See location</Text>
//                     <Image source={require('../assets/map.webp')} style={tw`h-28 w-28`}/> 
//                   </TouchableOpacity>
//                 </View>
//                 <View style={tw`ml-15 mr-15 mb-5 p-2 bg-gray-100 border rounded-lg `}>
//                   <Text style={tw`text-black text-xl text-center`}> Call +91 9856321456</Text>
//                 </View>

//                 <Pressable style={tw` bg-[#F38630] h-14 rounded-lg justify-center items-center mx-5`}
//                   onPress={()=> {handlesubmit(turf)}}
//                 >
//                   <Text style={tw`text-white font-bold text-xl`}>Select date and timings</Text>
//                 </Pressable>
//             </View>
//         </ImageBackground>

//       </View>
//     );
//   };

import { View, Text, ImageBackground, TouchableOpacity, Pressable, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native';
import { Date_and_time } from './Date_and_time'

export default function TurfDetails ({ route }) {
    const { turf } = route.params;
    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Date_and_time', { turf: turf });
    }

    return (
        <View>
            <ImageBackground source={turf.image} style={{ width: '100%', height: 285 }}>
                <View style={tw`border border-black h-150 mt-70 rounded-2xl bg-white`}>
                    <Text style={tw`text-black font-bold text-3xl text-center mt-5`}>{turf.turf_name}</Text>
                    <Text style={tw`text-black text-center mt-1`}>{turf.location}</Text>
                    <View style={tw`border-b mt-2`}></View>
                    <View style={tw`flex-row justify-evenly mt-4`}>
                        {turf.facilities && turf.facilities.map((facility, index) => (
                            <TouchableOpacity key={index} style={tw`mr-2 p-3 h-11 rounded-3xl bg-[#209920]`}>
                                <Text style={tw`text-white font-bold`}>{facility}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={tw`flex-row justify-evenly mt-7 mb-5`}>
                        <TouchableOpacity style={tw`mr-2 p-3 rounded-xl bg-gray-200 h-30 w-28% justify-center shadow-xl`}>
                            <Text style={tw`text-black text-lg text-center`}>{turf.yourloc}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`mr-2 p-3 rounded-xl bg-gray-200 h-30 w-28% justify-center shadow-xl`}>
                            <Text style={tw`text-black text-2xl text-center`}>${turf.rate_per_hour} </Text>
                            <Text style={tw`text-black text-lg text-center`}>per hour</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={tw`mr-2 rounded-3xl bg-gray-200 h-30 w-28% justify-center shadow-xl`}>
                            <ImageBackground source={require('../assets/map.webp')} style={tw`h-full w-full  justify-center`}>
                                <Text style={tw`text-black text-lg text-center bg-opacity-50`}>See location</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={tw`ml-15 mr-15 mb-5 p-2 bg-gray-100 border rounded-lg`}>
                        <Text style={tw`text-black text-xl text-center`}>Call +91 9856321456</Text>
                    </View>

                    <Pressable style={tw` bg-orange-600 h-14 rounded-3xl pl-3 pr-3 justify-center items-center self-center  mx-5`}
                        onPress={() => { handleSubmit(turf) }}
                    >
                        <Text style={tw`text-white font-bold text-xl `}>Select date and timings</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};
