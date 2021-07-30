import React from 'react';
import {StyleSheet, Text, Image, ImageBackground, View} from 'react-native';

let {bp, vw, vh} = require('react-native-relative-units')(375);


export default function ProfileCard() {
    return (
        <View >
            <ImageBackground source={require('../Assets/Background.jpeg')} imageStyle={{borderRadius: 15}}
                             resizeMode="cover" style={styles.cont}>
                <View style={styles.profileimgcont}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}>
                            <Image style={styles.profileImage} source={require('../Assets/download.png')}/>
                        </View>
                    </View>
                </View>
                <View style={styles.textcont}>
                    <Text style={styles.tex}>فيّ العتيبي</Text>
                </View>
                <View style={styles.bottomimages}>
                    <View style={styles.greenthing}/>
                    <Image style={styles.tokalnalogo} source={require('../Assets/logocard.png')}/>
                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({

    cont: {
        width: 72 * vw,
        height: 25 * vh,
    },
    textcont: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    tex: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2fa595'
    },
    profileimgcont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerCircle: {
        borderRadius: 60,
        width: 80,
        height: 80,
        backgroundColor: '#2fa595',
        marginTop: 2,
    },
    innerCircle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        width: 75,
        height: 75,
        margin: 2.5,
        backgroundColor: '#cbcbcb'
    },
    bottomimages: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tokalnalogo: {
        resizeMode: 'contain',
        width: 20 * vw,
        height: 13 * vh,
        marginRight: 10
    },
    Image: {
        resizeMode: 'contain'
    },
    greenthing: {
        backgroundColor: '#005d26',
        width: 22 * vw,
        height: 3 * vh,
        borderTopRightRadius: 35,
        borderBottomRightRadius: 35
    },
    profileImage: {
        resizeMode: 'contain',
        width: 13 * vw,
        height: 14 * vh,
    }
})