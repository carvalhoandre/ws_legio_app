import React from 'react';
import { View } from 'react-native';
import LegioCard from './LegioCard';

export default function LegioList({ legio, deleteForId, newLegio }) {
    const array = []
    legio.forEach(element => {
        array.push(
            <LegioCard
                key={element.id}
                legio={element}
                deleteForId={deleteForId}
                newLegio={newLegio}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}