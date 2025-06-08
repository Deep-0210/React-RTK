import React, { useEffect } from 'react';
import './App.css';
import { useCreateNewUserPostMutation, useGetAllPostDataQuery, useGetPostByIdQuery } from './services/allPostData';

function App() {

  const { data, refetch } = useGetAllPostDataQuery('');
  console.log({ data })

  const { data: postData } = useGetPostByIdQuery('100')
  console.log({ postData })

  const newPostData = {
    title: "New post 1", body: "Post 1 body", userId: 1
  }

  const [createNewUserPost, { isLoading: isCreating, isError: isCreateError, data: createdPost }] = useCreateNewUserPostMutation();
  console.log({createdPost})

  useEffect(() => {
    setTimeout(() => {
      createNewUserPost(newPostData)
    }, 10000)
  }, [])

  return (
    <>
      Hello world
    </>
  );
}

export default App;
