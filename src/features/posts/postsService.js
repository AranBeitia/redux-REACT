import axios from 'axios'

const API_URL = 'http://localhost:3000'

const getAll = async () => {
	const res = await axios.get(API_URL + '/posts/getAllPosts')
	return res.data.posts
}

const getById = async (id) => {
	const res = await axios.get(API_URL + '/posts/getPostById/' + id)
	return res.data.post
}

const getByName = async (title) => {
	const res = await axios.get(`${API_URL}/posts/getPostsByTitle/${title}`)
	return res.data.posts
}

const postsService = {
	getAll,
	getById,
	getByName,
}

export default postsService
