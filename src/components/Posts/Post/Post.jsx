import { Link } from 'react-router-dom'

const Post = ({ content, title, id }) => {
	return (
		<>
			<h2>
				<Link to={`/post/${id}`}>Post {title}</Link>
			</h2>
			<p>{content}</p>
		</>
	)
}

export default Post
