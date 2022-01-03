import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default function OrderSummary({ amount, onSubmit }) {
    return (
        <View>
            <Text>Legionarios Presentes: {amount}</Text>

            <Button
                title="Enviar"
                type="outline"
                onPress={onSubmit}
            />
        </View>
    )
}