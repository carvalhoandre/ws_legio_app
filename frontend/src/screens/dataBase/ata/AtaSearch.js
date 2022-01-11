import React, { useState } from 'react'
import { View, Platform, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../../utils/format'
import { goDate } from '../../../config/store/actions/date'
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../../styles/commonStyles';

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
        <SafeAreaView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.main}
        >
                <Text style={styles.subtitle}>Salve Maria!</Text>
                <Text style={styles.title}>Localize a Ata desejada através da Data selecionada</Text>
            <View style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={require('../../../../assets/icons/search.png')} style={styles.fest} />
                </View>
                <View>
                    <Button
                        onPress={showDatepicker}
                        title={`${formatDate(dateSelected)}`}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        icon={
                            <Icon name={"calendar-sharp"} size={20} color={commonStyles.colors.firstColor} />
                        }
                    />
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
                    <Button
                        onPress={send}
                        title={"Buscar"}
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        icon={
                            <Icon name={"search-outline"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 50,
        paddingLeft: 10,
        paddingRight: 10
    },

    button: {
        backgroundColor: commonStyles.colors.bodyColor,
        borderColor: commonStyles.colors.bodyColor,
        marginTop: 5,
        borderWidth: 2,
        marginBottom: 5
    },

    buttonText: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.titleColor
    },

    fest: {
        height: 190,
        width: 220,
        alignItems: 'center'
    },

    imageView: {
        alignItems: 'center'
    },

    title: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.medium,
        color: commonStyles.colors.titleColor,
        marginBottom: 30
    },

    subtitle: {
        fontFamily: commonStyles.fontFamily.josefin,
        color: commonStyles.colors.subtitleColor,
        fontSize: commonStyles.fontSize.small
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
    },

    buttonSend: {
        backgroundColor: commonStyles.colors.firstColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    buttonTextSend: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.containerColor
    }
})

const mapDispatchToProps = dispatch => {
    return {
        goDate: date => dispatch(goDate(date))
    }
}

export default connect(null, mapDispatchToProps)(AtaSearch);