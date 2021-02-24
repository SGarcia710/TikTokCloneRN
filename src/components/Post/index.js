import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Easing,
} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Video from 'react-native-video';

const Post = ({
  user,
  description,
  song,
  commentsCount,
  likesCount,
  videoUrl,
  liked,
}) => {
  const [paused, setPaused] = useState(false);
  const [likes, setLikes] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(liked);
  const spinValue = useRef(new Animated.Value(0)).current;
  const animateDisc = useCallback(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true, // To make use of native driver for performance
      }),
    ).start();
  }, []);

  useEffect(() => {
    animateDisc();
  }, []);

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View
      style={[
        styles.container,
        {height: Dimensions.get('window').height - 79},
      ]}>
      <TouchableWithoutFeedback onPress={() => setPaused(!paused)}>
        <Video
          paused={paused}
          style={[styles.video]}
          resizeMode="cover"
          source={{
            uri: videoUrl,
          }}
          repeat={true}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightSectionContainer}>
          <TouchableOpacity style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={{
                uri: user.avatarUrl,
              }}
            />
            <TouchableOpacity style={styles.plusIconContainer}>
              <Text style={styles.plusIcon}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (!isLiked) {
                setLikes(likes + 1);
              } else {
                setLikes(likes - 1);
              }
              setIsLiked(!isLiked);
            }}
            style={styles.actionContainer}>
            <MaterialCommunityIcons
              name="heart"
              size={35}
              color={isLiked ? '#E44558' : 'white'}
            />
            <Text style={styles.actionText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer}>
            <FontAwesome name="commenting" size={35} color="white" />
            <Text style={styles.actionText}>{commentsCount}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionContainer}>
            <Fontisto name="share-a" size={35} color="white" />
            <Text style={styles.actionText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomSectionContainer}>
          <View>
            <Text style={styles.username}>{`@${user.username}`}</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={styles.songNameContainer}>
              <Foundation name="music" size={16} color="white" />
              <Text style={styles.songName}>{song.name}</Text>
            </View>
          </View>
          <Animated.View
            style={[styles.songCoverContainer, {transform: [{rotate: spin}]}]}>
            <Image
              style={{}}
              source={require('../../assets/images/disc.png')}
            />
            <Image
              style={styles.songCoverImage}
              source={{
                uri: song.coverUrl,
              }}
            />
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
  },
  video: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
  },
  uiContainer: {
    // height: '100%',
    // justifyContent: 'flex-end',
  },
  rightSectionContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight: 7,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 22.5,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
    borderWidth: 1,
    borderColor: '#fff',
  },
  plusIconContainer: {
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA4359',
    position: 'absolute',
    bottom: -10,
  },
  plusIcon: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 16,
  },
  actionContainer: {
    opacity: 0.9,
    alignItems: 'center',
    marginBottom: 22.5,
  },
  actionText: {
    color: 'white',
    fontWeight: '500',
    marginTop: 5.64,
    fontSize: 13,
  },
  bottomSectionContainer: {
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  username: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    color: '#fff',
    fontWeight: '300',
    marginBottom: 10,
  },
  songNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    marginLeft: 5,
  },
  songCoverContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  songCoverImage: {
    width: 27,
    height: 27,
    borderRadius: 27 / 2,
    position: 'absolute',
  },
});

export default Post;
