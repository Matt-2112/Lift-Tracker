import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button, Pressable } from "react-native"

import PrevLog from "./PrevLog";



const Log = ({navigation}) => {
    return(
        <SafeAreaView>
         <View style={styles.container}>
            <Text>This is the log page.</Text>

            <View>
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.navigate('NewLog')}

                >
                    <Image 
                        style={styles.plusSign}
                        source={require('../assets/plus.png')}
                    />
                    <Text style={styles.buttonText}>New Workout</Text>
                </Pressable>


            </View>

            <PrevLog></PrevLog>
            <PrevLog/>
            
         </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    pressable: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        padding: 20,
        width: 400,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'row'
    },
    plusSign: {
        height: 20,
        width: 20
    },
    buttonText: {
        marginLeft: 120
    }
});

export default Log