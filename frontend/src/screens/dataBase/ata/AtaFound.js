import React, { Component } from 'react'
import { View, StyleSheet, Platform, SafeAreaView, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import FoundRecruitment from '../../../components/Recruitment/FoundRecruitment'
import FoundAta from '../../../components/Ata/FoundAta'
import FoundWork from '../../../components/Work/FoundWork'
import FoundChamada from '../../../components/Chamada/FoundChamada'
import FoundEvent from '../../../components/Event/FoundEvent'
import FoundTreasury from '../../../components/Treasury/FoundTreasury'
import commonStyles from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    id: 1,
    loading: false,
}

export default class AtaFound extends Component {

    state = {
        ...initialState
    }
    returnIndicator = () => {
        if (this.state.id === 1) {
            return (
                <>
                    <Text style={styles.subtitle}>Ata</Text>
                    <FoundAta />
                </>
            )
        }
        if (this.state.id === 2) {
            return (
                <>
                    <Text style={styles.subtitle}>Presenças</Text>
                    <FoundChamada />
                </>
            )
        }
        if (this.state.id === 3) {
            return (
                <>
                    <Text style={styles.subtitle}>Tesouraria</Text>
                    <FoundTreasury />
                </>
            )
        }
        if (this.state.id === 4) {
            return (
                <>
                    <Text style={styles.subtitle}>Trabalhos</Text>
                    <FoundWork />
                </>
            )
        }
        if (this.state.id === 5) {
            return (
                <>
                    <Text style={styles.subtitle}>Eventos</Text>
                    <FoundEvent />
                </>
            )
        }
        if (this.state.id === 6) {
            return (
                <>
                    <Text style={styles.subtitle}>Recrutamento</Text>
                    <FoundRecruitment />
                </>
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
            this.state.loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryColor} />
                </View>
                :
                <SafeAreaView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.main}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                    >

                        {this.returnIndicator()}
                        <View style={styles.containerButton}>
                            {this.returnButtons()}
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
})

