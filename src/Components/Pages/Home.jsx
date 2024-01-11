import React from 'react';
import {PostsTemplate} from '../templates/PostsTemplate';
import {Nav} from '../UI/organism/Nav'

export const Home = ({logout}) => {
 
  return (
    <>
        <Nav logout={logout}/>
      <PostsTemplate />
      
    </>
  );
};
