import {useState} from "react";
import { View, StyleSheet, Linking } from 'react-native'
import { ListItem } from 'react-native-elements'
import commonStyles from '../../styles/commonStyles'
import { useNavigation } from '@react-navigation/native';

const DataBase = () => {

    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    const options = [
        {
            title: 'Legionários',
            onPress: (() => {
                Linking.openURL('https://drive.google.com/file/d/164KwtPC5Iv2X4gCyYDE_mpel9Bp7ZAnh/view?usp=sharing');
            })
        },
        {
            title: 'Ata',
            onPress: (() => {
                Linking.openURL('https://drive.google.com/file/d/14-KoTpszV6zKsrcwiKengzY6Trn2FQnx/view?usp=sharing');
            })
        },
        {
            title: 'Tesouraria',
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

    const list = [
        {
            title: 'Adicionar',
            onPress: (() => {
                navigation.navigate('Gloriosos');
            }),
        },
        {
            title: 'Consultar',
            onPress: (() => {
                navigation.navigate('Gozosos');
            }),
        },
        {
            title: 'Atualizar',
            onPress: (() => {
                navigation.navigate('Dolorosos');
            }),
        },
    ];

    return ( 
        <View style={styles.container}>
            {options.map((item, i) => {
                return (
                    <ListItem key={i} bottomDivider onPress={item.onPress}>
                        <ListItem.Content>
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
        marginTop: 50,
        backgroundColor: "#FFF"
    },
    title: {
        fontSize: commonStyles.fontSize.normal,
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.titleColor,

    }
})

export default DataBase;
