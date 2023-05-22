import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button, Pressable } from "react-native"

const onPress = async () => {
    await fetch('https://cyan-wandering-tortoise.cyclic.app/api/history')
};


//use effect, grab last 7 workouts to display (order by + limit sql query)

const PrevLog = (props, { navigation } ) => {

    return(
        <View style = {styles.container}>
            <Pressable onPress={onPress}>
                <Text>This is the date of your workout! {props.info.date}</Text>
            </Pressable>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        padding: 20,
        width: 400,
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'row'
    }
});

export default PrevLog;