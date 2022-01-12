import React from 'react';
import { View } from 'react-native';
import AtaCard from './AtaCard';

export default function WorkList({ ata, deleteForId, newAta }) {
    const array = []
    ata.forEach(element => {
        array.push(
            <AtaCard
                key={element.id}
                ata={element}
                deleteForId={deleteForId}
                newAta={newAta}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}