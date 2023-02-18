import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const SearchDriver = () => {

    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState('')

    useEffect(()=> {
        setTimeout(()=> {
            setLoadingMessage('Assigning a Driver')
        }, 9000)
        setTimeout(()=> {
            setLoadingMessage('Looking for a Driver nearby')
        }, 6000)
        setTimeout(()=> {
            setLoadingMessage('Looking for the one that fits your needs')
        }, 4000)
        setTimeout(()=> {
            setLoadingMessage('Looking for available Drivers')
        }, 2000)
        setTimeout(()=> {
            setLoading(false)
        }, 10000)
    }, [loading])

    


        return (

        <SafeAreaView style={tw`bg-white flex-1`}>
            {   
            loading ?
            <View>
                <Text style={tw`text-center py-4 text-xl font-semibold border-b border-gray-200`}>
                    We are looking for a Driver
                </Text>
                <ActivityIndicator style={tw`pt-16`} size={'large'} color='black'/>
                <Text style={tw`text-center text-xl pt-8`}>{loadingMessage}</Text>
            </View> : 
            <View>
                <Text style={tw`text-center py-4 text-xl font-semibold border-b border-gray-200`}>
                    Driver Assigned
                </Text>
                <View
                        style={tw`flex-row items-center justify-between px-10 pt-2`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png"}}
                        />
                        <View style={tw`-ml-6 pl-2 pr-2`}>
                            <Text style={tw`text-xl font-semibold`}>
                                Pablo Carro
                            </Text>
                            <View style={tw`flex-row`}>
                            <Icon name='star' type='ionicon' size={14}/>
                            <Icon name='star' type='ionicon' size={14}/>
                            <Icon name='star' type='ionicon' size={14}/>
                            <Icon name='star' type='ionicon' size={14}/>
                            <Icon name='star-half' type='ionicon' size={14}/>
                            </View>
                        </View>
                    </View>
                    <View
                        style={tw`flex-row items-center justify-between px-10`}
                    >
                        <Image
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain'
                            }}
                            source={{uri: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"}}
                        />
                        <View style={tw`-ml-6 pl-2 pr-2`}>
                            <Text style={tw`text-xl font-semibold`}>
                                Fiat 600
                            </Text>
                            <Text>
                                Plate. 4A7XK87V 
                            </Text>
                        </View>
                    </View>
            <View style={tw`flex-row bg-white justify-evenly py-6 mt-auto border-t border-gray-100`}>
                <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon name='chatbubble-ellipses-outline' type='ionicon' color={'white'} size={16}/>
                    <Text style={tw`text-white text-center`}>
                        Chat
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                    onPress={()=> navigation.navigate('InfoCard')}
                >
                    <Icon name='information-circle-outline' type='ionicon' color={'white'} size={18}/>
                    <Text style={tw`text-center text-white`}>
                        Info
                    </Text>
                </TouchableOpacity>
            </View>
            </View>
            }

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default SearchDriver;
