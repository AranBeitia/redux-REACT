import React from 'react'
import { BrowserRouter as HelloKitty, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

function App() {
	return (
		<HelloKitty>
			<h1>app</h1>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</HelloKitty>
	)
}

export default App
