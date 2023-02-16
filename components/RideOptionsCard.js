import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3p'
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    }
]


const RideOptionsCard = () => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 p-3 rounded-full`}
                    onPress={()=> navigation.navigate('NavigateCard')}
                >
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>
                    Select a Ride
                </Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem={({ item: { image, id, multiplier, title} }) => (
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{uri: image}}
                        />
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default RideOptionsCard;
