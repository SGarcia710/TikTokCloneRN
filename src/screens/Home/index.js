import React from 'react';
import {View} from 'react-native';
import {Post} from '../../components';

const HomeScreen = () => {
  return (
    <View>
      <Post
        commentsCount="578"
        description="Hey check this! 🤪 #trending #crazy "
        likesCount="322.9k"
        song={{
          name: 'Blinding Lights',
          coverUrl:
            'https://res.cloudinary.com/sgarciacloud/image/upload/v1614151822/theweekendcover_yucli1.jpg',
        }}
        user={{
          username: 'sgarcia710',
          avatarUrl:
            'https://res.cloudinary.com/sgarciacloud/image/upload/v1614149890/avatar.jpg',
        }}
        videoUrl="https://res.cloudinary.com/sgarciacloud/video/upload/v1614146740/videoexample.mp4"
      />
    </View>
  );
};

export default HomeScreen;
