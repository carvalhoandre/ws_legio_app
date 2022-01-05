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
import { date } from '../../../utils/extenso'
import { createAtaExtenso } from '../../../service/api'
import extenso from 'extenso';
import { connect } from 'react-redux';
import Treasury from '../../../components/Treasury';

const initialState = {
    id: 1,
    // page1
    number: "289",
    dataExtenso: moment().locale('pt-br').format('LL HH:MM'),
    date: moment().locale('pt-br').format('DD-MM-YYYY'),
    participation: 'Giovanna, Inacia, Joanderson, Edenilson, André e a participação do membro auxiliar Raquel',
    /* page 2 */
    capituloEspiritual: '8',
    paginaEspiritual: '318',
    titleEspiritual: 'Liturgia da Palavra',
    //page6
    allocutionAutor: 'Edenilson',
    allocutionAssunto: '"a Festa de Cristo Rei',
    paginaEstudo: '345',
    paragrafoEstudo: '4',
    //others
    loading: false,
    visible: false,
    title: '',
    body: '',
}

class CreateAta extends Component {

    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    })

    send = async () => {
        this.setState({ loading: true })
        let hora = moment().locale('pt-br').format('H')
        let minuto = moment().locale('pt-br').format('mm')

        //get recrutment
        let recrutment = '' 
        if (this.props.recruitment.length < 1) {
            recrutment = 'não houveram convites'
        } else {
            this.props.recruitment.forEach(element => {
                let quantity = extenso(`${element.quantity}`, { mode: 'number' })
                if (element.quantity === 1) {
                    recrutment = `${recrutment} foi realizado ${element.quantity} 
                        covite para ${quantity} ${element.person.toLowerCase()}`
                } else {
                    recrutment = `${recrutment} foi realizado ${element.quantity} 
                        covites para ${quantity} ${element.person.toLowerCase()}s`
                }
            })
        }

        //get works
        let allWork = ''
        if (this.props.work < 1) {
            allWork = 'não houveram trabalhos relatados'
        } else {
            this.props.work.forEach(element => {
                let newHours = extenso(`${element.hours}`, { mode: 'number' })
                let newTotal = extenso(`${element.total}`, { mode: 'number' })
                allWork = `${allWork} Os irmãos ${element.legios} realizaram um(a) 
                    ${element.work.toLowerCase()} tendo contato com ${newTotal} 
                    pessoas, em ${newHours} horas de trabalho`
            })
        }

        //get event
        let allEvent = ''
        if (this.props.event.length < 1) {
            allEvent = null
        } else {
            this.props.event.forEach(element => {
                allEvent = `${allEvent} ${element.name}, no dia ${date(element.dateEvent)} estavão presentes
                    ${element.ativos >= 1 ? `${element.ativos} ativos` : null}
                    ${element.auxiliares >= 1 ? `${element.auxiliares} auxiliares` : null}
                    ${element.guests >= 1 ? `${element.guests} convidados` : null}`
            })
        }

        let newNumero = extenso(`${this.state.number}`, { mode: 'number' })


        let ataExtenso = {
            number: this.state.number,
            numero: newNumero,
            dataExtenso: this.state.dataExtenso,
            presentes: this.state.participation,
            capituloEspiritual: this.state.capituloEspiritual,
            paginaEspiritual: this.state.paginaEspiritual,
            titleEspiritual: this.state.titleEspiritual,
            recrutamento: recrutment,
            saldoAnterior: this.props.saldoAnterior,
            diaDaColeta: this.props.diaDaColeta,
            coletaDoDia: this.props.coletaDoDia,
            despesas: this.props.despesas,
            subTotal: this.props.subTotal,
            totalEmCaixa: this.props.totalEmCaixa,
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

                    <Treasury />
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
                        value={this.state.allocutionAssunto}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAssunto => this.setState({ allocutionAssunto })}
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

        if (this.state.id === 7) {
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

        if (this.state.id === 8) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Eventos</Text>

                    <Event />
                </View>
            )
        }

        if (this.state.id === 9) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Revisar os dados antes de enviar</Text>



                    <Button
                        onPress={this.send}
                        contentStyle={styles.buttonSend}
                    >
                        <Text>Enviar</Text>
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
        if (this.state.id > 1 && this.state.id < 9) {
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
                                    type="outline"
                                    onPress={this.hideDialog}
                                >
                                    <Text>Ok</Text>
                                </Button>
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
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '600',
    },

})

const mapStateToProps = ({ event, recruitment, treasury, work }) => {
    return {
        event: event,
        recruitment: recruitment,
        work: work,
        saldoAnterior: treasury.saldoAnterior,
        coletaDoDia: treasury.coletaDoDia,
        diaDaColeta: treasury.diaDaColeta,
        despesas: treasury.despesas,
        subTotal: treasury.subTotal,
        totalEmCaixa: treasury.totalEmCaixa,
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        removeEvent: () => dispatchEvent(removeEvent()),
        removeRecruitment: () => dispatchEvent(removeRecruitment()),
        removeTreasury: () => dispatchEvent(removeTreasury()),
        removeWork: () => dispatchEvent(removeWork()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateAta);