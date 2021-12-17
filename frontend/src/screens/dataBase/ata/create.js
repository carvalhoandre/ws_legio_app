import React, { Component } from 'react'
import { TextInput, Button } from 'react-native-paper';
import { View, StyleSheet, Text, Platform, Image, SafeAreaView, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';

const initialState = {
    id: 1,
    // page1
    number: '',
    numero: '',
    dataExtenso: (moment().locale('pt-br').format('LLLL')),
    date: (moment().locale('pt-br').format('DD-MM-YYYY')),
    legionarios: [{
        name: ''
    }],
    capituloEspiritual: '',
    paginaEspiritual: '',
    titleEspiritual: '',
    attendance: [{
        date: (moment().locale('pt-br').format('DD-MM-YYYY')),
        

    }],
    //page2
    area: '',
    process: '',
    responsibleIndicator: '',
    responsibleData: '',
    areaIndicate: '',
    //page3
    nameIndicate: '',
    objective: '',
    exclusion: '',
    frequencyOne: '',
    frequencyTwo: '',
    trend: '',
    meta: '',
    higher: '',
    bottom: '',
    origin: '',
    //page4
    form: '',
    excursion: '',
    unit: '',
    //page5
    user: '',
    password: '',
    serviceOn: true,
    serviceOff: false,
    expirationDate: '',
    collect: '',
    //page6
    catalog: '',
    integrationService: '',
    category: '',
    action: '',
    dataSource: '',
    priorityHigh: false,
    priorityAverage: false,
    priorityLow: false,
}

export default class CreateIndicate extends Component {

    state = {
        ...initialState
    }

    send = () => {
        console.log(this.state)

    }

    onChange = (event, selectedDate) => {
        const currentDate = selectedDate || this.state.dateCreate;
        this.setState({ show: Platform.OS === 'ios' })
        this.setState({ dateCreate: currentDate })
    };

    showMode = (currentMode) => {
        this.setState({ show: true })
        this.setState({ mode: currentMode })
    };

    showDatepicker = () => {
        this.showMode('date');
    };

    showTimepicker = () => {
        this.showMode('time');
    };

    returnIndicator = () => {
        if (this.state.id === 1) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Criar</Text>
                    <Text style={styles.subtitle}>Cliente</Text>

                    <View style={styles.check}>
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Proative'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.clienteProative}
                            onPress={() => this.setState({ clienteProative: true, clienteVeloe: false })}
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Veloe'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.clienteVeloe}
                            onPress={() => this.setState({ clienteVeloe: true, clienteProative: false })}
                        />
                    </View>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Número"
                        value={this.state.number}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={number => this.setState({ number })}
                    />

                    <Text style={styles.subtitle}>Data da Criação</Text>
                    <Button onPress={this.showDatepicker} style={styles.option} contentStyle={styles.button}>
                        <Text style={styles.buttonText}>{this.state.dateCreate}</Text>
                    </Button>

                    {this.state.show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.dateCreate}
                            mode={this.state.mode}
                            is24Hour={true}
                            display="default"
                            onChange={this.onChange}
                        />
                    )}
                </View>
            )
        }

        if (this.state.id === 2) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Responsabilidades</Text>

                    <TextInput
                        type="text"
                        label="Área de Negócio"
                        value={this.state.area}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={area => this.setState({ area })}
                    />

                    <TextInput
                        type="text"
                        label="Processo"
                        value={this.state.process}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={process => this.setState({ process })}
                    />

                    <TextInput
                        type="text"
                        label="Responsável pelo indicador"
                        value={this.state.responsibleIndicator}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={responsibleIndicator => this.setState({ responsibleIndicator })}
                    />

                    <TextInput
                        type="text"
                        label="Responsável pelos dados"
                        value={this.state.responsibleData}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={responsibleData => this.setState({ responsibleData })}
                    />

                    <TextInput
                        type="text"
                        label="Áreas que usam este indicador"
                        value={this.state.areaIndicate}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={areaIndicate => this.setState({ areaIndicate })}
                    />
                </View>
            )
        }

        if (this.state.id === 3) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Descrição do Indicador</Text>

                    <TextInput
                        type="text"
                        label="Nome do indicador"
                        value={this.state.nameIndicate}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={nameIndicate => this.setState({ nameIndicate })}
                    />

                    <TextInput
                        type="text"
                        label="Objetivo"
                        value={this.state.objective}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={objective => this.setState({ objective })}
                    />

                    <TextInput
                        type="text"
                        label="Exclusões"
                        value={this.state.exclusion}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={exclusion => this.setState({ exclusion })}
                    />

                    <TextInput
                        type="text"
                        label="Responsável pelos dados"
                        value={this.state.responsibleData}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={responsibleData => this.setState({ responsibleData })}
                    />

                    <TextInput
                        type="text"
                        label="Frequência de Apuração 1"
                        value={this.state.frequencyOne}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={frequencyOne => this.setState({ frequencyOne })}
                    />

                    <TextInput
                        type="text"
                        label="Frequência de Apuração 2"
                        value={this.state.frequencyTwo}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={frequencyTwo => this.setState({ frequencyTwo })}
                    />

                    <TextInput
                        type="text"
                        label="Tendência esperada"
                        value={this.state.trend}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={trend => this.setState({ trend })}
                    />

                    <TextInput
                        type="text"
                        label="Meta"
                        value={this.state.meta}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={meta => this.setState({ meta })}
                    />

                    <TextInput
                        type="text"
                        label="Limite"
                        value={this.state.higher}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={higher => this.setState({ higher })}
                    />

                    <TextInput
                        type="text"
                        label="Limite"
                        value={this.state.higher}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={higher => this.setState({ higher })}
                    />

                    <TextInput
                        type="text"
                        label="Inferior"
                        value={this.state.bottom}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={bottom => this.setState({ bottom })}
                    />

                    <TextInput
                        type="text"
                        label="Origem dos dado"
                        value={this.state.dataSource}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={dataSource => this.setState({ dataSource })}
                    />
                </View>
            )
        }

        if (this.state.id === 4) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Método de Cálculo</Text>

                    <TextInput
                        type="text"
                        label="Forma de cálculo"
                        value={this.state.form}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={form => this.setState({ form })}
                    />

                    <TextInput
                        type="text"
                        label="Exclusões no cálculo"
                        value={this.state.excursion}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={excursion => this.setState({ excursion })}
                    />

                    <TextInput
                        type="text"
                        label="Unidade"
                        value={this.state.unit}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={unit => this.setState({ unit })}
                    />
                </View>
            )
        }

        if (this.state.id === 5) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Credenciais de Acesso</Text>

                    <TextInput
                        type="text"
                        label="Usuário"
                        value={this.state.user}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={user => this.setState({ user })}
                    />

                    <TextInput
                        type="text"
                        label="Senha"
                        value={this.state.password}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={password => this.setState({ password })}
                    />

                    <Text style={styles.subtitle}>Serviço</Text>
                    <View style={styles.check}>
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Sim'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.serviceOn}
                            onPress={() => this.setState({ serviceOn: true, serviceOff: false })}
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Não'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.serviceOff}
                            onPress={() => this.setState({ serviceOff: true, serviceOn: false })}
                        />
                    </View>

                    <TextInput
                        type="text"
                        label="Data de validade da credencial"
                        value={this.state.expirationDate}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={expirationDate => this.setState({ expirationDate })}
                    />

                    <TextInput
                        type="text"
                        label="Script associado a coleta"
                        value={this.state.collect}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={collect => this.setState({ collect })}
                    />
                </View>
            )
        }

        if (this.state.id === 6) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Integração Service Desk</Text>

                    <TextInput
                        type="text"
                        label="Catálogo"
                        value={this.state.catalog}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={catalog => this.setState({ catalog })}
                    />

                    <TextInput
                        type="text"
                        label="Serviço"
                        value={this.state.integrationService}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={integrationService => this.setState({ integrationService })}
                    />

                    <TextInput
                        type="text"
                        label="Categoria"
                        value={this.state.category}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={category => this.setState({ category })}
                    />

                    <TextInput
                        type="text"
                        label="Ação"
                        value={this.state.action}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={action => this.setState({ action })}
                    />

                    <TextInput
                        type="text"
                        label="Origem"
                        value={this.state.origin}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={action => this.setState({ origin })}
                    />

                    <Text style={styles.subtitle}>Prioridade</Text>
                    <View style={styles.check}>
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Baixa'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.priorityLow}
                            onPress={() => this.setState({ priorityLow: true, priorityHigh: false, priorityAverage: false })}
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Média'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.priorityAverage}
                            onPress={() => this.setState({ priorityAverage: true, priorityHigh: false, priorityLow: false })}
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Baixa'
                            checkedIcon={<Image source={require('../../../assets/icons/checked.svg')} style={styles.icon} />}
                            uncheckedIcon={<Image source={require('../../../assets/icons/unchecked.svg')} style={styles.icon} />}
                            checked={this.state.priorityHigh}
                            onPress={() => this.setState({ priorityAverage: true, priorityLow: false, priorityAverage: false })}
                        />

                    </View>
                    <View style={styles.containerButton}>
                        <Button onPress={this.send()} contentStyle={styles.buttonSend}>
                            <Text style={styles.textButton}>Enviar</Text>
                        </Button>
                    </View>
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
                <Image source={require('../../../assets/icons/buttonRigth.svg')} style={styles.iconNavigate} />
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
                <Image source={require('../../../assets/icons/buttonLeft.svg')} style={styles.iconNavigate} />
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
        fontFamily: commonStyles.fontFamily.SourceSans,
        fontSize: commonStyles.fontSize.subtitle,
        marginBottom: 30,
    },

    subtitle: {
        color: "#757575",
        fontFamily: commonStyles.fontFamily.SourceSans,
        fontSize: 14,
        marginLeft: 13
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
        fontFamily: commonStyles.fontFamily.SourceSans,
        backgroundColor: 'transparent'
    },

    option: {
        backgroundColor: 'transparent',
        border: 'none'
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.OpenSans,
        fontWeight: '400',

    },

    button: {
        justifyContent: 'flex-start',
    },

    buttonText: {
        color: '#787F84',
        fontWeight: '600',
        fontFamily: commonStyles.fontFamily.OpenSans,
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
        textStyle: 'none',
        fontFamily: commonStyles.fontFamily.SourceSans,
        fontWeight: '600',
    }
})