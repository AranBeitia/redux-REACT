import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../features/auth/authSlice'

const TheHeader = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [text, setText] = useState()

	const { user } = useSelector((state) => state.auth)

	const onLogout = (e) => {
		e.preventDefault()
		dispatch(logout())
		navigate('/login')
	}

	const handleSearch = (e) => {
		e.preventDefault()
		setText(e.target.value)

		if (e.key === 'Enter') {
			navigate(`/search/${text}`)
		}
	}

	return (
		<nav>
			<ul>
				<li>
					<input type="search" onKeyUp={handleSearch} />
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				{user ? (
					<>
						<li>
							<button onClick={onLogout}>Logout</button>
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
