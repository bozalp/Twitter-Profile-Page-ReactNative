import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const Tabs = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
                    <Text style={styles.text}>
                        Tweets
                    </Text>
                    <View style={styles.blue_line} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
                    <Text style={styles.text}>
                        Tweets & replies
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
                    <Text style={styles.text}>
                        Media
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} activeOpacity={0.7}>
                    <Text style={styles.text}>
                        Likes
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create(
    {

        container:
        {
            flexDirection: 'row',
            width: '100%'
        },
        tab:
        {
            height: 48,
            paddingTop: 8,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: 'black',
        },
        text:
        {
            color: 'white',
            fontWeight: '500',
            textAlign: 'center',
        },
        blue_line:
        {
            borderBottomColor: '#0096FF',
            borderBottomWidth: 3,
            bottom:-18
        }
    }
);
export default Tabs;
