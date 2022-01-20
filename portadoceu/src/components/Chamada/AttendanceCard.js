import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default class AttendanceCard extends Component {
    constructor(props) {
        super(props)
        this.attendance = props.attendance
        this.deleteForId = props.deleteForId
        this.state = {
            id: this.attendance.id,
            attendance: this.attendance.attendance,
            legio: this.attendance.legio.name
        }
    }

    render() {
        return (
                <View style={styles.container}>
                    <Text style={styles.title}>
                        {this.state.legio}: {this.state.attendance}
                    </Text>

                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonCancel}
                        titleStyle={styles.textButton}
                        onPress={() => { this.deleteForId(this.state.id) }}
                        icon={
                            <Icon name={"trash"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({

    title: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.small
    },

    container: {
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: commonStyles.colors.containerColor,
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

    buttonCancel: {
        backgroundColor: commonStyles.colors.primaryHoverColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    }
})