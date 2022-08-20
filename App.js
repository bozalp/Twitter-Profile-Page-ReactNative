/**
 Batuhan OZALP - github.com/bozalp
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TwitterUI from './TwitterUI/ProfilePage';
import TweetAddButton from './TwitterUI/TweetAddButton';

const App = () => {
  return (
    <View  style={{flex:1}}>
      <TwitterUI title="Batuhan ÖZALP" userName="batuhan__ozalp"
        imgURL={"https://pbs.twimg.com/profile_images/1521962152894124040/x-urHVvc_400x400.jpg"}
        followersCount={36} followingCount={206} />
        <TweetAddButton />
    </View>
  );
};

export default App;
