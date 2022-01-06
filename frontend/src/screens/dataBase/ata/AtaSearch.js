import React, { useState } from 'react'
import { View, Button, Platform, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../../utils/format'
import { goDate } from '../../../config/store/actions/date'
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function AtaSearch(props) {
    const [dateSelected, setDateSelected] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const navigation = useNavigation();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDateSelected(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const send = () => {
        const date = {
            number: 1,
            moment: formatDate(dateSelected)
        }
        props.goDate(date);
        navigation.navigate('AtaFound');
    };

    return (
        <View>
            <Text>Localizar Ata</Text>
            <View>
                <Button onPress={showDatepicker} title={`Insira a data desejada ${formatDate(dateSelected)}`} />
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={dateSelected}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                    dateFormat='shortdate'
                />
            )}
            <View>
                <Button onPress={send} title="Pesquisar" />
            </View>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        goDate: date => dispatch(goDate(date))
    }
}

export default connect(null, mapDispatchToProps)(AtaSearch);