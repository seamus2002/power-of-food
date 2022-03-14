import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Mission from './components/Mission';
import Navbar from './components/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<Mission />
			<About />
			<Footer />
		</div>
	);
}

export default App;
