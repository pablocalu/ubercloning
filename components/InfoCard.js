import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectTravelTimeInformation } from '../slices/navSlice';

const SURGE_CHARGE_RATE = 1.5

const InfoCard = () => {
    
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
                <Text style={tw`text-center py-5 text-xl`}>
                    Travel Info
                </Text>
                <Text style={tw`text-center py-5 text-xl`}>
                    Distance - {travelTimeInformation?.distance.text}
                </Text>
                <Text style={tw`text-center py-5 text-xl`}>
                    Price -                             {
                                
                                new Intl.NumberFormat('es-AR', {
                                    style: 'currency',
                                    currency: 'ARS'
                                }).format(
                                    ((travelTimeInformation?.distance.value * SURGE_CHARGE_RATE * 1 ) / 10) + 300
                                )
                            }
                </Text>
                <Text>
                             Duration   {travelTimeInformation?.duration.text}
                            </Text>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default InfoCard;
