import React from 'react'
import LandingPage from './pages/Landing'
import NavBar from './components/nav'
import CssBaseline from '@material-ui/core/CssBaseline'
const App = () => {
	return (
		<React.Fragment>
            <CssBaseline />
			<NavBar />
			<LandingPage />
		</React.Fragment>
	)
}

export default App

/* <div>
		<h3>Notes App</h3>
		<LandingPage />
	</div> */