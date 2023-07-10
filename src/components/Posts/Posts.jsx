import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getAll, reset } from '../../features/posts/postsSlice'

const Posts = () => {
	const { posts, isLoading } = useSelector((state) => state.posts)
	const dispatch = useDispatch()

	useEffect(() => {
		async function getData() {
			await dispatch(getAll())
			await dispatch(reset())
		}
		getData()
	}, [dispatch])
	return (
		<>
			<h1>Posts</h1>

			{isLoading ? (
				'Cargando...'
			) : (
				<div className="post-grid">
					{posts.map((post, index) => (
						<Post
							key={post._id}
							content={post.content}
							number={index}
							id={post._id}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default Posts
