import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Date_and_time({route}) {
  const dates = ['19 Jun', '20 Jun', '21 Jun', '22 Jun', '23 Jun'];
  const hours = [1, 2, 3, 4];
  const times = ['1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm'];
  const {turf} = route.params;
  
  const [selectedDate, setSelectedDate] = useState('20 Jun');
  const [selectedHour, setSelectedHour] = useState(1);
  const [selectedTime, setSelectedTime] = useState('3:00 pm');

  return (
    <View>
      <ImageBackground source={turf.image} style={{width: '100%', height: 250}}>
        <View style={tw`border border-black h-150 mt-60 rounded-2xl bg-white `}>
          <Text style={tw`text-black font-bold text-2xl text-center mt-5`}>
            {turf.turf_name}
          </Text>
          <Text style={tw`text-black text-center mt-1`}>{turf.location}</Text>
          <View style={tw`flex-row justify-evenly mt-4 `}>
            {turf.facilities &&
              turf.facilities.map((facility, index) => (
                <TouchableOpacity
                  key={index}
                  style={tw`mr-2 p-3 h-11 rounded-3xl bg-[#209920] `}>
                  <Text style={tw`text-white font-bold `}>{facility}</Text>
                </TouchableOpacity>
              ))}
          </View>

          <View style={tw`mt-4`}>
            <Text style={tw`font-bold text-black text-2xl ml-5`}>
              Select Date:
            </Text>
            <View style={tw`flex-row mt-2`}>
              <FontAwesome5 name="chevron-left" size={16} color="black" />
              {dates.map(date => (
                <TouchableOpacity
                  key={date}
                  style={tw`mx-1 px-2 py-1 rounded ${
                    selectedDate === date ? 'bg-orange-200' : 'bg-white'
                  }`}
                  onPress={() => setSelectedDate(date)}>
                  <Text
                    style={tw`${
                      selectedDate === date ? 'text-orange-600' : 'text-black'
                    }`}>
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
              <FontAwesome5 name="chevron-right" size={16} color="black" />
            </View>
          </View>
          <View style={tw`mt-4`}>
            <Text style={tw`font-bold text-black text-2xl ml-5`}>
              Number of Hours:
            </Text>
            <View style={tw`flex-row mt-2 justify-evenly`}>
              {hours.map(hour => (
                <TouchableOpacity
                  key={hour}
                  style={tw`mx-1 px-3 py-1 rounded ${
                    selectedHour === hour ? 'bg-orange-200' : 'bg-white'
                  }`}
                  onPress={() => setSelectedHour(hour)}>
                  <Text
                    style={tw`${
                      selectedHour === hour ? 'text-orange-600' : 'text-black'
                    }`}>
                    {hour}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={tw`mt-4`}>
            <Text style={tw`font-bold text-black text-2xl ml-5`}>
              Select Timings:
            </Text>
            <View style={tw`flex-row mt-2`}>
              <FontAwesome5 name="chevron-left" size={16} color="black" />
              {times.map(time => (
                <TouchableOpacity
                  key={time}
                  style={tw`mx-1 px-3 py-1 rounded ${
                    selectedTime === time ? 'bg-orange-200' : 'bg-white'
                  }`}
                  onPress={() => setSelectedTime(time)}>
                  <Text
                    style={tw`${
                      selectedTime === time ? 'text-orange-600' : 'text-black'
                    }`}>
                    {time}
                  </Text>
                </TouchableOpacity>
              ))}
              <FontAwesome5 name="chevron-right" size={16} color="black" />
            </View>
          </View>
          <TouchableOpacity
            style={tw`flex-row items-center bg-orange-600 py-2 px-5 rounded-full mt-5 self-center`}>
            <Text style={tw`text-white text-lg mr-2`}>Payment</Text>
            <FontAwesome5 name="arrow-right" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    maxHeight: 74,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    paddingVertical: 6,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
  },
  itemRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: -4,
  },
  itemWeekday: {
    fontSize: 13,
    fontWeight: '500',
    color: '#737373',
    marginBottom: 4,
  },
  itemDate: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },
});
