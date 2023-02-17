import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, FlatList, Image} from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SURGE_CHARGE_RATE = 1.5

const data = [
    {
        image: 'https://cdn-icons-png.flaticon.com/512/154/154874.png',
        service: 'Spotify',
        id: 2
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1446/1446038.png',
        service: 'Free Drinks',
        id: 6
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/512/1/1443.png',
        service: 'PlayStation 5',
        id: 5
    },
    {        
        image: 'https://cdn-icons-png.flaticon.com/512/5218/5218630.png',
        service: 'TV',
        id: 7
    },
    {        
        image: 'https://cdn-icons-png.flaticon.com/512/5099/5099477.png',
        service: 'Pet Friendly',
        id: 4
    }
]

const InfoCard = () => {
    
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
                <Text style={tw`text-center py-1 text-xl font-semibold border-b border-gray-200`}>
                    Travel Info
                </Text>
                <Text style={tw`text-center py-1 text-xl`}>
                    Distance - {travelTimeInformation?.distance.text}
                </Text>
                <Text style={tw`text-center py-1 text-xl`}>
                    Price - {    
                                new Intl.NumberFormat('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS'
                                }).format(
                                    ((travelTimeInformation?.distance.value * SURGE_CHARGE_RATE * 1 ) / 10) + 300
                                )
                            }
                </Text>
                <Text style={tw`text-center py-1 text-xl`}>
                    Duration - {travelTimeInformation?.duration.text}
                </Text>
                <Text style={tw`text-center py-0 text-xl font-semibold border-b border-t border-gray-200`}>
                    Services your Driver has
                </Text>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                <TouchableOpacity
                    style={tw`p-2 pl-6 pb-8 pt-0 bg-white m-2 w-40`}
                >
                    <View >
                    <Text style={tw`mt-2 text-lg font-semibold pb-2`}>{item.service}</Text>
                        <Image
                            style={{width: 100, height: 100, resizeMode: 'contain'}}
                            source={{uri: item.image}}
                        />
                    </View>
                </TouchableOpacity>
            )}
        />


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default InfoCard;
