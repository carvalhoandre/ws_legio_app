import React, { useEffect, useState } from 'react';
import { getLegios } from '../service/api';
import { StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { present } from '../config/store/actions/legio';
import { connect } from 'react-redux';
import commonStyles from '../styles/commonStyles'
import { View, Text } from 'react-native';
import Script from './script1'

const mapDispatchToProps = dispatch => {
    return {
        onPresent: legio => dispatch(present(legio))
    }
}

function Legios(props) {

    const Legio = {
        id: null,
        name: ''
    }
    const [products, setProducts] = useState([]);
    const { onPresent } = props;
    
    useEffect(() => {
        getLegios()
           
    }, [])

    return (
        <View>
          
        </View>
    );

}

const styles = StyleSheet.create({
    option: {
        backgroundColor: commonStyles.colors.bodyColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },
})

export default connect(null, mapDispatchToProps)(Legios);
