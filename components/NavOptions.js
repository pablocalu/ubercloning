import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id: '123',
        title: 'Get a Ride',
        image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
        screen: 'MapScreen'
    },
    {
        id: '456',
        title: 'Shipping',
        image: 'https://blog.uber-cdn.com/wp-content/uploads/2020/04/Cardboard-Box_v02.png',
        screen: 'ShippingScreen'
    }
]

const NavOptions = () => {

    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            horizontal
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin  && 'opacity-20'}`}>
                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain'}}
                            source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mb-16 mt-2`}
                            name='arrowright'
                            color={'white'}
                            type='antdesign'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({})

export default NavOptions;
