import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from 'react-native'
import commonStyles from '../styles/commonStyles'
import { formatGetMonth } from '../utils/format'
import { getBirthdayMonth } from '../service/api'

export default function Home() {
    const [legios, setLegios] = useState([])
    const [sucess, setsucess] = useState(true)

    useEffect(() => {
        let data = formatGetMonth(new Date())

        getBirthdayMonth(data)
            .then((response) => {
                setLegios(response.data)
                setsucess(true)
            })
            .catch(() => {
                setsucess(false)
            })
    }, [])

    const list = []

    legios.forEach((element) => {
        list.push(
            <View key={element.id} style={styles.birthday}>
                <Text style={styles.name}>{element.name}</Text>
                <Text style={styles.date}>{element.birthday}</Text>
            </View>
        )
    })

    return (
        <View style={styles.main}>
            <Text style={styles.vibes}>Porta do Céu</Text>
            <Text style={styles.josefin}>Salve Maria!</Text>

            <View style={styles.container}>
                {sucess === true & list.length >= 1 ?
                    <>
                        <Text style={styles.titleContainer}>Aniversariantes do mês:</Text>
                        <View style={styles.show}>
                            <View style={styles.containerImage}>
                                <Image source={require('../../assets/icons/fest.png')} style={styles.fest} />
                            </View>
                            <View style={styles.containerNames}>
                                {list}
                            </View>
                        </View>
                    </>
                    :
                    <Image source={require('../../assets/icons/fest.png')} style={styles.fest} />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    vibes: {
        fontFamily: commonStyles.fontFamily.vibes,
        color: commonStyles.colors.primaryColor,
        fontSize: 60,
        textAlign: 'center',
    },

    josefin: {
        fontFamily: commonStyles.fontFamily.josefin,
        color: commonStyles.colors.primaryColor,
        fontSize: commonStyles.fontSize.normal,
        textAlign: 'center',
        marginBottom: 20
    },

    container: {
        paddingBottom: 20,
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E5E5E5',
        shadowColor: '#a7b0c0',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 1,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 24,
    },

    show: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-around',
        width: "100%",
    },

    containerNames: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    image: {
        height: 400,
        width: 400
    },

    main: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50
    },

    fest: {
        height: 150,
        width: 160,
    },

    titleContainer: {
        color: commonStyles.colors.titleColor,
        textAlign: 'center',
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.medium,
        marginBottom: 20
    },

    name: {
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.textColor
    },

    birthday: {
        marginBottom: 20,
    },

    date: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.textColor,
    },
})
