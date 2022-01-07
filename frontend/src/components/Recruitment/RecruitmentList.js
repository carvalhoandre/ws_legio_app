import React from 'react';
import { View } from 'react-native';
import RecruitmentCard from './RecruitmentCard';

export default function RecruitmentList({ recruitment, deleteForId, newRecruitment }) {
    const array = []
    recruitment.forEach(element => {
        array.push(
            <RecruitmentCard
                key={element.id}
                recruitment={element}
                deleteForId={deleteForId}
                newRecruitment={newRecruitment}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}