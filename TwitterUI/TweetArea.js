import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TweetArea = ({ title, userName, tweet, imgURL }) => {
    return (
        <View style={styles.line}>
            <TouchableOpacity style={styles.container} activeOpacity={.7}>

                <View>
                    <Image source={{ uri: imgURL }} style={styles.avatar_image} />
                </View>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.right_area}>
                        <Text style={styles.title_text}>
                            {title}
                        </Text>
                        <Text style={styles.username_text}>
                            @{userName}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.description_text}>
                            {tweet}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container:
        {
            width: '100%',
            height: 90,
            backgroundColor: 'black',
            padding: 10,
            flexDirection: 'row',
        },
        avatar_image:
        {
            width: 60,
            height: 60,
            borderRadius: 30,
        },
        right_area:
        {
            paddingLeft: 8,
            paddingRight: 8,
            flexDirection: 'row',
        },
        title_text:
        {
            color: 'white',
            fontSize: 14,
            fontWeight: 'bold',
            paddingRight: 8,
        },
        username_text:
        {
            color: "#999",
            fontSize: 12,
        },
        description_text:
        {
            color: 'white',
            fontSize: 14,
            paddingLeft: 8,
        },
        line:
        {
            width: '100%',
            borderTopWidth: .7,
            borderColor: '#666'
        },
    }
);

export default TweetArea;
