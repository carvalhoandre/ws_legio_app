import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Recruitment from '../../../components/Recruitment/Recruitment';
import Work from '../../../components/Work/Work';
import Event from '../../../components/Event/Event';
import { number, date } from '../../../utils/extenso'
import { createAtaExtenso, createTreasury, getEventForDate, getRecruitmentForDate, getWorkForDate } from '../../../service/api'
import extenso from 'extenso';

const initialState = {
    id: 10,
    // page1
    number: null,
    dataExtenso: moment().locale('pt-br').format('LL HH:MM'),
    date: moment().locale('pt-br').format('DD-MM-YYYY'),
    participation: '',
    /* page 2 */
    capituloEspiritual: '',
    paginaEspiritual: '',
    titleEspiritual: '',
    /* page 3 */
    saldoAnterior: null,
    coletaDoDia: null,
    diaDaColeta: '',
    despesas: null,
    subTotal: null,
    totalEmCaixa: null,
    //page5 
    /* work */
    //page6
    allocutionAutor: '',
    allocutionAssunto: '',
    paginaEstudo: '',
    paragrafoEstudo: '',
    //others
    loading: false,
    visible: false,
    title: '',
    body: '',
}

export default class CreateAta extends Component {

    state = {
        ...initialState
    }

    send = async () => {
        this.setState({ loading: true })
        let hora = moment().locale('pt-br').format('H')
        let minuto = moment().locale('pt-br').format('mm')

        //set treasury
        let newTreasury = {
            saldoAnterior: this.state.saldoAnterior,
            coletaDoDia: this.state.coletaDoDia,
            diaDaColeta: this.state.diaDaColeta,
            despesas: this.state.despesas,
            subTotal: this.state.subTotal,
            totalEmCaixa: this.state.totalEmCaixa
        }
        createTreasury(newTreasury)
            .then(() => {
                null
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro ao enviar salvar tessouraria`, visible: true, title: "😱😰😰" })
            })
        //get recrutment
        let recrutment = ''
        getRecruitmentForDate(this.state.date)
            .then((response) => {
                let data = response.data
                if (data.length < 1) {
                    recrutment = 'não houveram convites'
                } else {
                    data.forEach(element => {
                        let quantity = number(element.quantity)
                        if (element.quantity === 1) {
                            recrutment = `${recrutment} foi realizado ${element.quantity} 
                            covite para ${quantity} ${element.person.toLowerCase()}`

                        } else {
                            recrutment = `${recrutment} foi realizado ${element.quantity} 
                            covites para ${quantity} ${element.person.toLowerCase()}s`
                        }
                    })
                }
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ao inserir recrutamentos`, visible: true, title: "😱😰😰" })
            })

        //get works
        let allWork = ''
        getWorkForDate(this.state.date)
            .then((response) => {
                let data = response.data
                if (data.length < 1) {
                    allWork = 'não houveram trabalhos relatados'
                } else {
                    data.forEach(element => {
                        allWork = `${allWork} Os irmãos ${element.legios} realizaram um(a) 
                        ${element.work.toLowerCase()} tendo contato com ${number(element.total)} 
                        pessoas, em ${number(element.hours)} horas de trabalho`
                    })
                }
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ao inserir trabalhos`, visible: true, title: "😱😰😰" })
            })

        //get works
        let allEvent = ''
        getEventForDate(this.state.date)
            .then((response) => {
                let data = response.data
                if (data.length < 1) {
                    allEvent = null
                } else {
                    data.forEach(element => {
                        allEvent = `${allEvent} ${element.name}, no dia ${date(element.dateEvent)} estavão presentes
                        ${element.ativos >= 1 ? `${element.ativos} ativos` : null}
                        ${element.auxiliares >= 1 ? `${element.auxiliares} auxiliares` : null}
                        ${element.guests >= 1 ? `${element.guests} convidados` : null}`
                    })
                }
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ao inserir eventos`, visible: true, title: "😱😰😰" })
            })

        let ataExtenso = {
            number: this.state.number,
            numero: number(this.state.number),
            dataExtenso: this.state.dataExtenso,
            presentes: this.state.participation,
            capituloEspiritual: this.state.capituloEspiritual,
            paginaEspiritual: this.state.paginaEspiritual,
            titleEspiritual: this.state.titleEspiritual,
            recrutamento: recrutment,
            saldoAnterior: extenso(`${this.state.saldoAnterior}`, { mode: 'currency', currency: { type: 'BRL' } }),
            diaDaColeta: date(this.state.diaDaColeta),
            coletaDoDia: extenso(`${this.state.coletaDoDia}`, { mode: 'currency', currency: { type: 'BRL' } }),
            despesas: extenso(`${this.state.despesas}`, { mode: 'currency', currency: { type: 'BRL' } }),
            subTotal: extenso(`${this.state.subTotal}`, { mode: 'currency', currency: { type: 'BRL' } }),
            totalEmCaixa: extenso(`${this.state.totalEmCaixa}`, { mode: 'currency', currency: { type: 'BRL' } }),
            work: allWork,
            allocutionAutor: this.state.allocutionAutor,
            allocutionAssunto: this.state.allocutionAssunto,
            paginaEstudo: this.state.paginaEstudo,
            paragrafoEstudo: this.state.paragrafoEstudo,
            event: allEvent,
            horaFinal: date(hora),
            minutoFinal: date(minuto)
        }

        createAtaExtenso(ataExtenso)
            .then(() => {
                this.setState({ loading: false })
                this.setState({ body: `Ata Adicionada com sucesso!`, visible: true, title: "👏👏👏" })
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro ao enviar ata por e-mail`, visible: true, title: "😱😰😰" })
            })
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
                </View>
            )
        }

        if (this.state.id === 2) {
            return (
                <View styles={{ margin: 'auto' }}>

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
                    <Text style={styles.title}>Tesouraria</Text>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Saldo Anterior"
                        value={this.state.saldoAnterior}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={saldoAnterior => this.setState({ saldoAnterior })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Coleta do dia"
                        value={this.state.coletaDoDia}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={coletaDoDia => this.setState({ coletaDoDia })}
                    />

                    <TextInput
                        label="Dia da Coleta"
                        value={this.state.diaDaColeta}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={diaDaColeta => this.setState({ diaDaColeta })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Despesas"
                        value={this.state.despesas}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={despesas => this.setState({ despesas })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Sub Total"
                        value={this.state.subTotal}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={subTotal => this.setState({ subTotal })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Total em Caixa"
                        value={this.state.totalEmCaixa}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={totalEmCaixa => this.setState({ totalEmCaixa })}
                    />
                </View>
            )
        }

        if (this.state.id === 4) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Trabalhos</Text>

                    <Work />
                </View>
            )
        }

        if (this.state.id === 5) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Alocução</Text>

                    <TextInput
                        label="Autor"
                        value={this.state.allocutionAutor}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAutor => this.setState({ allocutionAutor })}
                    />

                    <TextInput
                        label="Assunto"
                        value={this.state.allocutionAutor}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAutor => this.setState({ allocutionAutor })}
                    />

                </View>
            )
        }

        if (this.state.id === 6) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Recrutamento</Text>

                    <Recruitment />
                </View>
            )
        }

        if (this.state.id === 8) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Estudo do Manual</Text>
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Página"
                        value={this.state.paginaEstudo}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paginaEstudo => this.setState({ paginaEstudo })}
                    />
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Parágrafo"
                        value={this.state.paragrafoEstudo}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paragrafoEstudo => this.setState({ paragrafoEstudo })}
                    />

                </View>
            )
        }

        if (this.state.id === 9) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Eventos</Text>

                    <Event />
                    <View style={styles.containerButton}>
                        <Button
                            title="Salvar"
                            type="outline"
                            buttonStyle={styles.buttonSend}
                            titleStyle={styles.textButton}
                            onPress={this.send}
                        />
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
        if (this.state.id > 1 && this.state.id < 8) {
            return (<>{this.left()}{this.rigth()}</>)
        }

        if (this.state.id === 1) {
            return (<>{this.rigth()}</>)
        }

        if (this.state.id === 9) {
            return (<>{this.left()}</>)
        }
    }

    render() {
        return (
            this.state.loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryHoverColor} />
                </View>
                :
                <SafeAreaView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.main}
                >
                    <Portal>
                        <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                            <Dialog.Title>{this.state.title}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{this.state.body}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    title="Ok"
                                    type="outline"
                                    onPress={this.hideDialog}
                                />
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
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