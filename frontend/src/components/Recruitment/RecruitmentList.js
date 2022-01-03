import React from 'react';
import { View } from 'react-native';
import RecruitmentCard from './RecruitmentCard';

export default function RecruitmentList({ recruitment, deleteForId, showRecruitment }) {
    const list = []
    recruitment.forEach(element => {
        list.push(
            <RecruitmentCard
                key={element.id}
                recruitment={element}
                deleteForId={deleteForId}
                showRecruitment={showRecruitment}
            />
            
        )
    });
    return (
        <View>
            {list}
        </View>
    )
}