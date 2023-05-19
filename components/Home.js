import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, Button } from "react-native"
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ( {navigation} ) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
             <Text style={styles.head}>Lift Tracker</Text>
             <Image
              style={styles.iroh}
              source={require('../assets/iroh.png')}
               />

               <Button
               style={styles.buttons}
                title="Log"
                onPress={() => {navigation.navigate('Log')}}
               />

                <Button
                title="Stats"
                onPress={() => {navigation.navigate('Stats')}}
               />

         </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    head: {
        color: 'red',
        marginTop: 20
    },
    iroh: {
        marginTop: 20,
        height: 480,
        width: 440,
    },
    buttons: {
       marginTop: 10

    }
})

export default Home;