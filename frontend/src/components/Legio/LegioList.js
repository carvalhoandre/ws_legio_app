import React from 'react';
import { checkIsSelected } from '../../utils/helpers'
import { View } from 'react-native';
import LegioCard from './LegioCard';

export default function LegioList({ legios, selectedLegios, onSelectLegio }) {
    const array = []
    legios.forEach(element => {
        array.push(
            <LegioCard
                key={element.id}
                legio={element}
                onSelectLegio={onSelectLegio}
                isSelected={checkIsSelected(selectedLegios, element)}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}