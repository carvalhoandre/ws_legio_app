import React from 'react';
import { View } from 'react-native';
import EventCard from './EventCard';

export default function EventList({ event, deleteForId, newEvent }) {
    const array = []
    event.forEach(element => {
        array.push(
            <EventCard
                key={element.id}
                event={element}
                deleteForId={deleteForId}
                newEvent={newEvent}
            />
        )
    });
    return (
        <View>
            {array}
        </View>
    )
}