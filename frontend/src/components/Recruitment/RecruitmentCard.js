import React from 'react'
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { Button, ListItem } from 'react-native-elements'

export default function RecruitmentCard({ recruitment, deleteForId, showRecruitment }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Recrutamentos recentemente adicionados:</Text>
            <ListItem.Swipeable
                leftContent={
                    <Button
                        title="Info"
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                        onPress={showRecruitment(
                            recruitment.id,
                            recruitment.quantity,
                            recruitment.person,
                            recruitment.attendancing
                        )}
                    />
                }
                rightContent={
                    <Button
                        title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                        onPress={deleteForId(recruitment.id)}
                    />
                }
            >
                <ListItem.Content>
                    <ListItem.Title>{recruitment.id}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})