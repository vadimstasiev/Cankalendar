import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'

export default function Posts() {
    const posts = useSelector((state) => state.posts)

    console.log(posts)

    return (
        <>
            <Post/>
            <Post/>
        </>
    )
}
