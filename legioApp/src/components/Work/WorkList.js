import React from 'react';
import { View } from 'react-native';
import WorkCard from './WorkCard';

export default function WorkList({ work, deleteForId, newWork, refreshFunction, refreshing }) {
    const array = []
    work.forEach(element => {
        array.push(
            <WorkCard
                key={element.id}
                work={element}
                deleteForId={deleteForId}
                newWork={newWork}
                refreshFunction={refreshFunction}
                refreshing={refreshing}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}