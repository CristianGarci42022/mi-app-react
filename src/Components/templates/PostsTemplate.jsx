import { useEffect, useState } from "react"
import { getPosts } from "../../services/api"
import { Post } from "../UI/organism/Post"
import { PostUser } from "../UI/molecules/PostUser"

export const PostsTemplate = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(res => setPosts(res.data))
  }, [])



  return (
    <div className="container">
      <div className="posts">
        {posts?.map(post => (
          <div className="post-container" key={post.id}>
            <PostUser name={post.owner.firstName + " " + post.owner.lastName} image={post.owner.picture} text={post.text} userData={post.owner.id} />
            <Post content={post.image} likes={post.likes} tags={post.tags} sP={setPosts} postId={post.id} />
          </div>
        ))}
      </div>
    </div>
  )
}