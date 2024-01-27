import React from 'react'
import Home from '../../pages/Home.js';
import Dashboard from '../../pages/Dashboard.js';
import ShareText from '../../pages/ShareText.js';
import { Routes, Route} from 'react-router-dom';
const Main = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/dashboard" element={<Dashboard/>}/>
				<Route path="/share-text" element={<ShareText/>}/>
			</Routes>
		</>
	)
}

export default Main