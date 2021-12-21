import React, { useState } from "react";
import { View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';

const DataBase = () => {

    const navigation = useNavigation();

    const [expanded, setExpanded] = useState(false);
    const handlePress = () => setExpanded(!expanded);

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion
                    title="Ata"
                    titleStyle={styles.title}
                    style={styles.option}
                    left={(() => <Icon name={"create-outline"} size={20} color={commonStyles.colors.primaryHoverColor} />)}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    <List.Item title="Criar" 
                        onPress={(() => {
                            navigation.navigate('CreateAta')
                        })}
                        titleStyle={styles.subtitle}
                    />
                    <List.Item title="Buscar" titleStyle={styles.subtitle} />
                </List.Accordion>

            </List.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform === 'ios' ? 30 : 30,
    },
    option: {
        backgroundColor: "#FFF",
        borderRadius: 10,
    },  
    title: {
        fontSize: commonStyles.fontSize.medium,
        fontFamily: commonStyles.fontFamily.WorkSans,
        color: commonStyles.colors.titleColor,
        fontWeight: '500'
    },
    subtitle: {
        fontSize: commonStyles.fontSize.normal,
        fontFamily: commonStyles.fontFamily.WorkSans,
        color: commonStyles.colors.textColor,
        fontWeight: '300'
    }
})

export default DataBase;
