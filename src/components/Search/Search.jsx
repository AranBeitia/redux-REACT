import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getByName } from '../../features/posts/postsSlice'
import { useEffect } from 'react'
import Post from '../Posts/Post/Post'

const Search = () => {
	const { postName } = useParams()
	const dispatch = useDispatch()
	const { posts } = useSelector((state) => state.posts)

	useEffect(() => {
		dispatch(getByName(postName))
	}, [dispatch, postName])
	return (
		<>
			<h1>Search</h1>
			{posts &&
				posts.map((post) => (
					<Post
						key={post._id}
						title={post.title}
						content={post.content}
						id={post._id}
					/>
				))}
		</>
	)
}

export default Search
