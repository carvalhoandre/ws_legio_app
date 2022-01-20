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

    const [expandedUser, setExpandedUser] = useState(false);
    const handlePressUser = () => setExpandedUser(!expandedUser);

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Accordion
                    title="Ata"
                    titleStyle={styles.title}
                    style={styles.option}
                    left={(() => <Icon name={"create-outline"} size={25} color={commonStyles.colors.primaryColor} />)}
                    expanded={expanded}
                    onPress={handlePress}
                >
                    <List.Item title="Criar"
                        onPress={(() => {
                            navigation.navigate('AtaCreate')
                        })}
                        titleStyle={styles.subtitle}
                        style={styles.optionList}
                    />
                    <List.Item title="Buscar" titleStyle={styles.subtitle}
                        onPress={(() => {
                            navigation.navigate('AtaSearch')
                        })}
                        titleStyle={styles.subtitle}
                        style={styles.optionList}
                    />
                </List.Accordion>

                <List.Accordion
                    title="Legionários"
                    titleStyle={styles.title}
                    style={styles.option}
                    left={(() => <Icon name={"people-outline"} size={25} color={commonStyles.colors.primaryColor} />)}
                    expanded={expandedUser}
                    onPress={handlePressUser}
                >
                    <List.Item title="Adicionar novo membro"
                        onPress={(() => {
                            navigation.navigate('CreateLegio')
                        })}
                        titleStyle={styles.subtitle}
                        style={styles.optionList}
                    />
                    <List.Item
                        title="Buscar"
                        titleStyle={styles.subtitle}
                        style={styles.optionList}
                        onPress={(() => {
                            navigation.navigate('FoundAllLegios')
                        })}
                    />
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
        backgroundColor: commonStyles.colors.containerColor,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        elevation: 1,
    },
    optionList: {
        backgroundColor: "#F0F0F0",
        borderWidth: 1,
        borderColor: '#E5E5E5',
        shadowColor: '#a7b0c0',
        shadowOffset: { width: 1, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 1,
    },
    title: {
        fontSize: commonStyles.fontSize.small,
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
    },
    subtitle: {
        fontSize: commonStyles.fontSize.small,
        fontFamily: commonStyles.fontFamily.text,
        color: commonStyles.colors.textColor,
    }
})

export default DataBase;
