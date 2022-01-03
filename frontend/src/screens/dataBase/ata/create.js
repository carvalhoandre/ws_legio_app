import React, { Component } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView } from 'react-native';
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import Recrutment from '../../../components/Recrutment/Recrutment'

const initialState = {
    activeIds: [],
    id: 3,
    // page1
    number: null,
    dataExtenso: moment().locale('pt-br').format('LL HH:MM'),
    date: moment().locale('pt-br').format('DD-MM-YYYY'),
    attendance: [
        {
            date: moment().locale('pt-br').format('DD-MM-YYYY'),
            legio: {
                id: null
            },
            attendance: null
        },
    ],
    /* page 2 */
    participation: '',
    capituloEspiritual: '',
    paginaEspiritual: '',
    titleEspiritual: '',
    /* page 3 */
    recruitmentObj: [{}],
    recrutId: 0,
    quantity: null,
    person: null,
    attendance: null,
    //page4
    treasury: [{
        saldoAnterior: null,
        coletaDoDia: null,
        diaDaColeta: '',
        despesas: null,
        subTotal: null,
        totalEmCaixa: null
    }],
    //page5
    work: [
        {
            work: null,
            yong: null,
            adult: null,
            children: null,
            elderly: null,
            total: null,
            hours: null
        }
    ],
    //page6
    allocutionAutor: '',
    allocutionAssunto: '',
    paginaEstudo: '',
    paragrafoEstudo: '',
    event: [
        {
            name: '',
            guests: null,
            ativos: null,
            auxiliares: null
        }
    ],
    horaFinal: "",
    minutoFinal: "",
    teste:[]
}

export default class CreateAta extends Component {

    state = {
        ...initialState
    }

    send = () => {
    }

    addRecrut = () => {
        const newId = (this.state.recrutId + 1)
        const obj = {
            id: newId,
            quantity: this.state.quantity,
            person: this.state.person,
            attendance: this.state.attendance
        }
        this.setState({ recrutmentPrimary: obj })
        this.setState({ quantity: null, person: null, attendance: null, recrutId: newId })
    }

    returnIndicator = () => {
        if (this.state.id === 1) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Ata</Text>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Ata de Número"
                        value={this.state.number}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={number => this.setState({ number })}
                    />

                    <TextInput
                        keyboardType="number-pad"
                        label="Data"
                        value={this.state.dataExtenso}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={dataExtenso => this.setState({ dataExtenso })}
                    />
                </View>
            )
        }

        if (this.state.id === 2) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Legionários</Text>

                    <TextInput
                        label="Participantes"
                        value={this.state.participation}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={participation => this.setState({ participation })}
                    />

                    <Text style={styles.subtitle}>Leitura Espiritual</Text>
                    <TextInput
                        label="Capítulo"
                        value={this.state.capituloEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={capituloEspiritual => this.setState({ capituloEspiritual })}
                    />
                    <TextInput
                        label="Página"
                        value={this.state.paginaEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paginaEspiritual => this.setState({ paginaEspiritual })}
                    />
                    <TextInput
                        label="Título"
                        value={this.state.titleEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={titleEspiritual => this.setState({ titleEspiritual })}
                    />

                </View>
            )
        }

        if (this.state.id === 3) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Recrutamento</Text>

                    {this.state.recrutId > 0 ?
                        
                        this.state.recruitmentObj.forEach((element) => {
                            this.setState({
                                teste:
                                    <View key={this.state.recrutId}>
                                        <Text>{element.quantity}</Text>
                                        <Text>{element.person}</Text>
                                        <Text>{element.attendance}</Text>
                                        <Button mode="text" >
                                            Excluir
                                        </Button>
                                    </View>
                            })
                        })
                        : null
                    }

                    {this.state.teste}

                    <Picker
                        selectedValue={this.state.person}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ person: itemValue })}
                    >
                        <Picker.Item label="Criança" value={0} />
                        <Picker.Item label="Adolescente" value={1} />
                        <Picker.Item label="Jovem" value={2} />
                        <Picker.Item label="Adulto" value={3} />
                        <Picker.Item label="Idoso" value={4} />
                    </Picker>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade"
                        value={this.state.quantity}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={quantity => this.setState({ quantity: quantity })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Comparecimentos"
                        value={this.state.attendance}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={attendance => this.setState({ attendance: attendance })}
                    />

                    <Button mode="text" onPress={this.addRecrut}>
                        Adicionar
                    </Button>

                </View>
            )
        }

    }

    rigth = () => {
        return (
            <Button
                onPress={() => {
                    const id = this.state.id + 1
                    this.setState({ id })
                }}
                contentStyle={styles.buttons}
            >
                <Icon name={"chevron-forward-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
            </Button>
        )
    }

    left = () => {
        return (
            <Button
                onPress={() => {
                    const id = this.state.id - 1
                    this.setState({ id })
                }}

                contentStyle={styles.buttons}
            >
                <Icon name={"chevron-back-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
            </Button>
        )
    }

    returnButtons = () => {
        if (this.state.id > 1 && this.state.id < 6) {
            return (<>{this.left()}{this.rigth()}</>)
        }

        if (this.state.id === 1) {
            return (<>{this.rigth()}</>)
        }

        if (this.state.id === 6) {
            return (<>{this.left()}</>)
        }
    }

    render() {
        return (
            <SafeAreaView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.main}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.container}>
                        {this.returnIndicator()}
                        <View style={styles.containerButton}>
                            {this.returnButtons()}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 50,
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

    scrollView: {
        marginHorizontal: 0,
    },

    title: {
        color: commonStyles.colors.textColorHover,
        fontWeight: '400',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: commonStyles.fontSize.subtitle,
        marginBottom: 30,
    },

    subtitle: {
        color: "#757575",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: 18,
        marginLeft: 13,
        marginTop: 5,
        marginBottom: 2.5,
        fontWeight: '800'
    },

    icon: {
        width: 20,
        height: 20
    },

    check: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.WorkSans,
        backgroundColor: 'transparent'
    },

    option: {
        backgroundColor: 'transparent',
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },

    button: {
        justifyContent: 'flex-start',
    },

    buttonText: {
        color: '#787F84',
        fontWeight: '600',
        fontFamily: commonStyles.fontFamily.WorkSans,
    },

    iconNavigate: {
        width: 40,
        height: 40
    },

    buttons: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },

    buttonSend: {
        marginBottom: 30,
        marginTop: 20,
        backgroundColor: commonStyles.colors.primaryColor,
        padding: 5,
        borderRadius: 8,
        width: 150,
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '600',
    }
})