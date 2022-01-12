import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default function LegioCard({ legio, onSelectLegio, isSelected }) {
    return (
        legio.type === "ATIVO" ?
            <View style={styles.container}>
                <Button
                    onPress={(() => {
                        onSelectLegio(legio)
                    })}
                    contentStyle={styles.buttons}
                >
                    {isSelected ?
                        <Icon name={"checkmark"} size={30} color={commonStyles.colors.primaryColor}/>
                        :
                        <Icon name={"close"} size={30} color={commonStyles.colors.primaryColor}/>
                    }
                </Button>
                <Text style={styles.name}>{legio.name}</Text>
            </View>
            :
            null
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: commonStyles.colors.containerColor,
        justifyContent: 'flex-start',
    },

    name: {
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.normal,
        fontFamily: commonStyles.fontFamily.text,
        color: commonStyles.colors.textColor,
    },
    text: {
        color: '#FFF',
        fontSize: 18,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 5
    },
})