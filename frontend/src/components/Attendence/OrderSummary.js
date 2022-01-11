import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import commonStyles from '../../styles/commonStyles'

export default function OrderSummary({ amount, onSubmit }) {
    return (
        <View>
            <Text style={styles.text}>Legionarios Presentes: {amount}</Text>

            <Button
                title="Salvar"
                type="outline"
                buttonStyle={styles.buttonSend}
                titleStyle={styles.textButton}
                disabledTitleStyle={styles.textButton}
                onPress={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: commonStyles.colors.background,
        justifyContent: 'flex-start',
    },

    text: {
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.small,
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.textColor,
        marginBottom: 15,
        marginTop: 10
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },
    
    buttonSend: {
        marginBottom: 30,
        backgroundColor: commonStyles.colors.primaryColor,
        padding: 5,
        borderRadius: 8,
        margin: 'auto',
        borderWidth: 2,
        borderColor: commonStyles.colors.firstColorLight,
        marginTop: 24,
        width: 132,
        height: 40,
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    },

})