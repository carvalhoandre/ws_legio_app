import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import commonStyles from '../../styles/commonStyles'
import Icon from 'react-native-vector-icons/Ionicons';

export default function OrderSummary({ amount, onSubmit }) {
    return (
        <View>
            <Text style={styles.text}>Legionarios Presentes: {amount}</Text>

            <Button
                onPress={onSubmit}
                title={"Salvar"}
                buttonStyle={styles.buttonSend}
                titleStyle={styles.buttonTextSend}
                icon={
                    <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                }
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
        backgroundColor: commonStyles.colors.firstColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    buttonTextSend: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.containerColor,
        marginLeft: 10
    },

})