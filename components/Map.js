import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)

    return (
        <MapView
            style={tw`flex-1`}
            mapType='mutedStandard' //quit unnecesary info
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05
            }}  
        >

            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor='black'
                />
            )}
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng
                    }}
                    title={'Origin'}
                    description={origin.description}
                    identifier='origin'
                />
            )}
        </MapView>
    );
}

const styles = StyleSheet.create({})

export default Map;
