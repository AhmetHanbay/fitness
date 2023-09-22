import React, { useState } from 'react';
import { SafeAreaView, Alert,StyleSheet } from 'react-native';

import Input from './components/Input'
import Button from './components/Button';
import MemberResult from './MemberResult';

function MemberSign({navigation}) {
    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit() {
        if (
            !userName || !userSurname || !userAge || !userMail || !userHometown) {
            Alert.alert('Bandıl Fitness Salonu', 'Boş Alan Bırakılamaz');
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        };

        navigation.navigate('MemberResult', {user});
    }
    return (
        <SafeAreaView>
            <Input
                label="Üye Adı"
                placeholder="Üyenin ismini giriniz..."
                onChangeText={setUserName}
            />
            <Input
                label="Üye Soyadı"
                placeholder="Üyenin soyismini giriniz..."
                onChangeText={setUserSurname}
            />
            <Input
                label="Üye Yaşı"
                placeholder="Üye yaşını giriniz..."
                onChangeText={setUserAge}
            />
            <Input
                label="Üye E-posta"
                placeholder="Üyenin e-posta adresini giriniz..."
                onChangeText={setUserMail}
            />
            <Input
                label="Üye Memleketi"
                placeholder="Üye memleketini giriniz..."
                onChangeText={setUserHometown}
            />
            <Button
                text="Kaydı Tamamla" onPress={handleSubmit}
            />
        </SafeAreaView>
    );
}

export default MemberSign;