import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const TheHeader = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user } = useSelector((state) => state.auth)

	const onLogout = (e) => {
		e.preventDefault()
		dispatch(logout())
		navigate('/login')
	}

	return (
		<nav>
			<ul>
				{user ? (
					<>
						<li>
							<button onClick={onLogout}>Logout</button>
						</li>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/profile">Profile | {user.username}</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/register">Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}

export default TheHeader
