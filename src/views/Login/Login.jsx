import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { notification } from 'antd'

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isError, isSuccess, message } = useSelector((state) => state.auth)

	useEffect(() => {
		if (isSuccess) {
			notification.success({ message: 'Success', description: message })
			setTimeout(() => {
				navigate('/profile')
			}, 2000)
		}

		if (isError) {
			notification.error({ message: 'Uyyy que mal', description: message })
		}
		dispatch(reset())
	}, [isError, isSuccess, message])

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault()
		dispatch(login(formData))
		// console.log('formData', formData)
	}
	return (
		<form onSubmit={onSubmit}>
			<input
				type="email"
				name="email"
				value={email}
				onChange={onChange}
				placeholder="escribe tu email"
			/>
			<input
				type="password"
				name="password"
				value={password}
				onChange={onChange}
				placeholder="escribe tu pass"
			/>
			<button type="submit">Login</button>
		</form>
	)
}
export default Login
