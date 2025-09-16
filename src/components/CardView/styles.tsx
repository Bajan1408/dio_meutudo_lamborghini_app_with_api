import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '30%',
    },
    imageLogo: {
        flex: 1,
        width: '65%',
        resizeMode: 'contain',
    },
    carBrand: {
        color: '#fff',
        fontWeight: 400,
        fontSize: 18, 
        fontStyle: 'italic'
    },
    carModel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    carImage: {
        flex: 1,
        marginBottom: 10,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    priceControl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 20,
        marginTop: 10
    }
})