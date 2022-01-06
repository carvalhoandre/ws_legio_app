import React, { useState } from 'react'
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'
import 'moment/locale/pt-br'

 function Test() {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const send = () => {
        let newDate = formatDate(date)
        console.log(newDate)
    };

    return (
        <View>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                    dateFormat='shortdate'
                />
            )}
            <View>
                <Button onPress={send} title="Send" />
            </View>
        </View>
    );
}