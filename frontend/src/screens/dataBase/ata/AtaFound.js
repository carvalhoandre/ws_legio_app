import React, { Component } from 'react'
import { View, StyleSheet, Platform, SafeAreaView, ScrollView } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import FoundRecruitment from '../../../components/Recruitment/FoundRecruitment'

export default class AtaFound extends Component {

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
                           <FoundRecruitment />
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
})
