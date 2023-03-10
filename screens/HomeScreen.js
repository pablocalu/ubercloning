import React from 'react'
import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'

export default function HomeScreen() {

  const dispatch = useDispatch()
  
  return (
    <SafeAreaView style={tw`bg-white h-full flex-1`}>
      <View style={tw`p-5 flex-shrink`}>
        <Image
            style={{ width: 100, height: 100, resizeMode: 'contain'}}
            source={{
                uri: 'https://links.papareact.com/gzs'
            }}
        />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 }}}
          placeholder='Where from?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          fetchDetails={true}
          enablePoweredByContainer={false}
          returnKeyType={'search'}
          minLength={2}
          onPress={(data, details = null) => {
            //console.log('esto es la data', data, 'esto es details', details)
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null))
          } }
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
            components: 'country:ar'
          }}
        />
        <NavOptions />
        <Text style={tw`text-center py-0 text-xl font-semibold border-b border-gray-200`}>
          Recent places
        </Text>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
