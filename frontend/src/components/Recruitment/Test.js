import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { Picker } from '@react-native-picker/picker'
import { TextInput } from 'react-native-paper';

export default class Test extends Component {
    constructor(props){
        super(props)
        this.alter = props.alter
        this.newRecruitment = props.newRecruitment
        this.state = {
            id: props.recruitment.id,
            date: props.recruitment.date,
            quantity: props.recruitment.quantity,
            person: props.recruitment.person,
            attendancing: props.recruitment.attendancing
        }
    }

    render() {
        return (
            < View style={styles.container} >
                <Picker
                    selectedValue={this.state.person}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ person: itemValue })}
                >
                    <Picker.Item label="Criança" value={0} style={styles.textOption} />
                    <Picker.Item label="Adolescente" value={1} style={styles.textOption} />
                    <Picker.Item label="Jovem" value={2} style={styles.textOption} />
                    <Picker.Item label="Adulto" value={3} style={styles.textOption} />
                    <Picker.Item label="Idoso" value={4} style={styles.textOption} />
                </Picker>

                <Text>ç{this.state.quantity}</Text>
                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade"
                    value={`${this.state.quantity}`}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={quantity => this.setState({ quantity })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Comparecimentos"
                    value={`${this.state.attendancing}`}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={attendancing => this.setState({ attendancing })}
                />

                <View style={styles.containerButton}>
                    <Button
                        onPress={(() => {
                            newRecruitment(this.newRecruitment)
                        })}
                        contentStyle={styles.buttons}
                    >
                        <Icon name={"paper-plane-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
                    </Button>
                    <Button
                        onPress={this.alter}
                        contentStyle={styles.buttons}
                    >
                        <Icon name={"pencil"} size={30} color={commonStyles.colors.primaryHoverColor} />
                    </Button>
                </View>
            </View >
        )
    }
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
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.WorkSans,
        backgroundColor: 'transparent'
    },
})