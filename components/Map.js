import React, { useEffect, useRef } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from '@env'

const Map = () => {

    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(!origin || !destination) return;
        
        //zoom
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
            edgePadding: { top: 40, right: 40, bottom: 40, left: 40 }
        })
    }, [origin, destination])

    useEffect(()=> {
        if(!origin || !destination) return;

        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)             
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
        }
        
        getTravelTime()
    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <MapView
            ref={mapRef}
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
            {destination?.location && (
                <Marker
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng
                    }}
                    title={'Destination'}
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>
    );
}

const styles = StyleSheet.create({})

export default Map;
