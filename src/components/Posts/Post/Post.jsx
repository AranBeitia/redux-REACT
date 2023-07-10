import { Link } from 'react-router-dom'

const Post = ({ content, number, id }) => {
	return (
		<>
			<h2>
				<Link to={`/post/${id}`}>Post nº {number}</Link>
			</h2>
			<p>{content}</p>
		</>
	)
}

export default Post
