import React from 'react';
import { View } from 'react-native';
import RecruitmentCard from './RecruitmentCard';

export default function RecruitmentList({ recruitment, deleteForId }) {
    const array = []
    recruitment.forEach(element => {
        array.push(
            <RecruitmentCard
                key={element.id}
                recruitment={element}
                deleteForId={deleteForId}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}