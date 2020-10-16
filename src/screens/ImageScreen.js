import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
            imageScore={9}
            imageSource={require('../../assets/forest.jpg')}
            title='Forest' />
            <ImageDetail 
            imageScore={7}
            imageSource={require('../../assets/beach.jpg')}
            title='Beach' />
            <ImageDetail 
            imageScore={4}
            imageSource={require('../../assets/mountain.jpg')}
            title='Mountain' />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;