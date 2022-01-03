import React from 'react';
import { checkIsSelected } from '../../utils/helpers'
import { View } from 'react-native';
import LegioCard from './LegioCard';

export default function LegioList({ legios, selectedLegios, onSelectLegio }) {
    const test = []
    legios.forEach(element => {
        test.push(
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
            {test}
        </View>
    )
}