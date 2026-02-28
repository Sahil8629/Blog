// import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/config";
// import {Container, PostCard} from '../components'

// function Home() {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
  
//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home

import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  // Empty state
  if (posts.length === 0) {
    return (
      <div className="w-full py-20 bg-gray-50">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Login to read posts ✨
            </h1>
            <p className="mt-3 text-gray-500">
              Sign in to explore articles written by our community.
            </p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <main className="w-full py-10 bg-gray-50">
      <Container>

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Latest Posts
          </h1>
          <p className="text-gray-500 mt-1">
            Fresh articles curated for you
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.$id} {...post} />
          ))}
        </div>

      </Container>
    </main>
  )
}

export default Home
