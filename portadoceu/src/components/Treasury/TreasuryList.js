import React from 'react';
import { View } from 'react-native';
import TreasuryCard from './TreasuryCard';

export default function TreasuryList({ treasury, deleteForId, newTreasury }) {
    const array = []
    treasury.forEach(element => {
        array.push(
            <TreasuryCard
                key={element.id}
                treasury={element}
                deleteForId={deleteForId}
                newTreasury={newTreasury}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}