import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { Picker } from '@react-native-picker/picker'

export default class RecruitmentCard extends Component {
    constructor(props) {
        super(props)
        this.recruitment = props.recruitment
        this.deleteForId = props.deleteForId
        this.newRecruitment = props.newRecruitment
        this.state = {
            id: this.recruitment.id,
            date: this.recruitment.date,
            quantity: this.recruitment.quantity,
            person: this.recruitment.person,
            attendancing: this.recruitment.attendancing,
            edit: false
        }
    }

    render() {
        return (
            this.state.edit === true ?
                <View style={styles.container}>
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
                    <TextInput
                        style={styles.input}
                        value={this.state.quantity.toString()}
                        onChangeText={quantity => this.setState({ quantity })}
                        placeholder="Quantidade"
                        keyboardType="numeric"
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Comparecimentos"
                        value={this.state.quantity.toString()}
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
                        value={this.state.attendancing.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={attendancing => this.setState({ attendancing })}
                    />

                    <View style={styles.containerButton}>
                        <Button
                            onPress={(() => {
                                this.newRecruitment(this.state)
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            })}
                            contentStyle={styles.buttons}
                        >
                            <Icon name={"paper-plane-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
                        </Button>
                        <Button
                            onPress={(() => {
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            })}
                            contentStyle={styles.buttons}
                        >
                            <Icon name={"pencil"} size={30} color={commonStyles.colors.primaryHoverColor} />
                        </Button>
                    </View>
                </View >
                :
                <View style={styles.container}>
                    <View>
                        <Text>{this.state.person}</Text>
                    </View>
                    <Text>
                        Quantidade: {this.state.quantity} Comparecimentos:{this.state.attendancing}
                    </Text>
                    <View>
                        <Button
                            onPress={() => { this.deleteForId(this.state.id) }}>
                            <Icon name={"trash"} size={20} color={commonStyles.colors.primaryColor} />
                        </Button>
                        <Button
                            onPress={() => {
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            }}
                        >
                            <Icon name={"pencil"} size={20} color={commonStyles.colors.primaryHoverColor} />
                        </Button>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
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
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: commonStyles.colors.bodyColor,
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

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.WorkSans,
        backgroundColor: 'transparent'
    }
})