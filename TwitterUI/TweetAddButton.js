import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TweetAddButton = () => {
    return (
        <TouchableOpacity style={styles.tweetAddButton} activeOpacity={.7}>
            <Text style={styles.text}>
                +
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create(
    {
        tweetAddButton:
        {
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#0096FF',
            position: 'absolute',
            bottom: 20,
            right: 20,
        },
        text:
        {
            fontSize:42,
            fontWeight:'300',
            color:'white',
            textAlign:'center',
        }
    }
)

export default TweetAddButton;
