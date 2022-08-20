import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import InfoArea from './InfoArea';
import Tabs from './Tabs';
import TweetArea from './TweetArea';

const ProfilePage = ({ title, userName, imgURL, followersCount, followingCount }) => {
    return (
        <View style={{ height: '100%' }}>
            <ScrollView>
                <Image source={{ uri: "https://pbs.twimg.com/profile_banners/2734660830/1651699281/1500x500" }}
                    style={styles.cover_image}
                />
                <InfoArea title={title} userName={userName} description="COMU - Comp. Eng. 💻
             Game Developer 🎮 React Native loading...⏳
             My games👇"
                    websiteLink={"https://t.co/TDzgIL5VmV"}
                    location="Çanakkale" />

                <Image source={{ uri: imgURL }}
                    style={styles.avatar_image}
                />
                <View style={styles.follow_info_area}>
                    <Text style={styles.follow_text}>
                        {followingCount}
                    </Text>
                    <Text style={{ color: 'white', paddingRight: 20, textAlignVertical: 'center' }}>
                        Following
                    </Text>

                    <Text style={styles.follow_text}>
                        {followersCount}</Text>
                    <Text style={{ color: 'white', paddingRight: 10, textAlignVertical: 'center' }}> Followers
                    </Text>
                </View>
                <Tabs />
                <View>
                    <TweetArea
                        title={title} userName={userName} tweet="Hello World!"
                        imgURL={imgURL}
                    />
                    <TweetArea
                        title={title} userName={userName} tweet="Computer Engineer"
                        imgURL={imgURL}
                    />
                    <TweetArea
                        title={title} userName={userName} tweet="Game Developer"
                        imgURL={imgURL}
                    />
                    <TweetArea
                        title={title} userName={userName} tweet="Game Artist(Blender)"
                        imgURL={imgURL}
                    />
                    <TweetArea
                        title={title} userName={userName} tweet="React Native Loading..."
                        imgURL={imgURL}
                    />
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create(
    {
        cover_image:
        {
            width: '100%',
            height: 120,
        },
        avatar_image:
        {
            width: 76,
            height: 76,
            borderRadius: 38,
            position: "absolute",
            left: 16,
            top: 84,
            borderWidth: 3,
            borderColor: 'black'
        },
        follow_info_area:
        {
            flexDirection: 'row',
            flex: 1,
            backgroundColor: 'black',
            padding: 10,
        },
        follow_text:
        {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 16,
            paddingRight: 3
        },
    }
);

export default ProfilePage;
