import React from 'react';
import { View } from 'react-native';
import AttendanceCard from './AttendanceCard';

export default function AttendanceList({ attendance, deleteForId }) {
    const array = []
    attendance.forEach(element => {
        array.push(
            <AttendanceCard
                key={element.id}
                attendance={element}
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