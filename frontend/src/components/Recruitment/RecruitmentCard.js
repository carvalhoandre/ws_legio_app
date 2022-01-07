import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default function RecruitmentCard({ recruitment, deleteForId }) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{recruitment.person}</Text>
            <Text style={styles.name}>Quantidade: {recruitment.quantity}</Text>
            <Text style={styles.name}>Comparecimentos: {recruitment.attendancing}</Text>
            <Button
                onPress={(() => {
                    deleteForId(recruitment.id)
                })}
                contentStyle={styles.buttons}
            >
                <Icon name={"checkmark"} size={30} color={commonStyles.colors.primaryHoverColor} />
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
    },

    name: {
        color: commonStyles.colors.textColor,
        fontSize: 18,
    },
    text: {
        color: '#FFF',
        fontSize: 18,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})