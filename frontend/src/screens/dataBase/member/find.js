import React, { useEffect, useState } from 'react';
import { getLegios } from '../service/api';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { present } from '../config/store/actions/legio';
import { connect } from 'react-redux';
import commonStyles from '../styles/commonStyles'
import { View, Text } from 'react-native';

const mapDispatchToProps = dispatch => {
    return {
        onPresent: legio => dispatch(present(legio))
    }
}

const mapStateToProps = ({ legio }) => {
    return {
        ticket: legio.ticket
    }
}

const Legios = (props) => {
    const { ticket, onPresent } = props;

    const [legioData, setlegioData] = useState({ ids: [], ticket: [{}], render: [] });

    useEffect(() => {
        getLegios()
            .then(response => {
                const data = response.data;

                const id = []
                const tickets = [{}]
                const renders = []

                data.forEach(element => {
                    tickets.push([element.id].push({ present: false }))
                    renders.push(
                        <View key={element.id}>
                            <CheckBox
                                containerStyle={styles.option}
                                textStyle={styles.textOption}
                                title={element.name}
                                checked={ticket[element.id]}
                                onPress={(() => {
                                    var indexT = tickets.indexOf(element.id)
                                    var indexI = id.indexOf(element.id)
                                    if (tickets[element.id].present === true) {
                                        if (indexT > -1 & indexI > -1) {
                                            tickets.splice(indexT, 1)
                                            id.splice(indexI, 1)
                                        }
                                    } else {
                                        tickets.push([element.id].push({ present: true }))
                                        id.push(element.id)
                                    }
                                })}
                            />
                        </View>
                    )
                });
                setlegioData({ ids: id, ticket: tickets, render: renders })
                onPresent({ ids: legioData.ids, ticket: tickets })
            },
                error => {
                    const renders = []
                    renders.push(
                        <Text>Não foi possivel carregar lista. {`${error}`}</Text>
                    )
                    setlegioData({ render: renders })
                })
    }, [])

    return (
        <View>
            {legioData.render}
        </View>
    );

}

const styles = StyleSheet.create({
    option: {
        backgroundColor: commonStyles.colors.bodyColor,
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Legios);
