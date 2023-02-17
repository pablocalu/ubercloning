import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';
import 'intl';
import 'intl/locale-data/jsonp/es-AR';

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png'
    },
]

const SURGE_CHARGE_RATE = 1.5


const RideOptionsCard = () => {

    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}
                    onPress={()=> navigation.navigate('NavigateCard')}
                >
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl font-semibold  border-b border-gray-200`}>
                    Select a Ride - {travelTimeInformation?.distance.text}
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem={({ item: { image, id, multiplier, title}, item }) => (
                    <TouchableOpacity 
                        onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{uri: image}}
                        />
                        <View style={tw`-ml-6 pl-2 pr-2`}>
                            <Text style={tw`text-xl font-semibold`}>
                                {title}
                            </Text>
                            <Text>
                                {travelTimeInformation?.duration.text}
                            </Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {
                                
                                new Intl.NumberFormat('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS'
                                }).format(
                                    ((travelTimeInformation?.distance.value * SURGE_CHARGE_RATE * multiplier ) / 10) + 300
                                )
                            }
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
                    onPress={()=> navigation.navigate('SearchDriver')}
                >
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default RideOptionsCard;
