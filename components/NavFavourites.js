import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'FYF, Corrientes 2200, Rosario, Santa Fe Province, Argentina'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Pellegrini 3000, Rosario'
    }
]

const NavFavourites = () => {
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
            <TouchableOpacity style={tw`flex-row items-center p-5 `}>
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
