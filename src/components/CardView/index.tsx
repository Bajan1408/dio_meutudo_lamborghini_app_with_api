import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import Divider from '../Divider';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import BuyButton from '../BuyButton';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './actions';

export default function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCarData);
            console.log('carData', carData);
        })();
    }, [])

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
            <Text style={styles.carModel}>{carData?.carName}</Text>
        </View>
    )

    const renderCarImage = () => (
        <Image style={styles.carImage} source={{uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`}} />
    )

    const renderPriceControls = () => (
        <View style={styles.priceControl}>
            <Button title='<' color={'#01A6B3'} onPress={() => { handlePreviousItem(carData, setCarData) }} />
            <Text style={{color: '#fff', fontSize: 20, fontWeight: 400}}>{carData?.price}</Text>
            <Button title='>' color={'#01A6B3'} onPress={() => { handleNextItem(carData, setCarData) }} />
        </View>
    )

    return (
        <View style={styles.imageContainer}>
            { renderLogoBox() }
            <Divider />
            { renderCarDetails() }
            { renderCarImage() }

            <Divider />
            <BuyButton />
            { renderPriceControls() }
        </View>
    )
}