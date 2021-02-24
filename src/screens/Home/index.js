import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import {Post} from '../../components';

const POSTS = [
  {
    id: '1230',
    liked: true,
    commentsCount: 358,
    description: 'Hey check this! 🤪 #trending #crazy ',
    likesCount: 1000,
    song: {
      name: 'Blinding Lights',
      coverUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614151822/theweekendcover_yucli1.jpg',
    },
    user: {
      username: 'sgarcia710',
      avatarUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614149890/avatar.jpg',
    },
    videoUrl:
      'https://res.cloudinary.com/sgarciacloud/video/upload/v1614146740/videoexample.mp4',
  },
  {
    id: '1231',
    liked: false,
    commentsCount: 12,
    description: '🤤',
    likesCount: 142,
    song: {
      name: 'Blinding Lights',
      coverUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614151822/theweekendcover_yucli1.jpg',
    },
    user: {
      username: 'jamaica32',
      avatarUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614154653/pexels-sinitta-leunen-6652939_cvxnjn.jpg',
    },
    videoUrl:
      'https://res.cloudinary.com/sgarciacloud/video/upload/v1614154459/pexels-roman-odintsov-6091113_majy5h.mp4',
  },
  {
    id: '1232',
    liked: false,
    commentsCount: 230,
    description: '#peace',
    likesCount: 422,
    song: {
      name: 'Blinding Lights',
      coverUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614151822/theweekendcover_yucli1.jpg',
    },
    user: {
      username: 'gabrielle_roman',
      avatarUrl:
        'https://res.cloudinary.com/sgarciacloud/image/upload/v1614154654/pexels-masha-raymers-4935657_zaxdhj.jpg',
    },
    videoUrl:
      'https://res.cloudinary.com/sgarciacloud/video/upload/v1614154462/pexels-kira-schwarz-6868682_x2krnp.mp4',
  },
];

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={POSTS}
        bounces={false}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Post {...item} />}
        // snapToInterval={Dimensions.get('window').height}
        // snapToAlignment="start"
        // decelerationRate="fast"
      />
    </View>
  );
};

export default HomeScreen;
