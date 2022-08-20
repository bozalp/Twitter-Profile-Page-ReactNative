import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const InfoArea = ({ title, userName, description, location, websiteLink }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title_text}>
                {title}
            </Text>
            <Text style={styles.username_text}>
                @{userName}
            </Text>
            <Text style={styles.description_text}>
                {description}
            </Text>

            <Text style={styles.location_text}>
                {location}
            </Text>
            <Text style={styles.link_text}>
                {websiteLink}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            width: '100%',
            height: 190,
            backgroundColor: 'black',
            paddingTop: 36,
            padding: 10,
        },
        title_text:
        {
            paddingTop:10,
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold'
        },
        username_text:
        {
            color: "#999",
            fontSize: 12,
            paddingBottom:8
        },
        description_text:
        {
            color: 'white',
            fontSize: 14,
        },
        location_text:
        {
            color: "#999",
            paddingTop: 10
        },
        link_text:
        {
            color: '#1d9bf0',
        },
    }
);

export default InfoArea;
