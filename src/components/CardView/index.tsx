import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../contants/car';
import BuyButton from '../BuyButton';

export default function CardView() {

    const renderLogoBox = () => {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.imageLogo} source={ logo } />
            </View>
        )
    }

    //Na função abaixo estou utilizando outra técnica permitida nesse caso, que é a de não precisar passar as chaves na função, mesmo com um retorno de mais de uma linha.. Basta passar os parênteses...
    const renderCarDetails = () => (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carModel}>Model</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image style={styles.carImage} source={{uri: `${CAR_ASSETS_BASE_URL}1.png`}} />
    )

    return (
        <View style={styles.imageContainer}>
            { renderLogoBox() }
            <Divider />
            { renderCarDetails() }
            { renderCarImage() }

            <Divider />
            <BuyButton />
        </View>
    )
}