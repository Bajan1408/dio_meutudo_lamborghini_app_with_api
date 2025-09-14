import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#01A6B3',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        alignSelf: 'center',
        borderRadius: 5
    }, 
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }, 
    buttonText: {
        fontSize: 20,
        fontWeight: 600
    }
})