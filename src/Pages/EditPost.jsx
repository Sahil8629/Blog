// import React, {useEffect, useState} from 'react'
// import {Container, PostForm} from '../components'
// import appwriteService from "../appwrite/config";
// import { useNavigate,  useParams } from 'react-router-dom';

// function EditPost() {
//     const [post, setPosts] = useState(null)
//     const {slug} = useParams()
//     const navigate = useNavigate()

//     useEffect(() => {
//         if (slug) {
//             appwriteService.getPost(slug).then((post) => {
//                 if (post) {
//                     setPosts(post)
//                 }
//             })
//         } else {
//             navigate('/')
//         }
//     }, [slug, navigate])
//   return post ? (
//     <div className='py-8'>
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost
import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config"
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
  const [post, setPosts] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ? (
    <main className="min-h-screen bg-gray-50 py-10">
      <Container>

        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Edit Post ✏️
          </h1>
          <p className="mt-2 text-gray-500">
            Update your content and publish changes
          </p>
        </div>

        {/* Editor Card */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm">
          <PostForm post={post} />
        </div>

      </Container>
    </main>
  ) : null
}

export default EditPost
