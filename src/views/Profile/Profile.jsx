import { useSelector } from 'react-redux'

const Profile = () => {
	const { user } = useSelector((state) => state.auth)

	return (
		<>
			<h1>Profile</h1>
			<p>Welcome {user.firstName}</p>
			<p>Email: {user.email}</p>
		</>
	)
}

export default Profile
