import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TheHeader from './components/TheHeader/TheHeader'
import Login from './views/Login/Login'
import Register from './views/Register/Register'
import Profile from './views/Profile/Profile'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import Search from './components/Search/Search'
import Home from './views/Home/Home'
import Admin from './views/Admin/Admin'
import NotFound from './views/NotFound/NotFound'

import PrivateZone from './guards/PrivateZone'
import AdminZone from './guards/AdminZone'

function App() {
	return (
		<Router>
			<TheHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/profile"
					element={
						<PrivateZone>
							<Profile />
						</PrivateZone>
					}
				/>
				<Route path="/post/:id" element={<PostDetail />} />
				<Route path="/search/:postName" element={<Search />} />
				<Route
					path="/admin"
					element={
						<AdminZone>
							<Admin />
						</AdminZone>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App
