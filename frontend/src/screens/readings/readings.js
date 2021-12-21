import React from "react";
import { View, StyleSheet, Linking, Platform } from 'react-native'
import { ListItem } from 'react-native-elements'
import commonStyles from '../../styles/commonStyles'
import { useNavigation } from '@react-navigation/native';

const Readings = () => {

    const navigation = useNavigation();

    const list = [
        {
            title: 'Manual da Legião',
            onPress: (() => {
                Linking.openURL('https://drive.google.com/file/d/164KwtPC5Iv2X4gCyYDE_mpel9Bp7ZAnh/view?usp=sharing');
            })
        },
        {
            title: 'Tratado da Verdadeira Devoção segundo São Luis',
            onPress: (() => {
                Linking.openURL('https://drive.google.com/file/d/14-KoTpszV6zKsrcwiKengzY6Trn2FQnx/view?usp=sharing');
            })
        },
        {
            title: 'Ordem da Reunião',
            onPress: (() => {
                navigation.navigate('OrderR');
            })
        },
        {
            title: 'Instruções Permanente',
            onPress: (() => {
                navigation.navigate('Instructions');
            })
        },
    ];

    return ( 
        <View style={styles.container}>
            {list.map((item, i) => {
                return (
                    <ListItem key={i} bottomDivider onPress={item.onPress}>
                        <ListItem.Content style={styles.option}>
                            <ListItem.Title style={styles.title}>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                )
            })}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform === 'ios' ? 30 : 30,
    },
    title: {
        fontSize: commonStyles.fontSize.normal,
        fontFamily: commonStyles.fontFamily.WorkSans,
        color: commonStyles.colors.titleColor,
    },
    option: {
        backgroundColor: "#FFF",
        borderRadius: 10,
    },  
})

export default Readings;
