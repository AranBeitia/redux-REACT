import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const Header = () => {
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
			<div>
				{user ? (
					<>
						<button onClick={onLogout}>Logout</button>
						<Link to="/">Home </Link>
						<Link to="/profile"> {user.firstName}</Link>
					</>
				) : (
					<>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
					</>
				)}
			</div>
		</nav>
	)
}

export default Header
