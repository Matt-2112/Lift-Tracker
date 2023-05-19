import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button, Pressable } from "react-native"

const onPress = async () => {
    await fetch('http://47.229.203.172:3000/api/history')
};

const PrevLog = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Pressable onPress={onPress}>
                <Text>This is the date of your workout!</Text>
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