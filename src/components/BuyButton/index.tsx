import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function BuyButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
            <AntDesign name="shopping-cart" size={24} color="white" />
                <Text style={styles.buttonText}>Buy this car</Text>
            </TouchableOpacity>
        </View>
    )
}