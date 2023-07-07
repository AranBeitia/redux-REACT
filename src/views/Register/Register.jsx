import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../features/auth/authSlice'
import { notification } from 'antd'

const Register = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		username: '',
		email: '',
		password: '',
		password2: '',
		age: 0,
	})
	const { firstName, username, email, password, password2, age } = formData
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isSuccess, message, isError } = useSelector((state) => state.auth)

	useEffect(() => {
		if (isSuccess) {
			notification.success({
				message: 'Success',
				description: message,
			})
			navigate('/login')
		}

		if (isError) {
			notification.error({
				message: 'Error',
				description: message,
			})
		}
		dispatch(reset())
	}, [isSuccess, isError, message])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (password !== password2) {
			return notification.error({
				message: 'Error',
				description: 'Passwords do not match',
			})
		} else {
			return dispatch(register(formData))
		}
	}
	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				name="firstName"
				value={firstName}
				onChange={onChange}
				placeholder="escribe tu nombre"
			/>
			<input
				type="text"
				name="username"
				value={username}
				onChange={onChange}
				placeholder="escribe tu nombre de usuario"
			/>
			<input
				type="email"
				name="email"
				value={email}
				onChange={onChange}
				placeholder="escribe tu email"
			/>
			<input
				type="number"
				name="age"
				value={age}
				onChange={onChange}
				placeholder="escribe tu edad"
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={onChange}
				placeholder="escribe tu pass"
			/>
			<input
				type="password"
				name="password2"
				value={password2}
				onChange={onChange}
				placeholder="Repite tu pass"
			/>
			<button type="submit">Register</button>
		</form>
	)
}
export default Register
