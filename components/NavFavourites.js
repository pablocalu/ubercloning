import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'FYF, Corrientes 2200, Rosario, Santa Fe Province, Argentina'
    },
    {
        id: '456',
        icon: 'home',
        location: 'Mom House',
        destination: 'Pellegrini 3200, Rosario'
    }, 
    {
        id: '45326',
        icon: 'home',
        location: 'Dad House',
        destination: 'Paraguay 1220, Rosario'
    }, 
    {
        id: '444356',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Cochabamba 1500, Rosario'
    }, 
]

const NavFavourites = () => {

    const dispatch = useDispatch()

    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={()=> (
            <View
                style={[tw`bg-gray-200`, { height: 0.5 }]}
            />
        )}
        renderItem={({item: { location, destination, icon}}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5 `}
/*             onPress={() => {
                //console.log('esto es la data', data, 'esto es details', details)
                dispatch(setOrigin({
                  location: data.location
                }))
                dispatch(setDestination(null))
              } } */
            >
                <Icon
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color={'white'}
                    size={18}
                />
                <View>
                    <Text style={tw`font-semibold text-lg`}>
                        {location}
                    </Text>
                    <Text style={tw`text-gray-500`}>
                        {destination}
                    </Text>
                </View>
            </TouchableOpacity>
        )}    
        />
    );
}

const styles = StyleSheet.create({})

export default NavFavourites;
