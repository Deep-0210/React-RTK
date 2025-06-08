import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const getAllPost = createApi({
    reducerPath: "userAllPost",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getAllPostData: builder.query({
            query: () => '/posts'
        }),
        getPostById: builder.query({
            query: (postId: string) => `/posts/${postId}`
        }),
        createNewUserPost: builder.mutation({
            query: (postData: { title: string, body: string, userId: number }) => ({
                url: "/posts",
                method: "POST",
                body: postData
            })
        })
    })
})

export const { useGetAllPostDataQuery, useGetPostByIdQuery, useCreateNewUserPostMutation } = getAllPost;