import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Recruitment from '../../../components/Recruitment/Recruitment';
import Work from '../../../components/Work/Work';
import Event from '../../../components/Event/Event';
import { createAtaExtenso } from '../../../service/api'
import Treasury from '../../../components/Treasury/Treasury';
import Legios from '../../../components/Legio/Legios'

const initialState = {
    id: 1,
    inicio: moment().locale('pt-br').format('H:mm'),
    ata: '',
    one: true,
    two: false,
    three: false,
    participation: '',
    capituloEspiritual: '',
    paginaEspiritual: '',
    titleEspiritual: '',
    coleta: true,
    allocutionAutor: '',
    allocutionAssunto: '',
    paginaEstudo: '',
    paragrafoEstudo: '',
    assuntos: '',
    //others
    loading: false,
    visible: false,
    title: '',
    body: '',
}

export default class AtaCreate extends Component {

    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    })

    send = async () => {
        this.setState({ loading: true })
        let hora = moment().locale('pt-br').format('H:mm')

        let ataExtenso = {
            inicio: this.state.inicio,
            ata: this.state.ata,
            participation: this.state.participation,
            capituloEspiritual: this.state.capituloEspiritual,
            paginaEspiritual: this.state.paginaEspiritual,
            titleEspiritual: this.state.titleEspiritual,
            allocutionAutor: this.state.allocutionAutor,
            allocutionAssunto: this.state.allocutionAssunto,
            coleta: this.state.coleta,
            paginaEstudo: this.state.paginaEstudo,
            paragrafoEstudo: this.state.paragrafoEstudo,
            assuntos: this.state.assuntos,
            horaFinal: hora
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
                    <Text style={styles.subtitle}>Inicio: {this.state.inicio}</Text>

                    <View style={styles.check}>
                        <Text style={styles.subtitle}>Ata</Text>

                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Lida, aprovada e assinada'
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                            checked={this.state.one}
                            onPress={() => this.setState({
                                one: true,
                                two: false,
                                three: false,
                                ata: 'Lida, aprovada e assinada'
                            })}
                        />

                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Lida, aprovada com ressalvas e assinada'
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                            checked={this.state.two}
                            onPress={() => this.setState({
                                one: false,
                                two: true,
                                three: false,
                                ata: 'Lida, aprovada com ressalvas e assinada'
                            })}
                        />

                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Não houve leitura da ata'
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                            checked={this.state.three}
                            onPress={() => this.setState({
                                one: false,
                                two: false,
                                three: true,
                                ata: 'Não houve leitura da ata'
                            })}
                        />
                    </View>

                    <Text style={styles.subtitle}>Leitura Espiritual</Text>
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Capítulo"
                        value={this.state.capituloEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={capituloEspiritual => this.setState({ capituloEspiritual })}
                    />
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
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

        if (this.state.id === 2) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Chamada</Text>

                    <Legios />

                    <TextInput
                        multiline={true}
                        label="Visitantes"
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

        if (this.state.id === 3) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Tesouraria</Text>

                    <Treasury />
                </View>
            )
        }

        if (this.state.id === 4) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Trabalhos</Text>

                    <Work />
                </View>
            )
        }

        if (this.state.id === 5) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Alocução</Text>

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

                    <CheckBox
                        containerStyle={styles.option}
                        textStyle={styles.textOption}
                        title='Coleta Secreta'
                        checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                        uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                        checked={this.state.coleta}
                        onPress={(() => {
                            let colect = !this.state.coleta
                            this.setState({ coleta: colect })
                        })}
                    />
                </View>
            )
        }

        if (this.state.id === 6) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Recrutamento</Text>

                    <Recruitment />
                </View>
            )
        }

        if (this.state.id === 7) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.subtitle}>Estudo do Manual</Text>
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
                    <Text style={styles.subtitle}>Eventos</Text>

                    <Event />
                    <TextInput
                        label="Outros Assuntos"
                        value={this.state.assuntos}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={assuntos => this.setState({ assuntos })}
                    />

                    <Text style={styles.obs}>Obs: Antes de Salvar ferifique os dados</Text>

                    <Button
                        onPress={this.send}
                        contentStyle={styles.buttonSend}
                    >
                        <Icon name={"save"} size={25} color={"#FFF"} />
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
                <Icon name={"chevron-forward-outline"} size={35} color={commonStyles.colors.primaryColor} />
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
                <Icon name={"chevron-back-outline"} size={35} color={commonStyles.colors.primaryColor} />
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

        if (this.state.id === 8) {
            return (<>{this.left()}</>)
        }
    }

    render() {
        return (
            this.state.loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryColor} />
                </View>
                :
                <SafeAreaView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.main}
                >
                    <Portal>
                        <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                            <Dialog.Title style={styles.titleOption}>{this.state.title}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph style={styles.textOption}>{this.state.body}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    onPress={this.hideDialog}
                                    contentStyle={styles.dialogButton}
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

    spinner: {
        flex: 1,
        justifyContent: "center"
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

    dialogButton: {
        backgroundColor: commonStyles.colors.containerColor,
        borderColor: commonStyles.colors.bodyColor,
        borderWidth: 0,
    },
    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    },
    scrollView: {
        marginHorizontal: 0,
    },

    subtitle: {
        color: commonStyles.colors.textHover,
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.medium,
        marginLeft: 13,
        marginTop: 5,
        marginBottom: 2.5,
    },

    check: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 5,
        marginTop: 20
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        backgroundColor: 'transparent'
    },

    option: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },

    textOption: {
        color: commonStyles.colors.textHover,
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.small,
    },

    button: {
        justifyContent: 'flex-start',
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
        backgroundColor: commonStyles.colors.firstColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 10,
        borderWidth: 0,
        height: 40,
        width: "100%",
        marginBottom: 10
    },

    buttonTextSend: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.containerColor,
        marginLeft: 10
    },

    obs: {
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.small,
        textAlign: 'center',
        marginTop: 10
    }
})
