import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';

const SearchDriver = () => {

    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setTimeout(()=> {
            setLoading(false)
        }, 3000)
    }, [loading])


    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            {   
            loading ?
            <View>
                <Text style={tw`text-center py-5 text-xl`}>
                    Looking for a nearby Driver
                </Text>
                <ActivityIndicator size={'large'} color='black'/>
            </View> : 
            <View>
                <Text style={tw`text-center py-5 text-xl`}>
                    Driver Found
                </Text>
                <View
                        style={tw`flex-row items-center justify-between px-10`}
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
                            <Text>
                                4.8/5 Stars
                            </Text>
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
                    <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon name='chatbubble-ellipses-outline' type='ionicon' color={'white'} size={16}/>
                    <Text style={tw`text-white text-center`}>
                        Chat
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='call-outline' type='ionicon' color={'black'} size={16}/>
                    <Text style={tw`text-center`}>
                        Call
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
