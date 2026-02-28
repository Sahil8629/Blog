// import React from 'react'
// import { Container, PostForm } from '../components'
// function Addpost() {
//   return (
//     <div className=' py-8'>
//         <Container>
//             <PostForm/>
//         </Container>      
//     </div>
//   )
// }

// export default Addpost

import React from 'react'
import { Container, PostForm } from '../components'

function Addpost() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <Container>

        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Write a New Post ✍️
          </h1>
          <p className="mt-2 text-gray-500">
            Share your thoughts with the community
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-sm">
          <PostForm />
        </div>

      </Container>
    </main>
  )
}

export default Addpost

