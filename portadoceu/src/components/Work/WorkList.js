import React from 'react';
import { View } from 'react-native';
import WorkCard from './WorkCard';

export default function WorkList({ work, deleteForId, newWork }) {
    const array = []
    work.forEach(element => {
        array.push(
            <WorkCard
                key={element.id}
                work={element}
                deleteForId={deleteForId}
                newWork={newWork}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}