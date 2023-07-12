import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getById } from '../../../features/posts/postsSlice'

const PostDetail = () => {
	const dispatch = useDispatch()
	const { post } = useSelector((state) => state.posts)
	const { id } = useParams()

	useEffect(() => {
		dispatch(getById(id))
	}, [dispatch, id])

	return (
		<>
			<h1>{post.title}</h1>
			<p>{post.content}</p>
		</>
	)
}

export default PostDetail
