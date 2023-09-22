import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import Button from "./components/Button";


function Welcome({ navigation }) {

    function goToMemberSign() {
        navigation.navigate('MemberSign')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Bandıl Fitness Salonu</Text>
            <Button text='Üye Kaydı Oluştur' onPress={goToMemberSign} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        color: 'black',
    }
})

export default Welcome;